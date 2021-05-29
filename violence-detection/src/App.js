import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer"
import Chart from './components/Body/Chart';
import Navigation from "./components/Navigation"
import Camera from "./components/Body/Camera"

function App() {

  const [chartData, setchartData] = useState({})

  useEffect(() => {

    setchartData(json)

  }, [])
  let json = {
    labels: ['violence', 'Non Voilence'],
    datasets: [
      {
        label: 'Violence Detection',
        data: [
          0,
          1

        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)'

        ]
      }
    ]
  }








  return (
    <div className="App">
      <Navigation />

      <Camera />
      <Chart chartData={chartData} location="Massachusetts" legendPosition="bottom" />

      <Footer />
    </div>
  );

}

export default App;