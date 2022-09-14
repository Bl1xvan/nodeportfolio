import React, {useRef} from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const refForm = useRef

  const submitEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
        'gmail',
        'template_vvdgv38',
        refForm.current,
        'FDE9tH1CmID1efyYz'
    )
  }
  return (
    <div id="contactdiv">
      <div id="formdiv">
        <h2>Send a message!</h2>
        <form id="send-email" ref={refForm} onSubmit={submitEmail}>
          <label for="fname"><input type="text" id="fname" name="fname" placeholder="First Name"/></label>
          <label for="lname"><input type="text" id="lname" name="lname" placeholder="Last Name" /></label>
          <label for="email"><input type="text" id="email" name="email" placeholder="Email" /></label>
          <label for="subject"><input type="text" id="subject" name="subject" placeholder="Subject" /></label>
          <textarea id="message" name="message" className="span2" placeholder="Send a message"></textarea>
          <label for="submit" className="span2"><input type="submit" id="submit" value="submit" /></label>
        </form>
      </div>
    </div>
  )
}

export default Contact
