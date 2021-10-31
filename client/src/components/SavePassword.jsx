import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import { savePassword } from '../utils/contract-methods.js';

const SavePassword = (props) => {
  const [platform, setPlatform] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={`${styles['save-password']} ${styles['method']}`}>
      <input 
        type="text"
        value={platform}
        placeholder="platform"
        onChange={(e) => setPlatform(e.target.value)}
      />
      <input 
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={async (e) => {
          e.preventDefault();
          const details = { platform, password };
          const res = await savePassword(props.contract, props.addresses[0], details);
          console.log(res);
        }}>
        save password
      </button>
    </div>
  );
}

export default SavePassword;