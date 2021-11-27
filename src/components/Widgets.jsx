import React from "react";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import faker from 'faker';

import {
    RadialLinearScale,

    Filler
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

import {
    CategoryScale,
    Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export  let WidgetGridBox = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row">

            <div>
                <Scatter className="h-5 w-5" options={{
                    scales: {
                    y: {
                    beginAtZero: true,
                },
                },
                }} data={{
                    datasets: [
                {
                    label: 'RAM Usage vs Time',
                    data: Array.from({ length: 100 }, () => ({
                    x: faker.datatype.number({ min: 0, max: 2048 }),
                    y: faker.datatype.number({ min: 0, max: 2000 }),
                })),
                    backgroundColor: 'rgba(255, 99, 132, 1)',
                },
                    ],
                }} />;
            </div>
            <div>
                <Radar className="h-5 w-5" data={{
                    labels: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6'],
                    datasets: [
                        {
                            label: '# of Users',
                            data: [5, 9, 4, 5, 7, 3],
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                        },
                    ],
                }} />
            </div>
            <div>
                <Line options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Network Requests over Time',
                        },
                    },
                }} data={{
                    labels,
                    datasets: [
                        {
                            label: 'Upload',
                            data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                            label: 'Download',
                            data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                    ],
                }} />
            </div>
        </div>

    )
}