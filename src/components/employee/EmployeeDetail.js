import React, { useState, useEffect, useContext } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"


export const EmployeeDetail = (props) => {
    const { animalsArray, getAnimals } = useContext(AnimalContext)
    const { locationsArray, getLocations } = useContext(LocationContext)
    const { employeesArray, getEmployees } = useContext(EmployeeContext)

    const [animal, setAnimal] = useState({})
    const [employee, setEmployee] = useState({})
    const [location, setLocation] = useState({})

    useEffect(() => {
        getEmployees()
            .then(getAnimals)
            .then(getLocations)
    }, [])

    useEffect(() => {
        const animal = animalsArray.find(a => a.id === employee.animalId) || {}
        setAnimal(animal)
    }, [animalsArray])

    useEffect(() => {
        const employee = employeesArray.find(e => e.id === parseInt(props.match.params.employeeId)) || {}
        setEmployee(employee)
    }, [employeesArray])

    useEffect(() => {
        const location = locationsArray.find(l => l.id === employee.locationId) || {}
        setLocation(location)
    }, [locationsArray])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div>Currently working at { location.name }</div>
            <div>
                {
                (employee.animalId === null)
                    ? "Not assigned to an animal"
                    : `Currently taking care of ${animal.name}`
                }
            </div>
        </section>
    )
}