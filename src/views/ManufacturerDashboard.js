import React from 'react'
import AddUser from '../components/CustomComponents/AddDealer'
import UserData from '../components/CustomComponents/UserData'
function ManufacturerDashboard() {
    return (
        <div className="content">
            <AddUser></AddUser>
            <UserData></UserData>
        </div>
    )
}

export default ManufacturerDashboard
