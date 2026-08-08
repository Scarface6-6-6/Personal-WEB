import "./ProfileHero.css";
import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";

const profileImage = "/gallery/optimized/personal-red-car-900.webp";

export default function ProfileHero() {
  return (
    <section className="profile-hero card">
      <ResponsiveImage
        src={profileImage}
        alt="Ibiza Maniaca red profile"
        className="profile-img"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        sizes="(min-width: 1280px) 1370px, 100vw"
      />
    </section>
  );
}
