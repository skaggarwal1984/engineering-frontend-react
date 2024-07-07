import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Tooltip, Tabs, Tab } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TimelineIcon from '@mui/icons-material/Timeline';
import BuildIcon from '@mui/icons-material/Build';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/system';

// Gradient background
const gradientBackground = 'orangered';

// Header styling with gradient text
const HeaderSection = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  background: '#ffffff', // Background color for the header
  color: '#333333', // Default text color for fallback
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 1200,
  height: '60px',
});

const HeaderContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
});

const NavContainer = styled('nav')({
  display: 'flex',
  alignItems: 'center',
});

const NavList = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  gap: '20px',
});

const NavItem = styled('li')({
  display: 'inline',
  fontSize: '1rem',
  fontWeight: 'bold',
});

const NavLink = styled(Link)(({ isActive }) => ({
  textDecoration: 'none',
  color: isActive ? '#0056b3' : 'inherit',
  fontWeight: isActive ? 'bold' : 'normal',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const GradientTab = styled(Tab)({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  padding: '0 10px',
  minWidth: 'auto',
  '& .MuiTab-wrapper': {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  '& .MuiTab-wrapper span': {
    background: gradientBackground,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
  },
  '&.Mui-selected .MuiTab-wrapper span': {
    color: '#333333', // Default selected text color
  },
  '&:hover .MuiTab-wrapper span': {
    color: '#666666', // Hover text color
  },
});

const SocialLinks = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
});

const iconStyle = {
  color: gradientBackground,
};

const Header = ({ tabValue, handleTabChange }) => {
  const [profileClicked, setProfileClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile') {
      setProfileClicked(true);
    }
  }, [location]);

  return (
    <HeaderSection>
      <HeaderContent>
        <NavContainer>
          <NavList>
            <NavItem>
              <NavLink to="/" isActive={location.pathname === '/'}>
                <HomeIcon style={iconStyle} /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/profile"
                isActive={location.pathname === '/profile'}
                onClick={() => setProfileClicked(true)}
              >
                <AccountCircleIcon style={iconStyle} /> My Profile
              </NavLink>
            </NavItem>
          </NavList>
        </NavContainer>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="primary"
          textColor="primary"
          aria-label="Profile Navigation Tabs"
          centered
        >
          <GradientTab label="Summary" icon={<AccountCircleIcon style={iconStyle} />} disabled={!profileClicked} />
          <GradientTab label="Career Timeline" icon={<TimelineIcon style={iconStyle} />} disabled={!profileClicked} />
          <GradientTab label="Projects" icon={<BuildIcon style={iconStyle} />} disabled={!profileClicked} />
          <GradientTab label="Articles" icon={<ArticleIcon style={iconStyle} />} disabled={!profileClicked} />
          <GradientTab label="Skills" icon={<BarChartIcon style={iconStyle} />} disabled={!profileClicked} />
        </Tabs>
        <SocialLinks>
          <Tooltip title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/sandeep-kumar-aggarwal-ba022555/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon fontSize="small" style={iconStyle} />
            </a>
          </Tooltip>
          <Tooltip title="GitHub">
            <a
              href="https://github.com/skaggarwal1984?tab=repositories&q=&type=public&language=&sort="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <GitHubIcon fontSize="small" style={iconStyle} />
            </a>
          </Tooltip>
          <Tooltip title="Email">
            <a href="mailto:skaggarwal1984@gmail.com" aria-label="Email">
              <EmailIcon fontSize="small" style={iconStyle} />
            </a>
          </Tooltip>
        </SocialLinks>
      </HeaderContent>
    </HeaderSection>
  );
};

export default Header;
