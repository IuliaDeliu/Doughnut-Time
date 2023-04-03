import React, { useEffect, useState } from "react";

import DoughnutItem from "../../DoughnutItem/DoughnutItem";
import classes from '../../AvailableDoughnuts.module.css'

const AvailableDoughnutsBaked = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

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
                    price: responseData[key].price,
                    category: responseData[key].category
                })
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };


        fetchMeals().catch(error => {
            setIsLoading(false)
            setHttpError(error.message)
        })

        fetchMeals();
    }, [])

    if (isLoading) {
        return (<section className={classes.DoughnutsLoading}><p>Loading...</p></section>);
    }

    if (httpError) {
        return (<section className={classes.DoughnutsError}><p>{httpError}</p></section>);
    }

    const mealsListVegan = meals.filter(meal => meal.category === "baked")
    const mealsList = mealsListVegan.map(meal =>
        <DoughnutItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            image={meal.image}
            price={meal.price} />
    )



    return (<section className={classes.doughnuts}>

        <ul>
            {mealsList}
        </ul>

    </section>

    )
};

export default AvailableDoughnutsBaked;