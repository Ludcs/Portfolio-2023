import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import {DIV, Hello} from './components/Hello';
import {useState, useEffect} from 'react';
import {motion as m} from 'framer-motion';

import {Music} from './components/Music';
import {Home} from './components/Home';
import {Proyects} from './components/Proyects';
import {Me} from './components/Me';
import {MarqueeFooter} from './components/MarqueeFooter';
import {Navbar} from './components/Navbar';

function App() {
  const [sayHello, setSayHello] = useState(true);
  const [homeText, setHomeText] = useState(true);
  const [proyectsText, setProyectsText] = useState(false);
  const [meText, setMeText] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setSayHello(false);
    }, 2200);
  }, []);

  useEffect(() => {
    navigate('/*', {replace: true});
  }, []);

  return (
    <>
      {sayHello ? (
        <Hello />
      ) : (
        <DIV>
          <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
          >
            {/* <Music /> */}
            <Navbar
              setHomeText={setHomeText}
              setProyectsText={setProyectsText}
              setMeText={setMeText}
            />
            <Routes>
              <Route exact path="/*" element={<Home homeText={homeText} />} />
              <Route
                path="/proyects"
                element={<Proyects proyectsText={proyectsText} />}
              />
              <Route path="/me" element={<Me meText={meText} />} />
            </Routes>
          </m.div>
          <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
          >
            <MarqueeFooter homeText={homeText} />
          </m.div>
        </DIV>
      )}
    </>
  );
}

export default App;
