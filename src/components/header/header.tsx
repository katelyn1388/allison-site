import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UseMobileView } from '../../hooks/use-mobile-view';
import { SalonName } from '../../types/salon-name';
import { AuthenticatedTemplate, useIsAuthenticated } from '@azure/msal-react';
import { SignOutButton } from './sign-out-botton';
import { SignInButton } from './sign-in-button';

export function Header({ title }: { title: string }) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const isAuthenticated = useIsAuthenticated();

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const { mobileView } = UseMobileView();

    const [signInEnabled, setSignInEnabled] = useState(true);

    return (
        <div>
            {mobileView ? (
                <div className='header text-center pt-2 d-flex justify-content-between'>
                    <div className='navigation'>
                        <div className='d-flex justify-content-start mt-2'>
                            <div onClick={toggleHamburger}>
                                <Hamburger isOpen={hamburgerOpen} />
                            </div>
                        </div>
                        <ul style={{ display: hamburgerOpen ? 'block' : 'none' }} className='dropdown-menu'>
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
                            <AuthenticatedTemplate>
                                <li>
                                    <Link to='/admin' className={title === 'Admin' ? 'active-page nav-link' : 'nav-link'}>
                                        Admin
                                    </Link>
                                </li>
                            </AuthenticatedTemplate>
                        </ul>
                    </div>
                    <div className=' justify-self-center mt-1 me-3 text-center'>
                        <h2 className='page-title'>{SalonName}</h2>
                    </div>
                    {signInEnabled && <div>{isAuthenticated ? <SignOutButton /> : <SignInButton />}</div>}
                </div>
            ) : (
                <div className='header text-center pt-2 d-print-none'>
                    {signInEnabled ? (
                        <div className='d-flex justify-content-between'>
                            <div className='ms-5'></div>
                            <h1 className='page-title mt-2'>{SalonName}</h1>
                            <div>{isAuthenticated ? <SignOutButton /> : <SignInButton />}</div>
                        </div>
                    ) : (
                        <h1 className='page-title mt-2'>{SalonName}</h1>
                    )}
                    <div className='nav-bar d-flex justify-content-evenly'>
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
                        <AuthenticatedTemplate>
                            <div>
                                <Link to='/admin' className={title === 'Admin' ? 'active-page nav-link' : 'nav-link'}>
                                    Admin
                                </Link>
                            </div>
                        </AuthenticatedTemplate>
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
