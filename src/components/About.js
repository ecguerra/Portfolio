import Skills from './Skills'
import Contact from './common/Contact'
import ContactIcons from './common/ContactIcons'

import '../css/About.css'

const About = () => {
    return (
        <div className='split-container'>
            <div className='left'>
                <h1>About Me</h1>
                <p>I am a full-stack web developer with a background in data analysis and visualization. 
                I find that both web development and data analysis are like solving a jigsaw puzzle: Starting with small, disparate pieces that are messy and chaotic,
                but then finding connections and order, until finally creating the big picture, where it all fits together.</p>
                <p>I like to solve puzzles. I like to find the order in the chaos. I want to be part of the bigger picture.</p>
                <Skills />
                <Contact />
            </div>
            <div className='right'>
                <h1>Elizabeth Guerra</h1>
                <h3>Boston, MA | Anywhere</h3>
                <ContactIcons />
            </div>
        </div>
    )
}

export default About