import { Certificates } from '../../components/certificates';
import { PreviousWork } from '../../components/previous-work';
import { Services } from '../../components/services';
import { AppLayout } from '../layout';

export default function Page() {
    return (
        <AppLayout title='Home'>
            <div>
                <Services />
                <Certificates />
                <PreviousWork />
                <div
                    style={{
                        position: 'absolute',
                        top: 650,
                        zIndex: '0 !important',
                        left: '2.9rem',
                        width: '95%',
                        height: '55rem',
                        backgroundColor: 'var(--highlight-box)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 1530,
                        zIndex: '0 !important',
                        left: '0rem',
                        width: '2.5%',
                        height: '42rem',
                        backgroundColor: 'var(--secondary-highlight-box)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 1530,
                        zIndex: '0 !important',
                        right: '0rem',
                        width: '2.5%',
                        height: '42rem',
                        backgroundColor: 'var(--secondary-highlight-box)',
                    }}
                />
            </div>
        </AppLayout>
    );
}
