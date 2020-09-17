require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index rebel noble huge half civil army gift'; 
let testAccounts = [
"0xea67649a06f538fbe1a25e0decf90dde6fd7c98099836d87ff5ca98b1a200614",
"0x6d8d03b73874ab81af4e0ca04fb59980bb3378c4499d5f1d2af19204a3c95fa2",
"0x955bd98cfd513a56e9d73c94fdced0e4265b79123928989145cd0f1cac578b6e",
"0x08162c93ff1916a87e173d8efc629dfd6ce173c043fac36d2c3ee201bcf7f683",
"0xd1491a766da0957d174a6caafafbb17ed56dc69d52df2f6392d3b9625428265b",
"0x929ce4e0be99c808ce479ddef8da00fc6a7689d0c7a7cce284f7cdbf5cdbe72e",
"0x5f94b560a5da9fe4cf61331e9130c88b6cb86be7727fd911d65ff11b103830b6",
"0x7178ac931f4ecd03bd05ddaf4d4b8e67c411e20f240d06a193fe177511a01e27",
"0x7389724d2d8f69c7c26723aa067d4bfed443f5a7e22dfd2f5f7b1dfc540e6e76",
"0x0c53f0c167b332895bece1caf9b1ca3696afe30fc11f9895beefbae960a9a181"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
