import React from 'react'
import Navigation from '../Shared/Navigation/Navigation'
import AppointmentHeader from './AppointmentHeader/AppointmentHeader'
import AvailableAppointment from './AvailableAppointment'

export default function Appointment() {
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader></AppointmentHeader>
            <AvailableAppointment></AvailableAppointment>
        </div>
    )
}
