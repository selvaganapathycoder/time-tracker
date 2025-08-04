import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: { activity: string; hours: number }[];
}

const TimeChart = ({ data }: Props) => {
    // Prepare chart data
   const chartData = {
        labels: data.map(d => d.activity),
        datasets: [
            {
                label: 'Hours Spent',
                data: data.map(d => d.hours),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <div>
            <Pie data={chartData} />
        </div>
    );
};

export default TimeChart;