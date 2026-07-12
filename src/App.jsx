import { useEffect, useRef, useState } from 'react';
import { profile } from './data/profile';
import { projects } from './data/projects';

function resolveUrl(url) {
  if (typeof url !== 'string') {
    return '';
  }

  const trimmedUrl = url.trim();

  if (!trimmedUrl) {
    return '';
  }

  if (
    trimmedUrl.startsWith('#') ||
    trimmedUrl.startsWith('mailto:') ||
    trimmedUrl.startsWith('tel:') ||
    /^[a-z]+:/i.test(trimmedUrl) ||
    trimmedUrl.startsWith('//')
  ) {
    return trimmedUrl;
  }

  if (trimmedUrl.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${trimmedUrl.slice(1)}`;
  }

  return trimmedUrl;
}

function getLinkHref(link) {
  if (typeof link?.url === 'string') {
    return resolveUrl(link.url);
  }

  if (typeof link?.href === 'string') {
    return resolveUrl(link.href);
  }

  return '';
}

function isActiveLink(link) {
  const href = getLinkHref(link);
  const label = typeof link?.label === 'string' ? link.label.trim() : '';

  if (!href || link?.placeholder) {
    return false;
  }

  return !href.toLowerCase().includes('placeholder') && !label.toLowerCase().includes('placeholder');
}

function joinWithDots(items) {
  return items.join(' \u00b7 ');
}

function scrollToId(id) {
  if (typeof window === 'undefined') {
    return;
  }

  window.requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

function normalizeGalleryItem(item, projectTitle, index) {
  if (typeof item === 'string') {
    return {
      src: resolveUrl(item),
      alt: `${projectTitle} screenshot ${index + 1}`,
    };
  }

  if (!item?.src) {
    return null;
  }

  return {
    src: resolveUrl(item.src),
    alt: item.alt ?? `${projectTitle} screenshot ${index + 1}`,
  };
}

function getProjectGallery(project, variant = 'caseStudy') {
  const explicitGallery = Array.isArray(project.gallery) ? project.gallery : null;

  if (explicitGallery?.length) {
    return explicitGallery
      .map((item, index) => normalizeGalleryItem(item, project.title, index))
      .filter(Boolean);
  }

  const images = project.images ?? {};
  const orderMap = {
    card: ['hero', 'overview', 'results'],
    caseStudy: ['results', 'overview', 'hero'],
  };
  const order = orderMap[variant] ?? orderMap.caseStudy;
  const ordered = order.map((key) => images[key]).filter(Boolean);
  const unique = ordered.filter((src, index) => ordered.indexOf(src) === index);

  return unique.map((src, index) => normalizeGalleryItem(src, project.title, index));
}

function getProjectImage(project, variant = 'caseStudy') {
  return getProjectGallery(project, variant)[0]?.src ?? null;
}

function getProjectLinks(project) {
  const projectLinks = Array.isArray(project.links) ? project.links : Object.values(project.links ?? {});
  return projectLinks.filter(isActiveLink);
}

function splitProjectLinks(links) {
  if (!links?.length) {
    return {
      primaryLink: null,
      secondaryLinks: [],
    };
  }

  const demoLink =
    links.find((link) => link.type === 'demo') ??
    links.find((link) => link.label?.toLowerCase().includes('demo'));

  return {
    primaryLink: demoLink ?? null,
    secondaryLinks: links.filter((link) => link !== demoLink),
  };
}

function ProjectTags({ items, label, className = '' }) {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className={['tag-list', className].filter(Boolean).join(' ')} aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ExternalLink({ link, label, className = '' }) {
  if (!isActiveLink(link)) {
    return null;
  }

  const href = getLinkHref(link);
  const isExternal = href.startsWith('http');
  const resolvedLabel = label ?? link.label;
  const typeClassName =
    link?.type === 'demo' ? 'button-link-demo' : link?.type === 'repository' ? 'button-link-repository' : '';

  return (
    <a
      href={href}
      className={['button-link', typeClassName, className].filter(Boolean).join(' ')}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      download={link.download ? '' : undefined}
      aria-label={isExternal ? `${resolvedLabel} (opens in a new tab)` : resolvedLabel}
    >
      {resolvedLabel}
    </a>
  );
}

function ProjectActionLink({ project, link, className = '' }) {
  if (!isActiveLink(link)) {
    return null;
  }

  const showDemoNote = link?.type === 'demo' && project?.demoNote;

  return (
    <div className="action-link-group">
      <ExternalLink link={link} className={className} />
      {showDemoNote ? <p className="action-note">{project.demoNote}</p> : null}
    </div>
  );
}

function BackgroundNetwork() {
  return (
    <div className="background-network" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice">
        <g className="network-lines">
          <path d="M164 154 L332 120 L496 184 L650 124 L814 214 L1012 166 L1204 246" />
          <path d="M272 338 L432 260 L594 334 L744 278 L914 356 L1086 300" />
          <path d="M170 504 L354 450 L526 530 L714 466 L902 554 L1100 494 L1268 582" />
          <path d="M356 120 L432 260 L354 450" />
          <path d="M650 124 L744 278 L714 466" />
          <path d="M1012 166 L1086 300 L1100 494" />
          <path d="M496 184 L594 334 L526 530" />
          <path d="M814 214 L914 356 L902 554" />
        </g>

        <g className="network-nodes">
          {[164, 332, 496, 650, 814, 1012, 1204].map((x, index) => (
            <circle key={`node-top-${x}`} cx={x} cy={[154, 120, 184, 124, 214, 166, 246][index]} r="4.5" />
          ))}
          {[272, 432, 594, 744, 914, 1086].map((x, index) => (
            <circle key={`node-mid-${x}`} cx={x} cy={[338, 260, 334, 278, 356, 300][index]} r="4.5" />
          ))}
          {[170, 354, 526, 714, 902, 1100, 1268].map((x, index) => (
            <circle key={`node-bottom-${x}`} cx={x} cy={[504, 450, 530, 466, 554, 494, 582][index]} r="4.5" />
          ))}
        </g>
      </svg>
    </div>
  );
}

function Header({ profileData, links, activeSection, hasCaseStudy, onNavClick }) {
  const navItems = [
    { id: 'projects', label: 'Projects', href: '#projects', sectionKey: 'projects', isActive: activeSection === 'projects' },
    {
      id: 'work',
      label: 'Work',
      href: hasCaseStudy ? '#case-study' : '#work',
      sectionKey: hasCaseStudy ? 'case-study' : 'work',
      isActive: activeSection === 'work' || activeSection === 'case-study',
    },
    { id: 'skills', label: 'Skills', href: '#skills', sectionKey: 'skills', isActive: activeSection === 'skills' },
    { id: 'reach-out', label: 'Reach Out', href: '#reach-out', sectionKey: 'reach-out', isActive: activeSection === 'reach-out' },
  ];

  return (
    <header className="site-header">
      <div className="site-container header-layout">
        <a href="#top" className="brand-block">
          <span className="brand-name">{profileData.name}</span>
          <span className="brand-subtitle">{profileData.headline}</span>
        </a>

        <div className="header-right">
          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={item.isActive ? 'is-active' : ''}
                    aria-current={item.isActive ? 'location' : undefined}
                    onClick={() => onNavClick(item.sectionKey)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-links">
            <ExternalLink link={links.cv} label="CV" />
            <ExternalLink link={links.linkedin} />
            <ExternalLink link={links.github} />
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ profileData, links, heroRef }) {
  return (
    <section ref={heroRef} className="hero-section">
      <div className="site-container hero-shell">
        <div className="hero-copy hero-copy-centered">
          <p className="section-eyebrow hero-eyebrow">{profileData.hero.eyebrow}</p>
          <h1>{profileData.hero.title}</h1>
          <p className="hero-role">{profileData.headline}</p>
          <p className="hero-subtitle">{profileData.hero.subtitle}</p>
          {profileData.hero.focusLine ? <p className="hero-focus">{profileData.hero.focusLine}</p> : null}

          <div className="hero-actions">
            <a href="#projects" className="button-link button-link-primary">
              Explore Projects
            </a>
            <ExternalLink link={links.cv} label="Download CV" />
            <ExternalLink link={links.meeting} label="Book a meeting" className="button-link-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CredibilityStrip({ items }) {
  return (
    <section id="work" className="credibility-strip" aria-label="Credibility">
      <div className="site-container">
        <ul className="credibility-ribbon">
          {items.map((item) => (
            <li key={item.label} className="credibility-ribbon-item">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function VisualFrame({ title, children, variant = 'card' }) {
  return (
    <figure className={['visual-frame', `is-${variant}`].join(' ')}>
      <div className="visual-frame-bar">
        <div className="visual-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="visual-label">{title}</span>
      </div>

      <div className="visual-frame-body">{children}</div>
    </figure>
  );
}

function DiagramContent({ project }) {
  return (
    <ol className="diagram-list">
      {project.diagramSteps?.map((step, index) => (
        <li key={`${project.id}-${step}`}>
          <span className="diagram-marker">{String(index + 1).padStart(2, '0')}</span>
          <span className="diagram-step">{step}</span>
        </li>
      ))}
    </ol>
  );
}

function ProjectVisual({ project, variant = 'card' }) {
  const gallery = getProjectGallery(project, variant);
  const primaryImage = gallery[0] ?? null;
  const imageSrc = primaryImage?.src ?? null;
  const imageList = variant === 'caseStudy' ? gallery : [];

  if (!imageSrc && !project.diagramSteps?.length) {
    return null;
  }

  return (
    <VisualFrame title={imageSrc ? 'Technical preview' : 'Workflow'} variant={variant}>
      {imageSrc ? (
        <div className={['visual-gallery', `is-${variant}`].join(' ')}>
          <img src={imageSrc} alt={primaryImage?.alt ?? `${project.title} primary screenshot`} className="visual-image visual-gallery-main" />
          {imageList.length > 1 ? (
            <div className="visual-gallery-strip">
              {imageList.slice(1, 3).map((image, index) => (
                <img
                  key={`${project.id}-${image.src}`}
                  src={image.src}
                  alt={image.alt ?? `${project.title} supporting screenshot ${index + 1}`}
                  className="visual-image visual-gallery-thumb"
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <DiagramContent project={project} />
      )}
    </VisualFrame>
  );
}

function ProjectCard({ project, isSelected, onSelect }) {
  const activeLinks = getProjectLinks(project);

  return (
    <article className={['project-card', isSelected ? 'is-selected' : ''].filter(Boolean).join(' ')} id={`project-${project.id}`}>
      <div className="project-card-copy">
        <div className="project-card-heading">
          <span className="project-number">{project.number}</span>
          <h3>{project.title}</h3>
        </div>

        <p className="project-value">{project.value}</p>
        <ProjectTags items={project.stack} label={`${project.title} tags`} />
      </div>

      <div className="project-card-visual">
        <ProjectVisual project={project} variant="card" />
      </div>

      <div className="project-actions">
        <button
          type="button"
          className="button-link button-link-primary"
          onClick={() => onSelect(project.id, 'case-study')}
          aria-label={`${isSelected ? 'Viewing' : 'View'} case study for ${project.title}`}
        >
          {isSelected ? 'Viewing case study' : 'View case study'}
        </button>

        {activeLinks.map((link) => (
          <ProjectActionLink key={`${project.id}-${link.label}`} project={project} link={link} />
        ))}
      </div>
    </article>
  );
}

function ProjectShowcase({ projectsData, selectedProjectId, onSelect }) {
  return (
    <section id="projects" className="projects-section">
      <div className="site-container">
        <div className="section-heading">
          <span className="section-eyebrow">Projects</span>
          <h2>Selected projects across financial ML, lakehouse analytics, data quality, portfolio analytics and AI language tools.</h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProjectId === project.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ title, items }) {
  return (
    <section className="case-card">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function CaseStudy({ project, detailsOpen, onToggleDetails, onClose }) {
  const activeLinks = getProjectLinks(project);
  const { primaryLink, secondaryLinks } = splitProjectLinks(activeLinks);
  const technicalDetailsId = `technical-details-panel-${project.id}`;

  return (
    <section id="case-study" className="case-study-section">
      <div className="site-container">
        <div className="section-heading">
          <span className="section-eyebrow">Selected Case Study</span>
        </div>

        <article className="case-study-shell">
          <div className="case-study-top">
            <div className="case-study-copy">
              <span className="case-number">{project.number}</span>
              <h3>{project.title}</h3>
              <p className="case-summary">{project.value}</p>
              <ProjectTags items={project.stack} label={`${project.title} tags`} className="tag-list-quiet" />

              <div className="case-actions">
                {primaryLink ? (
                  <ProjectActionLink project={project} link={primaryLink} className="button-link-showcase" />
                ) : null}

                {secondaryLinks.length ? (
                  <div className="case-links case-links-secondary">
                    {secondaryLinks.map((link) => (
                      <ProjectActionLink key={`${project.id}-${link.label}`} project={project} link={link} />
                    ))}
                  </div>
                ) : null}

                <button
                  type="button"
                  className="inline-action inline-action-ghost"
                  onClick={onClose}
                  aria-label="Close selected case study"
                >
                  Close case study
                </button>
              </div>

            </div>

            <div className="case-study-visual">
              <ProjectVisual project={project} variant="caseStudy" />
            </div>
          </div>

          <div className="case-card-grid">
            <CaseCard title="What it is" items={project.caseStudy.whatItIs} />
            <CaseCard title="Problem" items={project.caseStudy.problem} />
            <CaseCard title="Built" items={project.caseStudy.built} />
            <CaseCard title="Proof" items={project.caseStudy.proof} />
          </div>

          <div className="technical-details">
            <button
              type="button"
              className={['inline-action', 'inline-action-subtle', detailsOpen ? 'is-open' : ''].filter(Boolean).join(' ')}
              onClick={onToggleDetails}
              aria-expanded={detailsOpen}
              aria-controls={technicalDetailsId}
            >
              {detailsOpen ? 'Hide technical details' : 'View technical details'}
            </button>

            {detailsOpen ? (
              <div id={technicalDetailsId} className="technical-grid">
                <CaseCard title="Architecture / Workflow" items={project.caseStudy.technicalDetails.architecture} />
                <CaseCard title="Data / Inputs" items={project.caseStudy.technicalDetails.dataInputs} />
                <CaseCard title="Modeling or Logic" items={project.caseStudy.technicalDetails.logic} />
                <CaseCard title="Outputs" items={project.caseStudy.technicalDetails.outputs} />
              </div>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  );
}

function Skills({ groups }) {
  return (
    <section id="skills" className="skills-section">
      <div className="site-container">
        <div className="section-heading skills-heading">
          <span className="section-eyebrow">Skills</span>
          <h2>Core tools across data engineering, analytics, ML and automation.</h2>
        </div>

        <div className="skills-grid">
          {groups.map((group, index) => (
            <section key={group.group} className="skill-card">
              <div className="skill-card-head">
                <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{group.group}</h3>
              </div>
              <p>{joinWithDots(group.items)}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ note, availabilityLine, links }) {
  const hasMeeting = Boolean(links.meeting);

  return (
    <footer id="reach-out" className="contact-section">
      <div className="site-container contact-shell">
        <div className="contact-copy-column">
          <div className="contact-copy">
            <span className="section-eyebrow">Reach Out</span>
            <h2>Reach out.</h2>
            <p>{note}</p>
            <p className="availability-line">{availabilityLine}</p>
          </div>

          <div className="contact-links">
            <ExternalLink link={links.email} label="Email" />
            <ExternalLink link={links.meeting} label="Book a meeting" className="button-link-accent" />
            <ExternalLink link={links.cv} label="CV" />
            <ExternalLink link={links.linkedin} />
            <ExternalLink link={links.github} />
          </div>
        </div>

        {hasMeeting ? (
          <div className="calendly-card">
            <div className="calendly-card-copy">
              <span className="micro-label">Schedule</span>
              <h3>Schedule a 30-minute introduction</h3>
              <p>Choose a time that works for you.</p>
            </div>

            <div className="calendly-card-head">
              <ExternalLink link={links.meeting} label="Open Calendly" className="button-link-accent" />
            </div>

            <div className="calendly-frame">
              <iframe
                src={getLinkHref(links.meeting)}
                title="Calendly scheduling page"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        ) : null}
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [projectTechnicalDetails, setProjectTechnicalDetails] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const pendingScrollTargetRef = useRef(null);
  const navLockRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      const heroHeight = heroRef.current?.offsetHeight ?? 520;
      const viewportMarker = scrollTop + 140;
      const sectionIds = selectedProjectId
        ? ['work', 'projects', 'case-study', 'skills', 'reach-out']
        : ['work', 'projects', 'skills', 'reach-out'];

      let nextActiveSection = null;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element && viewportMarker >= element.offsetTop - 80) {
          nextActiveSection = id;
        }
      });

      if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 40) {
        nextActiveSection = 'reach-out';
      }

      const navLock = navLockRef.current;
      if (navLock) {
        if (performance.now() < navLock.expiresAt && sectionIds.includes(navLock.section)) {
          nextActiveSection = navLock.section;
        } else {
          navLockRef.current = null;
        }
      }

      setScrollProgress(nextProgress);
      setShowFloatingCta(scrollTop > heroHeight * 0.7);
      setActiveSection(nextActiveSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [selectedProjectId]);

  useEffect(() => {
    if (!selectedProjectId || !pendingScrollTargetRef.current) {
      return;
    }

    const targetId = pendingScrollTargetRef.current;
    pendingScrollTargetRef.current = null;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });
  }, [selectedProjectId]);

  useEffect(() => {
    if (!selectedProjectId && activeSection === 'case-study') {
      setActiveSection(null);
    }
  }, [selectedProjectId, activeSection]);

  const activeProfileLinks = {
    cv: isActiveLink(profile.links.cv) ? profile.links.cv : null,
    linkedin: isActiveLink(profile.links.linkedin) ? profile.links.linkedin : null,
    github: isActiveLink(profile.links.github) ? profile.links.github : null,
    email: isActiveLink(profile.links.email) ? profile.links.email : null,
    meeting: isActiveLink(profile.links.meeting) ? profile.links.meeting : null,
  };

  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;
  const detailsOpen = selectedProjectId ? Boolean(projectTechnicalDetails[selectedProjectId]) : false;
  const hasCaseStudy = Boolean(selectedProject);

  const handleSelectProject = (projectId, targetId = 'work') => {
    if (projectId === selectedProjectId) {
      scrollToId(targetId);
      return;
    }

    navLockRef.current = {
      section: targetId,
      expiresAt: performance.now() + 1600,
    };
    pendingScrollTargetRef.current = targetId;
    setProjectTechnicalDetails((current) => ({
      ...current,
      [projectId]: false,
    }));
    setSelectedProjectId(projectId);
    setActiveSection(targetId);
  };

  const handleNavClick = (sectionKey) => {
    navLockRef.current = {
      section: sectionKey,
      expiresAt: performance.now() + 1400,
    };
    setActiveSection(sectionKey);
  };

  return (
    <div className="site-shell">
      <BackgroundNetwork />

      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      </div>

      <Header
        profileData={profile}
        links={activeProfileLinks}
        activeSection={activeSection}
        hasCaseStudy={hasCaseStudy}
        onNavClick={handleNavClick}
      />

      <main id="top">
        <Hero profileData={profile} links={activeProfileLinks} heroRef={heroRef} />
        <CredibilityStrip items={profile.credibilityItems} />
        <ProjectShowcase
          projectsData={projects}
          selectedProjectId={selectedProjectId}
          onSelect={handleSelectProject}
        />
        {selectedProject ? (
          <CaseStudy
            project={selectedProject}
            detailsOpen={detailsOpen}
            onToggleDetails={() => {
              setProjectTechnicalDetails((current) => ({
                ...current,
                [selectedProject.id]: !current[selectedProject.id],
              }));
            }}
            onClose={() => {
              navLockRef.current = {
                section: 'projects',
                expiresAt: performance.now() + 1000,
              };
              setProjectTechnicalDetails((current) =>
                selectedProject
                  ? {
                      ...current,
                      [selectedProject.id]: false,
                    }
                  : current,
              );
              setSelectedProjectId(null);
              setActiveSection('projects');
            }}
          />
        ) : null}
        <Skills groups={profile.skills} />
        <Contact note={profile.contactNote} availabilityLine={profile.availabilityLine} links={activeProfileLinks} />
      </main>

      {activeProfileLinks.meeting ? (
        <ExternalLink
          link={activeProfileLinks.meeting}
          label="Book a meeting"
          className={['floating-cta', showFloatingCta ? 'is-visible' : ''].filter(Boolean).join(' ')}
        />
      ) : null}
    </div>
  );
}
