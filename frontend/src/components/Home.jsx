// Home.js
import React from 'react';
import { Navbar, 
    Logo, 
    NavigationLinks, 
    NavLink, 
    ButtonsContainer, 
    LoginButton, 
    GuestButton, 
    HomeContainer, 
    SchoolInfo, 
    SchoolImage, 
    Title, 
    LoremTextContainer,
     AdminRegisterLink } 
from '../styles/styles'
import { LoremIpsum } from 'lorem-ipsum';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.webp";
import { Link, useNavigate } from 'react-router-dom'; 

const lorem = new LoremIpsum();

const Home = () => {
  const navigate = useNavigate();
  const loremText = lorem.generateParagraphs(1);

  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  return (
    <>
      <Navbar>
        <Logo src={bg1} alt="Logo" />
        <NavigationLinks>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
          <GuestButton onClick={handleLoginClick}>Sign Up</GuestButton>
        </ButtonsContainer>
      </Navbar>
      <div className=" w-full">
      <HomeContainer>
        <SchoolInfo>
          <Title>School Management System</Title>
          <LoremTextContainer>
            <p>{loremText}</p>
          </LoremTextContainer>
           <AdminRegisterLink to="/staff/register"> Register</AdminRegisterLink>
          
        </SchoolInfo>
        
        <SchoolImage src={bg} alt="pupils" />
    
      </HomeContainer>
      </div>
    </>
  );
};

export default Home;