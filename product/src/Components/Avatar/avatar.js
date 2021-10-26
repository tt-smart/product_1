// Core - Avatar Component
import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import clsx from "clsx";

import { addToClass } from "../../helper/styles";
import { Image } from "../Image";

// function getUserNameInitials(userName) {
//   const [firstName] = userName.split(" ");

//   if (firstName) {
//     return firstName.charAt(0);
//   }

//   return firstName;
// }

// Main Component
const Avatar = (props) => {
  const { image, size, badge, width, height
    // onClick,
   } = props;

  // function handleClick(ev) {
  //   ev.preventDefault();
  //   ev.stopPropagation();

  //   if (onClick) {
  //     onClick();
  //   }
  // }

  // function handleKeyDown(ev) {
  //   if (ev.keyCode === 13 && onClick) {
  //     ev.preventDefault();
  //     onClick();
  //   }
  // }

  const cls = {
    avt: true
  };

  addToClass(
    cls,
    {
      small: "avt-sml",
      medium: "avt-mdm",
      large: "avt-lge"
    },
    size,
    "normal"
  );

  const bdg = {
    bdg: true
  };

  addToClass(
    bdg,
    {
      small: "bdg-sml",
      medium: "bdg-mdm",
      large: "bdg-lge"
    },
    size,
    "normal"
  );

  return (
    <div className={clsx(cls)} data-testid="avt">
      <span className="title" data-testid="avt-ttl">
        <Image src={image} alt="avt" width={width} height={height} />
      </span>
      {badge === "online" && (
        <span data-testid="avt-bdg" className={clsx(bdg)} />
      )}
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["normal", "small", "medium", "large"]),
  badge: PropTypes.oneOf(["none", "online"]),
  image: PropTypes.string,
  onClick: PropTypes.func
};

Avatar.defaultProps = {
  size: "normal",
  badge: "none",
  image: "",
  onClick: null
};

export default React.memo(Avatar, isEqual);
