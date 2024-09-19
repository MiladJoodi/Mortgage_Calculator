"use client";
// PieChart.tsx

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components for Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartEMI = (props: any) => {
  const { loanAmount, totalPayable, totalInterest } = props;
  console.log(loanAmount);

  const [chartData, setChartData] = useState({
    labels: ["Amount", "Total Interest Payable", "Total Amount Payable"],
    datasets: [
      {
        label: "# of Votes",
        data: [79, 17, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.label || "";
            if (context.parsed !== null) {
              label += `: ${context.parsed}`;
            }
            return label;
          },
        },
      },
    },
  };

  // Function to recalculate new data (this can be replaced with actual logic)
  const recalculateData = () => {
    const newData = [loanAmount ?? 0, totalPayable ?? 0, totalInterest ?? 0];
    setChartData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          data: newData, // Update the data with newly calculated values
        },
      ],
    }));
  };

  // You can call this function after an event, such as a button click
  useEffect(() => {
    recalculateData();
  }, [loanAmount, totalPayable, totalInterest]);

  return (
    <div className="w-[300px] h-[300px]">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default ChartEMI;
