

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { changePages } from './store/actions/changePage';
import { changePages } from './api/apiTool';
import './App.css';
import List from './page/list';
import FourOFour from './page/fourOfour';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePages(1));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} ></Route>
        <Route path='*' element={<FourOFour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import { Counter } from './features/counter/counter';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Counter />
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
