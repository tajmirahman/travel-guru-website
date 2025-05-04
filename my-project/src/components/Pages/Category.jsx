import React from 'react';
import { NavLink } from 'react-router-dom';


const Category = ({category}) => {
    console.log(category);

 

    return (
        <div className=''>

            <div className='my-6'>
                {
                    <NavLink to={`/category/${category.categoryId}`}><button className='btn mx-auto'>{category.categoryName}</button></NavLink>
                   
                }
            </div>
        </div>
    );
};

export default Category;