// import logo from './logo.svg';
// import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
// import Input from './Components/Input';
// import Counter from './Components/Counter';
// import Props from './Components/Props';
import Fetch from './Components/Fetch';
// import UseReducer from './Components/UseReducer';
// import Registration from './Components/Registration';
// import Test from './Components/Test';
// import MyContext from './Components/MyContext';
// import UseContext from './Components/UseContext';
// import Router from '../src/Components/Router';
// import UseParams from './Components/UseParams';

function App() {
  return (
    <div className="App">
      {/* <Registration/> */}
      {/* <Test/> */}

      {/* <MyContext.Provider value={'Context'}>
        <UseContext/>
      </MyContext.Provider> */}

      <Fetch/>

      {/* <UseReducer/> */}

      {/* <Props vl={'Propss'}/> */}

      {/* <Counter/> */}

      {/* <Routes>
        <Route path='/profile/:username'  element={<Router />} />
      </Routes> */}

      {/* <Input/> */}

      {/* <Routes>
        <Route path='/UseParams/:id' element={<UseParams/>} />
      </Routes>

      <Link to ='/UseParams/123'>use</Link>
      <Link to ='/UseParams/456'>use2</Link> */}

      

    </div>
  );
}

export default App;
