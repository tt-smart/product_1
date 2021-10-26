// Core - Grid Component
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";

import { addToClass, mediaBreak } from "../../helper/styles";

const formSideValues = (all, x, y, rig, lef, top, bot, initial) => {
  let values = [initial, initial, initial, initial]; // top, right, bottom, left
  if (all) {
    values = [all, all, all, all];
  }

  if (x) {
    values[1] = x;
    values[3] = x;
  }

  if (y) {
    values[0] = y;
    values[2] = y;
  }

  if (lef) {
    values[3] = lef;
  }

  if (rig) {
    values[1] = rig;
  }

  if (top) {
    values[0] = top;
  }

  if (bot) {
    values[2] = bot;
  }

  return values.join(" ");
};

const formCellAlignWidthHeight = (
  align,
  heg,
  maxWid,
  minWid,
  maxHeg,
  minHeg
) => {
  let alignVal = "";
  switch (align) {
    case "start":
      alignVal = "flex-start";
      break;
    case "end":
      alignVal = "flex-end";
      break;
    case "center":
      alignVal = "center";
      break;
    default:
      alignVal = "stretch";
      break;
  }

  const height = heg ? `height: ${heg};` : "";
  const maxWidth = maxWid ? `max-width: ${maxWid};` : "";
  const minWidth = minWid ? `min-width: ${minWid};` : "";
  const maxHeight = maxHeg ? `max-height: ${maxHeg};` : "";
  const minHeight = minHeg ? `min-height: ${minHeg};` : "";

  return `
	align-self: ${alignVal};
	${height}${maxWidth}${minWidth}${maxHeight}${minHeight}
	`;
};

const formCellStyle = (props) => {
  const padding = formSideValues(
    props.p,
    props.px,
    props.py,
    props.pr,
    props.pl,
    props.pt,
    props.pb,
    "0"
  );

  const margin = formSideValues(
    props.m,
    props.mx,
    props.my,
    props.mr,
    props.ml,
    props.mt,
    props.mb,
    "initial"
  );

  let vAlign = "";
  if (props.vAlign && props.vAlign !== "none") {
    if (props.vAlign === "start") {
      vAlign = "display: flex; align-items: flex-start;";
    } else if (props.vAlign === "end") {
      vAlign = "display: flex; align-items: flex-end;";
    } else if (props.vAlign === "center") {
      vAlign = "display: flex; align-items: center;";
    }
  }

  return `
	padding: ${padding};
	margin: ${margin};
	flex: 0 1 100%;
	width: ${props.sW ? props.sW : "100%"};
	${vAlign}
	${formCellAlignWidthHeight(
    props.sAlign,
    props.sH,
    props.sMaxW,
    props.sMinW,
    props.sMaxH,
    props.sMinH
  )}
	`;
};

const formMediaStyle = (props) => {
  if (!props.break) {
    return "";
  }

  let gutterVal = "";
  switch (props.gutter) {
    case "small":
      gutterVal = "5px";
      break;
    case "medium":
      gutterVal = "15px";
      break;
    case "big":
      gutterVal = "20px";
      break;
    default:
      gutterVal = "10px";
      break;
  }

  const flex = props.span
    ? `flex: 1 1 calc(${props.span}% - ${gutterVal});`
    : "";
  const width = props.span ? `width: calc(${props.span}% - ${gutterVal});` : "";
  const mediaStyle = `${flex}${width}
	${formCellAlignWidthHeight(
    props.align,
    props.h,
    props.maxW,
    props.minW,
    props.maxH,
    props.minH
  )}
	`;

  return mediaBreak(props.break, mediaStyle);
};

const Cell = styled.div`
  ${(props) => formCellStyle(props)}
  ${(props) => formMediaStyle(props)}
`;

// Cell Component
const GridCell = (props) => {
  const { children, align, ...rest } = props;

  const cls = {
    "grd-cel": true
  };

  addToClass(
    cls,
    {
      start: "grd-cel-als",
      end: "grd-cel-ale",
      center: "grd-cel-alc",
      baseline: "grd-cel-alb"
    },
    align,
    "stretch"
  );

  return (
    <Cell className={clsx(cls)} {...rest}>
      {children}
    </Cell>
  );
};

