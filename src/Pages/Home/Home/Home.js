import React from 'react'
import Navigation from '../../Shared/Navigation/Navigation'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'

export default function Home() {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <Services/>
            <AppointmentBanner></AppointmentBanner>
        </div>
    )
}
