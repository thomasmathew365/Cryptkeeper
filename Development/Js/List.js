import React from 'react'

class ListMain extends React.Component {
  constructor () {
    super ()
  }

  render () {
    var rows = this.props.listData.map((asset) => {
      <ListItem itemData={asset[0]}/>
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
    console.log(this.props)
    return (
      <div>
        {this.props.itemData.name}
      </div>
    )
  }
}

export default ListMain
