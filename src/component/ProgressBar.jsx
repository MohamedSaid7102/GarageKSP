import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [activeSection, setActiveSection] = useState(0);

  // Define your sections here
  const sections = [
    { id: 0, label: '1', sectionID: 'section-1' },
    { id: 1, label: '2', sectionID: 'section-2' },
    { id: 2, label: '3', sectionID: 'section-3' },
    { id: 3, label: '4', sectionID: 'section-4' },
    { id: 4, label: '5', sectionID: 'section-5' },
    { id: 5, label: '6', sectionID: 'section-6' },
    { id: 6, label: '7', sectionID: 'section-7' },
    { id: 7, label: '8', sectionID: 'section-8' },
  ];

  useEffect(() => {
    const snapWrapper = document.getElementById('snapping-wrapper');
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      const scrollPosition = snapWrapper.scrollTop;
      const currentPosition = Math.floor(scrollPosition / windowHeight);

      setActiveSection(currentPosition)

    };

    snapWrapper.addEventListener('scroll', handleScroll);

    return () => {
      snapWrapper.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress-indicator">
      {
        sections.map((section) => (
          <a
            key={section.id}
            className={`progress-bar-item circle ${section.id === activeSection ? 'active' : ''}`}
            href={`#${section.sectionID}`}
          >
            {section.label}
          </a>
        )
        )
      }
      <div className="line" style={{ height: `${activeSection * 100 / (sections.length - 1)}%` }} />
    </div>);
};
