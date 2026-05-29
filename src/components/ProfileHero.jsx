import profileImage from "../assets/profile.jpeg";

export default function ProfileHero() {
  return (
    <section className="profile-hero card">
      <img src={profileImage} alt="Scarface_666" className="profile-img" />

      <div className="profile-info">
        <span className="label">PROFILE</span>
        <h1>Scarface_666</h1>
        <p>
          Un espacio personal para contar lo que soy, lo que me gusta y lo que voy descubriendo.
        </p>
      </div>
    </section>
  );
}
