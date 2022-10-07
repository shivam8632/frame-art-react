import React from 'react';
import './box-model.scss';
import Testing from '../../Test';

const BoxModel = () => {
  return (
    <div className="canvas" id='prod-image'>
      <Testing />
      <script src="../node_modules/dat.gui/build/dat.gui.min.js" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r72/three.min.js" defer></script>
    </div>
  )

};

export default BoxModel;