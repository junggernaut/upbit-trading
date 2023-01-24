const urls = {
  fp: {
    nftgo: {
      //https://data-api.nftgo.io/eth/v1/collection/:contractAddress/metrics
      prefix: 'https://data-api.nftgo.io/eth/v1/collection/',
    },
    nftbank: {
      //https://api.nftbank.ai/estimates-v2/floor_price/:contractAddress?chain_id=ETHEREUM
      prefix: 'https://api.nftbank.ai/estimates-v2/floor_price/',
    },
    blockspan: {
      //https://api.blockspan.com/v1/collections/pricesummary/contract/:contractAddress?chain=eth-main
      prefix: 'https://api.blockspan.com/v1/collections/pricesummary/contract/',
    },
    opensea: {
      //https://api.opensea.io/api/v1/collection/doodles-official/stats
      prefix: 'https://api.opensea.io/api/v1/collection/doodles-official/stats',
    },
    looksware: {
      //https://api.looksrare.org/api/v1/collections/stats?address=:contractAddress
      prefix: 'https://api.looksrare.org/api/v1/collections/stats?address=',
    },
    x2y2: {
      //https://api.x2y2.org/v1/contracts/:contractAddress/stats
      prefix: 'https://api.x2y2.org/v1/contracts/',
    },
  },
  assetInfo: {
    opensea: {
      //https://api.opensea.io/api/v1/assets?token_ids=~&asset_contract_address=~
      mainnet: {
        prefix: 'https://api.opensea.io/api/v1/assets?',
      },
      testnet: {
        prefix: 'https://testnets-api.opensea.io/api/v1/assets?',
      },
    },
    alchemy: {
      mainnet: {
        prefix: 'https://eth-mainnet.g.alchemy.com/nft/v2/',
      },
      testnet: {
        prefix: 'https://eth-goerli.g.alchemy.com/nft/v2/',
      },
    },
  },
};

export default urls;
