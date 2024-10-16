import { PropsWithChildren } from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer';
import { HeroImage } from '../components/hero-image';

export function AppLayout({ children, title }: PropsWithChildren<{ title: string }>) {
    return (
        <div className='page-root'>
            <div className='d-flex'>
                <div className={`flex-fill w-100 main-content`}>
                    <Header title={title} />
                    <HeroImage title={title} />
                    <div className='content'>{children}</div>
                    <Footer title={title} />
                </div>
            </div>
        </div>
    );
}
