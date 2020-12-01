import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <EmployeeProvider>
                    <AnimalProvider>
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route exact path="/">
                            <LocationList />
                        </Route>

                        <Route path="/locations/:locationId(\d+)" render={ (props) => <LocationDetail {...props} />
                        } />
                    </AnimalProvider>
                </EmployeeProvider>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        {/* Render the animal list when http://localhost:3000/animals */}
                        <Route exact path="/animals" render={
                            props => {
                                return < AnimalList {...props} />
                            }
                        } />

                        <Route exact path="/animals/create" render={
                            props => <AnimalForm {...props} />
                        } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the customer list when http://localhost:3000/customers */}
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <AnimalProvider>
                    <LocationProvider>
                        {/* Render the employee list when http://localhost:3000/employees */}
                        <Route exact path="/employees" render={
                            props => {
                                return < EmployeeList {...props} />
                            }
                        } />

                        <Route exact path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />

                        <Route path="/employees/:employeeId(\d+)" render={
                            props => <EmployeeDetail {...props} />
                        } />
                    </LocationProvider>
                </AnimalProvider>
            </EmployeeProvider>
        </>
    )
}