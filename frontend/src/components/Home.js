import React, { useState, useEffect } from "react";

const Home = () => {
  const [userData, setUserData] = useState("");
  const [show, setShow] = useState(false);
  const callAboutPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data.name);
      setShow(true);
      if (!data.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "92vh",
        color: "white",
        background: "linear-gradient(#72a0c1, #002244)",
      }}
    >
      <div style={{ marginTop: "15%" }}>
        <p style={{ textAlign: "center", fontSize: "1.6em" }}>WELCOME</p>
        <h1 style={{ fontSize: "3.5em", textAlign: "center" }}>{userData}</h1>
        <br />
        <h2 style={{ fontSize: "2.5em", textAlign: "center" }}>
          {show ? "Happy to see you back" : "We are the MERN developer"}
        </h2>
      </div>
    </div>
  );
};

export default Home;
