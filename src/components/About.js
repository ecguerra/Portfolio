import Skills from './Skills'
import Contact from './common/Contact'
import ContactIcons from './common/ContactIcons'

import '../css/About.css'

const About = () => {
    return (
        <div className='split-container'>
            <div className='left'>
                <div className='about-container'>
                    <h1>About Me</h1>
                    <p>I am a full-stack web developer with a background in data analysis and visualization. 
                    I find that both web development and data analysis are like solving a jigsaw puzzle: Starting with small, disparate pieces that are messy and chaotic,
                    but then finding connections and order, until finally creating the big picture, where it all fits together.</p>

                    <p>I love a good challenge and working with good people. Technology connects us in ways we never before thought possible. Let's work together to build something great.</p>
                </div>
                <Skills />
            </div>
            <div className='right'>
                <ContactIcons />
                <Contact />
            </div>
        </div>
    )
}

export default About