/**
 * @param {object} contractInstance - a loaded instance of the smart contract
 * @param {string} addr - eth address
 * @param {string} secretKey
 * @returns {object}
 */
export const storeSecretKey = async (contractInstance, addr, secretKey) => {
  if (secretKey.trim().length >= 6) {
    try {
      const res = await contractInstance.methods.storeSecretKey(secretKey).send({ 'from': addr });
      return {
        'success': true,
        'result': res
      }
    }
    catch(err) {
      return {
        'success': false,
        'error': err
      }
    }
  }
  else {
    return {
      'success': false,
      'error': 'secret key must be at lest 6 letters ❗'
    }
  }
}



/**
 * @param {object} contractInstance - a loaded instance of the smart contract
 * @param {string} addr - eth address
 * @param {object} details - an object with keys 'platform' & 'password'
 * @returns {object}
 */
export const savePassword = async (contractInstance, addr, details) => {
  if (details['platform'].trim() === '') {
    return {
      'success': false,
      'error': 'Platform cannot be empty ❗'
    }
  }
  else if (details['password'].trim() === '') {
    return {
      'success': false,
      'error': 'Password cannot be empty ❗'
    }
  }

  try {
    const res = await contractInstance.methods.savePassword(details['platform'], details['password']).send({ 'from': addr });
    return {
      'success': true,
      'result': res
    }
  }
  catch(err) {
    return {
      'success': false,
      'error': err
    }
  }
}