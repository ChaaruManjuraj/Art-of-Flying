import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {

const [data, setData] = useState({
  email: "",
  message: ""
})

function sendEmail(e) {

  const form = document.getElementById('contact-form')
  e.preventDefault()

  emailjs.sendForm('service_14l44mq', 'template_dw0p1gi', form, 'Hy_eUBfI9Dpfnv72a')
    .then((result) => {
      data.email = ''
      data.message = ''
      alert("Thank you for contacting! I will get back to you soon.")
    }, (error) => {
      data.email = ''
      alert("Error! Can you please contact me on mkchaaru@yahoo.com?")
    });
}

  function handleChange(e) {
    switch (e.target.id) {
      case 'exampleEmailInput':
        setData({...data, email: e.target.value})
        break;
      case 'exampleMessage':
        setData({...data, message: e.target.value})
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    if(data.email === "") {
      alert("Please enter your email")
      e.preventDefault()
    }
    else if(data.message === "") {
      alert("Please enter your message")
      e.preventDefault()
    }
    else {
      sendEmail(e)
    }
  }

  return (
    <div className="contact">

     <form id="contact-form">
        <div className="row">
          <div className="sixteen columns">
            <div className="six columns offset-by-three">
              <label for="exampleEmailInput">Your Email</label>
              <input class="u-full-width" type="email" name="email" placeholder="test@mailbox.com" id="exampleEmailInput" value={data.email} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="sixteen columns">
            <div className="six columns offset-by-three">
              <label for="exampleMessage">Message</label>
              <textarea class="u-full-width" name="message" placeholder="Hi Chaaru …" id="exampleMessage" value={data.message} onChange={handleChange}></textarea>
            </div>
          </div>
        </div>
        <input class="button-primary" type="submit" value="Send" onClick={handleSubmit}></input>
     </form>

    </div>
  )
}
