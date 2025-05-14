import { useState } from 'react'
import './App.css'
import DarkModeToggle from './DarkModeToggle'

function App() {
  return (
    <div className='min-h-screen w-full bg-white dark:bg-gray-900 dark:text-gray-50'>
      <div className='p-4'>
        <DarkModeToggle />
        <h1 className="text-2xl">Welcome to Dark mode</h1>
        <p>This is an app to demonstrate dark mode</p>
      </div>
    </div>
  )
}

export default App

