import { useMemo } from 'react';
import { DivImage } from './div-image';

export function PreviousWork() {
    const smallSize = useMemo(() => '15rem', []);

    return (
        <div className='mb-5' style={{ width: '75%', margin: 'auto' }}>
            <h3 className='text-center mb-4' style={{ marginTop: '6rem' }}>
                Previous Work
            </h3>
            <div className='d-flex justify-content-around'>
                <div>
                    <DivImage height='31.5rem' width='25rem' img='/images/back-of-head.png' smallClass='big-previous saturation' />
                </div>
                <div className='d-flex flex-column'>
                    <DivImage height={smallSize} width={smallSize} img='/images/wide-curls.png' smallClass='small-previous saturation' />
                    <br />
                    <DivImage height={smallSize} width={smallSize} img='/images/frank.png' smallClass='small-previous saturation' />
                </div>
                <div>
                    <DivImage height={smallSize} width={smallSize} img='/images/kinky-bob.png' smallClass='small-previous saturation' />
                    <br />
                    <DivImage height={smallSize} width={smallSize} img='/images/ford.png' smallClass='small-previous saturation' />
                </div>
                <div>
                    <DivImage height={smallSize} width={smallSize} img='/images/caramel.png' smallClass='small-previous saturation' />
                    <br />
                    <DivImage height={smallSize} width={smallSize} img='/images/fro.png' smallClass='small-previous saturation' />
                </div>
            </div>
        </div>
    );
}
