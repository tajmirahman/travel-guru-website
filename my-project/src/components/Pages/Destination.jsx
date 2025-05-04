import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Destination = () => {

    const categories = useLoaderData()


    return (
        <div>
            <h1>Explore our hot deals</h1>
            {
              categories && categories.map((category) => <li key={category.categoryId}>{category.categoryName}</li>)
                    
            }
        </div>
    );
};

export default Destination;