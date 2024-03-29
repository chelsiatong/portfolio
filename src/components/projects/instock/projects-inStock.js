import React, { Component } from 'react';
import './inStock.scss';
import warehouse from '../../../assets/images/warehouse.png'
import warehouseAdd from '../../../assets/images/warehouse-add.png'
import warehouseEdit from '../../../assets/images/warehouse-edit.png'
import inventory from '../../../assets/images/inventory.png'
import inventoryAdd from '../../../assets/images/inventory-add.png'
import inventoryEdit from '../../../assets/images/inventory-edit.png'
import { Link } from 'react-router-dom';


class projectsInStock extends Component {
    render() {
        return (
            <div className="inStock" >
                <h1 className="inStock__title">InStock</h1>
                <h2 className="inStock__title--project">Industry Project</h2>
                <div className="inStock__section" >
                    <div>
                        <h3 className="inStock__title--role">Role</h3>
                        <p className="inStock__info">Full-Stack Web Developer</p>
                        <h3 className="inStock__title--role">Duration</h3>
                        <p className="inStock__info">July 2022</p>
                    </div>
                    <div><
                        h3 className="inStock__title--role">Location</h3>
                        <p className="inStock__info">Remote | Toronto, ON</p>
                        <h3 className="inStock__title--role">Team</h3>
                        <p className="inStock__info"><span>4</span> Web Developers</p>
                    </div>
                </div>

                <div className="inStock__container">
                    <h2 className="inStock__container--intro">summary</h2>
                    <p className="inStock__container--intro--description"><span>InStock</span> is a fully responsive full-stack web application delivering an Inventory Management System for a Fortune 500 client. This application is new and improved, built from the ground up from a previous existing system that is not scalable and doesn't perform well under a heavy traffic load. My team and I created a time-sensitive, full-stack application with a modern front-end communicating with a robust Express back-end.</p>
                </div>
                <div className="inStock__images">
                    <div>
                        <img className="inStock__images--warehouse" src={warehouse} alt="warehouse homepage"></img>
                        <img className="inStock__images--warehouse" src={warehouseAdd} alt="warehouse add"></img>
                        <img className="inStock__images--warehouse" src={warehouseEdit} alt="warehouse edit"></img>
                    </div>
                    <div>
                        <img className="inStock__images--inventory" src={inventory} alt="inventory homepage"></img>
                        <img className="inStock__images--inventory" src={inventoryAdd} alt="inventory add"></img>
                        <img className="inStock__images--inventory" src={inventoryEdit} alt="inventory edit"></img>
                    </div>
                </div>
                <div className="inStock__features">
                    <h2 className="inStock__features--title">special features</h2>
                    <ul className="inStock__features--list">
                        <li>&#x2713; Full-Stack Application</li>
                        <li>&#x2713; Fully Responsive Web Design</li>
                        <li>&#x2713; Agile Team</li>
                        <li>&#x2713; Scrum Leader</li>
                        <li>&#x2713; Jira and Scrum Methodology</li>
                        <li>&#x2713; ReactJS, SASS JS, Node, Express, and Thunder Client</li>
                    </ul>
                </div>
                <Link to="/projects">
                    <button className="inStock__back">&#x276E; return to projects</button>
                </Link>
            </div>
        );
    }
}

export default projectsInStock;