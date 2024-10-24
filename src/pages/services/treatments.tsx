import { DivImage } from '../../components/div-image';
import { UseMobileView } from '../../hooks/use-mobile-view';

export function Treatments() {
    const { mobileView } = UseMobileView();

    return (
        <div>
            {mobileView ? (
                <div className='mt-3 mx-4 mw-100'>
                    <div className='treatments-section w-100 mt-4 text-center'>
                        <h2 className='mb-2'>Treatments</h2>
                        <div className='d-flex justify-content-around w-100'>
                            <div
                                style={{
                                    height: '10rem',
                                    width: '40%',
                                    backgroundColor: 'var(--extra-dark)',
                                    backgroundImage:
                                        'linear-gradient(to bottom, var(--highlight-box) 15%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 75%, var(--highlight-box) 75%)',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    display: 'flex',
                                }}
                            >
                                <DivImage height='14rem' width='14rem' img='images/grey-hair.png' smallClass='treatment-image' />
                            </div>
                            <div
                                style={{
                                    height: '10rem',
                                    width: '40%',
                                    backgroundColor: 'var(--extra-dark)',
                                    backgroundImage:
                                        'linear-gradient(to bottom, var(--highlight-box) 15%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 75%, var(--highlight-box) 75%)',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    display: 'flex',
                                }}
                            >
                                <DivImage height='14rem' width='14rem' img='images/wide-curls.png' smallClass='treatment-image' />
                            </div>
                        </div>
                        <div className='d-flex justify-content-around w-100 d-flex align-items-end'>
                            <div className='d-flex flex-column flex-wrap mt-5 justify-content-center w-100'>
                                <div className='text-center mw-100 mb-5'>
                                    <div className='text-center mt-1 mb-5'>
                                        <span>
                                            Ultimate Treatment: This treatment helps to replenish essential protein, minerals, and moisture
                                            to the hair. Additives are used to customize the service for what your hair specifically needs
                                        </span>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <span>Ultimate Treatment: $26</span>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <span>Emergency Service: $42</span>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <span>
                                            Emergency Service: This service restores the hair's integrity by improving strength, smoothness,
                                            and shine. This service also repairs damage caused by harsh chemicals, environmental aggressors
                                            (pollution, wind, etc), UV/Infrared rays, mechanical stress, and heat/thermal trauma
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='treatments-section mw-100 mx-5 mt-5 text-center'>
                    <h2 className='mb-2'>Treatments</h2>
                    <div className='d-flex justify-content-around'>
                        <div
                            style={{
                                height: '18rem',
                                width: '25%',
                                backgroundColor: 'var(--extra-dark)',
                                backgroundImage:
                                    'linear-gradient(to bottom, var(--highlight-box) 15%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 75%, var(--highlight-box) 75%)',
                                justifyContent: 'center',
                                alignContent: 'center',
                                display: 'flex',
                            }}
                        >
                            <DivImage height='14rem' width='14rem' img='images/grey-hair.png' smallClass='treatment-image' />
                        </div>
                        <div
                            style={{
                                height: '18rem',
                                width: '25%',
                                backgroundColor: 'var(--extra-dark)',
                                backgroundImage:
                                    'linear-gradient(to bottom, var(--highlight-box) 15%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 75%, var(--highlight-box) 75%)',
                                justifyContent: 'center',
                                alignContent: 'center',
                                display: 'flex',
                            }}
                        >
                            <DivImage height='14rem' width='14rem' img='images/wide-curls.png' smallClass='treatment-image' />
                        </div>
                    </div>
                    <div className='d-flex justify-content-around w-100 d-flex align-items-end'>
                        <div className='d-flex flex-column  flex-wrap mt-2 justify-content-center w-50 me-4'>
                            <div className='text-center mw-100 mb-5'>
                                <div className='text-center mt-1 mb-5'>
                                    <span>
                                        Ultimate Treatment: This treatment helps to replenish essential protein, minerals, and moisture to
                                        the hair. Additives are used to customize the service for what your hair specifically needs
                                    </span>
                                </div>
                                <div className='text-center mt-2'>
                                    <span>Ultimate Treatment: $26</span>
                                </div>
                                <div className='text-center mt-2'>
                                    <span>Emergency Service: $42</span>
                                </div>
                                <div className='text-center mt-5'>
                                    <span>
                                        Emergency Service: This service restores the hair's integrity by improving strength, smoothness, and
                                        shine. This service also repairs damage caused by harsh chemicals, environmental aggressors
                                        (pollution, wind, etc), UV/Infrared rays, mechanical stress, and heat/thermal trauma
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
