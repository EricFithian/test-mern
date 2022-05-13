import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='nav'>
            <Link to='/'>
                <div>People App</div>
            </Link>
        </nav>
    )
}

export default Header