import { useEffect } from 'react';
import { UseMobileView } from '../hooks/use-mobile-view';

export function Services({ scrollToView }: { scrollToView: (selection: string) => void }) {
    const { mobileView } = UseMobileView();

    useEffect(() => {
        console.log('Location: ', window.location.hash);
        let hash = window.location.hash.slice(1);

        console.log('Selection:', hash);
        if (hash) {
            scrollToView(hash);
        }
    }, [scrollToView, window.location]);

    return (
        <div>
            <div className={`d-flex justify-content-around services mt-3 ${mobileView && 'w-100 ms-0'}`}>
                <div onClick={() => scrollToView('haircutting')} className='clickable-image'>
                    <Service imgUrl='/images/tattooist.png' text='Haircutting' />
                </div>
                <div onClick={() => scrollToView('color')}>
                    <Service imgUrl='/images/color.png' text='Color' />
                </div>
                <div onClick={() => scrollToView('treatments')}>
                    <Service imgUrl='/images/grey-hair.png' text='Treatments' />
                </div>
                <div onClick={() => scrollToView('styling')}>
                    <Service imgUrl='/images/ginger.png' text='Styling' />
                </div>
            </div>
        </div>
    );
}

function Service({ imgUrl, text }: { imgUrl: string; text: string }) {
    return (
        <div
            style={{
                backgroundImage: `url(${imgUrl})`,
            }}
            className='d-flex align-items-end service'
        >
            <div className='w-100 text-center service-text'>{text}</div>
        </div>
    );
}
