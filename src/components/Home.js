import Skills from './Skills'
import Contact from './common/Contact'

import '../css/Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='main'>
                <div className='overlay'>
                    <div className='main-main'>
                        <h1>Elizabeth Guerra</h1>
                        <h2>Full-Stack Web Developer</h2>
                    </div>
                </div>
            </div>
                    <div className='main-bottom'>
                        <div className='brand'>
                            <p>
                                I am a <span class='highlight'>challenge-loving, creative problem solver</span> who wants to leave the world better than how I found it. 
                            </p>
                            <p>
                                As a software engineer, I thrive in environments where my input is valued and I can be part of <span className='highlight'>building something bigger than myself.</span>
                            </p>
                        </div>
                    </div>
            <Skills />
            <Contact />
        </div>
    )
}

export default Home