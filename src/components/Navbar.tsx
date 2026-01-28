// import type { MouseEventHandler } from 'react';

// type Props = {
//   menuOpen: boolean;
//   onToggle: MouseEventHandler<HTMLButtonElement>;
//   onNavClick: MouseEventHandler<HTMLAnchorElement>;
// };

// export default function Navbar({ menuOpen, onToggle, onNavClick }: Props) {
//   return (
//     <header className="nav">
//       <div className="nav__inner container">
//         <a className="nav__brand" href="#top" aria-label="Home" onClick={onNavClick}>
//           <span className="nav__brandMark">FAZEEL</span>
//           <span className="nav__brandSub">ARIF</span>
//         </a>

//         <button
//           className="nav__burger"
//           aria-label="Open menu"
//           aria-expanded={menuOpen}
//           onClick={onToggle}
//           type="button"
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`}>
//           <a className="nav__link" href="#top" onClick={onNavClick}>
//             Home
//           </a>
//           <a className="nav__link" href="#about" onClick={onNavClick}>
//             About
//           </a>
//           <a className="nav__link" href="#experience" onClick={onNavClick}>
//             Experience
//           </a>
//           <a className="nav__link" href="#education" onClick={onNavClick}>
//             Education
//           </a>
//           <a className="nav__link" href="#portfolio" onClick={onNavClick}>
//             Portfolio
//           </a>
//           <a className="nav__link" href="#contact" onClick={onNavClick}>
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }
import type { MouseEventHandler } from 'react';
import { brand } from '../data/content';

type Props = {
  menuOpen: boolean;
  onToggle: MouseEventHandler<HTMLButtonElement>;
  onNavClick: MouseEventHandler<HTMLAnchorElement>;
};

export default function Navbar({ menuOpen, onToggle, onNavClick }: Props) {
  return (
    <header className="nav">
      <div className="nav__inner container">
        <a className="nav__brand" href="#top" aria-label="Home" onClick={onNavClick}>
          <span className="nav__brandMark">{brand.mark}</span>
          <span className="nav__brandSub">{brand.sub}</span>
        </a>

        <button className="nav__burger" aria-label="Open menu" aria-expanded={menuOpen} onClick={onToggle} type="button">
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`}>
          <a className="nav__link" href="#top" onClick={onNavClick}>Home</a>
          <a className="nav__link" href="#about" onClick={onNavClick}>About</a>
          <a className="nav__link" href="#experience" onClick={onNavClick}>Experience</a>
          <a className="nav__link" href="#education" onClick={onNavClick}>Education</a>
          <a className="nav__link" href="#portfolio" onClick={onNavClick}>Portfolio</a>
          <a className="nav__link" href="#contact" onClick={onNavClick}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
