import { useState } from 'react';
import './App.css';

export default function App() {
const [score, updateScore] = useState(0);

function incrementScore(){
  updateScore(score + 1)
}

return (0);
}