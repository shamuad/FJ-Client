import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Title } from '@devexpress/dx-react-chart-material-ui';

import {
  Chart,
  BarSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';

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
    const { data: chartData, height} = this.state;

    return (
      <Paper>
        <Chart
          data={chartData} height={height}
        >
          <Legend />
        <Title
            text="Unique Views"
          />
          <BarSeries
            valueField="population"
            argumentField="year"
          />
        </Chart>
      </Paper>
    );
  }
}