GridCell.propTypes = {
  span: PropTypes.number,
  align: PropTypes.oneOf(["start", "end", "center"]),
  sAlign: PropTypes.oneOf(["start", "end", "center"]),
  vAlign: PropTypes.oneOf(["none", "start", "end", "center"]),
  w: PropTypes.string,
  h: PropTypes.string,
  maxW: PropTypes.string,
  maxH: PropTypes.string,
  minW: PropTypes.string,
  minH: PropTypes.string,
  sW: PropTypes.string,
  sH: PropTypes.string,
  sMaxW: PropTypes.string,
  sMaxH: PropTypes.string,
  sMinW: PropTypes.string,
  sMinH: PropTypes.string,
  p: PropTypes.string,
  pl: PropTypes.string,
  pr: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  px: PropTypes.string,
  py: PropTypes.string,
  m: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
  mx: PropTypes.string,
  my: PropTypes.string,
  children: PropTypes.node
};

GridCell.defaultProps = {
  span: null,
  align: "start",
  sAlign: "start",
  vAlign: "none",
  w: "",
  h: "",
  maxW: "",
  maxH: "",
  minW: "",
  minH: "",
  sW: "",
  sH: "",
  sMaxW: "",
  sMaxH: "",
  sMinW: "",
  sMinH: "",
  p: "",
  pl: "",
  pr: "",
  pt: "",
  pb: "",
  px: "",
  py: "",
  m: "",
  ml: "",
  mr: "",
  mt: "",
  mb: "",
  mx: "",
  my: "",
  children: null
};

GridCell.displayName = "GridCell";

// Main Component
const Grid = (props) => {
  const {
    children,
    gutter,
    align,
    vAlign,
    isWrap,
    isVertical,
    isInline
  } = props;

  const gridBreak = props.break; // eslint-disable-line

  const cls = {
    grd: true,
    "grd-wrp": isWrap,
    "grd-inl": isInline,
    "grd-vrt": isVertical
  };

  addToClass(
    cls,
    {
      small: "grd-gts",
      medium: "grd-gtm",
      big: "grd-gtb"
    },
    gutter,
    "normal"
  );

  addToClass(
    cls,
    {
      xs: "grd-bxs",
      sm: "grd-bsm",
      md: "grd-bmd",
      lg: "grd-blg",
      xl: "grd-bxl"
    },
    gridBreak,
    ""
  );

  addToClass(
    cls,
    {
      start: "grd-als",
      end: "grd-ale",
      center: "grd-alc",
      baseline: "grd-alb"
    },
    align,
    "stretch"
  );

  addToClass(
    cls,
    {
      end: "grd-vle",
      center: "grd-vlc",
      stretch: "grd-vls",
      baseline: "grd-vlb"
    },
    vAlign,
    "start"
  );

  const childrenWithProps = React.Children.map(children, (child) =>
    child ? React.cloneElement(child, { break: gridBreak, gutter }) : null
  );

  return (
    <div className={clsx(cls)} data-testid="gid">
      {childrenWithProps}
    </div>
  );
};

Grid.propTypes = {
  gutter: PropTypes.oneOf(["normal", "small", "medium", "big"]),
  break: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  align: PropTypes.oneOf(["start", "end", "center", "stretch", "baseline"]),
  vAlign: PropTypes.oneOf(["start", "end", "center", "stretch", "baseline"]),
  isWrap: PropTypes.bool,
  isVertical: PropTypes.bool,
  isInline: PropTypes.bool,
  children: PropTypes.node
};

Grid.defaultProps = {
  gutter: "normal",
  break: "xs",
  align: "stretch",
  vAlign: "start",
  isWrap: false,
  isVertical: false,
  isInline: false,
  children: null
};

Grid.displayName = "Grid";
Grid.Cell = GridCell;

export default Grid;
