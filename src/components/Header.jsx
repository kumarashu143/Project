import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import indiLogo from '../assets/logo.png';
import Search from './Search';
const Header = () => {
  return (
    <>
      <style>{`
        .navbar-dark .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="text-white fs-5 d-flex align-items-center gap-2"
            style={{ letterSpacing: '0.5px' }}
          >
            <img
              src={indiLogo}
              alt="Indi Logo"
              style={{ height: '32px', width: '32px', objectFit: 'contain' }}
            />
            Indi Secure
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border border-light shadow-sm"
            style={{ backgroundColor: 'transparent', padding: '0.4rem 0.6rem' }}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/course', label: 'Courses' },
                { to: '/alumni', label: 'Alumni' },
                { to: '/register', label: 'Register' },
                { to: '/login', label: 'Login' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `nav-link text-white px-3 py-2 rounded${isActive ? ' active' : ''}`
                  }
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                  style={{
                    fontSize: '1.1rem',
                    letterSpacing: '0.5px',
                    textTransform: 'none',
                  }}
                >
                  {label}
                </NavLink>
              ))}

              <div className="ms-lg-3 mt-2 mt-lg-0">
                <Search />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
