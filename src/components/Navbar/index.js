import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import Logo from '../../images/p2p.png';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "black", marginBottom: '20;', cursor: 'pointer' }}>
            <img src={Logo} alt="" style={{ size: "2rem", height: "70px" }} /> <p style={{ fontFamily: 'Calistoga,cursive', color: '#7E77c3', fontSize: '3vw', marginLeft: '15px' }}>P<span style={{ fontFamily: 'Calistoga,cursive', color: 'black' }}>2</span>P</p>  <p style={{ fontFamily: 'El Messiri, sans-serif', fontWeight: 700, marginRight: '10px', marginLeft: '10px', color: '#3473c8', fontSize: '2.6vw', paddingTop: '3%' }}>TECH</p>
            <p style={{ fontFamily: 'El Messiri, sans-serif', fontWeight: 700, fontSize: '2.6vw', paddingTop: '3%' }}>W<span style={{ fontFamily: 'El Messiri, sans-serif', fontWeight: 700, color: '#3473c8' }}>O</span>RKS</p>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>

          <Link to="/" style={{ textDecoration: "none" }}><NavLink>Home</NavLink></Link>

          <Link to='/blog' style={{ textDecoration: "none" }}><NavLink>Blog</NavLink></Link>
          <Link to='/p2p' style={{ textDecoration: "none" }}><NavLink>p2p</NavLink></Link>
          <Link to='/courses' style={{ textDecoration: "none" }}><NavLink>Courses</NavLink></Link>
          <Link to='/about' style={{ textDecoration: "none" }}><NavLink>About</NavLink></Link>
          <Link to='/contact' style={{ textDecoration: "none" }}><NavLink>Contact</NavLink></Link>
        </NavItems>

        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="/" onClick={() => {
              setIsOpen(!isOpen)
            }}>Home</MobileLink>
            <MobileLink href='/p2p' onClick={() => {
              setIsOpen(!isOpen)
            }}>p2p</MobileLink>
            <MobileLink href='/courses' onClick={() => {
              setIsOpen(!isOpen)
            }}>Courses</MobileLink>
            <MobileLink href='/blog' onClick={() => {
              setIsOpen(!isOpen)
            }}>Blog</MobileLink>
            <MobileLink href='/about' onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='/contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>

          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar