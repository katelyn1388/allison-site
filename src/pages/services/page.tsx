import { useCallback } from 'react';
import { Services } from '../../components/services';
import { AppLayout } from '../layout';
import { Color } from './color';
import { Haircutting } from './haircutting';
import { Styling } from './styling';
import { Treatments } from './treatments';

export default function Page() {
    const scrollToSelection = useCallback((selection: string) => {
        var element = document.getElementById(selection);
        element?.scrollIntoView({ behavior: 'auto', block: 'center' });
    }, []);

    return (
        <AppLayout title='Services'>
            <div className='mt-5 flex-column d-flex align-items-center px-0'>
                <div
                    style={{
                        height: '50rem',
                        width: '95%',
                        backgroundColor: 'var(--highlight-box)',
                        backgroundImage: 'linear-gradient(to bottom, var(--bs-body-bg) 20%, rgba(0,0,0,0) 20%)',
                    }}
                    className='haircutting-box'
                >
                    <Services scrollToView={scrollToSelection} />
                    <div id='haircutting'>
                        <Haircutting />
                    </div>
                </div>
                <div
                    style={{
                        height: '45rem',
                        width: '100%',
                        backgroundColor: 'var(--bs-body-bg)',
                        backgroundImage:
                            'linear-gradient(to right, var(--secondary-highlight-box) 2.5%, rgba(0,0,0,0) 2.5%, rgba(0,0,0,0) 97.5%, var(--secondary-highlight-box) 97.5%)',
                    }}
                    className='color-box'
                    id='color'
                >
                    <Color />
                </div>
                <div
                    style={{
                        height: '42rem',
                        width: '95%',
                        backgroundColor: 'var(--highlight-box)',
                    }}
                    className='treatments-box'
                    id='treatments'
                >
                    <Treatments />
                </div>
                <div
                    style={{
                        height: 'fit-content',
                        width: '100%',
                        backgroundColor: 'var(--bs-body-bg)',
                        backgroundImage:
                            'linear-gradient(to right, var(--secondary-highlight-box) 2.5%, rgba(0,0,0,0) 2.5%, rgba(0,0,0,0) 97.5%, var(--secondary-highlight-box) 97.5%)',
                    }}
                    className='styling-box'
                    id='styling'
                >
                    <Styling />
                </div>
            </div>
        </AppLayout>
    );
}
