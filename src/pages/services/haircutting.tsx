import { DivImage } from '../../components/div-image';
import { UseMobileView } from '../../hooks/use-mobile-view';

export function Haircutting() {
    const { mobileView } = UseMobileView();

    return (
        <div className='mt-3'>
            {mobileView ? (
                <div className='haircutting-section w-100 mx-4 w-100 mt-5 text-center'>
                    <h2>Haircutting</h2>
                    <div className='d-flex justify-content-around w-100'>
                        <DivImage height='30rem' width='30rem' img='/images/frank.png' smallClass='service-image' />
                        <div className='d-flex flex-column w-75 ms-2'>
                            <div className='d-flex flex-column justify-content-center text-center mt-3'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <span>
                                        <b>New Guest Curly Cut: $175</b>
                                    </span>
                                    <small>
                                        This is an in-depth service where we will educate you on all things curls! This service includes a
                                        consultation about your hair goals, a curly cut, hair detox, personalized treatment, in-depth
                                        styling education, and a styling routine sheet to take home
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center text-center mt-3'>
                        <div className='d-flex flex-column justify-content-center'>
                            <span>
                                <b>Repeat Guest Curly Cut: $125</b>
                            </span>
                            <small className='fw-lighter'>
                                This service is for guests who have had an appointment in the last six months. This service includes a
                                consultation, a curly cut, wash and style, and styling tips
                            </small>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center text-center mt-3'>
                        <div className='d-flex flex-column justify-content-center'>
                            <span>
                                <b>Express Curly Cut: $90</b>
                            </span>
                            <small>
                                This service is for returning guests who only want a curly cut and do not need a wash and style.{' '}
                                <b>When you arrive to your appointment, your hair must be down and freshly styled. </b>
                                This service includes a consultation and curly cut. This service <b>does not</b> include a wash and style
                            </small>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='haircutting-section w-100 mx-5 w-100 mt-5 text-center'>
                    <h2 className='mb-4 ms-1'>Haircutting</h2>

                    <div className='d-flex justify-content-around w-100'>
                        <div>
                            <DivImage height='28rem' width='28rem' img='/images/frank.png' smallClass='service-image' />
                        </div>
                        <div className='d-flex flex-column w-50 ms-2 flex-wrap mt-5'>
                            <div className='d-flex flex-column justify-content-center text-center mt-3'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <span>
                                        <b>New Guest Curly Cut: $175</b>
                                    </span>
                                    <small>
                                        This is an in-depth service where we will educate you on all things curls! This service includes a
                                        consultation about your hair goals, a curly cut, hair detox, personalized treatment, in-depth
                                        styling education, and a styling routine sheet to take home
                                    </small>
                                </div>
                            </div>
                            <div className='d-flex flex-column justify-content-center text-center mt-5'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <span>
                                        <b>Repeat Guest Curly Cut: $125</b>
                                    </span>
                                    <small>
                                        This service is for guests who have had an appointment in the last six months. This service includes
                                        a consultation, a curly cut, wash and style, and styling tips
                                    </small>
                                </div>
                            </div>
                            <div className='d-flex flex-column justify-content-center text-center mt-5'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <span>
                                        <b>Express Curly Cut: $90</b>
                                    </span>
                                    <small>
                                        This service is for returning guests who only want a curly cut and do not need a wash and style.{' '}
                                        <b>When you arrive to your appointment, your hair must be down and freshly styled. </b>
                                        This service includes a consultation and curly cut. This service <b>does not</b> include a wash and
                                        style
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
