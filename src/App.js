import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react/cjs/react.development';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
function App() {

  const [mode, setmode] = useState('light');
  const [text, settext] = useState('dark');
  const [alert, setalert] = useState(null);
  const [color, setcolor] = useState('white');
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const [style, setstyle] = useState({
    color: 'black',
  });
  const [style1, setstyle1] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const showgreen = () => {
    if (mode === 'light') {
      setmode('dark');
      settext('light');
      setstyle1({
        color: 'white',
        backgroundColor: 'green'
      });
      setstyle({
        color: 'white'

      });
      document.body.style.backgroundColor = 'green';
      document.body.style.opacity = '0.9';
      document.body.style.color = 'white';
      showalert(" Dark mode has been enabled", "success");
    }
    else {
      settext('dark');
      setmode('light');
      setstyle({
        color: 'black'
      });
      setstyle1({
        color: 'black',
        backgroundColor: 'white'
      });
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';

      showalert(" Light mode has been enabled", "success");
    }
  }
  const showdarkblue = () => {
    if (mode === 'light') {
      setmode('dark');
      settext('light');
      setstyle1({
        color: 'white',
        backgroundColor: '#173459'
      });
      setstyle({
        color: 'white'

      });
      document.body.style.backgroundColor = '#173459';
      document.body.style.opacity = '0.9';
      document.body.style.color = 'white';
      showalert(" Dark mode has been enabled", "success");
    }
    else {
      settext('dark');
      setmode('light');
      setstyle({
        color: 'black'
      });
      setstyle1({
        color: 'black',
        backgroundColor: 'white'
      });
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';

      showalert(" Light mode has been enabled", "success");
    }
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      settext('light');
      setstyle1({
        color: 'white',
        backgroundColor: '#962806'
      });
      setstyle({
        color: 'white'

      });
      document.body.style.backgroundColor = '#962806';
      document.body.style.color = 'white';
      showalert(" Dark mode has been enabled", "success");
    }
    else {
      settext('dark');
      setmode('light');
      setstyle({
        color: 'black'

      });
      setstyle1({
        color: 'black',
        backgroundColor: 'white'
      });
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showalert(" Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="Myapp" aboutText="About myapp" mode={mode} togglemode={togglemode} text={text} style={style} showgreen={showgreen} showdarkblue={showdarkblue} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm heading="Enter the text to analyze" style={style1} showalert={showalert} ></TextForm>
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
