import React from 'react';
import bookImg from '/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full'>
            <div>
                <h1>consectetur adipisicing elit.<br/> Placeat animi iure tempora laboriosam fugit consectetur quas provident est quaerat dolor.</h1>
                <button className='btn btn-primary'>test test</button>
            </div>
            <div>
                <img src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;