import React, { Component } from "react";
import MainSection from "../components/MainSection";
import ContentWrapper from "../components/ContentWrapper";
import PageTitle from "../components/PageTitle";
import Editor from "../components/Editors/SlateJSTextEditor";
export default class SlatePage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>Slate Editor</PageTitle>
        <Editor />
        <MainSection />
      </ContentWrapper>
    );
  }
}
