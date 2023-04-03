import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import classes from './AboutUs.module.css';



const AboutUs = () => {
    const categories = [
        { url: 'https://cdn.shopify.com/s/files/1/0423/3432/2845/products/1_a667f841-1fa7-4bce-a7cc-24f6662979ca_1080x.jpg?v=1674836980' },
        { url: 'https://cdn.shopify.com/s/files/1/0423/3432/2845/products/1_0e146608-ae01-46fc-83ce-b2bcbbac804c_1080x.png?v=1652794851' },
        { url: 'https://cdn.shopify.com/s/files/1/0423/3432/2845/products/1_f813b1ae-ce9e-43b0-ad5a-9037cff6caf6_1080x.jpg?v=1663841549' }

    ]

    const slides = [
        { url: 'https://cdn.shopify.com/s/files/1/0423/3432/2845/files/valentines_desktop_banner_4_2808x.png?v=1674843895' },
        { url: 'https://cdn.shopify.com/s/files/1/0423/3432/2845/files/valentines_desktop_banner_5_3024x.png?v=1674845590' },
        { url: 'https://cdn.shopify.com/s/files/1/0423/3432/2845/files/valentines_desktop_banner_6_3024x.png?v=1674845585' },
        { url: 'https://cdn.shopify.com/s/files/1/0423/3432/2845/files/valentines_desktop_banner_8_2160x.png?v=1674847651' },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (<><div className={classes.main}>
        <div className={classes.slides}>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className={classes.slide}></div>
            <div className={classes.btnLeft}>
                <BsChevronCompactLeft onClick={prevSlide} />
            </div>
            <div className={classes.btnRight}>
                <BsChevronCompactRight onClick={nextSlide} />
            </div>
            <div className={classes.dots}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={classes.dot}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>

        <div className={classes.title}>
            <h1>DELIVERED NEXT DAY, 6 DAYS A WEEK & NATIONWIDE</h1>
            <p>Order before 2pm and get it tomorrow</p>
        </div>
        <div className={classes.why}>
            <div className={classes.oneCategory}>
                <div style={{ backgroundImage: `url(${categories[0].url})`}} className={classes.whyTypes}>
                    <Link to={'/doughnuts'} ><button>SHOP NOW</button></Link>
                    <div className={classes.oneCategoryContent}>
                        <h1>CHOOSE YOUR FAVORITE</h1>
                        <p>ALL</p>
                    </div>
                </div>
            </div>
            <div className={classes.oneCategory}>
                <div style={{ backgroundImage: `url(${categories[1].url})` }} className={classes.whyTypes}>
                <Link to={'/doughnuts/baked'} ><button>SHOP NOW</button></Link>
                    <div className={classes.oneCategoryContent}>
                        <h1>GLUTEN FREE GOODNESS</h1>
                        <p>BAKED</p>
                    </div>

                </div>
            </div>
            <div className={classes.oneCategory}>
                <div style={{ backgroundImage: `url(${categories[2].url})` }} className={classes.whyTypes}>
                <Link to={'/doughnuts/vegan'} ><button>SHOP NOW</button></Link>
                    <div className={classes.oneCategoryContent}>
                        <h1>DOUGHNUTS FOR EVERYONE</h1>
                        <p>VEGAN</p>
                    </div>
                </div>
            </div>


        </div>
        <div className={classes.title}>
            <h1>WHY CHOOSE DOUGHNUT TIME?</h1>
            <div className={classes.why}>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0423/3432/2845/files/dora-blue_180x.png?v=1632825829" />
                    <h3>NATIONWIDE DELIVERY</h3>
                    <p>If you're a last-minute gifter, we've got you covered with next-day delivery, anywhere in the UK.</p>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0423/3432/2845/files/nav-doughnuts-blue_180x.png?v=1632825829" />
                    <h3>CAREFULLY PACKAGED</h3>
                    <p>We make your doughnuts fresh every day and package them in our Doughnut Time postal boxes.</p>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0423/3432/2845/files/academy-blue_180x.png?v=1632825829" />
                    <h3>MADE BY HAND</h3>
                    <p>Try our one-of-a-kind doughnuts, hand made with the freshest and finest ingredients.</p>
                </div>

            </div>
        </div>

    </div>
    </>)
}

export default AboutUs;