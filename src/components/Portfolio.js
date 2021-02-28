import { FaHtml5, FaGithub, FaNodeJs, FaReact, FaPython } from 'react-icons/fa'
import { VscGithub} from 'react-icons/vsc'
import { SiPostgresql, SiMongodb, SiFlask } from 'react-icons/si'

const Portfolio = () => {
    return(
        <div>
            <h1>Portfolio</h1>
            <div>
                <h2>Cora Destroys Everything!</h2>
                <div><FaHtml5 /></div>
                <p>Users play as a rambunctious kitten named Cora and have to discover the correct order to break everything in the room by learning from their previous attempts.</p>
                <a target='_blank' rel='noreferrer' href='https://ecguerra.github.io/Bruno-ElizabethGuerra_P1/index.html'>The Site</a> {' '}
                <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/Bruno-ElizabethGuerra_P1'><FaGithub /></a>
            </div>
            <div>
                <h2>Decloset</h2>
                <div><SiPostgresql /><FaNodeJs /></div>
                <p>Users create their virtual closet and are able to search for nearby homeless shelters to donate items they no longer want.</p>
                <a target='_blank' rel='noreferrer' href='https://decloset.herokuapp.com/'>The Site</a>{' '}
                <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/Project_2_GA'><FaGithub /></a>
            </div>
            <div>
                <h2>COV-ID</h2>
                <div><SiMongodb /><FaNodeJs /><FaReact /></div>
                <p>A dashboard where users can search and save locations to view and monitor Covid-19 statistics pulled live from an API.</p>
                <a target='_blank' rel='noreferrer' href='https://cov-id.netlify.app/'>The Site</a> {' '}
                <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/team-6-frontend'><FaGithub /></a>{' '}
                <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/Team-6-backend'><VscGithub /></a> 
            </div>
            <div>
                <h2>Palette Town</h2>
                <div><FaPython /><SiPostgresql /><SiFlask /><FaNodeJs /><FaReact /></div>
                <p>A webtool where users can select colors and save them to palettes for their own projects</p>
                <a target='_blank' rel='noreferrer' href='https://palettetown.netlify.app/'>The Site</a> {' '}
                <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/Project_4_frontend'><FaGithub /></a> {' '}
                <a target='_blank' rel='noreferrer' href='https://github.com/ecguerra/Project_4_backend'><VscGithub /></a> {' '}
            </div>
        </div>
    )
}

export default Portfolio