import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"

export const AnimalList = (props) => {
    // This state changes when `getLocations()` is invoked below
    const { animalsArray, getAnimals } = useContext(AnimalContext)
    const { locationsArray, getLocations } = useContext(LocationContext)
    const { customersArray, getCustomers } = useContext(CustomerContext)
    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        //console.log("AnimalList: Initial render before data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    //useEffect(() => {
        // console.log("AnimalList: Location state changed")
        // console.log(animals)
    //}, [animalsArray])

    return (
        <div className="animals">
                    <h1>Animals</h1>
    <button onClick={() => props.history.push("/animals/create")}>
        Add Animal
    </button>
    <article className="animalList"></article>
        {
            animalsArray.map(animalTaco => {
                const clinic = locationsArray.find(l => l.id === animalTaco.locationId)
                const owner = customersArray.find(c => c.id === animalTaco.customerId)
            
            return <Animal key={animalTaco.id} animalObj={animalTaco} customerObj={owner} locationObj={clinic} />
        })
    }
        </div>
    )
}