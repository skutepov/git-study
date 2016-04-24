unit fsettings;

{$mode objfpc}{$H+}

interface

uses
  Classes, SysUtils, FileUtil, Forms, Controls, Graphics, Dialogs, StdCtrls;

type

  { TfSetings }

  TfSetings = class(TForm)
    btnSelectDir: TButton;
    btnClear: TButton;
    btnOk: TButton;
    btnCansel: TButton;
    mFilesList: TMemo;
    chosenDirectoryDialog: TSelectDirectoryDialog;
    procedure btnCanselClick(Sender: TObject);
    procedure btnOkClick(Sender: TObject);
    procedure btnSelectDirClick(Sender: TObject);

  private
    { private declarations }
  public
    { public declarations }
  end;

var
  fSetings: TfSetings;

implementation

{$R *.lfm}

{ TfSetings }



procedure TfSetings.btnOkClick(Sender: TObject);
begin
   fSetings.Close;
end;

procedure TfSetings.btnSelectDirClick(Sender: TObject);
var
  chosenDirectory:string;
  sFolder: String;
begin

   sFolder:= 'd:\Projects';
   if GetFolderDialog(Application.Handle, 'Выбрать папку на Delphi (Дельфи)', sFolder) then
     ShowMessage('Пользователь выбрал папку: ' + sFolder);
end;

procedure TfSetings.btnCanselClick(Sender: TObject);
begin
   fSetings.Close;
end;

end.

