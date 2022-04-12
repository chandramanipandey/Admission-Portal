import React from "react"
import { Card } from "react-bootstrap"

export function AdminDashboardPage() {
    return (
        <div>
            {/* <div style={{ width: '300px', height: '180px', border: "1px solid black", borderRadius: "20px"}}></div> */}
            <Card body style={{ width: '18rem' }}>Total Students</Card>
            <Card body style={{ width: '18rem' }}>Student Fees</Card>
            <Card body style={{ width: '18rem' }}>Fees Tracking</Card>
        </div>
    )
}

export function StudentDashboardPage() {
    return (
        <div>
            <Card body style={{ width: '18rem' }}>Register Yourself</Card>
            <Card body style={{ width: '18rem' }}>Fees Corner</Card>
            <Card body style={{ width: '18rem' }}>My Profile</Card>
        </div>
    )
}