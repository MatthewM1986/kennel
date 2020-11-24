import React from "react"
import "./Customer.css"

export const Customer = ({customerObj}) => (
    <section className="customer">
        <h3 className="customer__name">{customerObj.name}</h3>
        <div className="customer__address">{customerObj.address}</div>
    </section>
)