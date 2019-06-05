import React from 'react';
import SkyLight from 'react-skylight';

const UpdateForm = ({ differences, error }) => {
  console.log(differences.profiles + "hello, this comp works")
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
      <a onClick={() => this.simpleDialog.show()}>Click</a>
      <SkyLight
        dialogStyles={myBigGreenDialog}
        hideOnOverlayClicked
        ref={ref => this.simpleDialog = ref}
        transitionDuration={500} >

      </SkyLight>
    </React.Fragment>
  )
}

export default UpdateForm;
