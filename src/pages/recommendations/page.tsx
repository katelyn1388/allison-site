import { AppLayout } from '../layout';
import SharkPic from '../../assets/shark-product.jpg';
import BlackDetanglerPic from '../../assets/black-detangler-product.jpg';
import BrushPic from '../../assets/curl-brush-product.jpg';
import { UseMobileView } from '../../hooks/use-mobile-view';
import { CheerioAPI } from 'cheerio';
import { CheerioCrawler, CheerioCrawlingContext } from 'crawlee';
import { useMemo } from 'react';

type ProductDetails = {
    title: string;
    price: number;
    image: string | null;
};

const Selectors = {
    title: 'span#productTitle',
    price: 'span#a-price > a-offscreen',
    image: '#imgTagWrapperId img',
} as const;

export default function Page() {
    const { mobileView } = UseMobileView();

    return (
        <AppLayout title='Recommendations'>
            <div className='d-flex flex-column mx-4 mt-5'>
                <div className='d-flex justify-content-center mx-2'>
                    {mobileView ? (
                        <div>
                            <h2>Allison's Recommendations</h2>
                            <hr />
                            <div className=' mx-2 mb-5'>
                                <div className='mx-5'>
                                    <h4 className='mb-2'>How to Arrive</h4>
                                    <p>
                                        Please wear your hair down and freshly styled in your natural curl pattern. Please come to your
                                        appointment with no styling products in your hair
                                    </p>
                                    <p>
                                        Do not straighten your hair, put your hair up, or come with your hair tangled. If you do, there will
                                        be an additional $30 charge
                                    </p>
                                </div>
                                <div className='mx-5 mt-5'>
                                    <h4 className='mb-2'>Your First Appointment</h4>
                                    <p>
                                        First, we will go over your current styling routine and the look you’re wanting to achieve. After
                                        that, I will give you my professional recommendations for your hair
                                    </p>
                                    <p>
                                        A treatment is highly recommended with your first service. We will go to the treatment center and
                                        you will receive a detox to remove any impurities and product build-up. After your detox, you will
                                        be given a treatment specialized for your specific hair needs
                                    </p>
                                    <p>
                                        One your treatment is complete, I will teach you how to properly style your hair and give you my
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
                    ) : (
                        <div>
                            <h2>Allison's Recommendations</h2>
                            <hr />
                            <div className='d-flex justify-content-between mx-2 mb-5'>
                                <div className='mx-5 w-50'>
                                    <h4 className='mb-2'>How to Arrive</h4>
                                    <p>
                                        Please wear your hair down and freshly styled in your natural curl pattern. Please come to your
                                        appointment with no styling products in your hair
                                    </p>
                                    <p>
                                        Do not straighten your hair, put your hair up, or come with your hair tangled. If you do, there will
                                        be an additional $30 charge
                                    </p>
                                </div>
                                <div className='mx-5 w-50'>
                                    <h4 className='mb-2'>Your First Appointment</h4>
                                    <p>
                                        First, we will go over your current styling routine and the look you’re wanting to achieve. After
                                        that, I will give you my professional recommendations for your hair
                                    </p>
                                    <p>
                                        A treatment is highly recommended with your first service. We will go to the treatment center and
                                        you will receive a detox to remove any impurities and product build-up. After your detox, you will
                                        be given a treatment specialized for your specific hair needs
                                    </p>
                                    <p>
                                        One your treatment is complete, I will teach you how to properly style your hair and give you my
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
                    )}
                </div>
                <div className='d-flex flex-column justify-content-center mx-5 mt-3 products'>
                    <h3 className='text-center'>Products</h3>
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
                                    <img className='product-img' src={SharkPic} alt='Shark Blow-dryer' height='200rem' width='160rem' />
                                    <small>Shark HD435 FlexStyle Air Styling & Drying System</small>
                                </div>
                            </a>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                className='custom-link'
                                href='https://www.amazon.com/dp/B077H5G7ZB?linkCode=ssc&tag=onamzall00246-20&creativeASIN=B077H5G7ZB&asc_item-id=amzn1.ideas.3PIMSMFEDCUQC&ref_=cm_sw_r_cp_mwn_aipsfshop_0HNZKJP3RSNY02TFWYMT_1_asin'
                            >
                                <div className='d-flex flex-column justify-content-center text-center product'>
                                    <img className='product-img' src={BrushPic} alt='Curl Brush' height='200rem' width='160rem' />
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
        </AppLayout>
    );
}

// export function getSiteInfo({url}: {url: string}) {
//     const requestHandler = async(context: CheerioCrawlingContext) => {
//         const { $, request } = context;
//         const { url } = request;

//         const extractedProduct = extractProductDetails($)

//         crawler.pushData(extractedProduct)
//     }

//     const crawler = new CheerioCrawler({ requestHandler })
//     const results = await crawler.run([url]);

//     return results;
// }

// export const extractProductDetails = ($: CheerioAPI): ProductDetails => {
//     const title = $(Selectors.title).text().trim();
//     const price = Number(
//         $(Selectors.price)
//             .first()
//             .text()
//             .replace(/[^\d.]+/g, '')
//     );

//     const image = $(Selectors.image).attr('src') || null;

//     return { title, price, image };
// };
