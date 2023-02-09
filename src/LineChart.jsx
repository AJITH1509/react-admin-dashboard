import * as React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

export const data = {
  labels: [
    "Jan",
    "feb",
    "Mar",
    "Apr",
    "May",
    "jun",
    "Jul",
    "Aug",
    "sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Dataset 1",
      data: [
        "7000",
        "8000",
        "7500",
        "9000",
        "8500",
        "10000",
        "9500",
        "11000",
        "10500",
        "12000",
        "11500",
        "13000",
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
export function LineChart() {
  return (
    <Card className="line-chart">
      <CardHeader
        sx={{
          background: "grey",
          color: "white",
        }}
        title="Monthly Earnings"
      />

      <CardContent>
        <Line options={options} data={data} />
      </CardContent>
    </Card>
  );
}
