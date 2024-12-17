import{ useState ,React} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {  BsBook } from 'react-icons/bs';
import bg2 from "../../assets/bg2.png";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  width: 250px;
  height: 100%;
  background-color: #2c3e50; /* Dark blue background */
  color: white;
  overflow-y: auto; /* Enable vertical scrolling */
  padding-top: 60px;
  transition: width 0.3s ease; /* Smooth width transition */
  z-index: 100; /* Ensure sidebar stays above content */
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #34495e; /* Darker border */
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #34495e; /* Darker background on hover */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #34495e; /* Darker background */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleIcon = styled.span`
  color: white;
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;


const Sidebar = () => {
 
  const [isOpen, setIsOpen] = useState(true);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
    
  return (
    <SidebarContainer style={{ width: isOpen ? '250px' : '80px' }}>
      <SidebarHeader> <Logo src={bg2} alt="Logo" /></SidebarHeader>
      <SidebarNav>
      <SidebarNavItem>
          <SidebarIcon><BsBook /></SidebarIcon>
          <StyledLink to="/library">Library Dashboard</StyledLink>
        </SidebarNavItem>
      
        <SidebarNavItem>
          <SidebarIcon><BsBook /></SidebarIcon>
          <StyledLink to="/library/books">Books</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBook /></SidebarIcon>
          <StyledLink to="/library/members">Members</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBook /></SidebarIcon>
          <StyledLink to="/library/borrow-requests">Borrow Requests</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBook /></SidebarIcon>
          <StyledLink to="/library/returns">Returns</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBook /></SidebarIcon>
          <StyledLink to="/library/reports">Reports</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
  <SidebarIcon><BsBook /></SidebarIcon>
  <StyledLink
    to="/login"
    
  >
    Log Out
  </StyledLink>
</SidebarNavItem>
        </SidebarNav>
        <ToggleButton onClick={toggleSidebar}>
        <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;
