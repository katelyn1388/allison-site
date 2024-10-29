import { useEffect, useState } from 'react';
import { AppLayout } from '../layout';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

export default function Page() {
    const [data, setData] = useState('');

    useEffect(() => {
        (async function () {
            const { text } = await (await fetch('/api/message')).json();
            setData(text);
        })();
    }, []);

    return (
        <AppLayout title='Admin'>
            <AuthenticatedTemplate>
                <h1 className='text-center mt-4'>Hey, admin</h1>
                {data}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <h1 className='text-center mt-4'>Who let you in here?</h1>
            </UnauthenticatedTemplate>
        </AppLayout>
    );
}
