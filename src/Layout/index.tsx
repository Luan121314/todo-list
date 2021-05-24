import React from 'react';
import NavBar from '../components/NavBar';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
};

export default Layout;
