import AllisonPic from '../assets/allison-img.png';
import { UseMobileView } from '../hooks/use-mobile-view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faLocationDot, faPhone, faScissors } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export function Footer({ title }: { title: string }) {
    const { mobileView } = UseMobileView();

    return (
        <div>
            {mobileView ? (
                <div className='footer'>
                    <div className='d-flex justify-content-around mt-0 row mx-0 text-center'>
                        <div className='col-6 col-sm-2 ms-2'>
                            <img
                                src={AllisonPic}
                                height='80px'
                                width='80px'
                                className='rounded-circle mb-1 saturation'
                                alt='Allison Logo'
                            />
                            <h6>Poopy Butt Salon</h6>
                        </div>
                        <div className='col-6 col-md-7 mt-4 w-100'>
                            <p>Hours: </p>
                            <div className='d-flex flex-column'>
                                <div className='d-flex justify-content-around w-100'>
                                    <span className='w-100'>Tuesday: 1pm - 9pm</span>
                                    <span className='w-100'>Wednesday: 1pm - 9pm</span>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <span>Friday: 11am - 7pm</span>
                                    <span>Saturday: 11am - 7pm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <small>
                        <div className='d-flex justify-content-around col-12 col-md-4 mt-4'>
                            <div className='d-flex mt-4 flex-column align-items-start me-5'>
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
                            <div className='d-flex mt-4 flex-column align-items-start'>
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
                    </small>
                </div>
            ) : (
                <div className='d-flex justify-content-evenly mt-0 row footer'>
                    <div className='col-6 col-sm-1'>
                        <img src={AllisonPic} height='100px' width='100px' className='rounded-circle mb-1 saturation' alt='Allison Logo' />
                        <h6>Poopy Butt Salon</h6>
                    </div>
                    <div className='col-6 col-sm-3 mt-4 text-center'>
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
                    <div className='d-flex justify-content-between col-12 col-md-4'>
                        <div className='d-flex mt-4 flex-column align-items-start me-5'>
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
                        <div className='d-flex mt-4 flex-column align-items-start'>
                            <p>
                                <a target='_blank' rel='noreferrer' className='custom-link' href='https://www.amazon.com/shop/alliecurls_'>
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
            )}
        </div>
    );
}

// </div>
//     <div className='footer text-center d-print-none mt-0'>
//         <div className='d-flex justify-content-evenly mt-0'>
//             <div className='mt-2'>
//                 <img src={AllisonPic} height='100px' width='100px' className='rounded-circle mb-1 saturation' alt='Allison Logo' />
//                 <h6>Poopy Butt Salon</h6>
//             </div>
//             <div className='mt-4 w-25'>
//                 <p>Hours: </p>
//                 <div className='d-flex flex-column'>
//                     <div className='d-flex justify-content-around'>
//                         <span>Tuesday: 1pm - 9pm</span>
//                         <span>Wednesday: 1pm - 9pm</span>
//                     </div>
//                     <div className='d-flex justify-content-around'>
//                         <span>Friday: 11am - 7pm</span>
//                         <span>Saturday: 11am - 7pm</span>
//                     </div>
//                 </div>
//             </div>
//             <div className='d-flex justify-content-between'>
//                 <div className='d-flex mt-4 flex-column align-items-start me-5'>
//                     <p>
//                         <a
//                             target='_blank'
//                             rel='noreferrer'
//                             className='custom-link'
//                             href='https://www.google.com/maps?rlz=1C1CHBF_enUS1039US1039&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KTG1H0OKx9iHMTnl4oHb-7tH&daddr=5644+Telegraph+Rd,+St.+Louis,+MO+63129'
//                         >
//                             <FontAwesomeIcon icon={faLocationDot} />{' '}
//                             <span className='ms-2'>5644 Telegraph Rd, St. Louis, MO 63129</span>
//                         </a>
//                     </p>
//                     <p>
//                         <a className='custom-link' href='tel:3142939597'>
//                             <FontAwesomeIcon icon={faPhone} /> <span className='ms-2'>(314) 293-9597</span>
//                         </a>
//                     </p>
//                     <p>
//                         <a target='_blank' rel='noreferrer' className='custom-link' href='https://www.salonbeautique.me/'>
//                             <FontAwesomeIcon icon={faScissors} /> <span className='ms-2'>Salon Beautique</span>
//                         </a>
//                     </p>
//                 </div>
//                 <div className='d-flex mt-4 flex-column align-items-start'>
//                     <p>
//                         <a target='_blank' rel='noreferrer' className='custom-link' href='https://www.amazon.com/shop/alliecurls_'>
//                             <FontAwesomeIcon icon={faBagShopping} /> <span className='ms-2'>Allie's Amazon Favorites</span>
//                         </a>
//                     </p>
//                     <p>
//                         <a
//                             target='_blank'
//                             rel='noreferrer'
//                             className='custom-link'
//                             href='https://www.instagram.com/alliecurls_?igsh=ZXZyaW5tMzF6dDJj'
//                         >
//                             <FontAwesomeIcon icon={faInstagram} />{' '}
//                             <span className='ms-2'>
//                                 <small>@</small>alliecurls_
//                             </span>
//                         </a>
//                     </p>
//                     <p>
//                         <a
//                             target='_blank'
//                             rel='noreferrer'
//                             className='custom-link'
//                             href='https://www.tiktok.com/@alliecurls_?_t=8oAZ1xgdqEk&_r=1'
//                         >
//                             <FontAwesomeIcon icon={faTiktok} />{' '}
//                             <span className='ms-2'>
//                                 <small>@</small>alliecurls_
//                             </span>
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
