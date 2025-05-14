import { useState } from 'react'
import './App.css'
import DarkModeToggle from './DarkModeToggle'

function App() {
  return (
    <div className='min-h-screen w-full bg-white dark:bg-gray-900 dark:text-gray-50 transition-colors duration-300 relative overflow-hidden'>
      <div className='floating-elements'>
        {/* Top corners */}
        <div className="floating dark:text-yellow-200 text-blue-300 text-4xl absolute top-24 right-8">
          <span className="dark:inline hidden">✨</span>
          <span className="dark:hidden inline">☁️</span>
        </div>
        <div className="floating-delay dark:text-yellow-200 text-orange-400 text-4xl absolute top-32 left-8">
          <span className="dark:inline hidden">🌟</span>
          <span className="dark:hidden inline">☀️</span>
        </div>
        <div className="floating-super-delay dark:text-yellow-200 text-blue-300 text-5xl absolute top-28 left-32">
          <span className="dark:inline hidden">🌙</span>
          <span className="dark:hidden inline">☁️</span>
        </div>
        
        {/* Bottom corners */}
        <div className="floating dark:text-yellow-200 text-blue-300 text-3xl absolute bottom-24 right-8">
          <span className="dark:inline hidden">✨</span>
          <span className="dark:hidden inline">☁️</span>
        </div>
      </div>
      <div className='p-8 max-w-3xl mx-auto text-center mt-16'>
        <div className="mb-8">
          <DarkModeToggle />
        </div>
        <h1 className="text-4xl font-bold mb-4 dark:text-yellow-200 text-blue-600 transition-colors duration-300">
          Welcome to <span className="dark:inline hidden">Dark</span><span className="dark:hidden inline">Light</span> mode
        </h1>
        <p className="text-lg dark:text-gray-300 text-gray-600 transition-colors duration-300">
          This is an app to demonstrate dark mode with some sparkle ✨
        </p>
      </div>
    </div>
  )
}

export default App

