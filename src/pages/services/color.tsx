import { DivImage } from '../../components/div-image';
import { UseMobileView } from '../../hooks/use-mobile-view';

export function Color() {
    const { mobileView } = UseMobileView();

    return (
        <div>
            {mobileView ? (
                <div className='mt-4 mw-100 mx-4 text-center'>
                    <h2 className='mb-2'>Color</h2>
                    <div className='color-section w-100'>
                        <div className='d-flex justify-content-around w-100 d-flex align-items-center mx-0'>
                            <div>
                                <DivImage height='7rem' width='7rem' img='/images/caramel.png' smallClass='color-image ms-0' />
                                {/* <DivImage height='18rem' width='18rem' img='/images/caramel.png' smallClass='service-image ms-0' /> */}
                            </div>
                            <div className='d-flex flex-column flex-wrap mt-2 justify-content-center w-50 me-4'>
                                <div className='text-center mw-100'>
                                    <div className='text-center mt-2'>
                                        <span>Full Foil: $145 and up</span>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <span>Partial Foil: $117 and up</span>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <span>Color: $87 and up</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <DivImage height='7rem' width='7rem' img='/images/kinky-bob.png' smallClass='color-image ms-0' />
                                {/* <DivImage height='18rem' width='18rem' img='/images/kinky-bob.png' smallClass='service-image ms-0' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='mt-3 mx-5 mw-100 text-center d-flex justify-content-center flex-column'>
                    <h2 className='mb-2'>Color</h2>
                    <div className='d-flex justify-content-around  d-flex align-items-end color-section mx-5  mt-3'>
                        <div>
                            <DivImage height='25rem' width='25rem' img='/images/caramel.png' smallClass='color-image' />
                        </div>
                        <div className='d-flex flex-column flex-wrap mt-5 justify-content-center w-50 me-4'>
                            <div className='text-center mw-100 mb-5'>
                                <div className='text-center mt-2'>
                                    <span className='fs-6'>Full Foil: $145 and up</span>
                                </div>
                                <div className='text-center mt-2'>
                                    <span className='fs-6'>Partial Foil: $117 and up</span>
                                </div>
                                <div className='text-center mt-2'>
                                    <span className='fs-6'>Color: $87 and up</span>
                                </div>
                            </div>
                            <div className='d-flex justify-content-around mx-5 mt-4 mw-100'>
                                <DivImage height='12rem' width='12rem' img='/images/kinky-bob.png' smallClass='small-color mx-2' />
                                <DivImage height='12rem' width='12rem' img='/images/fall-vibes.png' smallClass='small-color mx-2' />
                            </div>
                        </div>
                        <div>
                            <DivImage height='25rem' width='25rem' img='/images/color.png' smallClass='color-image' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
