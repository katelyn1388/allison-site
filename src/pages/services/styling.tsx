import { DivImage } from '../../components/div-image';
import { UseMobileView } from '../../hooks/use-mobile-view';

export function Styling() {
    const { mobileView } = UseMobileView();

    return (
        <div>
            {mobileView ? (
                <div className='mt-2 mw-100 mx-4 text-center'>
                    <div className='treatments-section w-100 mt-4 text-center'>
                        <h2 className='mb-2'>Styling</h2>
                        <div className='d-flex justify-content-center'>
                            <DivImage height='14rem' width='14rem' img='/images/freckle.png' smallClass='styling-image mx-2' />
                            <DivImage height='14rem' width='14rem' img='/images/ford.png' smallClass='styling-image mx-2' />
                            <DivImage height='14rem' width='14rem' img='/images/fro.png' smallClass='styling-image mx-2' />
                        </div>
                        <div className='d-flex justify-content-around w-100 d-flex align-items-end'>
                            <div className='d-flex flex-column ms-2 flex-wrap mt-2 justify-content-center w-100'>
                                <div className='text-center mw-100 mb-5'>
                                    <div className='text-center mt-2'>
                                        <b>Returning Guest Curly Set: $55</b>
                                    </div>
                                    <div className='text-center mt-3'>
                                        <span>
                                            This service is for <b>returning guests only</b> who need their hair styled for an event or
                                            simply do not want to wash their hair at home. This service includes a consultation and a curly
                                            style
                                        </span>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <b>New Guest Curly Lesson: $75</b>
                                    </div>
                                    <div className='text-center mt-3'>
                                        <span>
                                            This service is for guests who want to learn how to love and take care of their curls.{' '}
                                            <b>This service does not include a curly cut.</b> This service includes an in-depth consultation
                                            on your hair goals, a hair detox treatment, a treatment personalized for your hair, product
                                            recommendations, curly education, and a care sheet to take home
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='treatments-section mw-100 mx-5 mt-5 text-center'>
                    <h2 className='mb-2'>Styling</h2>
                    <div className='d-flex justify-content-center'>
                        <DivImage height='14rem' width='14rem' img='/images/freckle.png' smallClass='treatment-image mx-5' />
                        <DivImage height='14rem' width='14rem' img='/images/ford.png' smallClass='treatment-image mx-5' />
                        <DivImage height='14rem' width='14rem' img='/images/fro.png' smallClass='treatment-image mx-5' />
                    </div>
                    <div className='d-flex justify-content-around w-100 d-flex align-items-end'>
                        <div className='d-flex flex-column ms-2 flex-wrap mt-2 justify-content-center w-50 me-4'>
                            <div className='text-center mw-100 mb-5'>
                                <div className='text-center mt-2'>
                                    <b>Returning Guest Curly Set: $55</b>
                                </div>
                                <div className='text-center mt-3'>
                                    <span>
                                        This service is for <b>returning guests only</b> who need their hair styled for an event or simply
                                        do not want to wash their hair at home. This service includes a consultation and a curly style
                                    </span>
                                </div>
                                <div className='text-center mt-5'>
                                    <b>New Guest Curly Lesson: $75</b>
                                </div>
                                <div className='text-center mt-3'>
                                    <span>
                                        This service is for guests who want to learn how to love and take care of their curls.{' '}
                                        <b>This service does not include a curly cut.</b> This service includes an in-depth consultation on
                                        your hair goals, a hair detox treatment, a treatment personalized for your hair, product
                                        recommendations, curly education, and a care sheet to take home
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
