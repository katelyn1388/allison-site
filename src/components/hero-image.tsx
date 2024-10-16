export function HeroImage({ title }: { title: string }) {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('/images/hero-image.png')`,
                }}
                className='w-100 hero-image'
            >
                <div className='text-center d-flex align-items-center justify-content-center hero-text'>{title}</div>
            </div>
        </div>
    );
}
