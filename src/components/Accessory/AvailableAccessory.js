import { useEffect, useState } from 'react';

import AccessoryItem from './AccessoryItem/AccessoryItem';
import classes from './AvailableAccessory.module.css';

const AvailableAccessory = () => {
    const [doughnuts, setDoughnuts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchDoughnuts = async () => {
            const response = await fetch('https://doughnuts-project-default-rtdb.europe-west1.firebasedatabase.app/accessory.json');

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const responseData = await response.json();

            const loadedDoughnuts = [];

            for (const key in responseData) {
                loadedDoughnuts.push({
                    id: key,
                    name: responseData[key].name,
                    image: responseData[key].image,
                    price: responseData[key].price
                })
            }

            setDoughnuts(loadedDoughnuts);
            setIsLoading(false);
        }


        fetchDoughnuts().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });


    }, []);

    if (isLoading) {
        return <section className={classes.DoughnutsLoading}><p>Loading...</p></section>
    }

    if (httpError) {
        return <section className={classes.DoughnutsError}><p>{httpError}</p></section>
    }

    const doughnutslist = doughnuts.map(doughnut => <li><AccessoryItem
        id={doughnut.id} key={doughnut.id} name={doughnut.name} image={doughnut.image} price={doughnut.price} /></li>);



    return (
        <section className={classes.doughnuts}>
            <ul>
                {doughnutslist}
            </ul>
        </section>
    )
}

export default AvailableAccessory;