import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { LocationContext } from "./LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationList = () => {
    // This state changes when `getLocations()` is invoked below
    const { locationsArray, getLocations } = useContext(LocationContext)
    const { employeesArray, getEmployees } = useContext(EmployeeContext)
    const { animalsArray, getAnimals } = useContext(AnimalContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        // console.log("LocationList: Initial render before data")
        getLocations()
        .then(getEmployees)
        .then(getAnimals)
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    //useEffect(() => {
    // console.log("LocationList: Location state changed")
    // console.log(locations)
    //}, [locationsArray])

    // if (locationsArray.length && employeesArray.length && animalsArray.length) {

        
        return (
            <div className="locations">
            {
                locationsArray.map(location => {
                    location.employees = employeesArray.filter(e => e.locationId === location.id)
                    location.animals = animalsArray.filter(a => a.locationId === location.id)
                    
                    return <article key={`location--${location.id}`} className="card location" style={{ width: `18rem` }}>
                        <section className="card-body">

                            <Link className="card-link"
                                to={{
                                    pathname: `/locations/${location.id}`,
                                    state: { chosenLocation: location }
                                }}>
                                <h2 className="card-title">{location.name}</h2>
                            </Link>
                        </section>
                        <section>
                            {`${location.employees.length} ${location.employees.length === 1 ? "employee" : "employees"}`}
                        </section>
                        <section>
                            {`${location.animals.length} ${location.animals.length === 1 ? "animal" : "animals"}`}
                        </section>
                    </article>
                })
            }
        </div >
    )
// }
//     else {
//         return <div>

//         </div>
    }



//     return (
    //         <div className="locations">
    //             <h1>Locations</h1>
    //             <button onClick={() => props.history.push("/locations/create")}>
//                 Add Location
//     </button>
//             <article className="locationList">
//                 {
//                     locationsArray.map(locationTaco => {
//                         return <Link key={locationTaco.id} to={`/locations/${locationTaco.id}`} >
//                             <h3>{locationTaco.name}</h3>
//                         </Link>
//                     })
//                 }
//             </article>
//         </div>
//     )
// }