import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center mt-4">
        <div className="center social-icons ">
          <ul>
            <li>
              {" "}
              <a href="https://github.com/Mdizrail92 ">
                <i
                  style={{ color: "rgb(163, 163, 163" }}
                  className="fab fa-github"
                ></i>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://www.facebook.com/profile.php?id=100007950183884 ">
                <i
                  style={{ color: "rgb(15, 112, 177)" }}
                  className="fab fa-facebook"
                ></i>
              </a>
            </li>
            <li>
              {" "}
              <a href="https://www.instagram.com/israil_92/ ">
                {" "}
                <i
                  style={{ color: "#ff8744bd" }}
                  className="fab fa-instagram"
                ></i>
              </a>
            </li>

            <li>
              {" "}
              <a href="https://www.snapchat.com/add/israil_alam?share_id=hHgUKpkcti8&locale=en-US">
                {" "}
                <i
                  style={{ color: "rgb(211, 159, 15)" }}
                  className="fab fa-snapchat-ghost"
                ></i>
              </a>
            </li>
            <li>
              {" "}
              <a href="https://twitter.com/Izrail03620970 ">
                {" "}
                <i
                  style={{ color: "rgb(59, 146, 228)" }}
                  className="fab fa-twitter"
                ></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="center">© 2022 Israil, Inc. All rights reserved.</div>
      </footer>
    </>
  );
};

export default Footer;
