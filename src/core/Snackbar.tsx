import React from "react";
import Snackbar, {
  SnackbarProps as MuiSnackbarProps,
} from "@mui/material/Snackbar";
import Alert, { AlertProps as alertProps } from "./Alert";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Slide, { SlideProps } from "@mui/material/Slide";

type TransitionProps = Omit<SlideProps, "direction">;
function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}
const theme = createTheme({
  components: {
    MuiSnackbar: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

interface SnackbarProps extends MuiSnackbarProps {
  open: boolean;
  autoHideDuration?: number;
  AlertPropsOptions?: alertProps;
}

const CustomSnackbar = ({
  open,
  autoHideDuration,
  AlertPropsOptions,
  ...rest
}: SnackbarProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration ?? 5000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={TransitionLeft}
        {...rest}
      >
        <div>
          <Alert
            sx={{ "& .MuiAlert-action": { marginLeft: "50px" } }}
            {...AlertPropsOptions}
          />
        </div>
      </Snackbar>
    </ThemeProvider>
  );
};

export default CustomSnackbar;
