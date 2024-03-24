import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Nav } from './Layout.styled';

const Layout = () => {
    return (
        <Container>
            <Header>
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/favorites">Favorites</Link>
                </Nav>
            </Header>
            <Suspense loading={<div>Loading...</div>} >
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default Layout;