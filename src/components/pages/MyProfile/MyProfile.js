import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import Header from '../../Header/Header';
import SkillsSection from './Skills/Skills';
import ProjectsSection from './Projects/Projects';
import ArticlesSection from './Articles/Articles';
import Summary from './Summary/Summary';
import CareerTimeline from './CareerTimeline/CareerTimeline';

// Define your color palette
const white = '#ffffff'; // White for background
const darkBlue = '#1976d2'; // Dark blue for text and accents
const textColor = '#333'; // Default text color

// Styling for the layout
const Layout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: white, // White background for the entire layout
});

const NavigationBar = styled('nav')({
  display: 'flex',
  justifyContent: 'center',
  background: white,
  padding: '10px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid #ddd',
  position: 'fixed',
  top: '60px', // Adjust this value based on header height
  left: 0,
  right: 0,
  zIndex: 1100, // Ensure it appears above content but below header
});

const NavItem = styled('div')(({ isSelected }) => ({
  margin: '0 15px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1rem',
  background: isSelected ? '#ddd' : '#ffffff',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    background: '#ddd',
  },
  transition: 'background 0.3s ease',
  color: darkBlue, // Dark blue text color
}));

const ContentArea = styled('div')({
  flex: 1,
  padding: '20px',
  overflowY: 'auto',
  marginTop: '120px', // Space for header and navigation bar
  backgroundColor: white, // White background for content area
});

const MyProfile = () => {
  const [tabValue, setTabValue] = useState(0);
  const sectionsRefs = useRef([]);

  const handleTabChange = (index) => {
    setTabValue(index);
    const section = sectionsRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    sectionsRefs.current = sectionsRefs.current.slice(0, 5);

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + 70; // Adjust for header and nav height
      const currentTab = sectionsRefs.current.findIndex((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        return scrollPosition >= sectionTop && scrollPosition < (sectionTop + section.clientHeight);
      });

      if (currentTab !== -1 && currentTab !== tabValue) {
        setTabValue(currentTab);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tabValue]);

  return (
    <Layout>
      <Header />
      <NavigationBar>
        <NavItem isSelected={tabValue === 0} onClick={() => handleTabChange(0)}>Summary</NavItem>
        <NavItem isSelected={tabValue === 1} onClick={() => handleTabChange(1)}>Career Timeline</NavItem>
        <NavItem isSelected={tabValue === 2} onClick={() => handleTabChange(2)}>Projects</NavItem>
        <NavItem isSelected={tabValue === 3} onClick={() => handleTabChange(3)}>Articles</NavItem>
        <NavItem isSelected={tabValue === 4} onClick={() => handleTabChange(4)}>Skills</NavItem>
      </NavigationBar>
      <ContentArea>
        <div ref={(el) => (sectionsRefs.current[0] = el)}>
          <Summary />
        </div>
        <div ref={(el) => (sectionsRefs.current[1] = el)}>
          <CareerTimeline />
        </div>
        <div ref={(el) => (sectionsRefs.current[2] = el)}>
          <ProjectsSection />
        </div>
        <div ref={(el) => (sectionsRefs.current[3] = el)}>
          <ArticlesSection />
        </div>
        <div ref={(el) => (sectionsRefs.current[4] = el)}>
          <SkillsSection />
        </div>
      </ContentArea>
    </Layout>
  );
};

export default MyProfile;
