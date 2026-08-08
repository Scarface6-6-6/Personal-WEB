import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";
import ProfileHero from "../components/ProfileHero/ProfileHero";
import { ResponsiveImage } from "../components/ResponsiveImage/ResponsiveImage";
import { LoadingBar } from "../components/terminal/LoadingBar";
import { TerminalCard } from "../components/terminal/TerminalCard";
import { TerminalCommand } from "../components/terminal/TerminalCommand";
import { TerminalShell } from "../components/terminal/TerminalShell";
import { getHomeGalleryHighlights } from "../data/gallery";
import { homeContent } from "../data/homeContent";
import { getSupportedLanguage } from "../data/language";

export default function Home() {
  const { i18n } = useTranslation();
  const language = getSupportedLanguage(i18n.language);
  const content = homeContent[language];
  const photoRoll = getHomeGalleryHighlights(language);
  const [visibleLines, setVisibleLines] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const profileLines = useMemo(
    () => Object.entries(content.profile).map(([key, value]) => `${key}: ${value}`),
    [content.profile]
  );
  const activePhoto = photoRoll[activePhotoIndex] ?? photoRoll[0];

  useEffect(() => {
    setVisibleLines(0);
    setIsReady(false);
    setActivePhotoIndex(0);
  }, [language]);

  useEffect(() => {
    if (!isReady || photoRoll.length <= 1) {
      return undefined;
    }

    const sweepTimer = globalThis.setInterval(() => {
      setActivePhotoIndex((currentIndex) => (currentIndex + 1) % photoRoll.length);
    }, 3000);

    return () => globalThis.clearInterval(sweepTimer);
  }, [isReady, photoRoll.length]);

  useEffect(() => {
    if (visibleLines >= content.bootLines.length) {
      const readyTimer = globalThis.setTimeout(() => setIsReady(true), 550);

      return () => globalThis.clearTimeout(readyTimer);
    }

    const lineTimer = globalThis.setTimeout(() => {
      setVisibleLines((currentLines) => currentLines + 1);
    }, content.bootLines[visibleLines]?.delay ?? 260);

    return () => globalThis.clearTimeout(lineTimer);
  }, [content.bootLines, visibleLines]);

  return (
    <TerminalShell className="home">
      <TerminalCard className="home__boot-card">
        <TerminalCommand typing>$ boot scarface.service</TerminalCommand>
        <pre>{content.bootLines.slice(0, visibleLines).map((line) => line.text).join("\n")}</pre>
        {!isReady && <p className="home__loading">{content.loading}</p>}
        {isReady && (
          <div className="home__boot-summary">
            <LoadingBar label="Profile" value={100} />
            <LoadingBar label="Curiosity" value={100} />
            <LoadingBar label="Runtime" value={90} />
          </div>
        )}
      </TerminalCard>

      {isReady && (
        <div className="home__loaded-content">
          <ProfileHero />

          <section className="home__terminal-grid">
            <TerminalCard>
              <pre>{profileLines.join("\n")}</pre>
            </TerminalCard>

            <TerminalCard>
              <TerminalCommand>$ now_playing</TerminalCommand>
              <pre>{content.nowPlaying.join("\n")}</pre>
            </TerminalCard>
          </section>

          <TerminalCard>
            <TerminalCommand>$ system_load</TerminalCommand>
            <div className="home__bars">
              {content.bars.map((bar) => (
                <LoadingBar key={bar.label} label={bar.label} value={bar.value} />
              ))}
            </div>
          </TerminalCard>

          <TerminalCard className="home__photo-roll-card">
            <TerminalCommand>$ mount photo_roll</TerminalCommand>
            <p>{content.photoRollIntro}</p>
            {activePhoto && (
              <div className="home__photo-sweep" aria-live="polite">
                <figure className="home__photo-sweep-frame" key={activePhoto.id}>
                  <ResponsiveImage
                    src={activePhoto.src}
                    alt={activePhoto.title}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1280px) calc(100vw - 596px), 100vw"
                  />
                  <div className="home__photo-sweep-shine" aria-hidden="true" />
                  <figcaption>
                    <span>{activePhoto.id}</span>
                    <strong>{activePhoto.title}</strong>
                    <small>{activePhoto.mood}</small>
                  </figcaption>
                </figure>

                <div className="home__photo-sweep-dots" aria-label="photo_roll status">
                  {photoRoll.map((photo, index) => (
                    <button
                      key={photo.id}
                      type="button"
                      className={index === activePhotoIndex ? "is-active" : ""}
                      aria-label={`show ${photo.title}`}
                      aria-pressed={index === activePhotoIndex}
                      onClick={() => setActivePhotoIndex(index)}
                    />
                  ))}
                </div>
              </div>
            )}
          </TerminalCard>
        </div>
      )}
    </TerminalShell>
  );
}
