import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdFileDownload } from 'react-icons/md'

import '../../css/ContactIcons.css'

const ContactIcons = () => {
    const p1 = 'elizabeth'
    const p2 = Math.pow(2,6)
    const p3 = String.fromCharCode(p2)
    const p4 = 'elizabeth-guerra'
    const p5 = '.com'
    const p6 = 'mai'
    const p7 = 'lto'
    const p8 = String.fromCharCode(58)

    const combined = `${p6}${p7}${p8}${p1}${p3}${p4}${p5}`

    return(
        <>
            <div className='info-container'>
                <h1>Elizabeth Guerra</h1>
                <h3>Boston, MA | Anywhere</h3>
            </div>
            <div className='icon-container'>
                <ul className='icon-list'>
                    <li><a target='_blank' rel='noreferrer' href='https://github.com/ecguerra'><FaGithub /></a></li>
                    <li><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/elizabethcguerra/'><FaLinkedin /></a></li>
                    <li>
                        <a href={combined}>
                            <MdEmail />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/15IBPIG_kuU1ebggoxmcRoh1ro5QrgAg0/view?usp=sharing'>
                            <MdFileDownload />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ContactIcons