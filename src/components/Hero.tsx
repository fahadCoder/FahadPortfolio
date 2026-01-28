
import { heroSubtitle } from '../data/content';

type Props = { roleText: string };

export default function Hero({ roleText }: Props) {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__bg" aria-hidden="true"></div>

      <div className="hero__content container">
        <div className="hero__textMask reveal">
          <div className="hero__kicker">I&apos;M</div>
          <div className="hero__headline">
            <span className="hero__role" aria-label="Typing role">{roleText}</span>
            <span className="hero__caret" aria-hidden="true"></span>
          </div>
          <div className="hero__sub">{heroSubtitle}</div>
        </div>
      </div>
    </section>
  );
}
// import HeroParticles from "./HeroParticles";

// type Props = { roleText: string };

// export default function Hero({ roleText }: Props) {
//   return (
//     <section className="hero" aria-label="Hero" id="top">
//       {/* Particle background (replaces the laptop image) */}
//       <div className="hero__bg" aria-hidden="true">
//         <HeroParticles />
//         <div className="hero__shade" aria-hidden="true" />
//       </div>

//       <div className="hero__content container">
//         <div className="hero__textMask reveal">
//           <div className="hero__kicker">I&apos;M</div>
//           <div className="hero__headline">
//             <span className="hero__role" aria-label="Typing role">{roleText}</span>
//             <span className="hero__caret" aria-hidden="true"></span>
//           </div>
//           <div className="hero__sub">AI Engineer</div>
//         </div>
//       </div>
//     </section>
//   );
// }
