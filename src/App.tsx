import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import { useTyping } from './hooks/useTyping';
import { useReveal } from './hooks/useReveal';
import { useActiveNav } from './hooks/useActiveNav';

import { education, experience, portfolioFilters, projects, roles, skillsGroups , type ProjectCategory } from './data/content';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const roleText = useTyping([...roles]);

  // Re-run reveal scan when the filter changes (new cards mount/unmount).
  useReveal([activeFilter]);

  // Highlight the active nav link based on scroll.
  useActiveNav();

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.cat === activeFilter);
  }, [activeFilter]);

  const onNavClick = () => setMenuOpen(false);

  return (
    <>
      <div id="top" />

      <Navbar
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((v) => !v)}
        onNavClick={onNavClick}
      />

      <Hero roleText={roleText} />

      <About />

      <Experience skills={skillsGroups } items={experience} />

      <Education items={education} />

      <Portfolio
        filters={portfolioFilters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        projects={filteredProjects}
      />

      <Contact />
    </>
  );
}
