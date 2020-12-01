import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationList = (props) => {
    // This state changes when `getLocations()` is invoked below
    const { locationsArray, getLocations } = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        //console.log("LocationList: Initial render before data")
        getLocations()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    //useEffect(() => {
    // console.log("LocationList: Location state changed")
    // console.log(locations)
    //}, [locationsArray])

    return (
        <div className="locations">
            <h1>Locations</h1>
            <button onClick={() => props.history.push("/locations/create")}>
                Add Location
    </button>
            <article className="locationList">
                {
                    locationsArray.map(locationTaco => {
                        return <Link key={locationTaco.id} to={`/locations/${locationTaco.id}`} >
                            <h3>{locationTaco.name}</h3>
                        </Link>
                    })
                }
            </article>
        </div>
    )
}