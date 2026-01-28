
import { about } from '../data/content';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about">
          <div className="about__photo reveal">
            <div className="about__photoFrame" aria-hidden="true"></div>
            <img className="about__photoImg" src="/assets/profile.JPG" alt="Fahad Israr portrait" />
          </div>

          <div className="about__copy reveal">
            <h2 className="about__title">{about.title}</h2>
            {about.paragraphs.map((p) => (
              <p key={p} className="about__p">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
