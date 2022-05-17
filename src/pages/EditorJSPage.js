import React, { Component } from "react";
import MainSection from "../components/MainSection";
import ContentWrapper from "../components/ContentWrapper";
import PageTitle from "../components/PageTitle";
import Editor from "../components/Editors/EditorJSTextEditor";
export default class HomePage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>Editor JS</PageTitle>
        <Editor />
        <MainSection />
      </ContentWrapper>
    );
  }
}
