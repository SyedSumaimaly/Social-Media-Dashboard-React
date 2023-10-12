import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import './Pichart.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

function PieChart() {
    const data = {
        labels: [
            "Followers",
            "Non-Followers"
        ],
        datasets: [
            {
                label: "",
                data: [700, 20],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",

                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",

                ],
                borderWidth: 1.5,
            },
        ],
    };
    return (

        <div className='pirchartdiv py-2 px-2'>
            <Pie data={data} />
        </div>

    )
}

export default PieChart