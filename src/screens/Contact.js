import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Me Contacter</h1>
      <form className="form">
        <div className="formFirstLine">
          <div>
            <label htmlFor="name">Nom Prénom*</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Dupont Enzo"
              maxLength="30"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="company">Société</label>
            <br />
            <input
              type="text"
              id="company"
              placeholder="Ubisoft"
              maxLength="20"
            ></input>
          </div>
        </div>
        <div className="formSecondLine">
          <div>
            <label htmlFor="email">Email*</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="DupontEnzo@gmail.com"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="phone">Téléphone</label>
            <br />
            <input type="phone" id="phone" placeholder="0612345678"></input>
          </div>
        </div>
        <div className="formLastLine">
          <div>
            <label htmlFor="text">Votre message</label>
            <br />
            <textarea
              id="text"
              maxLength="400"
              rows="2"
              cols="50"
              placeholder="I want to recruit You"
            ></textarea>
          </div>
        </div>
        <div className="submit">
          <button type="submit" id="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
