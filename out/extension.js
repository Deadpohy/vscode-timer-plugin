"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
let startTime;
let interval;
function activate(context) {
    // Запоминаем время запуска
    startTime = new Date();
    // Создаём элемент в строке состояния
    const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBar.text = "VS Code Timer: 0s";
    statusBar.show();
    // Обновляем таймер каждую секунду
    interval = setInterval(() => {
        const now = new Date();
        const elapsedSeconds = Math.floor((now.getTime() - startTime.getTime()) / 1000);
        statusBar.text = `VS Code Timer: ${elapsedSeconds}s`;
    }, 1000);
    // Добавляем очистку при отключении плагина
    context.subscriptions.push(statusBar);
    context.subscriptions.push({
        dispose: () => clearInterval(interval)
    });
}
function deactivate() {
    if (interval) {
        clearInterval(interval);
    }
}
//# sourceMappingURL=extension.js.map