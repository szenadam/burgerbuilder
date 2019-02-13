import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {

  state = {
    showSideDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
