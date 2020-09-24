import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
    state = {
        dataPie: {
            labels: ["봄", "여름", "가을", "겨울"],
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    labels: {
                        render: 'label',
                        // fontColor: ['green', 'white', 'red'],
                        precision: 2
                    },
                    datalabels: {
                        color: '#36A2EB'
                    }
                },
            },
            datasets: [
                {
                    data: [4, 2, 2, 1],
                    backgroundColor: [
                        "#FDB45C",
                        "#F7464A",
                        "#46BFBD",
                        "#4D5360",
                    ]
                }
            ],
        },
    }

    render() {
        return (
            <MDBContainer>
                <Pie data={this.state.dataPie} />
            </MDBContainer>
        );
    }
}

export default ChartsPage;