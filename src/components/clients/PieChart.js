import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries, Title
} from '@devexpress/dx-react-chart-material-ui';


const data = [
  { Platform: 'Facebook', unique_views: 1230 },
  { Platform: 'Google', unique_views: 800 }
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
        <Chart
          data={chartData}
        > 
          <PieSeries
            valueField="unique_views"
            argumentField="Platform"
          />
           <Title text="Unique views" />
        </Chart>
    );
  }
}
