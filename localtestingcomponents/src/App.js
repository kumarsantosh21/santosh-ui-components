import { CheckingmuiButton, Button, Alert } from "santosh-ui-components";

function App() {
  return (
    <div>
      <CheckingmuiButton child="Button" />
      <Button>test</Button>
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
        This is alert
      </Alert>
    </div>
  );
}

export default App;
