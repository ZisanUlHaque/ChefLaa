import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
    <Link to="/">
      <div className="flex items-center">
        <img src='https://img.icons8.com/?size=96&id=TPyMDKVYbCQo&format=png' alt="" className="h-13 w-13" />
        <h2 className="text-3xl font-bold text-black mb-3">
          Chef<span className="text-primary">laa</span>
        </h2>
      </div>
    </Link>
    );
};

export default Logo;
