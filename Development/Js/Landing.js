import React from 'react'
import List from './List'
import DownloadActions from './actions/downloadDataActions'

class Landing extends React.Component {
  
  componentWillMount() {
    var self = this;
    DownloadActions.downloadAllListData().then((result) => {
      self.setState((prevState) => {
        prevState.listData = result;
        return prevState;
      });
      console.log(result);
    }).catch((err) => {
      console.log(err);
    })
  }
    constructor() {
        super()
        this.state = {
         listData: []
      }
    }

    render() {
      return (
        <List listData={this.state.listData} />
      )
    }
}

export default Landing
