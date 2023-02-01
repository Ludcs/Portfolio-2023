import {Routes, Route, useNavigate} from 'react-router-dom';
// import './App.css';
import {Hello} from './components/Hello';
import {useState, useEffect} from 'react';
import {motion as m} from 'framer-motion';
import {Home} from './components/Home';
import {Proyects} from './components/Proyects';
import {Me} from './components/Me';
import {MarqueeFooter} from './components/MarqueeFooter';
import {Navbar} from './components/Navbar';

function App() {
  const [sayHello, setSayHello] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSayHello(false);
    }, 1800);
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    navigate('/', {replace: true});
  }, []);

  return (
    <>
      {sayHello ? (
        <Hello />
      ) : (
        <>
          <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
          >
            <Navbar />
            <Routes>
              <Route exact path="/*" element={<Home />} />
              <Route path="/proyects" element={<Proyects />} />
              <Route path="/me" element={<Me />} />
            </Routes>
          </m.div>
          <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
          >
            <MarqueeFooter />
          </m.div>
        </>
      )}
    </>
  );
}

export default App;
