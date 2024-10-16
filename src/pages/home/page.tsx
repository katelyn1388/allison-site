import { Services } from '../../components/services';
import { AppLayout } from '../layout';

export default function Page() {
    return (
        <AppLayout title='Home'>
            <div>
                <Services />
            </div>
        </AppLayout>
    );
}
