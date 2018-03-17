'use strict';

import jQuery from 'jquery';
import Promise from 'promise'

var DownloadAction = {

  downloadAllListData () {
    return new Promise((resolve, reject) => {
      jQuery.ajax({
        type: 'GET',
        url: '/all',
        success: result => {
          resolve(result)
        },
        error: (xhr, statusText, err) => {
          reject(err)
        }
      })
    })
  }

}

export default DownloadAction;
