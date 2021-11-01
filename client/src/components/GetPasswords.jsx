import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import { getPasswords } from '../utils/contract-methods.js';

const GetPasswords = (props) => {
  const [secretKey, setSecretKey] = useState('');
  const [passwords, setPasswords] = useState([]);

  return (
    <div className={`${styles['get-passwords']} ${styles['method']}`}>
      <input 
        type="text"
        value={secretKey}
        placeholder="secret key"
        onChange={(e) => setSecretKey((e.target.value).trim())}
      />
      <button
        onClick={async (e) => {
          e.preventDefault();
          const res = await getPasswords(props.contract, props.addresses[0], secretKey);
          res.success ? setPasswords(() => res.result) : setPasswords([]);
          console.log(res);
        }}>
        get passwords
      </button>
    </div>
  );
}
 
export default GetPasswords;