import React from 'react'
import "./Contact.css"


const Contact = () => {


  return (
    <div id="contactdiv">
      <div id="formdiv">
        <h2>Send a message!</h2>
        <form id="send-email">
          <label for="fname"><input type="text" id="fname" name="fname" placeholder="First Name"/></label>
          <label for="lname"><input type="text" id="lname" name="lname" placeholder="Last Name" /></label>
          <label for="email"><input type="email" id="email" name="email" placeholder="Email" /></label>
          <label for="subject"><input type="text" id="subject" name="subject" placeholder="Subject" /></label>
          <textarea id="message" name="message" className="span2" placeholder="Send a message"></textarea>
          <label for="submit" className="span2"><input type="submit" id="submit" value="submit" /></label>
        </form>
      </div>
    </div>
  )
}

export default Contact
