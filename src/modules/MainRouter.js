import PropTypes from "prop-types";
import React, { Component } from "react";
import { Router, Route, browserHistory } from "react-router";
import App from "./App";
import HomePage from "../pages/HomePage";
import EditorJSPage from "../pages/EditorJSPage";
import SlatePage from "../pages/SlatePage";
import CKEditorPage from "../pages/CKEditorPage";

export default class MainRouter extends Component {
  constructor() {
    super();
    this.state = {
      navOpenState: {
        isOpen: true,
        width: 304
      }
    };
  }

  getChildContext() {
    return {
      navOpenState: this.state.navOpenState
    };
  }

  appWithPersistentNav = () => props => (
    <App onNavResize={this.onNavResize} {...props} />
  );

  onNavResize = navOpenState => {
    this.setState({
      navOpenState
    });
  };

  render() {
    return (
      <Router history={browserHistory}>
        <Route component={this.appWithPersistentNav()}>
          <Route path="/" component={HomePage} />
          <Route path="/editor" component={EditorJSPage} />
          <Route path="/slate" component={SlatePage} />
          <Route path="/ckeditor" component={CKEditorPage} />
        </Route>
      </Router>
    );
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object
};
