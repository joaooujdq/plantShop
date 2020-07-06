import React from 'react';
import './styles.css';
import plant from '../../assets/plant.svg';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Shop: React.FC = () => {
 return (
     <div id="page-shop">
         <div className="content"> 
         <header>
            <h1>PLANT SHOP</h1>
            <div id="gridSearchBar">
            <div id="reference">
               <img src={plant} alt="Logo"/>
            <div >
            Icons made by <a href="https://www.flaticon.com/free-icon/green-tea_1087420" 
            title="dDara">dDara</a> from 
            <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </div>
            </div>
            
            
            <input type="text"/>
            <Link to="../page-home">
            <span>
                <FiSearch/>
            </span>
            </Link>
            </div>
            
            
         </header>
         <body>
         
         </body>
         </div>
     </div>
 );
};

export default Shop;