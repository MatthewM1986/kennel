import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
    // This state changes when `getLocations()` is invoked below
    const { animalsArray, getAnimals } = useContext(AnimalContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        //console.log("LocationList: Initial render before data")
        getAnimals()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    //useEffect(() => {
        // console.log("LocationList: Location state changed")
        // console.log(locations)
    //}, [animalsArray])

    return (
        <div className="animals">
        {
            animalsArray.map(animalTaco => <Animal key={animalTaco.id} animalObj={animalTaco} />)
        }
        </div>
    )
}