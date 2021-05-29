import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Row } from "react-bootstrap"

export default function Chart(props) {









    return (
        <div className="d-flex justify-content-center" style={{ width: "100%" }}>
            <div style={{ width: "50%" }}>
                <Bar
                    data={props.chartData}
                    options={{
                        title: {
                            display: "violence detection",
                            text: 'Largest Cities In ' + 'city',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>


        </div>
    );

}
