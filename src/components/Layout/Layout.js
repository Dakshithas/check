import React from 'react';
import style1 from './Layout.module.css';
import Aux from '../../hoc/Auxi';
const layout = (props) => (
  <Aux>
    <div>Toolbar, sideDrawer, Backdrop </div>
    <main className={style1.Content}>{props.children}</main>
  </Aux>
);
export default layout;
    