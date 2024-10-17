import { Services } from '../../components/services';
import { AppLayout } from '../layout';
import { Haircutting } from './haircutting';

export default function Page() {
    return (
        <AppLayout title='Services'>
            <Services />
            <Haircutting />
        </AppLayout>
    );
}
