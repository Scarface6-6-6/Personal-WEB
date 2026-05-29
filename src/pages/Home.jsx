import { useEffect, useState } from "react";
import "./Home.css";
import TopBar from "../components/TopBar/TopBar";
import SocialRail from "../components/SocialRail/SocialRail";
import RightMenu from "../components/RightMenu/RightMenu";
import ProfileHero from "../components/ProfileHero/ProfileHero";
import SectionCard from "../components/SectionCard/SectionCard";

const randomImages = [
  "https://picsum.photos/seed/andres-a/1200/700",
  "https://picsum.photos/seed/andres-b/1200/700",
  "https://picsum.photos/seed/andres-c/1200/700",
  "https://picsum.photos/seed/andres-d/1200/700",
  "https://picsum.photos/seed/andres-e/1200/700"
];

const DESCRIPTION_1 =
  "Un espacio personal para contar lo que soy, lo que me gusta y lo que voy descubriendo.";

const DESCRIPTION_2 =
  "Ingeniero en software. En este lugar comparto fotos, gustos musicales, links y lo que se me ocurra que pueda contar un poco mas de mi.";

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setImageIndex((prev) => (prev + 1) % randomImages.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <TopBar />

      <div className="home__layout">
        <SocialRail />

        <main className="home__content">
          <ProfileHero />

          <SectionCard label="PROFILE" title="Scarface_666" className="home__box home__box--profile">
            {DESCRIPTION_1}
          </SectionCard>

          <SectionCard label="GALERIA" title="Rollo de fotos" className="home__box home__box--gallery">
            <div
              className="home__gallery-preview"
              style={{ backgroundImage: `url(${randomImages[imageIndex]})` }}
            />
          </SectionCard>

          <SectionCard label="README" title="Hola, Soy Andres Pantoja" className="home__box home__box--readme">
            {DESCRIPTION_2}
          </SectionCard>

          <SectionCard
            label="MUSICA"
            title="Apartado de Cancion de la Semana"
            className="home__box home__box--song"
          >
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="home__song-link"
            >
              Escuchar cancion de la semana
            </a>
          </SectionCard>
        </main>

        <RightMenu />
      </div>
    </div>
  );
}
