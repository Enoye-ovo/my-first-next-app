import React from 'react';
import Link from 'next/link';

const Test = () => {
    const getSome = () => {
        const a = 1;
        console.log(a);
    };
    return (
        <div>
            <>
                <h1>Product List</h1>
                <h2>Product 1</h2>
                <h2>Product 2</h2>
                <h2>Product 3</h2>
            </>
        </div>
    );
};

export default Test;
