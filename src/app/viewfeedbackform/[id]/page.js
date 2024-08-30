"use client";
import ViewFeedBackForm from "@/components/ViewFeedBackForm/ViewFeedBackForm";
import React, { useEffect } from "react";
import { useState } from "react";

const Page = ({ params }) => {
  const id = params.id;
  const [feedbackforminfo, setFeedbackforminfo] = useState([]);

  const getData = async (id) => {
    fetch(
      `http://localhost:3000/api/feedbackform`,

      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: id, type: "singledata" }),
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
