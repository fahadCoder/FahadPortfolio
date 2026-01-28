import type { Project } from '../data/content';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project reveal" data-cat={project.cat}>
      <img className="project__img" src={project.img} alt={project.title} />
      <h3 className="project__title">
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p className="project__desc">{project.desc}</p>
    </article>
  );
}
