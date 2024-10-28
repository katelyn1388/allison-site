import { AppLayout } from '../layout';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

export default function Page() {
    return (
        <AppLayout title='Admin'>
            <AuthenticatedTemplate>
                <h1 className='text-center mt-4'>Hey, admin</h1>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <h1 className='text-center mt-4'>Who let you in here?</h1>
            </UnauthenticatedTemplate>
        </AppLayout>
    );
}
