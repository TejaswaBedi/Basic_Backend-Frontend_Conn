import React, { useEffect, useState } from "react";
import pic from "../Pr_Img.jpg";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const About = () => {
  const navigate = useNavigate({});
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);
      if (!(await res).status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
  });
  return (
    <>
      <div className="container">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <img src={pic} alt="" style={{ height: "200px" }} />
            </div>
            <div className="col-md-6">
              <div>
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="mt-3 mb-5">RANKINGS: 1/10</p>
                <ul className="mav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                    >
                      About
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                    >
                      Timeline
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input type="submit" name="btnAddMore" value="Edit Profile" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div>
                <p>Links</p>
                <a
                  target="_noob"
                  href="https://www.linkedin.com/in/tejaswa-bedi-8807a0222/"
                >
                  LinkedIn
                </a>
                <br />
                <a target="_noob" href="https://www.instagram.com/tejaswarc11/">
                  Instagram
                </a>
                <br />
                <a target="_noob" href="https://github.com/TejaswaBedi">
                  Github
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5">
              <div className="tab-content profile-tab">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>49526541230</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>
                {/* <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Userrr Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>49526541230</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Ultra Noob</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>random@random.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>7896541230</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
