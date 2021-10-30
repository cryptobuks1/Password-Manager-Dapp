/**
 * @param {object} contractInstance - a loaded instance of the smart contract
 * @param {string} addr - eth address
 * @param {string} secretKey
 * @returns {object}
 */
export const storeSecretKey = async (contractInstance, addr, secretKey) => {
  if (secretKey.trim().length >= 6) {
    try {
      const res = await contractInstance.methods.setSecretKey(secretKey).send({ 'from': addr });
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