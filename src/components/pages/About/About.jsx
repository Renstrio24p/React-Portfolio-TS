import { Crown, GlassEmoji, HeartEmoji, Profile2, Webpack } from "../../elements/images";
import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <div className="a-left">
        <div>
          <span>Hello I'm</span>
          <h2>Waren Gador</h2>
          <p>
            a web developer based in Philippines with a passion for creating
            responsive and user-friendly websites. With 1 year of experience, I
            specialize in front-end and back-end development, focusing on
            performance optimization and SEO. Let's collaborate on your next
            project. Reach out always.
          </p>
        </div>
        <button className="button a-button">Download CV <box-icon type='solid' name='cloud-download'></box-icon></button>
      </div>
      <div className="a-right">
        <div className="a-logo">
            <img className="profile" src={Profile2} alt="profile image" />
            <div className="card a-card1">
                <div className="card-img">
                    <img src={Crown} alt="crown img" />
                </div>
                <p>UI / UX Designer</p>
            </div>
            <div className="card a-card2">
                <div className="card-img">
                    <img src={Webpack} alt="crown img" />
                </div>
                <p>Webpack JS Dev</p>
            </div>
            <div className="emoji a-emoji1">
                <img src={HeartEmoji} alt="Emoji Glass" />
            </div>
            <div className="emoji a-emoji2">
                <img src={GlassEmoji} alt="Emoji Glass" />
            </div>
        </div>
      </div>
    </div>
  );
}
