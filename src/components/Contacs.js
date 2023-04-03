import classes from './Contacts.module.css'

const Contacts = () => {
    return (<><div className={classes.main}><div>
        <h2>LET'S TALK DOUGHNUTS!</h2>
        <p>Connect with our team using one of the emails below.</p>
    </div>
    <div className={classes.contains}>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0423/3432/2845/files/dora-blue_180x.png?v=1632825829" />
            <h4>GENERAL/ORDERS</h4>
            <p>hello@doughnuttime.com</p>
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0423/3432/2845/files/events-blue_180x.png?v=1632825829" />
            <h4>CATERING/CORPORATE</h4>
            <p>orders@doughnuttime.com</p>
        </div>
        </div>
        <div className={classes.contains}>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0423/3432/2845/files/corporate-blue_180x.png?v=1632825829" />
            <h4>CAREERS</h4>
            <p>jobs@doughnuttime.com</p>
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0423/3432/2845/files/stores-blue_180x.png?v=1632825830" />
            <h4>PR & MEDIA</h4>
            <p>media@doughnuttime.com</p>
        </div>
    </div>
    </div>
    </>)
}

export default Contacts;