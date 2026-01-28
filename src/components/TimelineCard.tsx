import type { TimelineItem } from '../data/content';

type Props = {
  item: TimelineItem;
};

export default function TimelineCard({ item }: Props) {
  return (
    <article className="xpCard reveal">
      <div className="xpCard__logo">
        <span>{item.logoLetter}</span>
      </div>
      <div className="xpCard__main">
        <div className="xpCard__role">{item.role}</div>
        <a className="xpCard__org" href={item.orgHref} target="_blank" rel="noreferrer">
          {item.org}
        </a>
      </div>
      <div className="xpCard__meta">
        <div>{item.dates}</div>
        <div>{item.location}</div>
      </div>
    </article>
  );
}
