import React from 'react';
import Card from '../../Card/Card';
import { HomeNewItem } from '../../../Data';

const HomeNewItems = () => {
    return (
        <div className='p-12 pt-10 text-center space-y-2'>
            <h5 className='text-red-500 text-sm tracking-widest'>WE GET</h5>
            <h1 className='font-bold text-3xl'>NEW ITEMS</h1>
            <div className='lg:flex flex-wrap justify-center gap-14'>
                {
                    HomeNewItem.map((ele, index) => (
                        <Card key={index} HomeNewItemData={ele} />
                    ))
                }
            </div>
        </div>
    );
};

export default HomeNewItems;
