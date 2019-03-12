import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {Chart,BarSeries, ArgumentAxis, ValueAxis, Title} from '@devexpress/dx-react-chart-material-ui';
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
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return  (
      <Paper>
      <Chart
        data={data.getViewsPerDay}
      >
        <ArgumentAxis />
        <ValueAxis max={2000} />
        <BarSeries
          valueField="views_sum"
          argumentField="day"
        />
          <Title text="Unique views" />
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
      height: 300,
    };
  }

  render() {
    const { data } = this.state;
  
    return (
      <div>
      {getGraphInfo()}
      </div>
    
    );
  }
}