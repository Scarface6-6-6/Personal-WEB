import "./ProfileHero.css";
import profileImage from "../../assets/Profile_Car.png";

export default function ProfileHero() {
  return (
    <section className="profile-hero card">
      <img src={profileImage} alt="Foto de presentacion" className="profile-img" />
    </section>
  );
}
