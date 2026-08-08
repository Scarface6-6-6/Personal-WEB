import PropTypes from "prop-types";
import { imageDimensions } from "../../data/imageDimensions";

const galleryWidths = [480, 900, 1400];
const bestMomentWidths = [480, 900];

export function ResponsiveImage({
  src,
  alt,
  className,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  sizes = "100vw"
}) {
  const imageKey = getImageKey(src);
  const dimensions = imageDimensions[imageKey] ?? { width: 1200, height: 800 };
  const optimizedBase = getOptimizedBase(src);

  if (!optimizedBase) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        width={dimensions.width}
        height={dimensions.height}
      />
    );
  }

  return (
    <picture>
      <source type="image/webp" srcSet={buildSrcSet(optimizedBase)} sizes={sizes} />
      <img
        src={`${optimizedBase}-900.webp`}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        width={dimensions.width}
        height={dimensions.height}
      />
    </picture>
  );
}

function buildSrcSet(basePath) {
  const widths = basePath.includes("/gallery/best/optimized/") ? bestMomentWidths : galleryWidths;

  return widths.map((width) => `${basePath}-${width}.webp ${width}w`).join(", ");
}

function getOptimizedBase(src) {
  const match = src.match(/^(\/gallery\/(?:best\/)?optimized\/.+)-900\.webp$/);

  return match ? match[1] : "";
}

function getImageKey(src) {
  if (!src) {
    return "";
  }

  const fileName = src.split("/").pop() ?? "";

  return fileName
    .replace(/\.(jpg|jpeg|webp|png)$/i, "")
    .replace(/-(480|900|1400)$/, "");
}

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(["eager", "lazy"]),
  decoding: PropTypes.oneOf(["async", "auto", "sync"]),
  fetchPriority: PropTypes.oneOf(["high", "low", "auto"]),
  sizes: PropTypes.string
};
