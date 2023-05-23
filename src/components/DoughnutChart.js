// import React, { useRef, useCallback } from "react";
// import { Doughnut } from "react-chartjs-2";
// import Chart from "chart.js/auto";
// import { CategoryScale } from "chart.js";

// const data = {
//     labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
//     datasets: [
//         {
//             label: "My Dataset",
//             data: [500, 50, 100, 40, 120],
//             backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#ccc", "#ccc"],
//             hoverOffset: 4,
//         },
//     ],
// };

// Chart.register(CategoryScale);
// function DoughnutChart() {
//     let ref = useRef(null);
//     const downloadImage= useCallback(() => {
//         const link = document.createElement("a");
//         link.download = "chart.png";
//         link.href = ref.current.toBase64Image();
//         link.click();
//         }, []);
//     return (
//         <div className="App">
//         <button type="button" onClick={downloadImage}>Download</button>
//         <div style={{height:"690px", width: "690px", margin: "auto"}}>
//             <Doughnut ref={ref} data={data} />
//         </div>
//     </div>
//     )
// }
// export default DoughnutChart;


import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const data = { 
    "year": "2021",
    "financialreport": [
      {
        "company": "ChartJS",
        "companyname": "ChartJS Corp",
        "companystock": "CHRT",
        "financials":
        [
          {
          "date": "January",
          "revenue": 180,
          "expenses": 30,
          "profits": 60,
          "target": "Target 1"
         },
         {
          "date": "February",
          "revenue": 120,
          "expenses": 30,
          "profits": 90,
          "target": "Target 2"
         },
         {
          "date": "March",
          "revenue": 150,
          "expenses": 30,
          "profits": 120,
          "target": "Target 3"
         },
         {
          "date": "April",
          "revenue": 180,
          "expenses": 30,
          "profits": 150,
          "target": "Target 4"
         },
         {
          "date": "May",
          "revenue": 210,
          "expenses": 30,
          "profits": 180,
          "target": "Target 5"
         },
         {
          "date": "June",
          "revenue": 240,
          "expenses": 30,
          "profits": 210,
          "target": "Target 6"
         },
         {
          "date": "July",
          "revenue": 270,
          "expenses": 30,
          "profits": 240,
          "target": "Target 7"
         }
        ]
      },
      {
        "company": "ChartFlix",
        "companyname": "ChartFlix Inc.",
        "companystock": "CX",
        "financials":
        [
          {
          "date": "January",
          "revenue": 270,
          "expenses": 30,
          "profits": 240,
          "target": "Target 21"
         },
         {
          "date": "February",
          "revenue": 180,
          "expenses": 30,
          "profits": 150,
          "target": "Target 22"
         },
         {
          "date": "March",
          "revenue": 150,
          "expenses": 30,
          "profits": 120,
          "target": "Target 23"
         },
         {
          "date": "April",
          "revenue": 210,
          "expenses": 30,
          "profits": 180,
          "target": "Target 24"
         },
         {
          "date": "May",
          "revenue": 120,
          "expenses": 30,
          "profits": 90,
          "target": "Target 25"
         },
         {
          "date": "June",
          "revenue": 180,
          "expenses": 30,
          "profits": 150,
          "target": "Target 26"
         },
         {
          "date": "July",
          "revenue": 210,
          "expenses": 30,
          "profits": 180,
          "target": "Target 27"
         }
        ]
      },
      {
        "company": "Chart Start Up",
        "companyname": "Chart Start Up",
        "companystock": "START",
        "financials":
        [
          {
          "date": "January",
          "revenue": 3,
          "expenses": 1.5,
          "profits": 2.5,
          "target": "Target 31"
         },
         {
          "date": "February",
          "revenue": 6,
          "expenses": 3,
          "profits": 3,
          "target": "Target 32"
         },
         {
          "date": "March",
          "revenue": 9,
          "expenses": 6,
          "profits": 3,
          "target": "Target 33"
         },
         {
          "date": "April",
          "revenue": 18,
          "expenses": 9,
          "profits": 9,
          "target": "Target 34"
         },
         {
          "date": "May",
          "revenue": 12,
          "expenses": 3,
          "profits": 9,
          "target": "Target 35"
         },
         {
          "date": "June",
          "revenue": 24,
          "expenses": 18,
          "profits": 6,
          "target": "Target 36"
         },
         {
          "date": "July",
          "revenue": 18,
          "expenses": 18,
          "profits": 0,
          "target": "Target 37"
         }
        ]
      }
    ]
  }

function DoughnutChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const financialData = data.financialreport[0].financials;
    
    const chartData = {
      labels: financialData.map(item => item.date),
      datasets: [{
        data: financialData.map(item => item.revenue),
          backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)'
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 26, 104, 0.4)',
              // 'rgba(255, 26, 104, 0.6)',
              // 'rgba(255, 26, 104, 0.8)',
              // 'rgba(255, 26, 104, 0.1)',
              // 'rgba(255, 26, 104, 0.3)'
          
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)'
            // 'rgba(255, 26, 104, 0.2)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 26, 104, 0.4)',
            // 'rgba(255, 26, 104, 0.6)',
            // 'rgba(255, 26, 104, 0.8)',
            // 'rgba(255, 26, 104, 0.1)',
            // 'rgba(255, 26, 104, 0.3)'
        ],
        borderWidth: 1
      }]
    };

    const config = {
      type: 'pie',
      data: chartData
    };

    const myChart = new Chart(canvasRef.current, config);

    return () => {
      myChart.destroy();
    }
  }, []);

  return (
    <div>
      <div className="chartCard">
        <div className="chartBox">
          <div style={{ height: "500px", width: "500px", margin: "auto" }}>
            <canvas ref={canvasRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
