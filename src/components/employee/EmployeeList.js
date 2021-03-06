import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Link } from "react-router-dom"
import "./Employee.css"

export const EmployeeList = (props) => {
    // This state changes when `getLocations()` is invoked below
    const { employeesArray, getEmployees } = useContext(EmployeeContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        //console.log("LocationList: Initial render before data")
        getEmployees()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    //useEffect(() => {
    // console.log("LocationList: Location state changed")
    // console.log(locations)
    //}, [employeesArray])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
        </button>
            <article className="employeeList">
                {
                    employeesArray.map(employeeTaco => {
                        return <Link key={employeeTaco.id} to={ `/employees/${employeeTaco.id}`} >
            <h3>{employeeTaco.name}</h3>
                        </Link>
                    })
        }
        </article>
        </div >
    )
}