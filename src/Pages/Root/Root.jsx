import React from 'react';
import NabVar from '../../Components/Header/NabVar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Header/Footer/Footer';

const Root = () => {
    return (
        <div>
            <NabVar></NabVar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;