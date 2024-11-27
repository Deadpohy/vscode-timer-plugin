# vscode-timer-plugin

## Author
- Name: Наталенко Михаил Михайлович
- Group: M3118
- GitHub: Deadpohy
## Features
- Automatically starts the timer when VS Code is launched.
- Displays the elapsed time in the status bar, updating every second.
- Cleans up resources when the plugin is deactivated.

- ## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vscode-timer-plugin.git
   cd vscode-timer-plugin
   ```
2. Install dependencies:
   ```bash
   npm install
   npx tsc
4. Open the project in VS Code and launch the plugin:
    Open the Run and Debug panel (or press Ctrl+Shift+D).
    Select the Run Extension configuration.
    Press F5 to start debugging.
- ## Development
- This plugin is developed using the Visual Studio Code API. The key files in the project are:

- extension.ts: The main logic for the plugin, including the timer functionality.
- package.json: Metadata and configuration for the plugin, including activation events and dependencies.
- tsconfig.json: Configuration for TypeScript compilation.
- ## Usage
- Once the plugin is running, you will see the timer in the bottom right corner of the VS Code status bar.
- The timer updates every second, showing the elapsed time since the editor was launched.
