// import React from 'react'
import Recipes from './Recipes.jsx'

import "../styles/index.scss"
import "../styles/woof.css"
  
const app = () => {
  return (
    <>
        <section className='hero'></section>
        <main>
            <section>
                <h1>oh Hai, React</h1>
            </section>
        </main>
        
        <Recipes/>
    </>
  )
}

export default app