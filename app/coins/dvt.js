var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
  {
    type:"native",
    name:"DVT",
    multiplier:1,
    default:true,
    values:["", "dvt", "DVT"],
    decimalPlaces:8
  },
  {
    type:"native",
    name:"spocks",
    multiplier:1000,
    values:["spocks"],
    decimalPlaces:5
  },
  {
    type:"exchanged",
    name:"USD",
    multiplier:"usd",
    values:["usd"],
    decimalPlaces:5,
    symbol:"$"
  },
  {
    type:"exchanged",
    name:"EUR",
    multiplier:"eur",
    values:["eur"],
    decimalPlaces:5,
    symbol:"€"
  },
];

module.exports = {
  name:"DeVault",
  ticker:"DVT",
  logoUrl:"/img/logo/dvt.svg",
  siteTitle:"DeVault Explorer",
  siteDescriptionHtml:"<b>DVT Explorer</b> is <a href='https://github.com/proteanx/dvt-rpc-explorer). If you run your own [DeVault Full Node](https://www.github.com/devaultcrypto/devault), **DVT Explorer** can easily run alongside it, communicating via RPC calls. See the project [ReadMe](https://github.com/proteanx/dvt-rpc-explorer) for a list of features and instructions for running.",
  nodeTitle:"DeVault Full Node",
  nodeUrl:"https://www.github.com/devaultcrypto/devault",
  demoSiteUrl: "https://exploredvt.com",
  miningPoolsConfigUrls:[
  ],
  maxBlockWeight: 4000000,
  targetBlockTimeSeconds: 600,
  currencyUnits:currencyUnits,
  currencyUnitsByName:{"DVT":currencyUnits[0], "spocks":currencyUnits[1]},
  baseCurrencyUnit:currencyUnits[1],
  defaultCurrencyUnit:currencyUnits[0],
  feeSatoshiPerByteBucketMaxima: [100, 150, 200],
  genesisBlockHashesByNetwork:{
    "main":    "0000000038e62464371566f6a8d35c01aa54a7da351b2dbf85d92f30357f3a90",
    "test":    "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
    "regtest": "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206"
  },
  genesisCoinbaseTransactionIdsByNetwork: {
    "main":    "95d9f62f327ebae0d88f38c72224407e5dde5157f952cdb70921c2dda326f35b",
    "test":    "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
    "regtest": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"
  },
  genesisCoinbaseTransactionsByNetwork:{
    "main": {
      "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
      "txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "size": 204,
      "vsize": 204,
      "version": 1,
      "confirmations":618235,
      "vin": [
        {
          "coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 50,
          "n": 0,
          "scriptPubKey": {
            "asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
            "hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
            "reqSigs": 1,
            "type": "pubkey",
            "addresses": [
              "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
            ]
          }
        }
      ],
      "blockhash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
      "time": 1230988505,
      "blocktime": 1230988505
    },
    "test": {
      "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
      "txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "version": 1,
      "size": 204,
      "vsize": 204,
      "weight": 816,
      "locktime": 0,
      "vin": [
        {
          "coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 50.00000000,
          "n": 0,
          "scriptPubKey": {
            "asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
            "hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
            "reqSigs": 1,
            "type": "pubkey",
            "addresses": [
              "mpXwg4jMtRhuSpVq4xS3HFHmCmWp9NyGKt"
            ]
          }
        }
      ],
      "blockhash": "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
      "time": 1296688602,
      "blocktime": 1296688602
    },
    "regtest": {
      "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
      "txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "version": 1,
      "size": 204,
      "vsize": 204,
      "weight": 816,
      "locktime": 0,
      "vin": [
        {
          "coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 50.00000000,
          "n": 0,
          "scriptPubKey": {
            "asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
            "hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
            "type": "pubkey"
          }
        }
      ],
      "blockhash": "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206",
      "time": 1296688602,
      "blocktime": 1296688602
    }
  },
  genesisCoinbaseOutputAddressScripthash:"8b01df4e368ea28f8dc0423bcf7a4923e3a12d307c875e47a0cfbf90b5c39161",
  historicalData: [
    {
      type: "blockheight",
      date: "2019-06-04",
      chain: "main",
      blockHeight: 0,
      blockHash: "0000000038e62464371566f6a8d35c01aa54a7da351b2dbf85d92f30357f3a90",
      summary: "The DeVault Genesis Block.",
      alertBodyHtml: "This is the first block in the DeVault blockchain, known as the 'Genesis Block'.",
      referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
    },
    {
      type: "tx",
      date: "2019-06-04",
      chain: "main",
      txid: "b066c14a6e537fb3c2e7fe60cbb596769f6d53e0bbca1162c06344e4a6850ba6",
      summary: "First transaction.",
      alertBodyHtml: "The first non-coinbase DeVault transaction. (a miner payout tx from MineDVT.com)",
      referenceUrl: ""
    },
    {
      type: "blockheight",
      date: "2019-07-06",
      chain: "main",
      blockHeight: 21915,
      blockHash: "00000000000000163266ba4e1f2e80785dbf4ba283803752a7e8586fd92918ca",
      summary: "First DeVault superblock funding DAOs.",
      referenceUrl: ""
    },
    {
      type: "tx",
      date: "2019-10-10",
      chain: "main",
      txid: "adab88d353ef243c485c410d676806bd6922e158fdbff4b4ae21a9ab231555bf",
      summary: "First DeVault ID on-chain registration.",
      referenceUrl: "https://devaultid.com"
    },
    {
      type: "blockheight",
      date: "2019-12-22",
      chain: "main",
      blockHeight: 131490,
      blockHash: "0000000000000088fc6bcc99236b888c1d5fa79211726b3ed9378e67732a9679",
      summary: "The peakening superblock marking the tip of the fin in the DeVaul 'sharkflation' block subsidy distribution model.",
      alertBodyHtml: "This peakening height was reduced by 66% from it's previous scheduled height. This change decision was made via network governance on the DeVault.Online platform.",
      referenceUrl: "https://devault.online/proposal/reduce-coin-inflation-by-reducing-time-to-peak-etc"
    },

    // testnet
    {
      type: "blockheight",
      date: "2011-02-02",
      chain: "test",
      blockHeight: 0,
      blockHash: "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
      summary: "The Bitcoin (regtest) Genesis Block.",
      alertBodyHtml: "This is the first block in the Bitcoin blockchain, known as the 'Genesis Block'. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
      referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
    },
    {
      type: "tx",
      date: "2011-02-02",
      chain: "test",
      txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      summary: "The coinbase transaction of the Genesis Block.",
      alertBodyHtml: "This transaction doesn't really exist! This is the coinbase transaction of the <a href='/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'>Bitcoin Genesis Block</a>. For more background about this special-case transaction, you can read <a href='https://github.com/bitcoin/bitcoin/issues/3303'>this brief discussion</a> among some of the <a href='https://bitcoin.org'>Bitcoin</a> developers.",
      referenceUrl: "https://github.com/bitcoin/bitcoin/issues/3303"
    },


    // regtest
    {
      type: "blockheight",
      date: "2011-02-02",
      chain: "regtest",
      blockHeight: 0,
      blockHash: "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206",
      summary: "The Bitcoin (regtest) Genesis Block.",
      alertBodyHtml: "This is the first block in the Bitcoin blockchain, known as the 'Genesis Block'. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
      referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
    },
    {
      type: "tx",
      date: "2011-02-02",
      chain: "regtest",
      txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      summary: "The coinbase transaction of the Genesis Block.",
      alertBodyHtml: "This transaction doesn't really exist! This is the coinbase transaction of the <a href='/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'>Bitcoin Genesis Block</a>. For more background about this special-case transaction, you can read <a href='https://github.com/bitcoin/bitcoin/issues/3303'>this brief discussion</a> among some of the <a href='https://bitcoin.org'>Bitcoin</a> developers.",
      referenceUrl: "https://github.com/bitcoin/bitcoin/issues/3303"
    },
  ],
  exchangeRateData:{
    // see https://www.kraken.com/features/api#get-ticker-info for doc on that API
    // endoint. What we need in "jq" syntax is:
    // jq ."result"."DVTUSD"."c"[0] and jq ."result"."DVTEUR"."c"[0]
    // the above will return back the last trade closed at the time the url
    // has been fetched
    jsonUrl:"https://api.coingecko.com/api/v3/simple/price?ids=devault&vs_currencies=usd%2Ceur",
    responseBodySelectorFunction:function(responseBody) {
      //console.log("Exchange Rate Response: " + JSON.stringify(responseBody));

      var exchangedCurrencies = ["usd", "eur"];

      if (responseBody.devault) {
        var exchangeRates = {};

        for (var i = 0; i < exchangedCurrencies.length; i++) {
          if (responseBody.devault[exchangedCurrencies[i]]) {
            var key = exchangedCurrencies[i].replace("DVT", "");
            exchangeRates[key.toLowerCase()] = responseBody.devault[exchangedCurrencies[i]];
          }
        }

        return exchangeRates;
      }

      return null;
    }
  },

blockRewardFunction:function(blockHeight, chain) {

    const peakDiv = 2; // for 1/2 a year
    const nPeakHeight = (chain == "testnet") ? 2400 : 131490; 
    const nInitialReward = 500
    const peak = nInitialReward + Math.floor(nInitialReward / peakDiv);

    var nReward;

    if (blockHeight <= nPeakHeight) {
        nReward = (nInitialReward) + Math.floor((2 * nInitialReward * blockHeight) /
                                                (3 * nPeakHeight + blockHeight));
    } else {
        nReward = Math.floor(nPeakHeight * peak / blockHeight);
    }
    return nReward;

}
};
