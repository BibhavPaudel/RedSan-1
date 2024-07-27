import React, { useRef, useEffect, useState, useContext } from "react";
import "./spinPython.css";
import { useNavigate } from "react-router-dom";
import { Login } from "../../Login/LoginSpinner/Login";
import { StateContext } from "./SpinTheWheel";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
import spinFrame from "../../images/spinframe2.png";

function SpinPython() {
  const nav = useNavigate();
  const [coupon, setCoupon] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [login, setLogin] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const refbox = useRef();

  //using global state
  const storeName = useSelector((state) => state.user);

  const mainrefbox = useRef();

  // var deg = Math.floor(Math.random() * (x - y)) + y;
  var deg = Math.floor(Math.random() * 8);
  // var deg1=Math.random(1,8);
  const coupons = [500, 200, 500, 0, 200, 0, 1000, 750];

  // alert(deg);
  // var box = document.getElementById('box');
  function myfunction() {
    setSpinning(true);
    console.log(deg);
    const degtorotate = deg + deg * 45 + 360 * 4;
    refbox.current.style.transform = `rotate(${degtorotate}deg)`;
    // var element = document.getElementById('mainbox');
    mainrefbox.current.classList.remove("animate");
    setTimeout(function () {
      mainrefbox.current.classList.add("animate");
      setCoupon(coupons[deg]);
      localStorage.setItem("coupon", `${JSON.stringify(coupons[deg])}`);
    }, 5000); //5000 = 5 second
    setSpinning(false);
  }

  const formData = {
    uid: localStorage.getItem("uid"),
    coupon: localStorage.getItem("coupon"),
  };

  //function to add coupons
  function claimCoupon() {
    alert(" You have won RS " + coupon + " Coupon ID ");
    setShowRes(true);
    localStorage.setItem("claimed", "true");

    axios
      .post(
        `https://redsan-backendd.onrender.com/addcoupon`,
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((req) => {
        //req sucess snackbar activate
        if (req.data.status == "200") {
          alert("user already registered");
          //redirect after .5 sec delay
          setTimeout(() => {
            // nav("/home");
          }, 100);
        } else {
          if (req.data.status == "201") {
            localStorage.setItem("cid", `${JSON.stringify(req.data.cid)}`);
            // localStorage.setItem("loginuser", `${JSON.stringify(fullname)}`);
            // localStorage.setItem("loginemail", `${JSON.stringify(email)}`);

            nav("/spinthewheel");
          }
          if (req.data.status == "500") {
            alert("Kindly Fill all the feilds Properly");
          }
        }
      })
      .catch((e) => {
        console.error(e.error);
        // //activating snackbar for error
        // setState({ ...state, openError: true });
      });
  }

  useEffect(() => {
    localStorage.setItem("showRes", showRes);
  }, [showRes]);

  const ShowRes = localStorage.getItem("showRes");

  const gohome = () => {
    nav("/tejis");
  };

  return (
    // <>
    //   {localStorage.getItem("loginPhone") ||
    //   localStorage.getItem("claimed") === "true" ? (
    //     <div className="spinnerbg">
    //       {/* Coupon result*/}

    //       {localStorage.getItem("claimed") === "true" ? (
    //         <div className="showres">
    //           <div className="resultBox">
    //             {localStorage.getItem("loginuser")}
    //             <span>CID {localStorage.getItem("cid")}</span>{" "}
    //           </div>
    //           <div className="resultBox1">
    //             RS {localStorage.getItem("coupon")}
    //           </div>
    //         </div>
    //       ) : null}

    //       {/* spinner */}
    //       {localStorage.getItem("claimed") === "true" ? null : (
    //         <>
    //           <div className="whitetext">
    //             hey {localStorage.getItem("loginuser")} Spin the wheel to Win
    //             Coupon
    //           </div>
    //           <div id="mainbox" ref={mainrefbox} className="mainbox">
    //             <img class="image-spinner" src={spinFrame} alt="" />
    //             <div id="box" ref={refbox} className="box">
    //               <div className="box1">
    //                 <span className="span1">
    //                   <b>200 RS OFF</b>
    //                 </span>
    //                 <span className="span2">
    //                   <b>500 RS OFF</b>
    //                 </span>
    //                 <span className="span3">
    //                   <b>1000 RS OFF</b>
    //                 </span>
    //                 <span className="span4">
    //                   <b>500 RS OFF</b>
    //                 </span>
    //               </div>
    //               <div className="box2">
    //                 <span className="span1">
    //                   <b>750 RS OFF</b>
    //                 </span>
    //                 <span className="span2">
    //                   <b>0 RS OFF</b>
    //                 </span>
    //                 <span className="span3">
    //                   <b>200 RS OFF</b>
    //                 </span>
    //                 <span className="span4">
    //                   <b>0 RS OFF</b>
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </>
    //       )}
    //       {/* spin button*/}
    //       {localStorage.getItem("showRes") &
    //       !localStorage.getItem("coupon") ? null : (
    //         <button
    //           className="spin"
    //           onClick={() => {
    //             myfunction();
    //           }}
    //         >
    //           SPIN
    //         </button>
    //       )}
    //       {/* claim button*/}
    //       {coupon ? (
    //         <button
    //           className="claim"
    //           onClick={() => {
    //             claimCoupon();
    //           }}
    //         >
    //           Claim Coupon
    //         </button>
    //       ) : null}

    //       {localStorage.getItem("claimed") === "true" ? (
    //         <>
    //           <div className="notebox">
    //             Please take a Screenshot of the coupon
    //           </div>
    //           <div className="notebox">
    //             Pay the discounted price and keep the coupon for reference !
    //           </div>
    //           <div className="notebox">
    //             Contact +919664365954 for any query !{" "}
    //           </div>
    //           <button
    //             className="zjyada"
    //             onClick={() => {
    //               gohome();
    //             }}
    //           >
    //             {" "}
    //             GO HOME{" "}
    //           </button>
    //         </>
    //       ) : null}
    //     </div>
    //   ) : (
    //     <Login></Login>
    //   )}
    // </>

    <>
    <div className="spinnerbg">
    {localStorage.getItem("claimed") === "true" ? (
            <div className="showres">
              <div className="resultBox">
                {localStorage.getItem("loginuser")}
                <span>CID {localStorage.getItem("cid")}</span>{" "}
              </div>
              <div className="resultBox1">
                RS {localStorage.getItem("coupon")}
              </div>
            </div>
          ) : null}

           {/* spinner */}
           {localStorage.getItem("claimed") === "true" ? null : (
            <>
              <div className="whitetext">
                hey {localStorage.getItem("loginuser")} Spin the wheel to Win
                Coupon
              </div>
              <div id="mainbox" ref={mainrefbox} className="mainbox">
                <img class="image-spinner" src={spinFrame} alt="" />
                <div id="box" ref={refbox} className="box">
                  <div className="box1">
                    <span className="span1">
                      <b>200 RS OFF</b>
                    </span>
                    <span className="span2">
                      <b>500 RS OFF</b>
                    </span>
                    <span className="span3">
                      <b>1000 RS OFF</b>
                    </span>
                    <span className="span4">
                      <b>500 RS OFF</b>
                    </span>
                  </div>
                  <div className="box2">
                    <span className="span1">
                      <b>750 RS OFF</b>
                    </span>
                    <span className="span2">
                      <b>0 RS OFF</b>
                    </span>
                    <span className="span3">
                      <b>200 RS OFF</b>
                    </span>
                    <span className="span4">
                      <b>0 RS OFF</b>
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* spin button*/}
          {localStorage.getItem("showRes") &
          !localStorage.getItem("coupon") ? null : (
            <button
              className="spin"
              onClick={() => {
                myfunction();
              }}
            >
              SPIN
            </button>
          )}
          {/* claim button*/}
          {coupon ? (
            <button
              className="claim"
              onClick={() => {
                claimCoupon();
              }}
            >
              Claim Coupon
            </button>
          ) : null}

{localStorage.getItem("claimed") === "true" ? (
            <>
              <div className="notebox">
                Please take a Screenshot of the coupon
              </div>
              <div className="notebox">
                Pay the discounted price and keep the coupon for reference !
              </div>
              <div className="notebox">
                Contact +919664365954 for any query !{" "}
              </div>
              <button
                className="zjyada"
                onClick={() => {
                  gohome();
                }}
              >
                {" "}
                GO HOME{" "}
              </button>
            </>
          ) : null}
        
    </div>

    </>
  );
}
export default SpinPython;
