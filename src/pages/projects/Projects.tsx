import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';

export type Project = {
  id: string | number;
  title: string;
  subtitle?: string;
  username?: string;
  image: string;
  description?: string;
  technologies?: string[]; // список технологий
  demoUrl?: string | null; // если нет — кнопка Demo неактивна
  gradientClass?: string; 
};

type Props = {
  projects: Project[];
};

const ProjectCard: React.FC<{ project: Project; onOpen: (p: Project) => void }> = ({ project, onOpen }) => {
  return (
    <button
      className={`pg-card ${project.gradientClass ?? ''}`}
      onClick={() => onOpen(project)}
      aria-label={`Открыть "${project.title}"`}
    >
      <div className="pg-media">
        <img className="pg-image" src={project.image} alt={project.title} />
        <div className="pg-gradient" />
      </div>

      <div className="pg-body">
        <div className="pg-left">
          <h3 className="pg-title">{project.title}</h3>
          {project.subtitle && <p className="pg-sub">{project.subtitle}</p>}
        </div>
        {project.username && <div className="pg-username">{project.username}</div>}
      </div>
    </button>
  );
};

const Modal: React.FC<{
  project: Project | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) onClose();
  };

  return (
    <div
      className="pg-modal-overlay"
      ref={modalRef}
      onMouseDown={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Подробности проекта ${project.title}`}
    >
      <div className="pg-modal">
        <button className="pg-modal-close" onClick={onClose} aria-label="Закрыть модальное окно">✕</button>

        <div className="pg-modal-grid">
          <div className="pg-modal-media">
            <img src={project.image} alt={project.title} className="pg-modal-image" />
          </div>

          <div className="pg-modal-body">
            <h2 className="pg-modal-title">{project.title}</h2>
            {project.subtitle && <p className="pg-modal-sub">{project.subtitle}</p>}
            {project.description && <p className="pg-modal-desc">{project.description}</p>}

            <div className="pg-modal-section">
              <h3 className="pg-modal-sec-title">Технологии</h3>
              <div className="pg-tech-list">
                {project.technologies && project.technologies.length ? (
                  project.technologies.map((t, i) => (
                    <span className="pg-tech" key={i}>
                      <span className="pg-tech-dot" aria-hidden />
                      <span className="pg-tech-text">{t}</span>
                    </span>
                  ))
                ) : (
                  <p className="pg-no-tech">Технологии не указаны</p>
                )}
              </div>
            </div>

            <div className="pg-modal-actions">
              <a
                className={`pg-btn pg-btn-demo ${project.demoUrl ? '' : 'pg-btn-disabled'}`}
                href={project.demoUrl ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!project.demoUrl) e.preventDefault();
                }}
                aria-disabled={!project.demoUrl}
              >
                Посмотреть demo
              </a>

              <button className="pg-btn pg-btn-close" onClick={onClose}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectGallery: React.FC<Props> = ({ projects }) => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="pg-container">
        <div className="pg-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default ProjectGallery;
