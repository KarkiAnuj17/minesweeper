# Mine Hunter

**Mine Hunter** is a simple React-based Minesweeper-inspired game. The objective is to uncover as many treasures (numbered cells) as possible while avoiding mines within a limited time. The game is styled using Tailwind CSS and leverages the [lucide-react](https://lucide.dev/) icon set for a visually appealing interface.

## Features

- **Grid-Based Gameplay:** Click to reveal cells. Each cell may contain a number (adds to your score), be empty, or contain a mine (💣).
- **Timer:** You have a limited time (default: 10 seconds) to play each round.
- **Score System:** Earn points by uncovering numbered cells.
- **Game Over Conditions:**
  - Clicking a mine ends the game.
  - Running out of time ends the game.
- **Pause/Resume:** Pause and resume the game at any time.
- **Restart:** Instantly start a new round with a fresh grid.

## Gameplay

1. **Start the Game:** Click the "Start" button to begin.
2. **Reveal Cells:** Click on any cell to reveal its content.
   - If you reveal a number, it adds to your score.
   - If you reveal a mine (💣), the game ends.
   - If you reveal an empty cell, nothing happens.
3. **Timer:** The timer counts down from 10 seconds. If it reaches zero, the game ends.
4. **Pause/Resume:** You can pause and resume the game at any time.
5. **Restart:** After a game over (or anytime), click "Play Again" to reset.

## Code Overview

- **State Management:** Uses React hooks (`useState`, `useEffect`) to manage the grid, timer, game state, score, and controls.
- **Grid Generation:** The grid is hardcoded for demonstrative purposes, but can be made dynamic.
- **User Interaction:** Handles click events to reveal cells, start/pause the game, and restart.
- **UI Components:** Icons from `lucide-react` enhance the visual appearance.

## Setup & Usage

1. **Install Dependencies:**
   - `react`
   - `lucide-react`
   - `tailwindcss` (for styling, or substitute with your preferred CSS framework)

2. **Add the Component:**
   Place the `Mine` component in your project and import it where desired.

   ```jsx
   import Mine from './Mine';

   function App() {
     return <Mine />;
   }
   ```

3. **Tailwind CSS:**
   Ensure your project is set up with Tailwind CSS for the provided classes to work.

## Customization

- **Grid Size & Content:** Modify the `generateGrid` function to change the grid layout, size, or mine distribution.
- **Timer:** Adjust the initial value of the `timer` state to change round duration.
- **Scoring:** Change how scores are calculated by editing the logic in `handleMineClick`.


##Output
![Screenshot 2025-05-27 183657](https://github.com/user-attachments/assets/d380df77-df4a-4dd3-a0af-c490f1435c7b)
![Screenshot 2025-05-27 183716](https://github.com/user-attachments/assets/daf1de75-04bb-4357-96b7-d8de4d0de112)
![Screenshot 2025-05-27 183647](https://github.com/user-attachments/assets/14516d86-990c-42bf-8f1f-7fe538d19dc4)




**Enjoy hunting for treasures and avoiding mines!**
