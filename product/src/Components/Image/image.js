// Core - Image Component
import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import clsx from "clsx";


// Main Component
const Image = (props) => {
  const { src, defaultSrc, w, h, isRounded, alt, isCover, testId, imageStyle } = props;

  const imageSrc = src || defaultSrc;

  const cls = {
    img: true,
    "img-fit": isCover,
    "img-rnd": isRounded,
    "img-spc": imageStyle
  };
  

  return (
    <div data-testid="img-dsn" className={clsx(cls)}>
      <img
        data-testid={testId || "img"}
        src={imageSrc}
        alt={alt}
        width={w}
        height={h}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  defaultSrc: PropTypes.string,
  w: PropTypes.number,
  h: PropTypes.number,
  isRounded: PropTypes.bool,
  isCover: PropTypes.bool,
  alt: PropTypes.string,
  testId: PropTypes.string,
  imageStyle: PropTypes.bool,
};

Image.defaultProps = {
  src: "",
  defaultSrc: "",
  w: undefined,
  h: undefined,
  isRounded: false,
  isCover: true,
  alt: "",
  testId: "img",
  imageStyle: false,
};

export default React.memo(Image, isEqual);
