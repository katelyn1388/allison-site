import { AppLayout } from '../layout';
import { UseMobileView } from '../../hooks/use-mobile-view';

// type ProductDetails = {
//     title: string;
//     price: number;
//     image: string | null;
// };

// type Products = {
//     shark: ProductDetails;
// };

// const Selectors = {
//     title: 'span#productTitle',
//     price: 'span#a-price > a-offscreen',
//     image: '#imgTagWrapperId img',
// } as const;

export default function Page() {
    const { mobileView } = UseMobileView();

    return (
        <AppLayout title='Recommendations'>
            <div className='mt-5 flex-column d-flex align-items-center px-0'>
                <div
                    style={{
                        height: '70rem',
                        width: '95%',
                        backgroundColor: 'var(--highlight-box)',
                        backgroundImage: 'linear-gradient(to bottom, var(--bs-body-bg) 15%, rgba(0,0,0,0) 15%)',
                    }}
                    className='home-box'
                >
                    <div>
                        <h2 className='mb-5 ms-2'>Poopy Butt's Recommendations</h2>
                        <hr
                            style={{
                                border: '0',
                                height: '1px',
                                backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), white, rgba(0, 0, 0, 0))',
                                display: 'flex',
                                alignSelf: 'center',
                            }}
                        />
                        <div className={`${mobileView && 'flex-wrap text-center'}  d-flex justify-content-between mx-2 mb-5`}>
                            <div className={`${mobileView ? 'mx-3  mb-5' : 'mx-5 w-50'}`}>
                                <h4 className='mb-2'>How to Arrive</h4>
                                <p>
                                    Please wear your hair down and freshly styled in your natural curl pattern. Please come to your
                                    appointment with no styling products in your hair
                                </p>
                                <p>
                                    Do not straighten your hair, put your hair up, or come with your hair tangled. If you do, there will be
                                    an additional $30 charge
                                </p>
                            </div>
                            <div className={`${mobileView ? 'mx-3  mb-0' : 'mx-5 w-50'}`}>
                                <h4 className='mb-2'>Your First Appointment</h4>
                                <p>
                                    First, we will go over your current styling routine and the look you’re wanting to achieve. After that,
                                    I will give you my professional recommendations for your hair
                                </p>
                                <p>
                                    A treatment is highly recommended with your first service. We will go to the treatment center and you
                                    will receive a detox to remove any impurities and product build-up. After your detox, you will be given
                                    a treatment specialized for your specific hair needs
                                </p>
                                <p>
                                    Once your treatment is complete, I will teach you how to properly style your hair and give you my
                                    professional product recommendations
                                </p>
                            </div>
                        </div>
                        <hr
                            className='w-75 mt-3 m-auto'
                            style={{
                                border: '0',
                                height: '1px',
                                backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), white, rgba(0, 0, 0, 0))',
                                display: 'flex',
                                alignSelf: 'center',
                            }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        height: 'fit-content',
                        width: '100%',
                        padding: '2rem',
                        backgroundColor: 'var(--bs-body-bg)',
                        backgroundImage:
                            'linear-gradient(to right, var(--secondary-highlight-box) 2.5%, rgba(0,0,0,0) 2.5%, rgba(0,0,0,0) 97.5%, var(--secondary-highlight-box) 97.5%)',
                    }}
                >
                    <div className={`m-auto ${!mobileView && 'mx-5'}`}>
                        <h2 className='text-center mt-1'>Products</h2>
                        <div>
                            <h4>Styling Tools</h4>
                            <div className='d-flex flex-wrap mt-2'>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className='custom-link'
                                    href='https://www.amazon.com/dp/B0BBSFTJG5?linkCode=ssc&tag=onamzall00246-20&creativeASIN=B0BBSFTJG5&asc_item-id=amzn1.ideas.3PIMSMFEDCUQC&ref_=cm_sw_r_cp_mwn_aipsfshop_0HNZKJP3RSNY02TFWYMT_1_asin&th=1'
                                >
                                    <div className='d-flex flex-column justify-content-center text-center product'>
                                        <img
                                            className='product-img'
                                            src='https://m.media-amazon.com/images/I/71FgwK2QNQL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
                                            alt='Shark Blow-dryer'
                                        />
                                        <small>Shark FlexStyle Air Styling & Drying</small>
                                    </div>
                                </a>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className='custom-link'
                                    href='https://www.amazon.com/dp/B077H5G7ZB?linkCode=ssc&tag=onamzall00246-20&creativeASIN=B077H5G7ZB&asc_item-id=amzn1.ideas.3PIMSMFEDCUQC&ref_=cm_sw_r_cp_mwn_aipsfshop_0HNZKJP3RSNY02TFWYMT_1_asin'
                                >
                                    <div className='d-flex flex-column justify-content-center text-center product'>
                                        <img
                                            className='product-img'
                                            src='https://m.media-amazon.com/images/I/41hCRQ5b1HL._SX300_SY300_QL70_FMwebp_.jpg'
                                            alt='Curl Brush'
                                            height='200rem'
                                            width='160rem'
                                        />
                                        <small>Curl Keeper Flexy Hair Brush</small>
                                    </div>
                                </a>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className='custom-link'
                                    href='https://www.amazon.com/dp/B07QDW51C9?linkCode=ssc&tag=onamzall00246-20&creativeASIN=B07QDW51C9&asc_item-id=amzn1.ideas.3PIMSMFEDCUQC&ref_=cm_sw_r_cp_mwn_aipsfshop_0HNZKJP3RSNY02TFWYMT_1_asin'
                                >
                                    <div className='d-flex flex-column justify-content-center text-center product'>
                                        <img
                                            className='product-img'
                                            src='https://m.media-amazon.com/images/I/61WN-SjDInL._SX466_.jpg'
                                            alt='Curl Brush'
                                            height='200rem'
                                            width='160rem'
                                        />
                                        <small>Detangler Brush</small>
                                    </div>
                                </a>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className='custom-link'
                                    href='https://www.amazon.com/dp/B07QDW51C9?linkCode=ssc&tag=onamzall00246-20&creativeASIN=B07QDW51C9&asc_item-id=amzn1.ideas.3PIMSMFEDCUQC&ref_=cm_sw_r_cp_mwn_aipsfshop_0HNZKJP3RSNY02TFWYMT_1_asin'
                                >
                                    <div className='d-flex flex-column justify-content-center text-center product'>
                                        <img
                                            className='product-img'
                                            src='https://m.media-amazon.com/images/I/61UcMukSxML._SX466_.jpg'
                                            alt='Tangle Teezer'
                                            height='200rem'
                                            width='160rem'
                                        />
                                        <small>Tangle Teezer</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h4>Healthy Hair and Curl Refresh</h4>
                            <div className='d-flex flex-wrap mt-2'>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className='custom-link'
                                    href='https://www.amazon.com/dp/B0BQQQM595?linkCode=ssc&tag=onamzall00246-20&creativeASIN=B0BQQQM595&asc_item-id=amzn1.ideas.1FFXD4P615UYV&ref_=cm_sw_r_cp_mwn_aipsfshop_0HNZKJP3RSNY02TFWYMT_1_asin'
                                >
                                    <div className='d-flex flex-column justify-content-center text-center product'>
                                        <img
                                            className='product-img'
                                            src='https://m.media-amazon.com/images/I/61JVACnQ9HL._AC_SX679_.jpg'
                                            alt='Steamer'
                                            height='200rem'
                                            width='160rem'
                                        />
                                        <small>Nano Ionic Face Steamer</small>
                                    </div>
                                </a>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className='custom-link'
                                    href='https://www.amazon.com/dp/B09LM2GCLL?linkCode=ssc&tag=onamzall00246-20&creativeASIN=B09LM2GCLL&asc_item-id=amzn1.ideas.1FFXD4P615UYV&ref_=cm_sw_r_cp_mwn_aipsfshop_0HNZKJP3RSNY02TFWYMT_1_asin'
                                >
                                    <div className='d-flex flex-column justify-content-center text-center product'>
                                        <img
                                            className='product-img'
                                            src='https://m.media-amazon.com/images/I/71vqGu288pL._SX466_.jpg'
                                            alt='Silk Bonnet'
                                            height='200rem'
                                            width='160rem'
                                        />
                                        <small>Silk Bonnet</small>
                                    </div>
                                </a>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className='custom-link'
                                    href='https://www.amazon.com/dp/B0BMB6D9RD?linkCode=ssc&tag=onamzall00246-20&creativeASIN=B0BMB6D9RD&asc_item-id=amzn1.ideas.9EQR2B3X4NG&ref_=cm_sw_r_cp_mwn_aipsfshop_0HNZKJP3RSNY02TFWYMT_1_asin'
                                >
                                    <div className='d-flex flex-column justify-content-center text-center product'>
                                        <img
                                            className='product-img center'
                                            src='https://m.media-amazon.com/images/I/51CnxY3XOdL._AC_SX679_.jpg'
                                            alt='Shower head filter'
                                            height='200rem'
                                            width='160rem'
                                        />
                                        <small>The Jolie Filtered Showerhead</small>
                                    </div>
                                </a>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className='custom-link'
                                    href='https://www.amazon.com/dp/B08YD16S98?linkCode=ssc&tag=onamzall00246-20&creativeASIN=B08YD16S98&asc_item-id=amzn1.ideas.9EQR2B3X4NG&ref_=cm_sw_r_cp_mwn_aipsfshop_0HNZKJP3RSNY02TFWYMT_1_asin'
                                >
                                    <div className='d-flex flex-column justify-content-center text-center product'>
                                        <img
                                            className='product-img'
                                            src='https://m.media-amazon.com/images/I/71HLO93DnlL._SX466_.jpg'
                                            alt='Scrunch'
                                            height='200rem'
                                            width='160rem'
                                        />
                                        <small>Jumbo Hair Scrunchies 6-Pack</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
