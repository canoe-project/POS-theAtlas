import React, { Component } from "react";
import ReactDOM from "react-dom";

import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./EditorJSContants";
import { data } from "./EditorJSData";

import Firebase from "../firebase";

class EditorJSTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataState: {},
      checked: false
    };
  }

  async onSave() {
    const outputData = await this.editorInstance.save();
    console.log("outputData", outputData);
    this.saveToFirebase(outputData);
  }

  saveToFirebase(saveData) {
    Firebase.firestore()
      .collection("course")
      .doc("editor")
      .set(saveData)
      .then(() => {
        console.log("saved to firebase");
      })
      .catch(err => console.log("error writing to firestore", err));
  }

  componentDidMount() {
    Firebase.firestore()
      .collection("course")
      .doc("editor")
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("exists", doc.data());
          this.setState({ dataState: doc.data(), checked: true });
        } else {
          console.log("new");
          this.setState({ checked: true });
        }
      });
  }

  render() {
    if (this.state.checked) {
      return (
        <EditorJs
          tools={EDITOR_JS_TOOLS}
          instanceRef={instance => (this.editorInstance = instance)}
          onChange={this.onSave.bind(this)}
          data={this.state.dataState}
        />
      );
    } else {
      return <div />;
    }
  }
}
export default EditorJSTextEditor;
