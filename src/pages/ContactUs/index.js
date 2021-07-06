import React from "react";

import { HeaderMenu } from "../../components/HeaderMenu/";
import { LeftMenu } from "../../components/LeftMenu/";
import { Footer } from "../../components/Footer/";
import WppIcon from '../../images/wpp.png';
import InstaIcon from '../../images/insta.png';
import FaceIcon from '../../images/face.png';
import "./contactus.css";

const ContactUs = () => {
  return (
    <div className="container-home">
      <HeaderMenu />
      <LeftMenu />
      <div className="container-contact">
        <div className="listcontact">
          <div className="contact">
            <div className="contact-item">
              <div className="contact-item">
                <img
                  src={WppIcon}
                  alt="WhatsApp icon"
                  class="center"
                ></img>
                <h1>WhatsApp</h1>
              </div>
              <h1 className="title-card-contact">
                <a href="#link">Clique aqui!</a>
              </h1>
            </div>
          </div>
          <div className="contact">
            <div className="contact-item">
              <div className="contact-item">
                <img
                  src={InstaIcon}
                  alt="Insta icon"
                  class="center"
                ></img>
                <h1>Instagram</h1>
              </div>
              <h1 className="title-card-contact">
                <a href="#link">Clique aqui!</a>
              </h1>
            </div>
          </div>
          <div className="contact">
            <div className="contact-item">
              <div className="contact-item">
                <img
                  src={FaceIcon}
                  alt="Face icon"
                  class="center"
                ></img>
                <h1>Facebook</h1>
              </div>
              <h1 className="title-card-contact">
                <a href="#link">Clique aqui!</a>
              </h1>
            </div>
          </div>
        </div>
        <h1>Siga-nos nas redes sociais ;)</h1>
      </div>
      <Footer />
    </div>
  );
};

export { ContactUs };
