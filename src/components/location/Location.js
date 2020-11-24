import React from "react"
import "./Location.css"

export const Location = ({locationObj}) => (
    <section className="location">
        <h3 className="location__name">{locationObj.name}</h3>
        <div className="location__address">{locationObj.address}</div>
    </section>
)