import SectionHeading from './SectionHeading';
import Skills from './Skills';
import TimelineCard from './TimelineCard';
import type { SkillGroup, TimelineItem } from '../data/content';

type Props = {
  skills: SkillGroup[];
  items: TimelineItem[];
};

export default function Experience({ skills, items }: Props) {
  return (
    <section id="experience" className="section section--tight">
      <div className="container">
        <SectionHeading>WORK EXPERIENCE</SectionHeading>

        <Skills groups={skills} />

        <div className="timeline">
          {items.map((it) => (
            <TimelineCard key={`${it.org}-${it.dates}`} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
