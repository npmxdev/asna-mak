import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <div className='selection:bg-purple-900 selection:text-white'>
      {/* <div className="fixed inset-0 h-full -z-10 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]"></div> */}

      <Hero />

      <Gallery />
    </div>
  )
}

export default App
