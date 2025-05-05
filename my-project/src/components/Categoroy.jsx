import React from 'react';
import { NavLink } from 'react-router-dom';

const Categoroy = ({category}) => {

    console.log(category)

    return (
        <div>
            <NavLink  to={`/category/${category.category}`} key={category.category}><button className='btn'>{category.category}</button></NavLink>
        </div>
    );
};

export default Categoroy;