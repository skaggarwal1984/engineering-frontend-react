import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import Header from '../../Header/Header';
import SkillsSection from './Skills/Skills';
import ProjectsSection from './Projects/Projects';
import ArticlesSection from './Articles/Articles';
import Summary from './Summary/Summary';
import CareerTimeline from './CareerTimeline/CareerTimeline';

const headerOffset = 180; // Configurable header offset

const Section = styled('div')({
  padding: '30px 0',
  width: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  marginTop: '150px',
});

const MyProfile = () => {
  const [tabValue, setTabValue] = useState(0);
  const sectionsRefs = useRef([]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    const section = sectionsRefs.current[newValue];
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset + headerOffset;
    const currentTab = sectionsRefs.current.findIndex((section) => {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      return scrollPosition >= sectionTop && scrollPosition < (sectionTop + section.clientHeight);
    });

    if (currentTab !== -1 && currentTab !== tabValue) {
      setTabValue(currentTab);
    }
  };

  useEffect(() => {
    sectionsRefs.current = sectionsRefs.current.slice(0, 5);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tabValue]);

  return (
    <div style={{ width: '100%', padding: '0' }}>
      <Header tabValue={tabValue} handleTabChange={handleTabChange} />
      <Section ref={(el) => (sectionsRefs.current[0] = el)}>
        <Summary />
      </Section>
      <Section ref={(el) => (sectionsRefs.current[1] = el)}>
        <CareerTimeline />
      </Section>
      <Section ref={(el) => (sectionsRefs.current[2] = el)}>
        <ProjectsSection />
      </Section>
      <Section ref={(el) => (sectionsRefs.current[3] = el)}>
        <ArticlesSection />
      </Section>
      <Section ref={(el) => (sectionsRefs.current[4] = el)}>
        <SkillsSection />
      </Section>
    </div>
  );
};

export default MyProfile;
