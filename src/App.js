import "./App.css";
import { useState } from 'react'
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { Tabs, Tab } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Router from './routes';
import store from './store/reducers'

const tabs = [
  {
    label: 'Cameras',
    to: '',
  },
  {
    label: 'Types',
    to: 'types',
  },
]

function App() {
  const { pathname } = useLocation();

  const [value, setValue] = useState(() => pathname === ('/new') ? 0 : tabs.findIndex(({ to }) => to === pathname.split('/')[1]));

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <Tabs
            className="tabsCss"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            {tabs.map((tab, index) => <Tab key={index} index={index} component={Link} {...tab} />)}
          </Tabs>
        </header>
        <Router />
      </div>
    </Provider>
  );
}

export default App;
