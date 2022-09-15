import React from 'react'
import "./Contact.css"
import emailjs from "emailjs-com"
import SocialMedia from "../Navigation/SocialMedia"

const Contact = () => {


  function sendEmail(e){
    e.preventDefault()
    emailjs.sendForm(
      'service_eqrnc04',
      'template_vvdgv38',
      e.target,
      'FDE9tH1CmID1efyYz'
    ).then(()=>{
      alert("Message Sent!")
      window.location.reload(false)
    }).catch(()=>alert("Error! Please try again"))
  }
  return (
    <div id="contactdiv">
      <h1 id="contact-header">Send a Message!</h1>
      <div id="formdiv">
        <div id="calltoaction">
          <p>My main offer is for freelance projects, but please let me know if you have other type of projects in mind!</p>
          <div>
            <h3>Social Media</h3>
            <div id="contact-media"><SocialMedia /></div>
          </div>
        </div>
        <form id="send-email" onSubmit={sendEmail}>
          <label className="label-column">
            <span>First Name</span>
            <input type="text" id="fname" name="fname" required />
          </label>
          <label className="label-column">
            <span>Last Name</span>
            <input type="text" id="lname" name="lname" required />
          </label>
          <label className="label-column">
            <span>Email</span>
            <input type="email" id="email" name="email" required/>
          </label>
          <label className="label-column"> 
            <span>Subject</span>
            <input type="text" id="subject" name="subject" required />
          </label>
          <label className="span2"><span>Message</span></label>
          <textarea id="message" name="message" className="span2" placeholder="Send a message" required></textarea>
          <label className="span2"><input type="submit" id="submit" /> </label>
        </form>
      </div>
    </div>
  )
}

export default Contact
