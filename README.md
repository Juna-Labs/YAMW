```

 █████ █████   █████████   ██████   ██████ █████   ███   █████
░░███ ░░███   ███░░░░░███ ░░██████ ██████ ░░███   ░███  ░░███ 
 ░░███ ███   ░███    ░███  ░███░█████░███  ░███   ░███   ░███ 
  ░░█████    ░███████████  ░███░░███ ░███  ░███   ░███   ░███ 
   ░░███     ░███░░░░░███  ░███ ░░░  ░███  ░░███  █████  ███  
    ░███     ░███    ░███  ░███      ░███   ░░░█████░█████░   
    █████    █████   █████ █████     █████    ░░███ ░░███     
   ░░░░░    ░░░░░   ░░░░░ ░░░░░     ░░░░░      ░░░   ░░░      
                                                              
                                                                                                                        
```
[![Release](https://img.shields.io/github/v/release/Arjuna-Ragil/YAMW)](https://github.com/Arjuna-Ragil/YAMW/releases)
[![Wails Build](https://github.com/Arjuna-Ragil/YAMW/actions/workflows/release.yml/badge.svg)](https://github.com/Arjuna-Ragil/YAMW/actions)
##

**Yet Another Music Widget (YAMW)** is a custom desktop music player designed specifically to connect with your self-hosted Subsonic API server. Built to be incredibly lightweight and fast, it bypasses the heavy resource overhead of traditional Electron wrappers by utilizing Go and native OS web engines. Wrapped in a nostalgic terminal/retro aesthetic, YAMW delivers a distraction-free listening experience directly to your desktop.

## Features
*   **Retro Terminal UI & Themes:** A clean, distraction-free minimalist interface inspired by classic terminal aesthetics. Fully customizable to match your desktop vibe.
*   **Core Playback Essentials:** Seamless play, pause, shuffle, and loop mechanics for uninterrupted listening.
*   **UI friendly configuration setup:** Easily connect to your Navidrome/Subsonic server directly from the app without wrestling with complex `.json` or config files.
*   **Sing along with Lyrics:** Real-time lyrics support so you can vibe with your favorite tracks.
*   **Insanely Lightweight:** A mere ~11MB binary size with RAM usage hovering under ~200MB
*   **Cross-Platform:** Available and native for Windows, macOS, and Linux.

## Installation

Ready-to-use downloadable programs are automatically generated for all major operating systems. 

1. Go to the [Releases](https://github.com/USERNAME/YAMW/releases) page.
2. Download the appropriate file for your system:
   * **Windows:** `YAMW.exe`
   * **macOS:** `YAMW-macOS.zip` (Extract to get `YAMW.app`)
   * **Linux:** `YAMW` (Linux binary)
3. **Bypass OS Security Warnings:** Since YAMW is an independent, unsigned open-source application, your operating system might flag it upon first launch. 
   * **Windows:** If Windows Defender SmartScreen appears, click **More info** > **Run anyway**.
   * **macOS:** If blocked by Gatekeeper, go to **System Settings > Privacy & Security**, scroll down, and click **Open Anyway** for YAMW.
   * **Linux:** Ensure you grant execution permissions to the binary before running it (e.g., `chmod +x YAMW`).
4. **Connect to Your Server:** Launch YAMW and open the configuration screen. Simply enter your Navidrome/Subsonic **Server URL** (e.g., your local or Tailscale IP), **Username**, and **Password**.
5. **Start Listening!** Save the configuration, wait a brief moment for your library to load, and enjoy your insanely lightweight, flat-list music experience!

## Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Wails](https://wails.io/) | Go-based framework for building desktop apps. |
| **Backend** | Go (Golang) | Handles OS-level window management and state. |
| **Frontend** | React | Component-driven UI architecture. |
| **Styling** | Tailwind CSS | Utility-first classes for the retro aesthetic. |

## Local Development (Building from Source)

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
*   **Go** (version 1.25 or later)
*   **Node.js & npm** (for frontend dependencies)
*   **Wails CLI**: Install it by running `go install github.com/wailsapp/wails/v2/cmd/wails@latest`

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Arjuna-Ragil/YAMW.git
   cd YAMW
   ```

2. **Run in Development Mode:**
   ```bash
   wails dev
   ```

3. **Build for Production:**
   ```bash
   wails build
   ```

## Acknowledgments
YAMW wouldn't be possible without the incredible open-source ecosystem that powers it. A huge thanks to the [Wails](https://wails.io/) team for providing the brilliant Go and React integration that keeps this app insanely lightweight and fast. I also want to acknowledge the developers behind [Navidrome](https://www.navidrome.org/) and the Subsonic API, whose robust self-hosted backend architecture serves as the perfect foundation for this music client.

## Thanks for using YAMW :)
