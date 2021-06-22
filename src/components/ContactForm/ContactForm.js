import * as React from "react"
import './style.scss'
import facebook from "../../images/facebook-app-logo.svg"
import instagram from "../../images/instagram.svg"

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact-wrapper">
          <h3
            style={{ color: "white", fontSize: "2rem" }}
            className="heading-secondary"
          >
            Zostaw wiadomość
          </h3>
          <form
            method="POST"
            action="https://getform.io/f/89a40498-60dd-4b75-bf15-e735c847ad23"
            className="contact-form"
          >
            <label className="contact-input" htmlFor="name">
              Imię
            </label>
            <input required type="text" name="name" id="name" />
            <label className="contact-input" htmlFor="name">
              E-mail
            </label>
            <input required type="email" name="email" id="email" />
            <label className="contact-input" htmlFor="name">
              Wiadomość
            </label>
            <textarea
              required
              name="message"
              className="contact-text"
            ></textarea>
            <button type="submit">Wyślij</button>
          </form>
          <div className="contact-icon--wrapper">
            <a
              target="_blank"
              className="link"
              href="https://www.facebook.com/TrenerBartlomiejPelc"
            >
              <img alt='facebook' className="contact-icon" src={facebook}></img>
            </a>
            <a
              target="_blank"
              className="link"
              href="https://www.instagram.com/pelcbartlomiej/?hl=pl"
            >
              <img alt='instagram' className="contact-icon" src={instagram}></img>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
