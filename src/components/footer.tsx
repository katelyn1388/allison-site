import { Link } from 'react-router-dom';
// import AllisonPic from '../assets/allison-img.svg';
import AllisonPic from '../assets/allison-img.png';
import { useCallback, useState } from 'react';
import { UseMobileView } from '../hooks/use-mobile-view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faLocationDot, faPhone, faScissors } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export function Footer({ title }: { title: string }) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const { mobileView } = UseMobileView();

    return (
        <div>
            {mobileView ? (
                <div className='footer text-center pt-2 d-print-none row'>
                    <div className='col navigation'>
                        <div className='d-flex justify-content-start mt-2'>
                            <div className='col' onClick={toggleHamburger}>
                                <Hamburger isOpen={hamburgerOpen} />
                            </div>
                        </div>
                        <ul style={{ display: hamburgerOpen ? 'block' : 'none', minHeight: '9rem' }} className='dropdown-menu'>
                            <li>
                                <Link to='/' className={title === 'Home' ? 'active-page nav-link' : 'nav-link'}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/services' className={title === 'Services' ? 'active-page nav-link' : 'nav-link'}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to='/bookAppointment' className={title === 'Book Appointment' ? 'active-page nav-link' : 'nav-link'}>
                                    Book Appointment
                                </Link>
                            </li>
                            <li>
                                <Link to='/recommendations' className={title === 'Recommendations' ? 'active-page nav-link' : 'nav-link'}>
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
                    <div className='col'>
                        <h2 className='page-title'>PB Salon</h2>
                    </div>
                </div>
            ) : (
                <div className='footer text-center d-print-none'>
                    {/* <div className='mt-2 mb-3 d-flex justify-content-evenly'>
                        <div>
                            <Link to='/' className={title === 'Home' ? 'active-page nav-link' : 'nav-link'}>
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to='/services' className={title === 'Services' ? 'active-page nav-link' : 'nav-link'}>
                                Services
                            </Link>
                        </div>
                        <div>
                            <Link to='/bookAppointment' className={title === 'Book Appointment' ? 'active-page nav-link' : 'nav-link'}>
                                Book Appointment
                            </Link>
                        </div>
                        <div>
                            <Link to='/recommendations' className={title === 'Recommendations' ? 'active-page nav-link' : 'nav-link'}>
                                Recommendations
                            </Link>
                        </div>
                    </div> */}
                    <div className='d-flex justify-content-evenly mt-4'>
                        <div>
                            <img src={AllisonPic} height='100px' width='100px' className='rounded-circle mb-1' alt='Allison Logo' />
                            <h6>Poopy Butt Salon</h6>
                        </div>
                        <div className='mt-2 w-25'>
                            <p>Hours: </p>
                            <div className='d-flex flex-column'>
                                <div className='d-flex justify-content-around'>
                                    <span>Tuesday: 1pm - 9pm</span>
                                    <span>Wednesday: 1pm - 9pm</span>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <span>Friday: 11am - 7pm</span>
                                    <span>Saturday: 11am - 7pm</span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex mt-2 flex-column align-items-start me-5'>
                                <p>
                                    <a
                                        target='_blank'
                                        rel='noreferrer'
                                        className='custom-link'
                                        href='https://www.google.com/maps?rlz=1C1CHBF_enUS1039US1039&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KTG1H0OKx9iHMTnl4oHb-7tH&daddr=5644+Telegraph+Rd,+St.+Louis,+MO+63129'
                                    >
                                        <FontAwesomeIcon icon={faLocationDot} />{' '}
                                        <span className='ms-2'>5644 Telegraph Rd, St. Louis, MO 63129</span>
                                    </a>
                                </p>
                                <p>
                                    <a className='custom-link' href='tel:3142939597'>
                                        <FontAwesomeIcon icon={faPhone} /> <span className='ms-2'>(314) 293-9597</span>
                                    </a>
                                </p>
                                <p>
                                    <a target='_blank' rel='noreferrer' className='custom-link' href='https://www.salonbeautique.me/'>
                                        <FontAwesomeIcon icon={faScissors} /> <span className='ms-2'>Salon Beautique</span>
                                    </a>
                                </p>
                            </div>
                            <div className='d-flex mt-2 flex-column align-items-start'>
                                <p>
                                    <a
                                        target='_blank'
                                        rel='noreferrer'
                                        className='custom-link'
                                        href='https://www.amazon.com/shop/alliecurls_'
                                    >
                                        <FontAwesomeIcon icon={faBagShopping} /> <span className='ms-2'>Allie's Amazon Favorites</span>
                                    </a>
                                </p>
                                <p>
                                    <a
                                        target='_blank'
                                        rel='noreferrer'
                                        className='custom-link'
                                        href='https://www.instagram.com/alliecurls_?igsh=ZXZyaW5tMzF6dDJj'
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />{' '}
                                        <span className='ms-2'>
                                            <small>@</small>alliecurls_
                                        </span>
                                    </a>
                                </p>
                                <p>
                                    <a
                                        target='_blank'
                                        rel='noreferrer'
                                        className='custom-link'
                                        href='https://www.tiktok.com/@alliecurls_?_t=8oAZ1xgdqEk&_r=1'
                                    >
                                        <FontAwesomeIcon icon={faTiktok} />{' '}
                                        <span className='ms-2'>
                                            <small>@</small>alliecurls_
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function Hamburger({ isOpen }: { isOpen: boolean }) {
    return (
        <div className='hamburger ms-2'>
            <div className='burger burger1' style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }} />
            <div className='burger burger2' style={{ transform: isOpen ? 'translateX(100%)' : 'translateX(0)', opacity: isOpen ? 0 : 1 }} />
            <div className='burger burger3' style={{ transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)' }} />
        </div>
    );
}
