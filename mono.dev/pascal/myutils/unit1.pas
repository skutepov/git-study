unit Unit1;

{$mode objfpc}{$H+}

interface

uses
  Classes, SysUtils, FileUtil, Forms, Controls, Graphics, Dialogs, Menus,
  LCLType, ComCtrls, StdCtrls, Spin, ClipBrd, ExtCtrls, CheckLst, fgl;

type
   TMyDict=specialize TFPGMap<string,double>;
  { TMainForm }

  TMainForm = class(TForm)
    btnPlus: TButton;
    btnMinus: TButton;
    btnReset: TButton;
    Button1: TButton;
    ButtonSwap: TButton;
    ButtonConvert: TButton;
    ButtonRandome: TButton;
    ButtonRandomeReset: TButton;
    ButtonRandomeCopy: TButton;
    CheckBoxNoRepeat: TCheckBox;
    CheckGroupPasswd: TCheckGroup;
    ComboBoxSwitch: TComboBox;
    ComboBoxFrom: TComboBox;
    ComboBoxTo: TComboBox;
    EditFrom: TEdit;
    EditTo: TEdit;
    EditPasswd: TEdit;
    Label1: TLabel;
    LabelRandome: TLabel;
    Label2: TLabel;
    Label3: TLabel;
    LabelCount: TLabel;
    MainMenu: TMainMenu;
    MemoNote: TMemo;
    MemoRandome: TMemo;
    MenuItem1: TMenuItem;
    mmiLoad: TMenuItem;
    mmiSave: TMenuItem;
    mmiTime: TMenuItem;
    mmiNoteDate: TMenuItem;
    mmiNote: TMenuItem;
    mmiHelpAbout: TMenuItem;
    mmiFileExit: TMenuItem;
    mmiHelp: TMenuItem;
    mmiFile: TMenuItem;
    PageControl1: TPageControl;
    SpinEditPasswdLength: TSpinEdit;
    SpinEditBegin: TSpinEdit;
    SpinEditEnd: TSpinEdit;
    TabSheet1: TTabSheet;
    TabSheet2: TTabSheet;
    TabSheet3: TTabSheet;
    TabSheet4: TTabSheet;
    TabSheetNote: TTabSheet;
    procedure btnMinusClick(Sender: TObject);
    procedure btnPlusClick(Sender: TObject);
    procedure btnResetClick(Sender: TObject);
    procedure Button1Click(Sender: TObject);
    procedure ButtonConvertClick(Sender: TObject);
    procedure ButtonRandomeClick(Sender: TObject);
    procedure ButtonRandomeCopyClick(Sender: TObject);
    procedure ButtonRandomeResetClick(Sender: TObject);
    procedure ButtonSwapClick(Sender: TObject);
    procedure ComboBoxSwitchChange(Sender: TObject);
    procedure EditFromChange(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure mmiFileExitClick(Sender: TObject);
    procedure mmiHelpAboutClick(Sender: TObject);
    procedure mmiLoadClick(Sender: TObject);
    procedure mmiNoteDateClick(Sender: TObject);
    procedure mmiSaveClick(Sender: TObject);
    procedure mmiTimeClick(Sender: TObject);
    procedure LoadNote();
    procedure SpinEditBeginChange(Sender: TObject);
    procedure SpinEditEndChange(Sender: TObject);
    procedure MetricaInit();
    procedure comboboxFromToSet(selmetric:TMyDict);
  private
    { private declarations }
  public
    { public declarations }
  end;



var
  MainForm: TMainForm;
  counter: integer;
  password, prevFrom:string;
  spec_chars: array[0..10] of char=('!','@','#','$','%','^','&','*','~','<','>');
  metrica, metrica_length, metrica_weight, metrica_volume, metrica_temp: TMyDict;

implementation

{$R *.lfm}

{ TMainForm }

procedure TMainForm.mmiFileExitClick(Sender: TObject);
begin
    if MessageDlg('Выход', 'Вы действительно хотите выйти из программы?', mtConfirmation,
   [mbYes, mbNo],0) = mrYes
  then
    Application.Terminate;
end;

procedure TMainForm.MetricaInit();
begin
  metrica_length:= TMyDict.Create;
  metrica_length.Add('мм',1);
  metrica_length.Add('см',10);
  metrica_length.Add('дм',100);
  metrica_length.Add('м',1000);
  metrica_length.Add('км',1000000);
  metrica_length.Add('мили',1609344);
  {--------------------------}
  metrica_weight:=TMyDict.Create;
  metrica_weight.Add('грамм',1);
  metrica_weight.Add('кг',1000);
  metrica_weight.Add('центнер',100000);
  metrica_weight.Add('тонна',1000000);
  metrica_weight.Add('карат',0.2);
  {--------------------------}
  metrica_volume:=TMyDict.Create;
  metrica_volume.Add('литр',1);
  metrica_volume.Add('миллилитр',0.001);
  metrica_volume.Add('кубометр',1000);
  metrica_volume.Add('барель',158.988);
  metrica_volume.Add('галлон',4.55);
  metrica_volume.Add('барель',158.988);

end;
procedure TMainForm.comboboxFromToSet( selmetric:TMyDict);
var
  i: integer;
begin
  metrica:=selmetric;
  ComboBoxFrom.Items.Clear;
  ComboBoxTo.Items.Clear;
  ComboBoxFrom.Text:=selmetric.Keys[0];
  ComboBoxTo.Text:=selmetric.Keys[0];
  for  i:=0 to selmetric.Count-1 do
  begin
      ComboBoxFrom.Items.Add(selmetric.Keys[i]);
      ComboBoxTo.Items.Add(selmetric.Keys[i]);
  end;
end;

procedure TMainForm.FormCreate(Sender: TObject);
begin
  counter:=0;
  randomize;

  MetricaInit();
  comboboxFromToSet(metrica_length);

  SpinEditBegin.MaxValue:=SpinEditEnd.Value;
  SpinEditEnd.MinValue:=SpinEditBegin.Value;
  prevFrom:=EditFrom.Text;
  LoadNote;
end;

procedure TMainForm.btnPlusClick(Sender: TObject);
begin
  inc(counter);
  LabelCount.Caption:=inttostr(counter);
end;

procedure TMainForm.btnResetClick(Sender: TObject);
begin
    counter:=0;
    LabelCount.Caption:=inttostr(counter);
end;

procedure TMainForm.Button1Click(Sender: TObject);
var
   CheckedItems: TstringList;
   i : Integer;
   s : String;
begin
    EditPasswd.Clear;
      CheckedItems:=Tstringlist.Create;
      password:='';
  for i:=0 to CheckGroupPasswd.ControlCount-1 do
    begin
         if CheckGroupPasswd.Checked[i] then CheckedItems.Add(CheckGroupPasswd.Items[i]) ;
    end;
  if CheckedItems.Count=0 then exit();

  for i:=1 to  SpinEditPasswdLength.Value do
    begin
         s:=CheckedItems[Random(CheckedItems.Count)];
        case s of
           'Цифры': password:=password+inttostr(random(10));
           'Строчные буквы': password:=password+chr(random(ord('z')-ord('a')+1)+ord('a')); {97-122}
           'Прописные буквы': password:=password+chr(random(ord('Z')-ord('A')+1)+ord('A'));
           'Спец. символы':  password:=password+spec_chars[random(Length(spec_chars))];
        end;
    end;
    EditPasswd.Text:=password;
    Clipboard.AsText:= password;
end;

procedure TMainForm.ButtonConvertClick(Sender: TObject);
var
   mFrom,mTo,valFrom,valTo : double;
begin
  mFrom:=metrica[ComboBoxFrom.Text];
  mTo:=metrica[ComboBoxTo.Text];
  valFrom:=StrToFloat('0'+EditFrom.Text);
  valTo:=valFrom*mFrom/mTo;
  EditTo.Text:=FloaTtoStr(valTo);
end;

procedure TMainForm.ButtonRandomeClick(Sender: TObject);
var
  rand, i_str: string;
  rand_list: Tstringlist;
  i:integer;
begin
    rand:=inttostr(Random(SpinEditEnd.Value-SpinEditBegin.Value+1)+SpinEditBegin.Value);
    LabelRandome.Caption:=rand;
    if (CheckBoxNoRepeat.Checked AND (MemoRandome.Lines.IndexOf(rand)<>-1 ) ) then
      begin
             rand_list:=Tstringlist.Create;
             for i:=0 to SpinEditEnd.Value-SpinEditBegin.Value do
             begin
                  i_str:=inttostr(SpinEditBegin.Value+i);
                  if (MemoRandome.Lines.IndexOf(i_str)=-1) then rand_list.Add(i_str);
             end;
             if  (rand_list.count > 0) then
               begin
                 MemoRandome.Append(rand_list[random(rand_list.count)]);
               end
             else LabelRandome.Caption:='Нет';
      end
    else MemoRandome.Append(rand);
end;

procedure TMainForm.ButtonRandomeCopyClick(Sender: TObject);
begin
   Clipboard.AsText:=MemoRandome.Text;

end;

procedure TMainForm.ButtonRandomeResetClick(Sender: TObject);
begin
  MemoRandome.Clear;
end;

procedure TMainForm.ButtonSwapClick(Sender: TObject);
var
swap_str :string;
begin
 swap_str:=ComboBoxFrom.Text;
 ComboBoxFrom.Text:=ComboBoxTo.Text;
 ComboBoxTo.Text:=swap_str;
end;

procedure TMainForm.ComboBoxSwitchChange(Sender: TObject);
begin
  case ComboBoxSwitch.Text of
   'длина': comboboxFromToSet(metrica_length);
   'вес':   comboboxFromToSet(metrica_weight);
   'объем': comboboxFromToSet(metrica_volume);
  end;
end;

procedure TMainForm.EditFromChange(Sender: TObject);
var
s:string;
begin
 s:=prevFrom;
  try
     StrToFloat('0'+EditFrom.Text);
  except
   EditFrom.Text:=s;
   exit;
  end;
  prevFrom:=EditFrom.Text;
end;

procedure TMainForm.btnMinusClick(Sender: TObject);
begin
    dec(counter);
    LabelCount.Caption:=inttostr(counter);
end;

procedure TMainForm.mmiHelpAboutClick(Sender: TObject);
begin
    {ShowMessage('Программа Мои Утилиты. Программа содержит ряж простых утилит, которые могут пригодится в жизни. А еще я вспомню как писать на Pascal. Автор: Кутепов С.В.');}

    Application.MessageBox('Программа Мои Утилиты.' + sLineBreak +
                                      'Программа содержит ряд простых утилит, которые могут пригодиться в жизни.'
                                       + sLineBreak + 'А еще я вспомню как писать на Pascal.'
                                       + sLineBreak + 'Автор: Кутепов С.В.', 'О Программе',MB_ICONINFORMATION);
end;

procedure TMainForm.LoadNote();
begin
     Try
      MemoNote.Lines.LoadFromFile('note.txt');
    except
     Application.MessageBox( 'Ошибка открытия', 'Ошибка',MB_ICONHAND);
    end;
end;

procedure TMainForm.mmiLoadClick(Sender: TObject);
begin

     LoadNote();
end;

procedure TMainForm.mmiNoteDateClick(Sender: TObject);

begin
  MemoNote.SelText:=DateToStr(Date)+' ';
end;

procedure TMainForm.mmiSaveClick(Sender: TObject);
begin
     Try
       MemoNote.Lines.SaveToFile('note.txt');
     except
      Application.MessageBox( 'Ошибка сохранения', 'Ошибка',MB_ICONHAND);
     end;
end;

procedure TMainForm.mmiTimeClick(Sender: TObject);
begin
    MemoNote.SelText:=TimeToStr(Now)+' ';
end;



procedure TMainForm.SpinEditBeginChange(Sender: TObject);
begin
       SpinEditEnd.MinValue:=SpinEditBegin.Value;
end;

procedure TMainForm.SpinEditEndChange(Sender: TObject);
begin
       SpinEditBegin.MaxValue:=SpinEditEnd.Value;
end;

end.

