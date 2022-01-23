import Background from '../../../resources/background.png';
import CV from '../../../resources/CV_David_Valenzuela.pdf';

const Contact = () => {
    return (
        <div className="contact">
            <img src={Background} alt="contact__background" />
            <section className="contact__container">     
            <h1>Me contacter :</h1>  
                <ul className='contact__container__details'>
                    <li>E-mail : <a href="mailto:davidvm1910@gmail.com"> davidvm1910@gmail.com</a></li>
                    <li>Tel : <a href="tel:+33768268846"> 07 68 26 88 46</a></li>
                    <li>GitHub : <a className="contact_link" href="https://github.com/DavidVM19">DavidVM19</a></li>
                    <li>LinkedIn : <a className="contact_link" href="https://www.linkedin.com/in/david-valenzuela-martinez/">David Valenzuela Martinez</a></li>
                    <li>Mon CV : <a href={CV} download>Télécharger</a></li>
                </ul>       
            </section>
        </div>
    )
}

export default Contact;