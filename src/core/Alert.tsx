import React from "react";
import Alert, { AlertProps as MuiAlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "./Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface AlertProps extends MuiAlertProps {
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
  const theme = createTheme({
    components: {
      MuiAlert: {
        styleOverrides: {
          root: { borderRadius: "6px", borderWidth: "2px" },
          icon: { alignItems: "center" },
          action: {
            alignItems: "center",
            borderRadius: "6px",
            color: severity
              ? defaultTheme.palette[severity].light
              : defaultTheme.palette.error.light,
          },
        },
      },
      MuiAlertTitle: {
        styleOverrides: {
          root: { fontSize: "16px", fontWeight: "bold" },
        },
      },
    },
  });
  const actionElement = (
    <Button onClick={actionButtonFunciton}>
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
