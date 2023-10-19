import { Map } from "../../elements/images";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <img src={Map} className="map-image" alt="map" />
      <div className="c-left">
        <h2>Let's Communicate</h2>
        <span>
          Tell me about your Projects <br /> Together
        </span>
        <p>Let's create something amazing!.</p>
        <div className="c-email-box">
          <div className="c-icon">
            <box-icon name="mail-send" size={"sm"}></box-icon>
          </div>
          <div>
            <p>Email me at</p>
            <p className="email">renstrio@outlook.com</p>
          </div>
        </div>
      </div>
      <div className="c-right">
        <div className="c-form-div">
          <form action="">
            <h2>Leave Us a message</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
            <textarea
              name="message"
              rows={7}
              placeholder="Message.."
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
