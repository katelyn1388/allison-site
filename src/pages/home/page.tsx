import { useCallback } from 'react';
import { Certificates } from '../../components/certificates';
import { PreviousWork } from '../../components/previous-work';
import { Services } from '../../components/services';
import { AppLayout } from '../layout';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

export default function Page() {
    const scrollToSelection = useCallback((selection: string) => {
        // eslint-disable-next-line no-restricted-globals
        location.href = `services#${selection}`;
    }, []);

    return (
        <AppLayout title='Home'>
            <div className='mt-5 flex-column d-flex align-items-center px-0'>
                <div
                    style={{
                        height: '70rem',
                        width: '95%',
                        backgroundColor: 'var(--highlight-box)',
                        backgroundImage: 'linear-gradient(to bottom, var(--bs-body-bg) 15%, rgba(0,0,0,0) 15%)',
                    }}
                    className='home-box'
                >
                    <Services scrollToView={scrollToSelection} />
                    <AuthenticatedTemplate>
                        <Certificates />
                    </AuthenticatedTemplate>
                    <UnauthenticatedTemplate>
                        <div>LOGIN</div>
                    </UnauthenticatedTemplate>
                </div>
                <div
                    style={{
                        height: '45rem',
                        width: '100%',
                        backgroundColor: 'var(--bs-body-bg)',
                        backgroundImage:
                            'linear-gradient(to right, var(--secondary-highlight-box) 2.5%, rgba(0,0,0,0) 2.5%, rgba(0,0,0,0) 97.5%, var(--secondary-highlight-box) 97.5%)',
                    }}
                >
                    <PreviousWork />
                </div>
            </div>
        </AppLayout>
    );
}
