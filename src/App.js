import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Status from "./components/Status";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3A96E8"
    },
    text: {
      disabled: "#FFF"
    }
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    button: {
      textTransform: "none"
    },
    fontFamily: "'Helvetica', 'Arial', sans-serif, 'Roboto'",
    subtitle2: {
      fontWeight: "bold"
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Status />
      </ThemeProvider>
    </div>
  );
}

export default App;
