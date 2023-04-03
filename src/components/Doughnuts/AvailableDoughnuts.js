import { useEffect, useState } from 'react';

import DoughnutItem from './DoughnutItem/DoughnutItem';
import classes from './AvailableDoughnuts.module.css';

const AvailableDoughnuts = () => {
    const [doughnuts, setDoughnuts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://doughnuts-project-default-rtdb.europe-west1.firebasedatabase.app/doughnuts.json');

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    image: responseData[key].image,
                    price: responseData[key].price
                })
            }
            setDoughnuts(loadedMeals);
            setIsLoading(false);
        };


        fetchMeals().catch(error => {
            setIsLoading(false)
            setHttpError(error.message)
        })

        fetchMeals();
    }, []);

    if (isLoading) {
        return <section className={classes.DoughnutsLoading}><p>Loading...</p></section>
    }

    if (httpError) {
        return <section className={classes.DoughnutsError}><p>{httpError}</p></section>
    }

    const doughnutslist = doughnuts.map(doughnut => <li><DoughnutItem
        id={doughnut.id} key={doughnut.id} name={doughnut.name} image={doughnut.image} price={doughnut.price} /></li>);



    return (
        <section className={classes.doughnuts}>
            <ul>
                {doughnutslist}
            </ul>
        </section>
    )
}

export default AvailableDoughnuts;