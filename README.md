# Lost Ember (Frontend UI)

The front-end interface for **Lost Ember** - a narrative-driven, browser-based RPG focused on player choice, branching paths, and modular storytelling.

## 🔧 Tech Stack
- **React** (via [Vite](https://vitejs.dev/)) for fast, modular UI development
- **JavaScript (ES6+)** for dynamic state and component logic
- **HTML/CSS** for styling and layout
- **JSON-based content** for scalable character and lore data

## 🎮 Current Features (WIP)
- Modular, screen-by-screen **character creation flow**
- Fully responsive **stat and skill picker UI**
- Live **modifiers, validation, and build summary**
- Interactive selectors for:    
    - Origins, Lineages, Callings
    - Stats, Skills, Cantrips, Dialects
    - Gear and final spell selection
- Final summary screen with "Begin" call to action

## 🗺 Project Structure (WIP)
<pre>
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.jsx
│   ├── assets
│   │   ├── images
│   │   └── styles
│   │       ├── App.css
│   │       ├── CharacterSelect.css
│   │       ├── LandingPage.css
│   │       └── base
│   │           ├── index.css
│   │           └── typography.css
│   ├── components
│   │   ├── characterCreation
│   │   │   ├── CallingCard.jsx
│   │   │   ├── CallingPanel.jsx
│   │   │   ├── OriginCard.jsx
│   │   │   └── OriginPanel.jsx
│   │   └── common
│   │       ├── ChoiceButton.jsx
│   │       ├── InventoryPanel.jsx
│   │       └── SceneViewer.jsx
│   ├── data
│   │   ├── characters
│   │   │   ├── callings.json
│   │   │   ├── lineage.json
│   │   │   └── origins.json
│   │   └── scenes
│   │       └── tavern_intro.json
│   ├── main.jsx
│   ├── pages
│   │   ├── CharacterDetails.jsx
│   │   ├── CharacterSelect.jsx
│   │   ├── LandingPage.jsx
│   │   └── StatSkillSelect.jsx
│   └── utils
│       └── storyParser.js
└── vite.config.js
</pre>

## ✍️ Design Notes
This frontend is structured for:    
- Rapid prototyping of text-based RPG interfaces    
- Full integration with a Flask backend API     
- Future expansion into persistent session play, combat and Codex lookups

Mockups and component flows designed in **Figma** (available on request).

## 🚧 Status
**In active development** - Character creation is nearing completion.       

Upcoming tasks:
- API hookup to `/character/create`
- Integration with Codex microservice
- Session manager setup for player progression

## 📃 License
This is a personal project currently in private development.
Public contributions may open post-alpha.