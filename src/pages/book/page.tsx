import { AppLayout } from '../layout';

export default function Page() {
    return (
        <AppLayout title='Book Appointment'>
            <div className='text-center mt-5'>
                <h1>YOU WISH!</h1>
                <h2>I am WAY too busy for the likes of you</h2>
            </div>
            <iframe
                src='https://docs.google.com/forms/d/e/1FAIpQLScCOHILbys5FUiXaDiQt4vA--EyNA7nOi-83Vc8n4KKjNuOmA/viewform?embedded=true'
                width='100%'
                height='1300'
                frame-border='0'
                margin-height='0'
                margin-width='0'
                title='booking form'
            >
                Loading…
            </iframe>
        </AppLayout>
    );
}
