export function Services() {
    return (
        <div>
            <h4 className='text-center mb-4'>Services</h4>
            <div className='d-flex justify-content-around services'>
                <Service imgUrl='/images/tattooist.png' text='Haircutting' />
                <Service imgUrl='/images/color.png' text='Color' />
                <Service imgUrl='/images/grey-hair.png' text='Treatments' />
                <Service imgUrl='/images/ginger.png' text='Styling' />
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
