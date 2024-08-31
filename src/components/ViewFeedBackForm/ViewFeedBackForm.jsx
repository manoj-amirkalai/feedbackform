"use client";
import React, { useEffect, useState } from "react";
import "./ViewFeedBackForm.css";
import { IoChevronBack } from "react-icons/io5";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { useRouter } from "next/navigation";
import { Flex, Spin } from "antd";

const ViewFeedBackForm = ({ feedbackforminfo, id }) => {
  const [openitem, setOpenitem] = useState("");

  const router = useRouter();

  const [feedback, setFeedback] = useState();
  const getData = async (id) => {
    fetch(
      `https://feedbackform-next-js.onrender.com/api/feedbackform`,

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
  const contentStyle = {
    padding: 50,
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
  };
  const content = <div style={contentStyle} />;

  return (
    <>
      <div className="viewpage">
        <div className="viewpage_header">
          <Image
             onClick={() => {
              router.push("/");
            }}
            className="logo"
            src={logo}
            alt="logo"
            width={64}
            height={64}
          />
          <span>USER FEEDBACK</span>
        </div>{" "}
        {feedbackforminfo &&
          feedbackforminfo.map((data) => {
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
                  <div className="view_feedback_form_title_date">
                    created date: {data.dateFormatedvalue}
                  </div>
                </div>
                <div
                  className={
                    openitem
                      ? "view_container view_container_mobile"
                      : " view_container "
                  }
                >
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
                    {data.urlValue && (
                      <a
                        href="https://manoj-amirkalai-portfolio.onrender.com"
                        target="_blank"
                      >
                        Page URL:{" "}
                        <span style={{ color: "blue" }}> {data.urlValue}</span>
                      </a>
                    )}
                    {data.dateSwitch && <p>date: {data.dateFormatedvalue}</p>}
                    {data.timeSwitch && <p>Time: {data.timeFormatedvalue}</p>}
                  </div>
                  <p className="feedback_list">Feedback List</p>
                  {!feedback && (
                    <Flex className="spin_loading" align="center" gap="middle">
                      <Spin tip="Loading..." size="large">
                        {content}
                      </Spin>
                    </Flex>
                  )}
                  {!feedback?.length > 0 ? (
                    <p className="no_feedback_data">
                      No Feedback Submitted yet
                    </p>
                  ) : (
                    feedback.map((value, index) => {
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
                                    openitem === value._id ? "updown" : ""
                                  }
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
                    })
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ViewFeedBackForm;
