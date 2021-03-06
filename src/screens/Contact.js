import "./styles/Contact.css";
// import Modal
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

const Contact = (props) => {
  // Modal

  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  useEffect(() => {
    if (showDialog === true) {
      setTimeout(() => setShowDialog(false), 1500);
    }
  }, [showDialog]);

  // Fin du Modal
  // Formulaire de contact

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_880wm29",
        "template_zz3rs35",
        form.current,
        "user_akBjXeI9qCAKW6MYqcX4Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    open();
    deleteInformation();
  };

  // fin de formulaire de contact

  // remise à 0 du formulaire
  const [name, setName] = useState("");
  const [company, setCompany] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  const deleteInformation = () => {
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  // remise à 0 du formulaire
  return (
    <div className="contact">
      <h1>Me Contacter</h1>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="formFirstLine">
          <div className="formInput">
            <label htmlFor="name">Nom Prénom*</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Dupont Enzo"
              maxLength="30"
              required
              name="user_name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
          </div>
          <div className="formInput">
            <label htmlFor="company">Société</label>
            <br />
            <input
              type="text"
              id="company"
              placeholder="Ubisoft"
              maxLength="20"
              name="user_company"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            ></input>
          </div>
        </div>
        <div className="formSecondLine">
          <div className="formInput">
            <label htmlFor="email">Email*</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="DupontEnzo@gmail.com"
              required
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="formInput">
            <label htmlFor="phone">Téléphone</label>
            <br />
            <input
              type="phone"
              id="phone"
              placeholder="0612345678"
              name="user_phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            ></input>
          </div>
        </div>
        <div className="formLastLine">
          <div className="formInput">
            <label htmlFor="text">Votre message</label>
            <br />
            <textarea
              id="text"
              maxLength="400"
              rows="2"
              cols="50"
              placeholder="I want to recruit You"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
        </div>

        <div className="submit">
          <button type="submit" id="submit" value="Send">
            Envoyer
          </button>
        </div>
      </form>
      <div
        className="backToTop"
        onClick={() => props.fullpageApi.moveTo("About")}
      >
        <i className="fas fa-chevron-up"></i>Revenir à l'accueil
        <i className="fas fa-chevron-up"></i>
      </div>
      <Dialog isOpen={showDialog} onDismiss={close} className="dialog">
        <p>
          <i class="fas fa-check"></i> Email envoyé !
        </p>
      </Dialog>
    </div>
  );
};

export default Contact;
