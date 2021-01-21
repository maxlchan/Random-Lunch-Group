import React from 'react';
import { ThemeProvider } from 'styled-components';
import GroupingContainer from './containers/GroupingContainer';

import { fetchPeople, getPeople } from './modules/lunch';
import GlobalStyle from './styles/GlobalStyle';
import themes from './styles/themes';

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <GroupingContainer />
    </ThemeProvider>
  );
};

export default App;
