import * as React from 'react';
import { AppContainer } from "./pages/App.container";
import { useSelector } from 'react-redux';
import { RootStore } from './store';


const App: React.FC = () => {

  // const key = useSelector((state: RootStore) => state.home.key);
  // console.log(key)npm

  return (
    <>
      <AppContainer />
      <div>
        Text to pass the test
      </div>
    </>
  );
};


export default App;
