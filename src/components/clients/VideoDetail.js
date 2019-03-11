import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';

const Box = styled.div`${palette}${spacing}${typography}`;
// or import { unstable_Box as Box } from '@material-ui/core/Box';



const VideoKpis = () => (
  <Query
    query={gql`
      {
        rgetVideoKpis {
          videoTitle,
          campaign,
          impressions_sum
          views_sum
          viewRate_avg
        }
      }
    `}
    >
     {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.getVideoKpis.map(({ index, videoTitle, campaign, impressions_sum, views_sum, viewRate_avg }) => (
        <div key={index}>
          <p>{videoTitle}</p>
        </div>
      ));
    }}
    </Query>
);



const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

function Demo() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Box
          color="primary.main"
          bgcolor="background.paper"
          width="100%"
          fontFamily="h6.fontFamily"
          fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
          p={{ xs: 2, sm: 3, md: 4 }}
        >
          @material-ui/system
        </Box>
      </ThemeProvider>
    </NoSsr>
  );
}

export default Demo;