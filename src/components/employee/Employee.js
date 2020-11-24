import React from "react"
import "./Employee.css"

export const Employee = ({employeeObj}) => (
    <section className="employee">
        <h3 className="employee__name">{employeeObj.name}</h3>
        <div className="employee__job">{employeeObj.locationId}</div>
    </section>
)