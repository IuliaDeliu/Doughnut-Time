import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import DetailsDoughnut from "../components/DetailsDoughnut/DetailsDoughnut";
import PickedDoughnut from '../components/DetailsDoughnut/PickedDoughnut';
import Modal from '../components/UI/Modal';
import classes from '../components/DetailsDoughnut/PickedDoughnut.module.css'

function DoughnutDetailPage() {
    const [isCheckout, setIsCheckout] = useState(false);
    const params = useParams();
    const idp = params.productId;

    const [doughnuts, setDoughnuts] = useState([]);

    useEffect(() => {
        const fetchDoughnuts = async () => {
            const response = await fetch(`https://doughnuts-project-default-rtdb.europe-west1.firebasedatabase.app/doughnuts.json`);

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const responseData = await response.json();

            const loadedDoughnuts = [];

            for (const key in responseData) {
                if (key === idp) {
                    loadedDoughnuts.push({
                        id: key,
                        name: responseData[key].name,
                        image: responseData[key].image,
                        price: responseData[key].price,
                        description: responseData[key].description,
                        contains: responseData[key].contains,
                        ingredientes: responseData[key].ingredientes
                    })
                }
            }
            setDoughnuts(loadedDoughnuts);
        }
        fetchDoughnuts()
    }, []);

    const [doughnut, setDoughnut] = useState([]);

    useEffect(() => {
        const fetchDoughnut = async () => {
            const response = await fetch(`https://doughnuts-project-default-rtdb.europe-west1.firebasedatabase.app/doughnuts/${idp}/ingredients.json`);

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const responseData = await response.json();

            const loadedDoughnut = [];

            for (const key in responseData) {
                loadedDoughnut.push({
                    id: key,
                    title: responseData[key].n1,
                    contain: responseData[key].c1,
                })
            }
            setDoughnut(loadedDoughnut);
        }
        fetchDoughnut()
    }, []);

    const doughnutslist = doughnuts.map(doughnut =>
        <div><DetailsDoughnut
            id={doughnut.id} key={doughnut.id} name={doughnut.name} image={doughnut.image} price={doughnut.price} description={doughnut.description} contains={doughnut.contains} /></div>);

    const ingredients = doughnut.map(doughnut =>
        <div><PickedDoughnut
            id={doughnut.id} key={doughnut.id} title={doughnut.title} contain={doughnut.contain} /></div>);

    const orderHandler = () => {
        setIsCheckout(true);
    };

    return (<React.Fragment>
        <Modal>
            {doughnutslist}
            {!isCheckout && <button onClick={orderHandler}>Show</button>}
            {isCheckout && <div className={classes.main}>{ingredients}</div>}
        </Modal>
    </React.Fragment>)
}

export default DoughnutDetailPage;


