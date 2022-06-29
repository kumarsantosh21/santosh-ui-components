import React from "react";
import {
  CheckingmuiButton,
  Button,
  Alert,
  Snackbar,
} from "santosh-ui-components";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    console.log(reason);
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <CheckingmuiButton child="Button" />
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        test
      </Button>
      <Alert
        variant="outlined"
        severity="warning"
        alertTitle="This is title"
        hasAction
        actionText="UNDO"
        actionButtonFunciton={() => {
          console.log("should trigger hasAction Button");
        }}
        onClose={() => {}}
      >
        This is alert Message.This is alert Message.This is alert Message.This
        is alert Message.This is alert Message.This is alert Message.
      </Alert>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        AlertPropsOptions={{
          children: "message",
          onClose: handleClose,
        }}
      />
    </div>
  );
}

export default App;
