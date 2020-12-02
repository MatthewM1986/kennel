import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
    const { getAnimals, animalsArray, searchTerms } = useContext(AnimalContext)

    /*
       Since you don't need to ALWAYS going to be displaying all animals
    */
    const [filteredAnimals, setFiltered] = useState([])

    // Initialization effect hook -> Go get animal data
    useEffect(() => {
        getAnimals()
    }, [])


    /*
            This effect hook function will run when the following two state changes happen:
                1. The animal state changes. First when it is created, then once you get the animals from the API
                2. When the search terms change, which happens when the user types something in the AnimalSearch component
        */
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching animals
            const subset = animalsArray.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all animals
            setFiltered(animalsArray)
        }
    }, [searchTerms, animalsArray])


    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        return <Animal key={animal.id} animalObj={animal} />
                    })
                }
            </div>
        </>
    )
}


















// import React, { useState, useContext, useEffect } from "react"
// import { AnimalContext } from "./AnimalProvider"
// import { Animal } from "./Animal"
// import "./Animal.css"
// import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"

// export const AnimalList = (history) => {
//     // This state changes when `getLocations()` is invoked below
//     const { animalsArray, getAnimals } = useContext(AnimalContext)
//     const { locationsArray, getLocations } = useContext(LocationContext)
//     const { customersArray, getCustomers } = useContext(CustomerContext)
//     /*
//         What's the effect this is reponding to? Component was
//         "mounted" to the DOM. React renders blank HTML first,
//         then gets the data, then re-renders.
//     */
//     useEffect(() => {
//         //console.log("AnimalList: Initial render before data")
//         getLocations()
//             .then(getCustomers)
//             .then(getAnimals)
//     }, [])

//     /*
//         This effect is solely for learning purposes. The effect
//         it is responding to is that the location state changed.
//     */
//     //useEffect(() => {
//     // console.log("AnimalList: Location state changed")
//     // console.log(animals)
//     //}, [animalsArray])

//     return (
//         <>
//             <h1>Animals</h1>

//             <button onClick={() => history.push("/animals/create")}>
//                 Make Reservation
//         </button>
//             <div className="animals">
//                 {
//                     animalsArray.map(animal => {
//                         const clinic = locationsArray.find(l => l.id === animal.locationId)
//                         const owner = customersArray.find(c => c.id === animal.customerId)

//                         return <Animal key={animal.id} animalObj={animal} customerObj={owner} locationObj={clinic} />
//                     })
//                 }
//             </div>
//         </>
//         //     <div className="animals">
//         //                 <h1>Animals</h1>
//         // <button onClick={() => props.history.push("/animals/create")}>
//         //     Add Animal
//         // </button>
//         // <article className="animalList"></article>
//         //     {
//         //         animalsArray.map(animalTaco => {
//         //             const clinic = locationsArray.find(l => l.id === animalTaco.locationId)
//         //             const owner = customersArray.find(c => c.id === animalTaco.customerId)

//         //         return <Animal key={animalTaco.id} animalObj={animalTaco} customerObj={owner} locationObj={clinic} />
//         //     })
//         // }
//         //     </div>
//     )
// }
