import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";
import ProfileHero from "../components/ProfileHero/ProfileHero";
import SectionCard from "../components/SectionCard/SectionCard";

const randomImages = [
  "https://picsum.photos/seed/andres-a/1200/700",
  "https://picsum.photos/seed/andres-b/1200/700",
  "https://picsum.photos/seed/andres-c/1200/700",
  "https://picsum.photos/seed/andres-d/1200/700",
  "https://picsum.photos/seed/andres-e/1200/700"
];

export default function Home() {
  const { t } = useTranslation();
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setImageIndex((prev) => (prev + 1) % randomImages.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <ProfileHero />

      <SectionCard label={t("home.profileLabel")} title={t("home.profileTitle")} className="home__box home__box--profile">
        {t("home.description1")}
      </SectionCard>

      <SectionCard label={t("home.galleryLabel")} title={t("home.galleryTitle")} className="home__box home__box--gallery">
        <div
          className="home__gallery-preview"
          style={{ backgroundImage: `url(${randomImages[imageIndex]})` }}
        />
      </SectionCard>

      <SectionCard label={t("home.readmeLabel")} title={t("home.readmeTitle")} className="home__box home__box--readme">
        {t("home.description2")}
      </SectionCard>

      <SectionCard
        label={t("home.musicLabel")}
        title={t("home.musicTitle")}
        className="home__box home__box--song"
      >
        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="home__song-link"
        >
          {t("home.songLink")}
        </a>
      </SectionCard>
    </div>
  );
}

