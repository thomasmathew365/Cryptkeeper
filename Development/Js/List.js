import React from 'react'

class ListMain extends React.Component {
  constructor () {
    super ()
  }

  render () {
    var rows = this.props.listData.map((asset) => {
      return <ListItem key={'listItemRow_' + asset.id } itemData={asset}/>
    })
    return (
      <div>
        {rows}
      </div>
    )
  }
}

class ListItem extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        {this.props.itemData.name + ' ' + this.props.itemData.symbol}
      </div>
    )
  }
}

export default ListMain
