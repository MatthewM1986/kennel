import React, { useState } from "react"
import "./Location.css"


    export const LocationDetail = (props) => {
         console.log ("hello there",props)
        return (
            <section className="location">
                <h2 className="location__name">{props.location.state.chosenLocation.name}</h2>
                <address className="location__address">{props.location.state.chosenLocation.address}</address>
                <div>
                    <h4>Employees</h4>
                    {
                    //This maps through the json data and not the employees array
                    props.location.state.chosenLocation.employees.map(e => e.name).join(", ")
                    }
                </div>
                <div>
                    <h4>Current Residents</h4>
                    {
                        //This maps through the json data and not the animals array
                        props.location.state.chosenLocation.animals.map(a => a.name).join(", ")
                    }
                </div>
            </section>
        )
    }

