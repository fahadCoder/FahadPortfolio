import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import type { Project, ProjectCategory } from '../data/content';

type Props = {
  filters: ProjectCategory[];
  activeFilter: ProjectCategory;
  onFilterChange: (cat: ProjectCategory) => void;
  projects: Project[];
};

export default function Portfolio({ filters, activeFilter, onFilterChange, projects }: Props) {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <SectionHeading>MY PORTFOLIO</SectionHeading>

        <div className="filters reveal" role="tablist" aria-label="Portfolio filters">
          {filters.map((cat) => (
            <button
              key={cat}
              className={`filter ${activeFilter === cat ? 'is-active' : ''}`}
              data-filter={cat}
              role="tab"
              type="button"
              onClick={() => onFilterChange(cat)}
            >
              {cat === 'all' ? 'all' : cat}
            </button>
          ))}
        </div>

        <div className="grid" id="portfolioGrid">
          {projects.map((p) => (
            <ProjectCard key={`${p.title}-${p.img}`} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
