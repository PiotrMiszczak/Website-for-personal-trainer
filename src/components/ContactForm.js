import * as React from "react"
import facebook from '../images/facebook-app-logo.svg'
import instagram from '../images/instagram.svg'


const Contact = () => (
 <>
  <section  className="contact">
      <div className='contact-wrapper'>
<h3 style={{color:"white",
fontSize:'2rem'}} className="heading-secondary">Get in touch</h3>
      <form onSubmit={(e)=>e.preventDefault()} className="contact-form">
          <label className="contact-input" for="name">Imię</label><input required type='text' name='name' id='name' />
          <label className="contact-input" for="name">E-mail</label><input required type='email' name='email' id='email' />
          <label className="contact-input" for="name">Wiadomość</label><textarea className="contact-text"></textarea>
          <button type="submit">Wyślij</button>
      </form>
      <div className="contact-icon--wrapper">
<a target='_blank' className="link" href='https://www.facebook.com/TrenerBartlomiejPelc'><img className="contact-icon" src={facebook}></img></a>
         <a target='_blank' className="link" href='https://www.instagram.com/pelcbartlomiej/?hl=pl'><img className="contact-icon" src={instagram}></img></a>
      </div>
      </div>
     

  </section>
 </>
)

export default Contact