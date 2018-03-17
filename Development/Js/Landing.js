import React from 'react'
import List from './List'

var mockData = [
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "8284.01",
        "price_btc": "1.0",
        "24h_volume_usd": "4849120000.0",
        "market_cap_usd": "140198999440",
        "available_supply": "16924050.0",
        "total_supply": "16924050.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "-0.46",
        "percent_change_24h": "1.22",
        "percent_change_7d": "-12.02",
        "last_updated": "1521282866"
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": "2",
        "price_usd": "602.44",
        "price_btc": "0.0730062",
        "24h_volume_usd": "1314110000.0",
        "market_cap_usd": "59184291002.0",
        "available_supply": "98240972.0",
        "total_supply": "98240972.0",
        "max_supply": null,
        "percent_change_1h": "-0.86",
        "percent_change_24h": "0.2",
        "percent_change_7d": "-17.95",
        "last_updated": "1521282852"
    }
  ]

class Landing extends React.Component {
    constructor(){
        super()
    }

    render() {
      return (
        <List listData={mockData} />
      )
    }
}

export default Landing
