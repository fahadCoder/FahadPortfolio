// export default function Contact() {
//   return (
//     <footer id="contact" className="contact">
//       <div className="container">
//         <h2 className="contact__heading reveal">GET IN TOUCH</h2>

//         <div className="contact__grid reveal">
//           <div className="contact__item">
//             <i className="fa-solid fa-location-dot"></i>
//             <span>Erlangen, Germany</span>
//           </div>
//           <div className="contact__item">
//             <i className="fa-solid fa-envelope"></i>
//             <a href="mailto:Arif.Fazeel99@gmail.com">Arif.Fazeel99@gmail.com</a>
//           </div>
//           <div className="contact__item">
//             <i className="fa-brands fa-linkedin"></i>
//             <a href="https://www.linkedin.com/in/muhammad-fazeel-arif/" target="_blank" rel="noreferrer">
//               Fahad Israr
//             </a>
//           </div>
//           <div className="contact__item">
//             <i className="fa-brands fa-github"></i>
//             <a href="https://github.com/ArifFazeel99" target="_blank" rel="noreferrer">
//               ArifFazeel99
//             </a>
//           </div>
//         </div>

//         <div className="contact__bottom">
//           <div className="contact__brand">
//             FAZEEL
//             <br />
//             ARIF
//           </div>
//           <div className="contact__miniNav">
//             <a href="#top">Home</a>
//             <a href="#about">About</a>
//             <a href="#experience">Experience</a>
//             <a href="#education">Education</a>
//             <a href="#portfolio">Portfolio</a>
//             <a href="#contact">Contact</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { brand, contact } from '../data/content';

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <h2 className="contact__heading reveal">GET IN TOUCH</h2>

        <div className="contact__grid reveal">
          <div className="contact__item">
            <i className="fa-solid fa-location-dot"></i>
            <span>{contact.location}</span>
          </div>

          <div className="contact__item">
            <i className="fa-solid fa-envelope"></i>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>

          {/* <div className="contact__item">
            <i className="fa-solid fa-phone"></i>
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
          </div> */}

          <div className="contact__item">
            <i className="fa-brands fa-linkedin"></i>
            <a href={contact.linkedin.url} target="_blank" rel="noreferrer">{contact.linkedin.label}</a>
          </div>

          <div className="contact__item">
            <i className="fa-brands fa-github"></i>
            <a href={contact.github.url} target="_blank" rel="noreferrer">{contact.github.label}</a>
          </div>

          {/* <div className="contact__item">
            <i className="fa-solid fa-globe"></i>
            <a href={contact.homepage.url} target="_blank" rel="noreferrer">{contact.homepage.label}</a>
          </div> */}
        </div>

        <div className="contact__bottom">
          <div className="contact__brand">
            {brand.mark}<br />{brand.sub}
          </div>

          <div className="contact__miniNav">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
