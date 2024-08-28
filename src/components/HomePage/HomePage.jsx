"use client";
import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import './Homepage.css'
import Image from "next/image";
import logo from "../../assets/logo.png";
import { BsPlusLg } from "react-icons/bs";
import surveyicon from "../../assets/surveyicon.png";
import { Button, TextField } from "@mui/material";

import { message, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setNewformtitle } from "../store/reducer";
import axios from "axios";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const formtitle = useSelector((state) => state.data.newformtitle);
  const[submitcount,setSubmitcount]=useState("")
  const dispatch = useDispatch();

  const [feedbackformlist, setFeedbackformlist] = useState([]);
  const fetchdata = async () => {
    try {
      const res = await axios.get(`https://feedbackform-next-js.onrender.com/api/feedbackform`, {
        cache: "no-store",
      });

      if (res.status !== 200) {
        throw new Error("Failed to fetch topics");
      }
      setFeedbackformlist(res.data.feedbackformlist);
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };
  const uploadfeedbackformData = async (id) => {
    try {
      const res = await fetch(
        `https://feedbackform-next-js.onrender.com/api/feedbackform`,

        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ id: id, type: "delete" }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to delet feedbackform");
      }

      message.info("feedback Form deleted");
      fetchdata()
    } catch (error) {
      console.log(error);
    }
  };
  const [formTitle, setFormTitle] = useState(formtitle);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dateformat = (d) => {
    const date = new Date(d);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${year}/${month}/${day}`;
  };
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    console.log(feedbackformlist);
  }, [feedbackformlist]);
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
        console.log(data[0].length);
        setSubmitcount(data[0].length)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  getData("66cec8029f09bd6ae0d6d136")
  return (
    <div className={styles.homepage}>
      <div className={styles.home_header}>
        <Image src={logo} alt="logo" width={64} height={64} />
        <span>USER FEEDBACK</span>
      </div>

      <div className={styles.form_containers}>
        <div className={styles.newform_box}>
          <BsPlusLg
            onClick={() => setIsModalOpen(!isModalOpen)}
            className={styles.plus_icon}
          />

          <p>New form</p>
        </div>
        {feedbackformlist.map((value, index) => {
          return (
            
            <div key={value._id} className={styles.formdata_box}>
              <div className={styles.box_head}>
                <Image src={surveyicon} alt="surveyicon" />
              </div>
              <h3>{value.feedbacktitle}</h3>
              <div className={styles.formdata_details}>
                <p>Submitted</p>
                <p>{submitcount}</p>
              </div>
              <div className={styles.formdata_details}>
                {" "}
                <p>Viewed</p>
                <p>{value.viewed}</p>
              </div>
              <div className={styles.formdata_details}>
                {" "}
                <p>Date published</p>
                <p>{dateformat(value.createdAt)}</p>
              </div>
              <div className={styles.view_button}>
                {" "}
                <Button
                  onClick={() => {
                    router.push(`/viewfeedbackform/${value._id}`);
                  }}
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  VIEW SUBMISSION
                </Button>
              </div>

              <div className={styles.edit_delete_button}>
                <Button
                  onClick={() => {
                    router.push(`/editfeedbackform/${value._id}`);
                  }}
                  variant="contained"
                  color="success"
                  size="large"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    uploadfeedbackformData(value._id);
                    fetchdata();
                  }}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <Modal className={styles.modal_box} open={isModalOpen}>
        <h1>Create Feedback Form</h1>
        <TextField
          className={styles.textField}
          label="Generic Website Rating"
          variant="standard"
          size="medium"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
        />
        <div className={styles.modal_button}>
          <Button
            onClick={() => {
              handleCancel();
              dispatch(setNewformtitle(formTitle));
              router.push("/createform");
            }}
            variant="text"
            color="primary"
            size="medium"
          >
            CREATE
          </Button>
          <Button
            onClick={handleOk}
            variant="text"
            color="primary"
            size="medium"
          >
            CANCEL
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
