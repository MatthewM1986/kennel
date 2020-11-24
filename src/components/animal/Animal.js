import React from "react"
import "./Animal.css"

export const Animal = ({animalObj}) => (
    <section className="animal">
        <h3 className="animal__name">{animalObj.name}</h3>
        <div className="animal__breed">{animalObj.breed}</div>
    </section>
)