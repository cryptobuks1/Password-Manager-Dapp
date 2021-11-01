import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import StoreSecretKey from './StoreSecretKey.jsx';
import SavePassword from './SavePassword.jsx';
import GetPasswords from './GetPasswords.jsx';

const Dashboard = (props) => {
  return (
    <div className={styles['dashboard']}>
      <Link to="/">go to Home</Link>
      <StoreSecretKey 
        contract={props.contract}
        addresses={props.addresses}
      />
      <SavePassword
        contract={props.contract}
        addresses={props.addresses}
      />
      <GetPasswords
        contract={props.contract}
        addresses={props.addresses}
      />
    </div>
  );
}
 
export default Dashboard;