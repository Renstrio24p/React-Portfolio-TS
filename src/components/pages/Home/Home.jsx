import { Profile, Signature } from "../../elements/images";
import "./Home.scss";
import Loader from 'react-loaders'

export default function Home() {

  return (
    <>
    <div className="home">
      <div className="h-left">
        <span>Hi, I'm</span>
        <h2>Waren Gador</h2>
        <span>Software Engineer</span>
        <p>
          "Coding is akin to cooking, where you need to pursue perfection and
          exercise creativity."
        </p>
        <button className="button h-button">Hire me</button>
        <div className="social-links">
          <ul>
            <li>
              <box-icon type="logo" name="gitlab" color={'var(--gold)'}></box-icon>
            </li>
            <li>
              <box-icon type="logo" name="gmail" color={'var(--red)'}></box-icon>
            </li>
            <li>
              <box-icon type="logo" name="discord-alt" color={'var(--white)'}></box-icon>
            </li>
            <li>
                <box-icon type='logo' name='microsoft' color={'var(--typescript)'}></box-icon>
            </li>
            <li>
                <box-icon type='logo' name='stack-overflow' color={'orange'}></box-icon>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-right">
        <div className="profile-div">
          <img src={Profile} alt="my image" />
        </div>
      </div>
    <Loader type="ball-clip-rotate-multiple" active/>
    </div>
    </>
  );
}
