import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {Chart,BarSeries} from '@devexpress/dx-react-chart-material-ui';
import { Query } from "react-apollo";
import gql from "graphql-tag";


const getGraphInfo = (chartData) => (
  <Query
    query={gql`
      {
        getViewsPerDay(where: {videoId: "8zhv-q8zW1s"})
        {
          day,
          views_sum
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      console.log(data.getViewsPerDay)
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const dataNew = data.getViewsPerDay
      return  (
      <Paper>
      <Chart
        data={data.getViewsPerDay}
      >
        <BarSeries
          valueField="day"
          argumentField="views_sum"
        />
      </Chart>
    </Paper>)
      ;
    }}
  </Query>
);


const data = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.930 },
];

export default class BarChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
  
    return (
      <Paper>
        {getGraphInfo(chartData)}
        <Chart
          data={chartData}
        >

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          
        </Chart>
      </Paper>
    );
  }
}
