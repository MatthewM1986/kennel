import React from "react"
import "./Kennel.css"
import "./animal/Animal.css"
import "./customer/Customer.css"
import "./employee/Employee.css"
import "./location/Location.css"
import { Animal } from "./animal/Animal"
import { Customer } from "./customer/Customer"
import { Employee } from "./employee/Employee"
import { Location } from "./location/Location"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>

        <h2>Loccations</h2>
        <article className="locations">
            <Location />
            <Location />
            <Location />
        </article>
    </>
)