require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile purchase install clock blue tank'; 
let testAccounts = [
"0xba14406dc0ce3adc40b8b9e7f0a5695ab27860daef5236e5b260d0460a895323",
"0x5cba9b4ead94523a6afba376c59f60228888998e08f1b70df2009119bc729595",
"0xdd7f9f5ad45ee26bd29e6679449e35778b045220582a81cd6173c43909492ffa",
"0xf871aa1cd3814c0b29fa77350f5c7a097840d4d1078e7b9468b4eac9b3b5aac9",
"0x47381c3faed3c08f47a580cc0789615fba254775d15893de718e91c70cff8215",
"0x589bdc66f2e3c755bd50a7a5e0bd207d0e58845141cfb09fb54ada53e597d800",
"0x15dae712fb82acd48a348ff87390d09b7170307dfdb607573f957e8702401126",
"0xb10a2776bfe0f51e20e44c25112dba7a99fc83bf84523aae201472947cb2662c",
"0xcce9be14387b6864b3ee8e6031cedda6673fc48a19415b86e569965388543a72",
"0x9ac96d89edb429898574c0a0c67cef9324081348cf3fd13dd3456ffa9401d814"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


