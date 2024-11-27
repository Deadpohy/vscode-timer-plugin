import * as vscode from 'vscode';


let startTime: Date;
let interval: NodeJS.Timeout;

export function activate(context: vscode.ExtensionContext) {
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

export function deactivate() {
    if (interval) {
        clearInterval(interval);
    }
}
