import React, { useState } from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { createDisabledTextStyles, createFlatBoxStyles } from "../common";
import { blockSizes, fontSizes, padding, fontFamily } from "../common/system";
import Cutout from "../Cutout/Cutout";

const StyledTextAreaWrapper = styled(Cutout)`
  display: inline-block;
  min-height: ${blockSizes.md};
  padding: 0;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};
`;
const StyledFlatTextAreaWrapper = styled.div`
  position: relative;
  min-height: ${blockSizes.md};
  ${createFlatBoxStyles()}
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${padding.sm};
  outline: none;
  border: none;
  background: none;
  resize: none;
  font-size: ${fontSizes.md};
  font-family: ${fontFamily};

  ${({ disabled, flat }) => !flat && disabled && createDisabledTextStyles()}
`;

const TextArea = ({
  onChange,
  disabled,
  flat,
  width,
  height,
  style,
  className,
  shadow,
  ...otherProps
}) => {
  const Wrapper = flat ? StyledFlatTextAreaWrapper : StyledTextAreaWrapper;
  return (
    <Wrapper
      style={{
        ...style,
        width: width ? width : "100%",
        height: height ? height : "auto"
      }}
      className={className}
      isDisabled={disabled}
      shadow={shadow}
    >
      <StyledTextArea
        width={width}
        height={height}
        readOnly={disabled}
        onChange={disabled ? undefined : onChange}
        disabled={disabled}
        flat={flat}
        {...otherProps}
      />
    </Wrapper>
  );
};

TextArea.defaultProps = {
  shadow: true,
  flat: false
};
TextArea.propTypes = {
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  disabled: propTypes.bool,
  flat: propTypes.bool,
  className: propTypes.string,
  shadow: propTypes.bool
};

export default TextArea;
