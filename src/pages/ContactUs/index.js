import React, { useContext } from "react";

import { HeaderMenu } from "../../components/HeaderMenu/";
import { LeftMenu } from "../../components/LeftMenu/";
import { Footer } from "../../components/Footer/";

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
                  src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
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
                  src="https://www.pnglib.com/wp-content/uploads/2021/02/instagram-logo-png_6023f9ae0feb9-680x680.png"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
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
