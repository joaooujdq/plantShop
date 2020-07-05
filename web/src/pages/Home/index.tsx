import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home: React.FC = () => {
    return (
        <div id="home-page">
            <div className="content"> 
            <header>
            <Link to="/shop">
            <strong>SHOP PAGE</strong>
          </Link>
            </header>
            <body>
                
            </body>
            </div>
        </div>
    );
   };
   
   export default Home;