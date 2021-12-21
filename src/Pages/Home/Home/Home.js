import React from 'react'
import Navigation from '../../Shared/Navigation/Navigation'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import Services from '../Services/Services'

export default function Home() {
    return (
        <div>
            <Navigation/>
            <Services/>
            <AppointmentBanner></AppointmentBanner>
        </div>
    )
}
