// import type { SkillGroup } from '../data/content';

// type Props = {
//   groups: SkillGroup[];
// };

// export default function Skills({ groups }: Props) {
//   return (
//     <div className="skills reveal">
//       {groups.map((g) => (
//         <div className="skills__group" key={g.title}>
//           <div className="skills__title">{g.title}</div>
//           <div className="skills__icons">
//             {g.kind === 'devicon'
//               ? g.icons.map((cls) => <i key={cls} className={cls} />)
//               : g.icons.map((label) => (
//                   <span key={label} className="badge">
//                     {label}
//                   </span>
//                 ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// import type { SkillGroup } from '../data/content';

// type Props = {
//   groups: SkillGroup[];
// };

// export default function Skills({ groups }: Props) {
//   return (
//     <div className="skills reveal">
//       {groups.map((g) => (
//         <div className="skills__group" key={g.title}>
//           <div className="skills__title">{g.title}</div>
//           <div className="skills__icons">
//             {g.kind === 'devicon'
//               ? g.icons.map((cls) => (
//                   // Devicon icons are single-color by default; adding `colored` enables brand colors
//                   // when supported by the selected icon variant.
//                   <i key={cls} className={`${cls} colored`} />
//                 ))
//               : g.icons.map((label) => (
//                   <span key={label} className="badge">
//                     {label}
//                   </span>
//                 ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// src/components/SkillsSection.tsx (or wherever you render skillsGroups)
import { skillsGroups, SkillItem } from "../data/content";

function SkillIcon({ item }: { item: SkillItem }) {
  if (item.kind === "devicon") {
    return <i className={item.className} title={item.label} aria-label={item.label} />;
  }

  // kind === "img"
  return (
    <img
      className="skillIconImg"
      src={item.src}
      alt={item.label}
      title={item.label}
      loading="lazy"
      onError={(e) => {
        // graceful fallback: hide broken icons
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

export default function SkillsSection() {
  return (
    <div className="skills">
      {skillsGroups.map((g) => (
        <div className="skills__group" key={g.title}>
          <div className="skills__title">{g.title}</div>
          <div className="skills__icons">
            {g.items.map((it) => (
              <SkillIcon key={it.label} item={it} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
