"use client";
import ViewFeedBackForm from "@/components/ViewFeedBackForm/ViewFeedBackForm";
import React, { useEffect } from "react";
import { useState } from "react";

const Page = ({ params }) => {
  const id = params.id;
  const [feedbackforminfo, setFeedbackforminfo] = useState([]);

  const getData = async (id) => {
    fetch(
      `https://feedbackform-next-js.onrender.com/api/feedbackform/${id}`,

      {
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFeedbackforminfo([data.feedbackform]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    getData(id);
  }, [id]);
  return <ViewFeedBackForm id={id} feedbackforminfo={feedbackforminfo} />;
};

export default Page;
