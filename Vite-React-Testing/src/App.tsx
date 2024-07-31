import React from 'react';
import { Provider } from '@dhis2/app-runtime';
import ExampleConfig from './components/ExampleConfig';
import DataQuerryExample from './components/DataQuerryExample';
import LastLoginMessage from './components/LastLoginMessage';

const appConfig = {
  baseUrl: 'http://localhost:8080/dhis',
  apiVersion: 40,
};

const App: React.FC = () => {
  return (
    <Provider config={appConfig}>
      <ExampleConfig />
      <DataQuerryExample />
      <LastLoginMessage />
    </Provider>
  );
};

export default App;
