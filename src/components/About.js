import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdFileDownload } from 'react-icons/md'


const About = () => {
    return (
        <div>
            <div>
                <h1>About Me</h1>
                <p>
                    I am a challenge-loving, creative problem solver who wants to leave the world a better place than how I found it. As a software engineer, I thrive in environments where my input is valued and I can be part of building something bigger than myself.
                </p>
                <div>
                    <ul>
                        <li><a target='_blank' href='https://github.com/ecguerra'><FaGithub /></a></li>
                        <li><a target='_blank' href='https://www.linkedin.com/in/elizabethcguerra/'><FaLinkedin /></a></li>
                        <li><a href='#'><MdEmail /></a></li>
                        <li><a href='#'><MdFileDownload /></a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About