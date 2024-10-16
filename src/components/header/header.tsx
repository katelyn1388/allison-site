import { Link } from 'react-router-dom';
import LogoPic from '../../assets/Merlinie Logo.jpg';
import { useState } from 'react';
import { UseMobileView } from '../../hooks/use-mobile-view';
import { ThemePicker } from '../theme-picker/theme-picker';

export function Header({ title }: { title: string }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const { mobileView } = UseMobileView();

  return (
    <div>
      {mobileView ? (
        <div className="header text-center pt-2 d-print-none row">
          <div className="col navigation">
            <div className="d-flex justify-content-start mt-2">
              <div className="col" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
              </div>
              <span className="d-inline">
                <ThemePicker />
              </span>
            </div>
            <ul style={{ display: hamburgerOpen ? 'block' : 'none', minHeight: '9rem' }} className="dropdown-menu">
              <li>
                <Link to="/" className={title === 'Home' ? 'active-page nav-link' : 'nav-link'}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className={title === 'Services' ? 'active-page nav-link' : 'nav-link'}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/bookAppointment" className={title === 'Book Appointment' ? 'active-page nav-link' : 'nav-link'}>
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/recommendations" className={title === 'Recommendations' ? 'active-page nav-link' : 'nav-link'}>
                  Recommendations
                </Link>
              </li>
              {/* <li>
                <Link to="/newzealand" className={title === 'New Zealand' ? 'active-page nav-link' : 'nav-link'}>
                  New Zealand
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="col">
            <h2 className="page-title">PB Salon</h2>
          </div>
        </div>
      ) : (
        <div className="header text-center pt-2 d-print-none">
          {/* <img src={LogoPic} height="80px" width="80px" className="rounded logo m-3 mt-2" alt="Merlinie Logo" /> */}
          <div className="d-flex justify-content-between">
            <div></div>
            <h1 className="page-title ms-5">Poopy Butt Salon</h1>
            <span className="align-right me-3">
              <ThemePicker />
            </span>
          </div>
          <div className="nav-bar d-flex justify-content-evenly">
            <div>
              <Link to="/" className={title === 'Home' ? 'active-page nav-link' : 'nav-link'}>
                Home
              </Link>
            </div>
            <div>
              <Link to="/services" className={title === 'Services' ? 'active-page nav-link' : 'nav-link'}>
                Services
              </Link>
            </div>
            <div>
              <Link to="/bookAppointment" className={title === 'Book Appointment' ? 'active-page nav-link' : 'nav-link'}>
                Book Appointment
              </Link>
            </div>
            <div>
              <Link to="/recommendations" className={title === 'Recommendations' ? 'active-page nav-link' : 'nav-link'}>
                Recommendations
              </Link>
            </div>
            {/* <div>
              <Link to="/newzealand" className={title === 'New Zealand' ? 'active-page nav-link' : 'nav-link'}>
                New Zealand
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

function Hamburger({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="hamburger ms-2">
      <div className="burger burger1" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }} />
      <div className="burger burger2" style={{ transform: isOpen ? 'translateX(100%)' : 'translateX(0)', opacity: isOpen ? 0 : 1 }} />
      <div className="burger burger3" style={{ transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)' }} />
    </div>
  );
}
