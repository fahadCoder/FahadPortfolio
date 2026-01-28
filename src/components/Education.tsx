import SectionHeading from './SectionHeading';
import TimelineCard from './TimelineCard';
import type { TimelineItem } from '../data/content';

type Props = {
  items: TimelineItem[];
};

export default function Education({ items }: Props) {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading>EDUCATION</SectionHeading>

        <div className="timeline">
          {items.map((it) => (
            <TimelineCard key={`${it.org}-${it.dates}`} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
