import React, { useState, useEffect } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
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
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
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

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();
    if (!data) {
      console.log("Message not sent");
    } else {
      alert("Message sent");
      setUserData({ ...userData, message: "" });
    }
  };
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="contact_info_item d-flex justify-content-center align-items-center">
                <div>
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 1111 543 2198</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-center align-items-center">
                <div>
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">random@random.com</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-center align-items-center">
                <div>
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">
                    Qwertyuiop Asdfghjkl Zxcvbnm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_form mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container_py-5">
                <div className="contact_form_title">Get in Touch</div>
                <form id="contact_form" method="POST">
                  <div className="contact_form_name d-flex jusify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your Name"
                      required="true"
                      onChange={handleInputs}
                      name="name"
                      value={userData.name}
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Your Email"
                      required="true"
                      onChange={handleInputs}
                      name="email"
                      value={userData.email}
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Your Number"
                      required="true"
                      onChange={handleInputs}
                      name="phone"
                      value={userData.phone}
                    />
                  </div>
                  <div className="contact_form_text mt-4">
                    <textarea
                      className="text_field contact_form_message"
                      placeholder="Message"
                      cols="75"
                      rows="6"
                      onChange={handleInputs}
                      name="message"
                      value={userData.message}
                    ></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                      onClick={contactForm}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
