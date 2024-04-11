import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Header = () => {
return (
<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom header">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">ABC Company</span>
    </a>
</header>
);
}

export default Header;