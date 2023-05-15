import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AdminSelectedItemCard from '../AdminSelectedItemCard/AdminSelectedItemCard';

const Home = () => {

    const loaderData = useLoaderData();
    const [coffees, setCoffees] = useState(loaderData)

    return (
        <div>
            <h1 className='text-center text-3xl mt-5'>Selected Coffee</h1>
            <div className='grid md:grid-cols-2 gap-10 p-10'>
                {
                    coffees.map(data => <AdminSelectedItemCard 
                        key={data._id}
                        data = {data}
                        coffees = {coffees}
                        setCoffees = {setCoffees}
                        ></AdminSelectedItemCard>)
                }
            </div>
        </div>
    );
};

export default Home;