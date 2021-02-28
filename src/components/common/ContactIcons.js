import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdFileDownload } from 'react-icons/md'

import '../../css/ContactIcons.css'

const ContactIcons = () => {
    return(
        <div className='icon-container'>
            <ul className='icon-list'>
                <li><a target='_blank' rel='noreferrer' href='https://github.com/ecguerra'><FaGithub /></a></li>
                <li><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/elizabethcguerra/'><FaLinkedin /></a></li>
                <li><MdEmail /></li>
                <li><MdFileDownload /></li>
            </ul>
        </div>
    )
}

export default ContactIcons