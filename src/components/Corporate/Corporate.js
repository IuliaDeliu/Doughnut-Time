import { NavLink } from 'react-router-dom'

import classes from './Corporate.module.css'

const Corporate = () => {
    return (<div className={classes.main}>
        <div className={classes.modul}>
            <img src="https://cdn.shopify.com/s/files/1/0423/3432/2845/files/catering_900x.jpg?v=1634558031" />
            <div className={classes.content}>
                <h2>CATERING FOR ANY EVENT!</h2>
                <p>Doughnuts for weddings, parties, product launches, corporate gifting, Zoom meetings - the lot! Bespoke and branded DIY Doughnut Decorating Kits! 6-Packs delivered to doors around the country! Doughnuts from our instore menu with your logo on them! Design your own or collab with one of our chief doughnut designers to bring your dream Doughnut Time experience to life. From coloured glazes, to toppings and even edible name badges or images! We have options to suit every need, from individually boxed doughnuts, to fully loaded doughnut trays for cake stands, grazing tables or your doughnut wall. Do it with doughnuts!</p>
                <div className={classes.button}><NavLink to='../contact'>CONTACT US</NavLink></div>
            </div>
        </div>
        <div className={classes.modul}>
            <div className={classes.content}>
                <h2>CUSTOM CREATIONS</h2>
                <p>This is where you bring your dream doughnut design to life. Choose from an endless selection of glaze colours, doughnut fillings, colourful toppings & more! This option is perfect for when you know exactly what you want - simply drop us a quick email and we'll make magic happen! Minimum order 100 doughnuts</p>
                <div className={classes.button}><NavLink to='../contact'>CONTACT US</NavLink></div>
            </div>
            <img src='https://cdn.shopify.com/s/files/1/0423/3432/2845/files/92A8800_WEB_720x_bf0ff117-1814-41f0-9781-c76cabda2f90_900x.jpg?v=1634557737' />
        </div>

        <div className={classes.modul}>
            <img src="https://cdn.shopify.com/s/files/1/0423/3432/2845/files/bespoke_ab0b6462-3a57-4c7e-81f2-aee06777c814_900x.jpg?v=1634557822" />
            <div className={classes.content}>
                <h2>BESPOKE</h2>
                <p>Have an intricate bespoke doughnut creation in mind? Need some expert help in bringing it to life? The Bespoke Orders are for you! We can personalise our classic doughnuts, our DIY Kits and our 6-Pack Nationwide Deliveries! Pop us a message and we'll help you come up with the best, most creative designs - specifically for you and your special occasion! Minimum order 100</p>
                <div className={classes.button}><NavLink to='../contact'>CONTACT US</NavLink></div>
            </div>
        </div>
        <div className={classes.modul}>
            <div className={classes.content}>
                <h2>WEDDINGS</h2>
                <p>When we think Weddings - we think doughnuts. Vast doughnut towers stacked to the sky, multiple-tiers of glazey goodness to surprise and delight any wedding guest who thinks they've seen it all. If you're feeling overwhelmed, take a deep breath. Our Doughnut Time team is here to help you commit to a Doughnut Cake creation you'll love for all of eternity. (i.e. until the last of your guests devours it). If legally binding unions aren't your thing, our wild n' wacky wedding creations are also ideal for major birthday moments, (think 30! 40! 50! 60! 70! 80! 90! 100!), Bar and Bat Mitzvahs, Newly-Single celebrations, graduations, retirements and more.
                </p>
                <div className={classes.button}><NavLink to='../contact'>CONTACT US</NavLink></div>
            </div>
            <img src='https://cdn.shopify.com/s/files/1/0423/3432/2845/files/weddings_900x.jpg?v=1634557904' />
        </div>

        <div className={classes.modul}>
            <img src="https://cdn.shopify.com/s/files/1/0423/3432/2845/files/corporate_ebcbb7cb-7659-465e-91ce-84ce4ad12849_900x.jpg?v=1634557956" />
            <div className={classes.content}>
                <h2>CORPORATE</h2>
                <p>We can deliver your corporate treats anywhere in the UK! Want to order in bulk doughnuts to motivate the team, increase productivity and/or blackmail your boss into giving you a pay rise? We gotchu' We only need 24-hours notice to provide you with a large-order of our main menu doughnuts. Whether it's 24 or 500 - we can have these delivered directly to your office or you can collect from your nearest Doughnut Time store!</p>
                <div className={classes.button}><NavLink to='../contact'>CONTACT US</NavLink></div>
            </div>
        </div>
    </div>)
}

export default Corporate;