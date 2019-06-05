import React from 'react';
import SkyLight from 'react-skylight';

import './UpdateForm.css';

const UpdateForm = ({ profileChanges, updateForm }) => {
  // rest of your constructor
  /*this.profileChanges = React.createRef();
  this.profileChanges.show()
  console.log(profileChanges)*/

  var myBigGreenDialog = {
    backgroundColor: '#00897B',
    color: '#F7F7F7',
    width: '70%',
    height: '600px',
    marginTop: '-300px',
    marginLeft: '-35%',
  };

  return (
    <div>
      <section>
        <h1>React SkyLight</h1>
      </section>
      <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref={updateForm} title="A Custom Modal">
        I'm a custom modale!
        </SkyLight>
    </div>
  )

}

export default UpdateForm;
