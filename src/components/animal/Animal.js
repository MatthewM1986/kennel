import React from "react"
import "./Animal.css"

export const Animal = ({animalObj, customerObj, locationObj}) => (
    <section className="animal">
        <h3 className="animal__name">{animalObj.name}</h3>
        <div className="animal__breed">{animalObj.breed}</div>
        <div className="animal__location">{locationObj.name}</div>
        <div className="animal__owner">{customerObj.name}</div>
    </section>
)