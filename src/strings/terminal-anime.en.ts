export default {
  subtitle: "TBD, not finished, library to draw in the terminal (no deps)",
  viewOnGithub: "View on GitHub",
  seeDemo: "See demo ↓",
  openOnGithub: "Open on GitHub →",
  ctaText: "Want to try it or contribute?",

  sections: {
    screenshot: "Screenshot",
    demo: "Demo",
    demoTmux: "Demo Within Tmux",
    configurable: "Configurable",
    features: "Features",
    buildRun: "Build & run",
    tmuxBar: "Run in a tmux status bar",
    stack: "Stack",
  },

  captions: {
    screenshot: "terminal-anim — full screen in a tmux pane",
    demo: "Recorded with asciinema + converted to GIF",
    demoTmux: "Recorded with ShareX + converted to GIF",
    configurable: "terminal-anim — cli usage function",
  },

  features: [
    "Rendered entirely with Unicode Braille block characters (U+2800–U+28FF)",
    "Compatible with any POSIX terminal; works inside tmux status bar",
    ["Smooth input handling with ", "no external dependencies"],
    "Configurable board size, speed, and other params",
    ["Compatible with tmux with ", "unix socket", " server"],
  ],

  buildComments: {
    clone: "# Clone the repo",
    build: "# Build program",
    install: "# Install program",
    run: "# Run",
  },

  buildLines: [
    { comment: "# Clone the repo" },
    { cmd: "git clone", arg: "{GITHUB}" },
    { cmd: "cd", arg: "terminal-anim" },
    null, // blank line
    { comment: "# Build program" },
    { cmd: "cmake --build build" },
    null,
    { comment: "# Install program" },
    { cmd: "cmake --install build --prefix ~/.local" },
    null,
    { comment: "# Run" },
    { cmd: "./terminal-anim" },
  ],

  tmuxComment: "# Copy the config file to your own tmux configuration (see README.md)",

  stack: [
    { icon: "⚙", name: "C99", desc: "Language" },
    { icon: "🖥", name: "Terminal", desc: "Custom TUI rendering" },
    { icon: "⚙", name: "cmake", desc: "Build chain" },
  ],
} as const;
