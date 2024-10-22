import { DivImage } from '../../components/div-image';
import { UseMobileView } from '../../hooks/use-mobile-view';

export function Color() {
    const { mobileView } = UseMobileView();

    return (
        <div>
            {mobileView ? (
                <div className='mt-4 mw-100 mx-5 text-center'>
                    <h2 className='mb-4 ms-1'>Color</h2>

                    <div className='color-section w-100'>
                        <div className='d-flex justify-content-around w-100 d-flex align-items-center'>
                            <div>
                                <DivImage height='18rem' width='18rem' img='/images/caramel.png' smallClass='service-image ms-0' />
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
                                {/* <div className='d-flex justify-content-center mt-2 mw-75'>
                                    <DivImage height='12rem' width='7rem' img='/images/kinky-bob.png' smallClass='small-color me-1' />
                                    <DivImage height='12rem' width='7rem' img='/images/fall-vibes.png' smallClass='small-color' />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='mt-3 mx-5 mw-100 text-center'>
                    <h2 className='mb-4 ms-1'>Color</h2>

                    <div className='color-section w-100 mx-5 w-100 mt-5'>
                        <div className='d-flex justify-content-around w-100 d-flex align-items-end'>
                            <div>
                                <DivImage height='28rem' width='28rem' img='/images/caramel.png' smallClass='service-image' />
                            </div>
                            <div className='d-flex flex-column ms-2 flex-wrap mt-5 justify-content-center w-50 me-4'>
                                <div className='text-center mw-100 mb-5'>
                                    <div className='text-center mt-2'>
                                        <span>
                                            <b>Full Foil: $145 and up</b>
                                        </span>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <span>
                                            <b>Partial Foil: $117 and up</b>
                                        </span>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <span>
                                            <b>Color: $87 and up</b>
                                        </span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around mx-5 mt-4 mw-100'>
                                    <DivImage height='12rem' width='12rem' img='/images/kinky-bob.png' smallClass='small-color mx-2' />
                                    <DivImage height='12rem' width='12rem' img='/images/fall-vibes.png' smallClass='small-color mx-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
