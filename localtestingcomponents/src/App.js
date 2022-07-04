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
        sx={{ marginTop: "150px" }}
        onClose={handleClose}
        // autoHideDuration={6000}
        // anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        AlertPropsOptions={{
          children:
            "message is the thing uou need to handle that any waya asdf asdfsadli;f jaks;df ;lkjaskl[dfj sj dfklj ;asljf l",
          onClose: handleClose,
        }}
      />
    </div>
  );
}

export default App;
