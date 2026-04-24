export default {
  subtitle: "Un jeu Snake rendu entièrement en caractères Braille Unicode, jouable dans n'importe quel terminal et optimisé pour la barre de statut tmux.",
  viewOnGithub: "Voir sur GitHub",
  seeDemo: "Voir démo ↓",
  openOnGithub: "Ouvrir sur GitHub →",
  ctaText: "Envie d'essayer ou de contribuer ?",

  sections: {
    screenshot: "Capture d'écran",
    demo: "Démo",
    demoTmux: "Démo dans Tmux",
    configurable: "Configurable",
    features: "Fonctionnalités",
    buildRun: "Build & run",
    tmuxBar: "Exécution dans la barre tmux",
    stack: "Stack",
  },

  captions: {
    screenshot: "braille-snake — plein écran dans un pane tmux",
    demo: "Enregistré avec asciinema + converti en GIF",
    demoTmux: "Enregistré avec ShareX + converti en GIF",
    configurable: "braille-snake — fonction d'utilisation CLI",
  },

  features: [
    "Rendu entièrement avec les caractères Braille Unicode (U+2800–U+28FF)",
    ["Gestion fluide des entrées avec ", "aucune dépendance externe"],
    "Compatible avec n'importe quel terminal POSIX",
    ["Compatible avec tmux via un serveur ", "unix socket"],
    "Taille du jeu, vitesse et autres paramètres configurables",
  ],

  buildComments: {
    clone: "# Clone du dépôt",
    build: "# Compilation",
    install: "# Installation",
    run: "# Exécution",
  },

  tmuxComment: "# Copier le fichier config dans votre configuration tmux (voir README.md)",

  stack: [
    { icon: "⚙", name: "C99", desc: "Langage" },
    { icon: "🖥", name: "Terminal", desc: "Custom TUI rendering" },
    { icon: "⬛", name: "TMUX", desc: "Multiplexer cible" },
    { icon: "⚙", name: "cmake", desc: "Chaîne de compilation" },
  ],
} as const;
