import React from 'react'
import './Barchart.css'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);


function BarChart() {
    const data = {
        labels: ["April", "May", "June", "July", "Aug", "Sep"],
        datasets: [
            {
                label: "No. of visits",
                data: [300, 100, 800, 1000, 900, 920,],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 2,
            },
        ],
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <>
        <div className='ProHead'>
          
        </div>
        <div className='barchartdiv py-2 px-2'>
            <Bar height={300} width={500} options={options} data={data} />
        </div>
        </>
    )
}

export default BarChart