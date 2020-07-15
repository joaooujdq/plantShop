import React from 'react';
import './styles.css';
import logo from '../../assets/plant.svg';
import { FiSearch, FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <h1>PLANT SHOP</h1>
            <div id="gridSearchBar">
                <div id="reference">
                    <img src={logo} alt="Logo" />
                    <h3 >
                        Icons made by <a id='link' target="_blank"
                            href="http://www.flaticon.com/" title="Flaticon">Flaticon
            </a> from <a id='link' target="_blank"
                            href="https://www.flaticon.com/" title="Flaticon">
                            www.flaticon.com</a>
                    </h3 >
                </div >

                <div>
                    <section id="searchBar">
                    <input type="text" />
                        <Link to="/" id="searchButton">
                            <span>
                                <FiSearch id="fiSearch" />
                            </span>
                        </Link>

                    </section>
                    


                        <section id="barButtons">
                        <Link to="/" id="userButtons">
                            <FiShoppingCart id="userIcons" />
                        </Link>
                        <Link to="/" id="userButtons">
                            <FiHeart id="userIcons" />
                        </Link>
                        <Link to="/login" id="userButtons">
                            <FiUser id="userIcons" />
                        </Link>
                    </section>

                </div>


            </div>
        </header>
    )
}

export default Header;

