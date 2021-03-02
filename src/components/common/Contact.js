import emailjs from 'emailjs-com'

import '../../css/Contact.css'

const Contact = () => {

    const sendEmail = e => {
        e.preventDefault()
        emailjs.sendForm('service_hzaiy9f','template_82w3pqg', e.target, 'user_DDm4ulPdnI4IJHeDenDJk')
        .then(response => {
            console.log(response)
            window.location.reload()
        },error=>{
            console.log(error)
        })

    }

    return(
        <div className='contact-container'>
            <h1>Contact</h1>
            <form className='contact-form' onSubmit={sendEmail}>
                <input type='hidden' name='contact-number' />
                <label htmlFor='userName'>Your Name</label>
                <input type='text' name='userName' />
                <label htmlFor='userEmail'>Your Email</label>
                <input type='email' name='userEmail' />
                <label htmlFor='message'>Your Message</label>
                <textarea name='message'></textarea>
                <input type='submit' value='Send'/>
            </form>
        </div>
    )
}

export default Contact