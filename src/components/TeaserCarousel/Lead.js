import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import { mUp } from "../TeaserFront/mediaQueries";
import { serifRegular16, serifRegular18 } from "../Typography/styles";

const styles = {
  lead: css({
    ...serifRegular16,
    margin: "0 0 10px 0",
    [mUp]: {
      ...serifRegular18
    }
  })
};

const Lead = ({ children }) => {
  return <p {...styles.lead}>{children}</p>;
};

Lead.propTypes = {
  children: PropTypes.node
};

export default Lead;