import React from 'react';
import { Link } from 'react-router-dom'

function NotFound() {

    return (
        <section className="notFoundContainer">
            <div>
                <div className="linkContainer">
                    <h1>Lost? Visit Home</h1>
                    <Link to="/" >Here</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound