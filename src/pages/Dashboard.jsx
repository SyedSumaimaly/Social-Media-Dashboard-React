import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Stats from '../components/Stats'
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'
import './Dashboard.css'

function Dashboard() {

    return (
        <>
            <Navbar />
            <Stats />
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h2>Profile Views:</h2>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <BarChart />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h2>Account Reach: </h2>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12  d-flex justify-content-center align-items-center"><PieChart /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard