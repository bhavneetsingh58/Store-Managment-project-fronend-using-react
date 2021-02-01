import React from 'react'
import AddUser from '../components/CustomComponents/AddManufacturer'
import UserData from '../components/CustomComponents/ManufacturerData'
function AdminDashboard() {
    return (
        <div className="content">
            <AddUser></AddUser>
            <UserData></UserData>
        </div>
    )
}

export default AdminDashboard
