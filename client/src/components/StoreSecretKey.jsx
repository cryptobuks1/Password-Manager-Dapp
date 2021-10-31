import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import { storeSecretKey } from '../utils/contract-methods.js';

const StoreSecretKey = (props) => {
  const [secretKey, setSecretKey] = useState('');

  return (
    <div className={`${styles['store-secret-key']} ${styles['method']}`}>
      <input 
        type="text"
        value={secretKey}
        placeholder="secret key"
        onChange={(e) => setSecretKey((e.target.value).trim())}
      />
      <button
        onClick={async (e) => {
          e.preventDefault();
          const res = await storeSecretKey(props.contract, props.addresses[0], secretKey);
          console.log(res);
        }}>
        set key
      </button>
      <button
        onClick={async (e) => {
          e.preventDefault();
          const res = await props.contract.methods.test().call();
          console.log(res);
        }}>
        test contract
      </button>
    </div>
  );
}
 
export default StoreSecretKey;