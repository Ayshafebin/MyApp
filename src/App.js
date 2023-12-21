// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Input from './Components/Input';
// import Counter from './Components/Counter';
// import Props from './Components/Props';
// import Fetch from './Components/Fetch';
// import UseReducer from './Components/UseReducer';
// import Registration from './Components/Registration';
// import Test from './Components/Test';
// import MyContext from './Components/MyContext';
// import UseContext from './Components/UseContext';
import Router from '../src/Components/Router';

function App() {
  return (
    <div className="App">
      {/* <Registration/> */}
      {/* <Test/> */}

      {/* <MyContext.Provider value={'Context'}>
        <UseContext/>
      </MyContext.Provider> */}

      {/* <Fetch/> */}

      {/* <UseReducer/> */}

      {/* <Props vl={'Propss'}/> */}

      {/* <Counter/> */}

      <Routes>
        <Route path='/profile/:username'  element={<Router />} />
      </Routes>

      {/* <Input/> */}


    </div>
  );
}

export default App;
