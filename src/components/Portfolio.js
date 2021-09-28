import { FaHtml5, FaGithub, FaNodeJs, FaReact, FaPython, FaSass } from 'react-icons/fa'
import { VscGithub} from 'react-icons/vsc'
import { SiPostgresql, SiMongodb, SiFlask, SiJavascript } from 'react-icons/si'

import '../css/Portfolio.css'

const Portfolio = () => {
    return(
        <div className='portfolio-container'>
            <h1>Portfolio</h1>
            <div className='card-container'>
            <div className='card'>
                    <div className='card-top'>
                        <a target='_blank' rel='noreferrer' href='https://number-chompers.netlify.app/'><h2>Number Chompers</h2></a>
                    </div>
                    <div className='card-middle'>
                        <div className='stack-icons'><FaHtml5 />{' '}<SiJavascript /></div>
                        <p>A take on the 80s & 90s children's game Number Munchers using HTML5 Canvas and Javascript. Created for the Aug/Sept 2021 Mintbean Hiring Hackathon "2D Game." Received a MintBean Star award.</p>
                    </div>
                    <div className='card-bottom'>
                        <div className='git-links'>
                            <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/Number_Chompers'><FaGithub /></a>
                        </div>
                        <div className='go-btn'>
                            <a target='_blank' rel='noreferrer' href='https://number-chompers.netlify.app/'>Visit</a>
                        </div>
                    </div>
                </div>
            <div className='card'>
                    <div className='card-top'>
                        <a target='_blank' rel='noreferrer' href='https://blerg.netlify.app/'><h2>Blerg! (in progress)</h2></a>
                    </div>
                    <div className='card-middle'>
                        <div className='stack-icons'><FaReact />{' '}<FaSass /></div>
                        <p>A blogging site for people prone to starting blogs and then abandoning them after a few entries.</p>
                    </div>
                    <div className='card-bottom'>
                        <div className='git-links'>
                            <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/blerg_frontend'><FaGithub /></a>
                        </div>
                        <div className='go-btn'>
                            <a target='_blank' rel='noreferrer' href='https://blerg.netlify.app/'>Visit</a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-top'>
                        <a target='_blank' rel='noreferrer' href='https://ecguerra.github.io/Bruno-ElizabethGuerra_P1/index.html'><h2>Cora Destroys Everything!</h2></a>
                    </div>
                    <div className='card-middle'>
                        <div className='stack-icons'><FaHtml5 />{' '}<SiJavascript /></div>
                        <p>Users play as a rambunctious kitten named Cora and have to discover the correct order to break everything in the room by learning from their previous attempts.</p>
                    </div>
                    <div className='card-bottom'>
                        <div className='git-links'>
                            <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/Bruno-ElizabethGuerra_P1'><FaGithub /></a>
                        </div>
                        <div className='go-btn'>
                            <a target='_blank' rel='noreferrer' href='https://ecguerra.github.io/Bruno-ElizabethGuerra_P1/index.html'>Visit</a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-top'>
                        <a target='_blank' rel='noreferrer' href='https://decloset.herokuapp.com/'><h2>Decloset</h2></a>
                    </div>
                    <div className='card-middle'>
                        <div className='stack-icons'><SiPostgresql />{' '}<FaNodeJs /></div>
                        <p>Users create their virtual closets and are able to search for nearby homeless shelters to donate items they no longer want.</p>
                    </div>
                    <div className='card-bottom'>
                        <div className='git-links'>
                            <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/Decloset'><FaGithub /></a>
                        </div>
                        <div className='go-btn'>
                            <a target='_blank' rel='noreferrer' href='https://decloset.herokuapp.com/'>Visit</a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-top'>
                        <a target='_blank' rel='noreferrer' href='https://cov-id.netlify.app/'><h2>COV-ID</h2></a>
                    </div>
                    <div className='card-middle'>
                        <div className='stack-icons'><SiMongodb />{' '}<FaNodeJs />{' '}<FaReact /></div>
                        <p>A dashboard where users can search and save locations to view and monitor Covid-19 statistics pulled live from an API.</p>
                    </div>
                    <div className='card-bottom'>
                        <div className='git-links'>
                            <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/COV-ID-frontend'><FaGithub /></a>{' '}
                            <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/COV-ID-backend'><VscGithub /></a> 
                        </div>
                        <div className='go-btn'>
                            <a target='_blank' rel='noreferrer' href='https://cov-id.netlify.app/'>Visit</a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-top'>
                        <a target='_blank' rel='noreferrer' href='https://palettetown.netlify.app/'><h2>Palette Town</h2></a>
                    </div>
                    <div className='card-middle'>
                        <div className='stack-icons'><FaPython />{' '}<SiPostgresql />{' '}<SiFlask />{' '}<FaNodeJs />{' '}<FaReact /></div>
                        <p>A webtool where users can select colors and save them to palettes for their own projects</p>
                    </div>
                    <div className='card-bottom'>
                        <div className='git-links'>
                            <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/Palette_Town_frontend'><FaGithub /></a> {' '}
                            <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/Palette_Town_backend'><VscGithub /></a> {' '}
                        </div>
                        <div className='go-btn'>
                            <a target='_blank' rel='noreferrer' href='https://palettetown.netlify.app/'>Visit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio