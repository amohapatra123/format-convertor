const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

//on ready state
app.on("ready", function () {
  //create browserWindow
  mainWindow = new BrowserWindow({});
  //load HTML code
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      format: "file:",
      slashes: true,
    })
  );

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        accelerator: process.pplatform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
];
