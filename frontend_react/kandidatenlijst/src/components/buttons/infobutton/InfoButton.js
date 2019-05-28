import React, { Component } from 'react';
import SkyLight from 'react-skylight';

class InfoButton extends Component {
  render() {
    let myBigGreenDialog = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      width: '65%',
      // height: '600px',
      // marginTop: '-300px',
      // marginLeft: '-35%',
    };
    return (
      <React.Fragment>
        <a onClick={() => this.simpleDialog.show()} className="info-button animate blue">i</a>
        <SkyLight
          dialogStyles={myBigGreenDialog}
          hideOnOverlayClicked
          ref={ref => this.simpleDialog = ref}
          title="Hi, I'm a simple modal"
          transitionDuration={500} >
          <div className="buttons-in-modal">Wow everythign I want</div>
        </SkyLight>
      </React.Fragment>
    )
  }
}


export default InfoButton