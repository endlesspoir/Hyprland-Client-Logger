# Hyprland Client Logger

A Node.js script that monitors and logs Hyprland client activities to JSON files with organized date-based storage.

## Features

- 📝 Logs Hyprland client events in real-time
- 🗂️ Automatically organizes logs by year/month/day
- ⏱️ Timestamps each log entry with precise time
- 📊 Stores data in JSON format for easy processing
- 🔄 Continuous monitoring of window/client activities

## Installation

1. Ensure you have Node.js installed
2. Install `hyprwatch` (Hyprland monitoring tool):
   ```bash
   # Install hyprwatch (requires Hyprland)
   yay -S hyprwatch-git
   ```
3. Clone this repository
4. Install dependencies : `npm install`

## Usage

```bash
node start
``` 

The script will:
- Create a `logs/` directory if it doesn't exist
- Monitor Hyprland client events using `hyprwatch clients`
- Save logs to organized JSON files (e.g., `logs/2023/October/2023-10-15.json`)

## Log Structure

Each log file contains an array of objects with:
- `timestamp`: Time of the event (HH:MM:SS format)
- `log`: The actual log message from Hyprland

## Requirements

- Hyprland compositor
- `hyprwatch` utility (installation instructions above)
- Node.js runtime

## Version

v1.0 

---

*Note: This script is specifically designed for Hyprland Wayland compositor users.*soon
