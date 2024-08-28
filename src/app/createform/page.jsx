"use client"
import React from "react";
import { Provider } from "react-redux";
import store from "../../components/store/store";
import FeedbackField from "../../components/FeedbackFields/FeedbackField";
const CreateForm = () => {
  return (
    <Provider store={store}>
      <FeedbackField />
    </Provider>
  );
};

export default CreateForm;
