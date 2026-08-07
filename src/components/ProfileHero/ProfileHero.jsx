import "./ProfileHero.css";
import profileImage from "../../assets/gallery/personal-red-car.jpg";

export default function ProfileHero() {
  return (
    <section className="profile-hero card">
      <img src={profileImage} alt="Ibiza Maniaca red profile" className="profile-img" />
    </section>
  );
}
