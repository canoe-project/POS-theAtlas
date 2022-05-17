import React, { Component } from "react";
import MainSection from "../components/MainSection";
import ContentWrapper from "../components/ContentWrapper";
import PageTitle from "../components/PageTitle";
import Editor from "../components/Editors/CKEditorTextEditor";
export default class CKEditorPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>CKEditor Editor</PageTitle>
        <Editor />
        <MainSection />
      </ContentWrapper>
    );
  }
}
