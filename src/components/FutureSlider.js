import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../asset/images/slider1.jpg"
import slider2 from "../asset/images/slide2.jpg"
import slider3 from "../asset/images/slide3.jpg"

export default function FutureSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };

    return (
        <div className="max-w-lg mx-auto my-8">
            <Slider {...settings}>
                <div className="p-6 bg-gray-200 rounded-lg md:flex lg:flex">
                    <div>
                        <p className="text-center text-blue-500 tracking-widest">Secure and safe</p>
                        <h3 className="text-3xl font-bold py-2 text-center text-slate-700">Highly secure and safe</h3>
                        <p className="text-slate-700 font-semibold py-2">Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.</p>
                        <p className="text-slate-700 py-2">Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.</p>
                    </div>
                    <div>
                        <img src={slider1} alt="slider1" />
                    </div>
                </div>
                <div className="p-6 bg-gray-200 rounded-lg md:flex lg:flex">
                    <div>
                        <p className="text-center text-blue-500 tracking-widest">Customer focused</p>
                        <h3 className="text-3xl font-bold py-2 text-center text-slate-700">Purpose-built financial services</h3>
                        <p className="text-slate-700 font-semibold py-2">Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system</p>
                        <p className="text-slate-700 py-2">Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.</p>
                    </div>
                    <div>
                        <img src={slider2} alt="slider1" />
                    </div>
                </div>
                <div className="p-6 bg-gray-200 rounded-lg md:flex lg:flex">
                    <div>
                        <p className="text-center text-blue-500 tracking-widest">Agile and adaptable</p>
                        <h3 className="text-3xl font-bold py-2 text-center text-slate-700">Agile and adaptable for growth</h3>
                        <p className="text-slate-700 font-semibold py-2">Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.</p>
                        <p className="text-slate-700 py-2">Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.</p>
                    </div>
                    <div className=" mx-auto text-center">
                        <img className="rounded-md mx-auto" src={slider3} alt="slider1" />
                    </div>
                </div>
                <div className="p-6 bg-gray-200 rounded-lg md:flex lg:flex">
                    <div>
                        <p className="text-center text-blue tracking-widest">Compliance ready</p>
                        <h3 className="text-3xl font-bold py-2 text-center text-slate-700">Manage compliance with ease</h3>
                        <p className="text-slate-700 font-semibold py-2">Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.</p>
                        <p className="text-slate-700 py-2">Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.</p>
                    </div>
                    <div>
                        <img src={slider2} alt="slider1" />
                    </div>
                </div>
            </Slider>
        </div>
    );
}
