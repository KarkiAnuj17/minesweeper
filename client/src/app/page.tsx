'use client'
import { Timer, Trophy, Zap,Play,Pause, RefreshCcw } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Mine = () => {
  const generateGrid = () => {
    return ([
      [
        { item: "0", displayed: false },
        { item: "1", displayed: false },
        { item: "2", displayed: false },
        { item: "1", displayed: false },
        { item: "", displayed: false },
        { item: "", displayed: false },
        { item: "", displayed: false },
        { item: "1", displayed: false },
        { item: "", displayed: false },
        { item: "💣", displayed: false }
      ],
      [
        { item: "💣", displayed: false },
        { item: "", displayed: false },
        { item: "", displayed: false },
        { item: 1, displayed: false },
        { item: "", displayed: false },
        { item: "", displayed: false },
        { item: "", displayed: false },
        { item: 1, displayed: false },
        { item: "", displayed: false },
        { item: "", displayed: false }
      ],
      [
        { item: "💣", displayed: false },
        { item: "", displayed: false },
        { item: "", displayed: false },
        { item: 1, displayed: false },
        { item: "", displayed: false },
        { item: "", displayed: false },
        { item: 1, displayed: false },
        { item: 2, displayed: false },
        { item: "", displayed: false },
        { item: "", displayed: false }
      ],
      [
        { item: "", displayed: false },
        { item: "", displayed: false },
        { item: "", displayed: false },
        { item: "💣", displayed: false },
        { item: 3, displayed: false },
        { item: "", displayed: false },
        { item: 1, displayed: false },
        { item: 1, displayed: false },
        { item: "", displayed: false },
        { item: 3, displayed: false }
      ],
      [
        { item: "💣", displayed: false },
        { item: "2", displayed: false },
        { item: "", displayed: false },
        { item: 1, displayed: false },
        { item: "", displayed: false },
        { item: "3", displayed: false },
        { item: 1, displayed: false },
        { item: "💣", displayed: false },
        { item: "", displayed: false },
        { item: "3", displayed: false }
      ]
    ])
  }

  const [mineGrid, setMineGrid] = useState(generateGrid())
  const [timer, setTimer] = useState(10)
  const [gameOver, setGameOver] = useState(false)
  const [gameOverReason, setGameOverReason] = useState('')
  const [score, setScore] = useState(0)
  const [start,setStart]=useState(false) 
  const [pause,setPause]=useState(false) 

  useEffect(() => {
    if (timer > 0 && !gameOver && start && !pause) {
      const timeoutId = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
      return () => clearTimeout(timeoutId)
    } else if (timer === 0) {
      setGameOver(true)
      setGameOverReason('timeout')
    }
  }, [timer, gameOver,start,pause])

  const handleMineClick = (row, col) => {
    if (gameOver|| !start || pause) return
    const newGrid = [...mineGrid]
    newGrid[row][col].displayed = true

    if (newGrid[row][col].item !== '💣' && newGrid[row][col].item !== '') {
      setScore(Number(score) + Number(newGrid[row][col].item))
    } else if (newGrid[row][col].item === '💣') {
      newGrid[row][col].displayed = true
      setGameOver(true)
      setGameOverReason('mine')
    }
    setMineGrid(newGrid)
  }
  const started =()=>{
    setStart(true);
    
  }

  const restart = () => {
    setMineGrid(generateGrid())
    setStart(true)
    setScore(0)
    setTimer(10)
    setGameOver(false)
    setGameOverReason('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className=" bg-gradient-to-r from-purple-400 to-pink-400 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
              <Zap className="text-yellow-400" />
              Mine Hunter
              <Zap className="text-yellow-400" />
            </h1>
            <p className="text-gray-300">Find the treasures, avoid the mines!</p>
          </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
              <div className="flex items-center justify-center gap-2 text-blue-700 mb-1">
                <Timer size={20} />
                <span className="font-semibold">Time</span>
              </div>
              <div className={`text-2xl font-bold `}>
                {timer}s
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
              <div className="flex items-center justify-center gap-2 text-yellow-700 mb-1">
                <Trophy size={20} />
                <span className="font-semibold">Score</span>
              </div>
              <div className="text-2xl font-bold text-white">{score}</div>
            </div>
          </div>

        {gameOverReason === 'timeout' && (
          <p className="text-red-500 font-bold mb-2">Game Over! Time Over!</p>
        )}

        {gameOverReason === 'mine' && (
          <p className="text-red-500 font-bold mb-2">Game Over! You clicked on a mine!</p>
        )}

        <div className="space-y-1">
          {mineGrid.map((item,id) => (
            <div key={id} className="flex space-x-1">
              {item.map((val, idx) => (
                <div
                  key={idx}
                  onClick={() => handleMineClick(id, idx)}
                  className={`flex items-center justify-center w-10 h-10 text-lg font-semibold border rounded-md cursor-pointer transition 
                  ${val.displayed ? 'bg-yellow-300' : 'bg-white hover:bg-gray-200'} border-gray-400`}
                >
                  {val.displayed ? val.item : ''}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>{!start  ?
          (<button
  onClick={started}
  className="mt-4 flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
>
  <Play size={20} />
  Start
</button>
): (<div>{!gameOver && (
  <button
    onClick={() => setPause(!pause)}
  className="mt-4 flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
  >
    {pause ? <>
      <Play size={20} />
      Resume
    </>
: <>
      <Pause size={20} />
      Pause
    </>}
  </button>
)}
        <button
          onClick={restart}
  className="mt-4 flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          <RefreshCcw size={20}/> Play Again
        </button></div>)}</div> 
      </div>
    </div>
  )
}

export default Mine
