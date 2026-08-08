import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ResponsiveImage } from "../components/ResponsiveImage/ResponsiveImage";
import { CommandButton } from "../components/terminal/CommandButton";
import { TerminalCard } from "../components/terminal/TerminalCard";
import { TerminalCommand } from "../components/terminal/TerminalCommand";
import { TerminalShell } from "../components/terminal/TerminalShell";
import { getBestMomentItems } from "../data/bestMoments";
import { getGalleryPageContent } from "../data/gallery";
import styles from "../Styles/Galeria.module.css";

const bestMomentsCategory = "best_moments";
const visibleCategories = [bestMomentsCategory, "ibiza", "places", "sunsets", "nature", "concerts"];

export default function Galeria() {
  const { i18n } = useTranslation();
  const content = getGalleryPageContent(i18n.language);
  const bestMomentItems = useMemo(() => getBestMomentItems(i18n.language), [i18n.language]);
  const [activeCategory, setActiveCategory] = useState(bestMomentsCategory);
  const [activePhotoId, setActivePhotoId] = useState(bestMomentItems[0]?.id ?? "");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const visiblePhotos = useMemo(() => {
    if (activeCategory === bestMomentsCategory) {
      return getBestMomentsByMonth(bestMomentItems);
    }

    return content.items.filter((photo) => photo.category === activeCategory);
  }, [activeCategory, bestMomentItems, content.items]);

  const activePhoto = visiblePhotos.find((photo) => photo.id === activePhotoId) ?? visiblePhotos[0] ?? content.items[0];
  const groupedMoments = useMemo(() => groupByYearAndMonth(visiblePhotos), [visiblePhotos]);
  const groupedConcerts = useMemo(() => groupByArtist(visiblePhotos), [visiblePhotos]);

  useEffect(() => {
    setActiveCategory(bestMomentsCategory);
    setActivePhotoId(bestMomentItems[0]?.id ?? "");
    setSelectedPhoto(null);
  }, [content, bestMomentItems]);

  useEffect(() => {
    if (!visiblePhotos.some((photo) => photo.id === activePhotoId)) {
      setActivePhotoId(visiblePhotos[0]?.id ?? "");
    }
  }, [activePhotoId, visiblePhotos]);

  return (
    <TerminalShell className={styles.galleryShell}>
      <section className={styles.galleryIntro}>
        <TerminalCommand typing>{content.command}</TerminalCommand>
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
      </section>

      {activePhoto && (
        <section className={styles.galleryStage}>
          <button
            type="button"
            className={styles.heroFrame}
            aria-label={`${content.momentLabel}: ${activePhoto.title}`}
            onClick={() => setSelectedPhoto(activePhoto)}
          >
            <ResponsiveImage
              src={activePhoto.src}
              alt={activePhoto.title}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(min-width: 1024px) 62vw, 100vw"
            />
            <span>{content.momentLabel}: {activePhoto.id}</span>
          </button>

          <TerminalCard className={styles.heroCopy}>
            <TerminalCommand>$ preview selected_photo</TerminalCommand>
            <h2>{activePhoto.title}</h2>
            <p>{activePhoto.description}</p>
            <pre>{buildPhotoMetadata(activePhoto)}</pre>
          </TerminalCard>
        </section>
      )}

      <TerminalCard className={styles.collectionPanel}>
        <div className={styles.collectionHeader}>
          <TerminalCommand>$ filter collection</TerminalCommand>
          <span>{visiblePhotos.length} {content.selectedLabel}</span>
        </div>

        <div className={styles.categoryRail} aria-label={content.collectionLabel}>
          {visibleCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={category === activeCategory ? styles.activeCategory : ""}
              aria-pressed={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            >
              {category === bestMomentsCategory ? content.bestMomentsLabel : content.categories[category]}
            </button>
          ))}
        </div>
      </TerminalCard>

      <section className={styles.momentGrid} data-category={activeCategory}>
        {activeCategory === "concerts"
          ? Object.entries(groupedConcerts).map(([artist, photos]) => (
              <TerminalCard key={artist} className={styles.timelineCard}>
                <h3>{artist}</h3>
                <div className={styles.timelineMonth}>
                  <span>├── artist.module</span>
                  <div className={styles.photoStrip}>
                    {photos.map((photo) => (
                      <button
                        key={photo.id}
                        type="button"
                        className={photo.id === activePhoto?.id ? styles.activePhoto : ""}
                        aria-label={`${content.momentLabel}: ${photo.title}`}
                        aria-pressed={photo.id === activePhoto?.id}
                        onClick={() => setActivePhotoId(photo.id)}
                        onDoubleClick={() => setSelectedPhoto(photo)}
                      >
                        <ResponsiveImage
                          src={photo.src}
                          alt={photo.title}
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1024px) 220px, (min-width: 480px) 50vw, 100vw"
                        />
                        <span>{photo.id}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </TerminalCard>
            ))
          : activeCategory === bestMomentsCategory
            ? Object.entries(groupByMonth(visiblePhotos)).map(([month, photos]) => (
                <TerminalCard key={month} className={styles.timelineCard}>
                  <h3>{month}</h3>
                  <div className={styles.timelineMonth}>
                    <span>├── best.moments</span>
                    <div className={styles.photoStrip}>
                      {photos.map((photo) => (
                        <button
                          key={photo.id}
                          type="button"
                          className={photo.id === activePhoto?.id ? styles.activePhoto : ""}
                          aria-label={`${content.momentLabel}: ${photo.title}`}
                          aria-pressed={photo.id === activePhoto?.id}
                          onClick={() => setActivePhotoId(photo.id)}
                          onDoubleClick={() => setSelectedPhoto(photo)}
                        >
                          <ResponsiveImage
                            src={photo.src}
                            alt={photo.title}
                            loading="lazy"
                            decoding="async"
                            sizes="(min-width: 1024px) 220px, (min-width: 480px) 50vw, 100vw"
                          />
                          <span>{photo.id}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </TerminalCard>
              ))
            : Object.entries(groupedMoments).map(([year, months]) => (
              <TerminalCard key={year} className={styles.timelineCard}>
                <h3>{year}</h3>
                {Object.entries(months).map(([month, photos]) => (
                  <div key={`${year}-${month}`} className={styles.timelineMonth}>
                    <span>├── {month}</span>
                    <div className={styles.photoStrip}>
                      {photos.map((photo) => (
                        <button
                          key={photo.id}
                          type="button"
                          className={photo.id === activePhoto?.id ? styles.activePhoto : ""}
                          aria-label={`${content.momentLabel}: ${photo.title}`}
                          aria-pressed={photo.id === activePhoto?.id}
                          onClick={() => setActivePhotoId(photo.id)}
                          onDoubleClick={() => setSelectedPhoto(photo)}
                        >
                          <ResponsiveImage
                            src={photo.src}
                            alt={photo.title}
                            loading="lazy"
                            decoding="async"
                            sizes="(min-width: 1024px) 220px, (min-width: 480px) 50vw, 100vw"
                          />
                          <span>{photo.id}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </TerminalCard>
            ))}
      </section>

      {selectedPhoto && (
        <div className={styles.modalBackdrop} role="presentation" onClick={() => setSelectedPhoto(null)}>
          <TerminalCard className={styles.photoModal} onClick={(event) => event.stopPropagation()}>
            <ResponsiveImage
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div>
              <TerminalCommand>{content.metadataTitle}</TerminalCommand>
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.description}</p>
              <pre>{buildPhotoMetadata(selectedPhoto)}</pre>
              <CommandButton onClick={() => setSelectedPhoto(null)}>{content.modalClose}</CommandButton>
            </div>
          </TerminalCard>
        </div>
      )}
    </TerminalShell>
  );
}

function groupByYearAndMonth(items) {
  return items.reduce((calendar, item) => {
    const yearGroup = calendar[item.year] ?? {};
    const monthGroup = yearGroup[item.month] ?? [];

    return {
      ...calendar,
      [item.year]: {
        ...yearGroup,
        [item.month]: [...monthGroup, item]
      }
    };
  }, {});
}

function groupByArtist(items) {
  return items.reduce((artists, item) => {
    const artist = item.artist ?? "Live";

    return {
      ...artists,
      [artist]: [...(artists[artist] ?? []), item]
    };
  }, {});
}

function groupByMonth(items) {
  return items.reduce((months, item) => {
    return {
      ...months,
      [item.month]: [...(months[item.month] ?? []), item]
    };
  }, {});
}

function getBestMomentsByMonth(items) {
  return Object.values(groupByMonth(items)).flatMap((photos) => photos.slice(0, 25));
}

function buildPhotoMetadata(photo) {
  return [
    `date: ${photo.date}`,
    `category: ${photo.category}`,
    photo.artist ? `artist: ${photo.artist}` : null,
    `location: ${photo.location}`,
    `mood: ${photo.mood}`
  ]
    .filter(Boolean)
    .join("\n");
}
