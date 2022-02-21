require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ixvBVUHd0Of5ak6I6pFScCCQgOZWSGuk',
      accounts: [ '96ef92582138d0bc3ae4ed1601f403a714b6520af099bcb7f84614da75719b32' ]
    }
  }
}