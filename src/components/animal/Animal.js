import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const Animal = ({ animalObj, customerObj, locationObj }) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/${animalObj.id}`}>
                {animalObj.name}
            </Link>
        </h3>
        <div className="animal__breed">{animalObj.breed}</div>
        {/* <div className="animal__location">{locationObj.name}</div>
        <div className="animal__owner">{customerObj.name}</div> */}
    </section>
)