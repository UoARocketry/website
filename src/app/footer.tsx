import "./styles/footer.css";
import logo from "./resources/logo.png";
import discord from "./resources/discord-mark-blue.svg";
import instagram from "./resources/Instagram_Glyph_Gradient.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="center">
        <Image className="club-logo" src={logo} alt="UARC Logo"></Image>
      </div>
      <div className="center">
        <p>
          <u>uoarocketryclub@gmail.com</u>
        </p>
      </div>
      <div className="center" style={{ margin: "10px 0" }}>
        <div style={{ display: "flex" }}>
          <Image
            className="social-logo"
            src={discord}
            alt="Discord Logo"
          ></Image>
          <Image
            className="social-logo"
            src={instagram}
            alt="Instagram Logo"
          ></Image>
        </div>
      </div>
      <div className="center">
        <p className="copyright">
          © Copyright 2024 University Of Auckland Rocketry Club
        </p>
      </div>
    </footer>
  );
}
