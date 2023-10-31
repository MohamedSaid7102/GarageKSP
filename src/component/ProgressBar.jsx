import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMessage, faPeopleGroup, faProjectDiagram, faShoppingBag, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { faServicestack, faTeamspeak } from "@fortawesome/free-brands-svg-icons";

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

  const labelToIcon = (label) => {
    switch (label) {
      case '1':
        return <FontAwesomeIcon icon={faHome} width={13} />;
      case '2':
        return <FontAwesomeIcon icon={faShoppingBag}  width={13}/>;
      case '3':
        return <FontAwesomeIcon icon={faUserMd}  width={13}/>;
      case '4':
        return <FontAwesomeIcon icon={faServicestack}  width={13}/>;
      case '5':
        return <FontAwesomeIcon icon={faProjectDiagram}  width={13}/>;
      case '6':
        return <FontAwesomeIcon icon={faMessage}  width={13}/>;
      case '7':
        return <FontAwesomeIcon icon={faPeopleGroup}  width={13}/>;
      case '8':
        return <FontAwesomeIcon icon={faTeamspeak}  width={13}/>;
      default:
        return label; // Default to the label itself if no icon is defined.
    }
  };

  const labelToTitle = (label) => {
    switch (label) {
      case '1':
        return 'Home'
      case '2':
        return 'Brands'
      case '3':
        return 'About Us'
      case '4':
        return 'Our Services'
      case '5':
        return 'Our Projects'
      case '6':
        return 'Get A Quote'
      case '7':
        return 'Our Team'
      case '8':
        return 'Testimonial'
      default:
        return label; // Default to the label itself if no icon is defined.
    }
  }

  return (
    <div className="progress-indicator">
      {
        sections.map((section) => (
          <a
            key={section.id}
            className={`text-primary progress-bar-item circle ${section.id === activeSection ? 'active text-white' : ''}`}
            href={`#${section.sectionID}`}
            style={{ width: section.id == activeSection ? '30px' : '10px', height: section.id == activeSection ? '30px' : '10px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <span style={{ position: 'absolute', right: '130%', fontWeight: 'lighter', color: '#007BFF', fontSize: '10px', whiteSpace: 'nowrap' }}>{section.id == activeSection && labelToTitle(section.label)}</span>
            {section.id == activeSection && labelToIcon(section.label)}
          </a>
        )
        )
      }
      <div className="line" style={{ height: `${activeSection * 100 / (sections.length - 1)}%` }} />
    </div>);
};
