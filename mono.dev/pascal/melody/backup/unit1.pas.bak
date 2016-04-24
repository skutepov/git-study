unit Unit1;

{$mode objfpc}{$H+}

interface

uses
  Classes, SysUtils, FileUtil, Forms, Controls, Graphics, Dialogs, StdCtrls, fsettings;

type

  { TfMain }

  TfMain = class(TForm)
    btnPlay: TButton;
    btnSetings: TButton;
    btnExit: TButton;
    procedure btnExitClick(Sender: TObject);
    procedure btnSetingsClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure FormDestroy(Sender: TObject);
    procedure FormPaint(Sender: TObject);
  private
    { private declarations }
  public
    { public declarations }
  end;

var
  fMain: TfMain;
  bm:TBitmap;

implementation

{$R *.lfm}

{ TfMain }

procedure TfMain.FormCreate(Sender: TObject);

begin
  bm:=TBitmap.Create;
  bm.LoadFromFile('bg.bmp');


  end;

procedure TfMain.btnExitClick(Sender: TObject);
begin
  Application.Terminate;
end;

procedure TfMain.btnSetingsClick(Sender: TObject);

begin

   fSetings.ShowModal;
end;

procedure TfMain.FormDestroy(Sender: TObject);
begin
  { bm.Free;}
end;

procedure TfMain.FormPaint(Sender: TObject);
begin
   fMain.Canvas.Draw(0,0,bm);
end;

end.

