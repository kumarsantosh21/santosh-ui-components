import React from "react";
import Alert, { AlertProps as MuiAlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "./Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export interface AlertProps extends MuiAlertProps {
  children?: React.ReactNode;
  variant?: "outlined" | "standard" | "filled";
  alertTitle?: React.ReactNode;
  hasAction?: Boolean;
  actionText?: React.ReactNode;
  actionButtonFunciton?: (event: React.SyntheticEvent) => void;
  action?: React.ReactNode;
  severity?: "success" | "info" | "warning" | "error";
}
const defaultTheme = createTheme();
const CustomAlert = ({
  children,
  severity,
  variant,
  alertTitle,
  action,
  hasAction,
  actionText,
  actionButtonFunciton,
  ...rest
}: AlertProps): JSX.Element => {
  function shadeColor(color: string | undefined, percent: number): string {
    let colorr;
    if (color === "error") {
      colorr = "#E74331";
    } else if (color === "warning") {
      colorr = "#DC8812";
    } else if (color === "success") {
      colorr = "#17B27A";
    } else if (color === "info") {
      colorr = "#3F7AE5";
    } else {
      colorr = "#E74331";
    }
    const num = parseInt(colorr.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    let R = (num >> 16) + amt;
    if (R < 255) {
      if (R < 1) {
        R = 0;
      }
    } else {
      R = 255;
    }
    let G = ((num >> 8) & 0x00ff) + amt;
    if (G < 255) {
      if (G < 1) {
        G = 0;
      }
    } else {
      G = 255;
    }
    let B = (num & 0x0000ff) + amt;
    if (B < 255) {
      if (B < 1) {
        B = 0;
      }
    } else {
      B = 255;
    }
    return (
      "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)
    );
  }
  const theme = createTheme({
    components: {
      MuiAlert: {
        styleOverrides: {
          root: { borderRadius: "6px", borderWidth: "2px" },
          icon: { alignItems: "center" },
          action: {
            borderRadius: "6px",
            color: defaultTheme.palette[severity ?? "error"].light,
            padding: "0px",
            alignSelf: "center",
            "&:hover": {
              background: hasAction ? "" : shadeColor(severity ?? "error", 68),
            },
          },
        },
      },
      MuiAlertTitle: {
        styleOverrides: {
          root: { fontSize: "16px", fontWeight: "bold" },
        },
      },
      MuiIconButton: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
  });
  const actionElement = (
    <Button
      onClick={actionButtonFunciton}
      sx={{
        color: "#344052",
        "&:hover": {
          color: "#344052",
          background: "#F0F1FF",
        },
      }}
    >
      {actionText ?? "Give actionText prop for own name or node"}
    </Button>
  );
  return (
    <ThemeProvider theme={theme}>
      <Alert
        variant={variant ?? "outlined"}
        action={action ?? (hasAction ? actionElement : null)}
        severity={severity ?? "error"}
        {...rest}
      >
        {alertTitle ? <AlertTitle>{alertTitle}</AlertTitle> : null}
        {children}
      </Alert>
    </ThemeProvider>
  );
};

export default CustomAlert;
