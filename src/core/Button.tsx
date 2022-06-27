import React from "react";
import PropTypes from "prop-types";
import Button, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          margin: "0px 15px",
          borderRadius: "6px",
          color: "rgb(94, 53, 177)",
          fontWeight: 600,
          "&:hover": {
            color: "rgb(94, 53, 177)",
            background: "rgb(237, 231, 246)",
          },
        },
      },
    },
  },
});

interface ButtonProps extends MuiButtonProps {
  children?: React.ReactNode;
}
const CustomButton = ({ children, ...rest }: ButtonProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...rest}>{children}</Button>
    </ThemeProvider>
  );
};
CustomButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CustomButton;
