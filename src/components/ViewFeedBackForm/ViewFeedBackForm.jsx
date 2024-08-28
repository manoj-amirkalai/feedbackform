"use client";
import React, { useEffect, useState } from "react";
import "./ViewFeedBackForm.css";
import { IoChevronBack } from "react-icons/io5";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { useRouter } from "next/navigation";

const ViewFeedBackForm = ({ feedbackforminfo, id }) => {
  const [openitem, setOpenitem] = useState("");



  
  const router = useRouter();

  const [feedback, setFeedback] = useState();
  const getData = async (id) => {
    fetch(
      `http://localhost:3000/api/feedbackform`,

      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: id, type: "feedbackdata" }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFeedback(data[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    getData(id);
  }, [id]);
  useEffect(() => {
    console.log("feedback", feedback);
  }, [feedback]);

  return (
    <>
      <div className="viewpage">
        <div className="viewpage_header">
          <Image src={logo} alt="logo" width={64} height={64} />
          <span>USER FEEDBACK</span>
        </div>{" "}
        {feedbackforminfo.map((data) => {
          return (
            <div key={data._id}>
              {" "}
              <div className="view_feedback_form_title">
                <div className="view_feedback_form_title_lable">
                  <p
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <IoChevronBack />
                  </p>
                  <p>{data.feedbacktitle}</p>
                </div>
                <div>created date: {data.dateFormatedvalue}</div>
              </div>
              <div className="view_container">
                <div className="view_submitted">
                  <div className="view_box">
                    <p>{data.viewed}</p>
                    <p>VIEWS</p>
                  </div>
                  <div className="submitted_box">
                    <p>{feedback?.length}</p>
                    <p>Submitted</p>
                  </div>
                </div>
                <div className="feedback_base_info">
                  <p>Page URL: {data.urlValue}</p>
                  <p>date: {data.dateFormatedvalue}</p>
                  <p>Time: {data.timeFormatedvalue}</p>
                </div>
                <p className="feedback_list">Feedback List</p>
                {feedback.map((value, index) => {
                  return (
                    <div
                      key={value._id}
                      id="feedback_list_items"
                      className={
                        openitem === value._id 
                          ? "feedback_list_items feedback_list_items_bigheight"
                          : "feedback_list_items feedback_list_items_smallheight"
                      }
                    >
                      <div>
                        <p>Feedback {index + 1}</p>
                        <div>
                          <p>date: {value.createdAt.slice(0, 10)}</p>
                          <p
                            onClick={() => {
                              setOpenitem(value._id);
                             
                            }}
                          >
                            <IoChevronBack
                           
                              className={
                                openitem === value._id  ? "updown" : ""}
                            />
                          </p>
                        </div>
                      </div>
                      {value.textarea && (
                        <div className="question_answer">
                          <p>Q: {data.feedbackform[0].label}</p>
                          <span>{value.textarea}</span>
                        </div>
                      )}
                      {value.numberrating && (
                        <div className="question_answer">
                          <p>Q: {data.feedbackform[1].label}</p>
                          <span>{value.numberrating}</span>
                        </div>
                      )}
                      {value.star && (
                        <div className="question_answer">
                          <p>Q: {data.feedbackform[2].label}</p>
                          <span>{value.star}</span>
                        </div>
                      )}{" "}
                      {value.smile && (
                        <div className="question_answer">
                          <p>Q: {data.feedbackform[3].label}</p>
                          <span>{value.smile}</span>
                        </div>
                      )}
                      {value.singleline && (
                        <div className="question_answer">
                          <p>Q: {data.feedbackform[4].label}</p>
                          <span>{value.singleline}</span>
                        </div>
                      )}{" "}
                      {value.radio && (
                        <div className="question_answer">
                          <p>Q: {data.feedbackform[5].label}</p>
                          <span>{value.radio}</span>
                        </div>
                      )}{" "}
                      {value.category && (
                        <div className="question_answer">
                          <p>Q: {data.feedbackform[6].label}</p>
                          <span>{value.category}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViewFeedBackForm;
