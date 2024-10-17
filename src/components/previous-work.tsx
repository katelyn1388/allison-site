export function PreviousWork() {
    return (
        <div className='mb-5'>
            <h3 className='text-center mb-4' style={{ marginTop: '6rem' }}>
                Previous Work
            </h3>
            <div className='d-flex justify-content-around'>
                <div>
                    <div
                        style={{
                            height: '500px',
                            width: '400px',
                            backgroundImage: `url('/images/back-of-head.png')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '400px 500px',
                            borderBottomLeftRadius: '5px',
                            borderBottomRightRadius: '5px',
                        }}
                    />
                </div>
                <div className='d-flex flex-column'>
                    <SmallWork img={'/images/wide-curls.png'} />
                    <SmallWork img={'/images/frank.png'} />
                </div>
                <div>
                    <SmallWork img={'/images/kinky-bob.png'} />
                    <SmallWork img={'/images/ford.png'} />
                </div>
                <div>
                    <SmallWork img={'/images/caramel.png'} />
                    <SmallWork img={'/images/fro.png'} />
                </div>
            </div>
        </div>
    );
}

function SmallWork({ img }: { img: string }) {
    return (
        <div
            style={{
                height: '250px',
                width: '250px',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
            }}
        />
    );
}
