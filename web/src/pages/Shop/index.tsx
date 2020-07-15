import React from 'react';
import './styles.css';
import plantImg from '../../assets/palmParlor.jpg';
import {  FiChevronDown, FiList, 
    FiGrid } from 'react-icons/fi';
import Header from '../../components/Header';

const Shop: React.FC = () => {
 return (
     <div id="page-shop">
 
         <Header/>
         <body>
        <div id="productsMenuBar">

            <button className="productsMenuButton" id="npButton">
             Natural Plants</button>
         <button className="productsMenuButton" id="apbutton">
             Artificial Plants</button>
         <button className="productsMenuButton" id="seedsButton">
             Seeds</button>
         <button className="productsMenuButton" id="acessoriesButton">
             Acessories</button>
         </div>
         <h2>Natural Plants</h2>
         <h3> <span className="tab"/> Natural plants and flowers can bring life 
         to your home environments. They can help to create points of color, not
         to mention that they can scent the places. Here at the Plant Shop, we 
         have flowers in different sizes for you. Some species are great for 
         indoor environments and can survive very well only with indirect light. 
         The most recommended species are the water stick, singon, pleomele, 
         anthurium, aloe vera, peace lily, begonia, zamioculca and stone rose.
         </h3>
         <div id="productsContainer">
             <div id="sortingBar">

                 <div id="sorting">
                 <h4>Sort by</h4>
                 <button>Best selling 
                     <FiChevronDown id="FiChevronDown"/>
                 </button>
                 </div>
                 <div id="viewAs">
                     <h4>View As</h4>
                        <button>
                        <FiList id="viewButton"/>
                        </button>
                        <button>
                        <FiGrid id="viewButton"/>
                        </button> 
                 </div>
             </div>
         <div id="products">
             <li>
             <img src={plantImg} alt="PalmParlor"/>
             <h5>$ 8,99</h5>
             <h6>Palor Palm - 4" Pot</h6>
             </li>
             <li>
             <img src={plantImg} alt="PalmParlor"/>
             <h5>$ 8,99</h5>
             <h6>Palor Palm - 4" Pot</h6>
             </li><li>
             <img src={plantImg} alt="PalmParlor"/>
             <h5>$ 8,99</h5>
             <h6>Palor Palm - 4" Pot</h6>
             </li><li>
             <img src={plantImg} alt="PalmParlor"/>
             <h5>$ 8,99</h5>
             <h6>Palor Palm - 4" Pot</h6>
             </li><li>
             <img src={plantImg} alt="PalmParlor"/>
             <h5>$ 8,99</h5>
             <h6>Palor Palm - 4" Pot</h6>
             </li>
         </div>
         </div>
         </body>
         <footer>
         </footer>
     </div>
 );
};

export default Shop;