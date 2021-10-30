import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import getWeb3 from './utils/getWeb3.js';
import PasswordManager from './contracts/PasswordManager.json';
import Landing from './components/Landing.jsx';
import Dashboard from './components/Dashboard.jsx';

const App = () => {
  const [accounts, setAccounts] = useState(null);
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    async function connectWallet() {
      const web3 = await getWeb3();
      try {
        const accounts = await web3.eth.getAccounts();
        setAccounts(() => accounts);
      }
      catch (err) {
        console.log('An error occured😢: ' + err);
      }

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = PasswordManager.networks[networkId];
      const instance = new web3.eth.Contract(
        PasswordManager.abi,
        deployedNetwork && deployedNetwork.address,
      );
      setInstance(() => instance);
    }
    connectWallet();
  }, []);


  return (
    <div className={styles['app']}>
      <Router>
        <h1>dApp Password Manager</h1>
        <Switch>
          <Route path="/" exact>
            <Landing
              contract={instance}
              addresses={accounts}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard
              contract={instance}
              addresses={accounts}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
