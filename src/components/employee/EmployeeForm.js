import React, { useContext, useRef, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../customer/AnimalProvider"

export const EmployeeForm = (props) => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locationsArray, getLocations } = useContext(LocationContext)
    const { animalsArray, getAnimals } = useContext(AnimalContext)

   
        // Create references that can be attached to the input
        // fields in the form. This will allow you to get the
        // value of the input fields later when the user clicks
        // the save button.

        // No more `document.querySelector()` in React.
    


        // useRef(null) returns an object that has a current property set to the value of the argument i.e., {current: null}
    const name = useRef(null)
    const location = useRef(null)
    const animal = useRef(null)

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
       getAnimals().then(getLocations)
    }, [])

    const constructNewEmployee = () => {
        /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const locationId = parseInt(locationsArray.current.value)
        const animalId = parseInt(animalsArray.current.value)
        const employeeName = name.current.value

        if (locationId === 0 || animalId === 0 || employeeName ==="") {
            window.alert("Please select all options and provide a name")
        } else {
            addEmployee({
                name: name.current.value,
                locationId,
                animalId
            })
            .then(() => props.history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Caretaker for: </label>
                    <select defaultValue="" name="animal" ref={animal} id="employeeAnimal" className="form-control" >
                        <option value="0">Select an animal</option>
                        {animals.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form and creating a new page
                    constructNewEmployee()
                }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}