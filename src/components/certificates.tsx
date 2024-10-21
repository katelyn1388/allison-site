import { UseMobileView } from '../hooks/use-mobile-view';

export function Certificates() {
    return (
        <div className='text-center mt-5 certificates d-flex flex-column align-items-center'>
            <h3 className='text-center mb-4'>About Allison Luckert</h3>
            <p className='text-center d-flex justify-content-center align-items-center move w-75 mb-5'>
                Allison is a curl specialist located in St Louis, MO. She works at Salon Beautique and is also a manager there. She
                graduated from Paul Mitchell in 2020 and has been working as a hairstylist ever since. She has since become a curly hair
                specialist by taking extra classes in the different curly cut techniques and she even has several certificates
            </p>

            <div className='d-flex justify-content-around flex-wrap'>
                <Certificate
                    imgUrl='/images/rezo.png'
                    text='A Rezo cut is a specialized technique for curly and textured hair that increases volume, defines your curl pattern and 
                    allows you to customize your desired silhouette.'
                    name='Rëzo Certified'
                />
                <Certificate
                    imgUrl='/images/cado.png'
                    text='This certificate gives a better understanding of cutting, 
                styling and coloring textured hair to enhance natural texture'
                    name='Cadō Certified'
                />
            </div>
            <div className='d-flex justify-content-around mt-5 flex-wrap'>
                <Certificate
                    imgUrl='/images/ford.png'
                    text='Cut It Kinky sets the standard for expertise in the art and science of tight curls and natural hair.'
                    name='Cut it Kinky Alumni'
                />
                <Certificate
                    imgUrl='/images/graduation.png'
                    text='Paul Mitchell Schools are renowned for their comprehensive cosmetology course, combining technical skills with creativity and business know-how'
                    name='Paul Mitchell Graduate'
                />
            </div>
        </div>
    );
}

function Certificate({ imgUrl, text, name }: { imgUrl: string; text: string; name: string }) {
    const { mobileView } = UseMobileView();

    return (
        <div className={`${mobileView ? 'w-75 mt-3' : 'w-25'}`}>
            <h5 className='text-center'>{name}</h5>
            <hr />
            <div className='d-flex justify-content-between align-items-center'>
                <div
                    style={{
                        backgroundImage: `url(${imgUrl})`,
                    }}
                    className='d-flex align-items-end service'
                ></div>
                <small className='w-50'>{text}</small>
            </div>
        </div>
    );
}
