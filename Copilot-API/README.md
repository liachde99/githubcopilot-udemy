# Copilot API Eclipse Plugin

## Overview
The Copilot API is an Eclipse plugin that allows users to display selected text in a popup dialog with an input-ready text field. This functionality enhances the user experience by providing a quick way to view and edit selected text.

## Features
- Displays selected text in a popup dialog.
- Allows users to edit the text directly in the dialog.
- Easy integration into existing Eclipse environments.

## Project Structure
```
Copilot-API
├── src
│   ├── com
│   │   └── copilotapi
│   │       ├── Activator.java
│   │       ├── handlers
│   │       │   └── ShowPopupHandler.java
│   │       └── ui
│   │           └── PopupDialog.java
├── META-INF
│   └── MANIFEST.MF
├── plugin.xml
├── build.properties
└── README.md
```

## Setup Instructions
1. **Clone the Repository**: Clone the Copilot-API repository to your local machine.
2. **Import into Eclipse**: Open Eclipse and import the project as an existing Eclipse project.
3. **Build the Plugin**: Use the Eclipse build tools to compile the plugin.
4. **Run the Plugin**: Launch a new Eclipse instance with the plugin to test its functionality.

## Usage
- Select any text in the Eclipse editor.
- Trigger the popup dialog using the assigned command (e.g., through a menu or shortcut).
- The selected text will appear in the dialog, allowing for easy editing.
- Confirm changes to update the text as needed.

## Contribution
Contributions to the Copilot API are welcome. Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.