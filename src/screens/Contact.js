import './styles/Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <h1>Me Contacter</h1>
            <form className="form">
                <div className="formFirstLine">
                    <div>
                        <label for="name">Nom Prénom*</label><br/>
                        <input type="text" id="name" placeholder="Dupont Enzo" maxlength="30" required></input>
                    </div>
                    <div>
                        <label for="company">Société</label><br/>
                        <input type="text" id="company" placeholder="Ubisoft" maxlength="20"></input>
                    </div>
                </div>
                <div className="formSecondLine">
                    <div>
                        <label for="email">Email*</label><br/>
                        <input type="email" id="email" placeholder="DupontEnzo@gmail.com" required></input>
                    </div>
                    <div>
                        <label for="phone">Téléphone</label><br/>
                        <input type="phone" id="phone" placeholder="0612345678"></input>
                    </div>
                </div>
                <div className="formLastLine">
                    <div>
                        <label for="text">Votre message</label><br/>
                        <textarea id="text" maxlength="400" rows="2" cols="50" placeholder="I want to recruit You"></textarea>
                    </div>
                </div>
                <div className="submit">
                    <button type="submit" id="submit">Envoyer</button>
                </div>

            </form>
        </div>
    )
}

export default Contact