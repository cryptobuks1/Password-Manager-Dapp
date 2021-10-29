import React, { useEffect, useState } from "react";
import styles from './App.module.css';
import getWeb3 from './getWeb3.js';
import PasswordManager from './contracts/PasswordManager.json';

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

  const runCheck = async () => {
    const greet = await instance.methods.greet().call({ from: accounts[0] });
    console.log(greet);
  }


  return (
    <div className={styles['app']}>
      <h1>Good to Go!</h1>
      <p>Your Truffle Box is installed and ready 💪.</p>
      <button
        onClick={async (e) => {
          e.preventDefault();
          await runCheck();
        }}>
        Test contract
      </button>
    </div>
  );
}

export default App;
