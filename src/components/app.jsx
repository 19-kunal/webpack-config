import Recipes from './Recipes.jsx'
import "../styles/index.scss"
import "../styles/woof.css"
import sword from "../images/swc-sword.png"
import swordSvg from "../images/sword.svg"

const app = () => {
  return (
    <>
        <section className='hero'></section>
        <main>
            <section>
                <h1>oh Hai, React</h1>
            </section>
            <img src={sword} alt='sword' width="250"/>
            <Recipes/>
            <img src={swordSvg} alt='sword' width="250"/>
        </main>

    </>
  )
}

export default app