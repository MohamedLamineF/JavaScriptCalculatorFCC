# TypeScript Calculator

Welcome to TypeScript Calculator project

A modern, feature-rich calculator built with React, TypeScript, and Tailwind CSS. Perform calculations with a beautiful, responsive interface.

This project was created as part of FreeCodeCamp's "Front End Development Libraries" certification. For more details, check out the [project-description.md](project-description.md) file.

---

## Features

- 🔢 Basic arithmetic operations (add, subtract, multiply, divide)
- 🌓 Dark/Light mode with system preference detection
- ✨ Beautiful glassmorphism design
- 💅 Smooth animations and transitions
- ⌨️ Keyboard input support
- ⚛️ Utilizes React features (reducers, handlers, hooks, and utils), each organized in separate folders

## Technologies Used

- React v17 (as per FreeCodeCamp requirements)
- TypeScript
- Tailwind CSS
- useReducer for state management
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:MohamedLamineF/JavaScriptCalculatorFCC.git
   cd JavaScriptCalculatorFCC
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│ ├── Button.tsx
│ ├── ButtonGrid.tsx
│ ├── Calculator.tsx
│ ├── Display.tsx
│ |── Layout/
│ |   ├── Header.tsx
│ |   └── Footer.tsx
│ └── UI/
│     └── ThemeToggle.tsx
├── handlers/
│ |── digitHandler.ts
│ |── evaluationHandler.ts
│ └── operationsHandler.ts
├── hooks/
│ |── useDarkMode.ts
│ └── useKeyboardInput.tsx
├── reducers/
│ └── calculatorReducer.ts
├── types/
│ └── index.ts
├── utils/
│ |── calculator.ts
│ └── operationsUtils.ts
|── App.tsx
└── main.tsx
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
