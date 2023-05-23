import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
// import data from './data.json';


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


  

function BarComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const financialData = data.financialreport[0].financials;

    const chartData = {
      labels: financialData.map(item => item.date),
      datasets: [{
        label: 'Revenue',
        data: financialData.map(item => item.revenue),
        backgroundColor: 'rgba(255, 26, 104, 0.2)',
        borderColor: 'rgba(255, 26, 104, 1)',
        borderWidth: 1
      }, {
        label: 'Expenses',
        data: financialData.map(item => item.expenses),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }, {
        label: 'Profits',
        data: financialData.map(item => item.profits),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }]
    };

    const config = {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
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
          <div style={{ height: "800px", width: "800px", margin: "auto" }}>
          <canvas ref={canvasRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarComponent;
