import React, { Component } from 'react';
import SkyLight from 'react-skylight';

import { Link } from 'react-router-dom'

class MailTrackingButton extends Component {
  OnChange(e) {

  }

  render() {
    let myBigGreenDialog = {
      backgroundColor: '#92b93a',
      color: '#000',
      width: '65%',
      minHeight: 0
      // height: '600px',
      // marginTop: '-300px',
      // marginLeft: '-35%',
    };
    return (
      <React.Fragment>
        <a onClick={() => this.simpleDialog.show()} className="mail-button animate blue"><i className="fa fa-envelope"></i></a>

        {/* <SkyLight
          dialogStyles={myBigGreenDialog}
          hideOnOverlayClicked
          ref={ref => this.simpleDialog = ref}
          transitionDuration={500} >
          <div className="buttons-in-modal">
            <a className="action-button animate pink">Do Nothing</a>
            <a className="action-button animate yellow">qsdqsd</a>
            <a className="action-button animate green">qsdqsd</a>
            <div className="button-and-modal">
              <a className="action-button animate pink">Ontvangen?</a>
              <input type="checkbox" name="recieved" checked="false" />
            </div>
            <div className="button-and-modal">
              <a className="action-button animate yellow">Update</a>
              <p>Pas de kandidaat zijn gegevens aan.</p>
            </div>
            <div className="button-and-modal">
              <a className="action-button animate green">Add</a>
              <p>Voeg de kandidaat toe aan Zoho CRM.</p>
            </div>
          </div>
        </SkyLight> */}
      </React.Fragment>
    )
  }
}


export default MailTrackingButton