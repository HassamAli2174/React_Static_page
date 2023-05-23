import logo from "./logo.svg";
import "./App.css";
import Header from "./Comp/Header";
import Navbar from "./Comp/Navbar";
import ItemsList from "./Comp/AlignItemsList";
import "./style/style.css";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <p className="text">
            When it comes to health, it is so important to get authoritative
            information. This Best of the Web category lists websites pertaining
            to a huge number of health conditions, and every medical
            specialty.We also list alternative health websites and therapies,
            and sites relating to issues such as addiction, weight loss or
            mental health.There are resources for health professionals too
            andevery medical specialty We also list alternative health websites
            and therapies, and sites relating to issues such as addiction,
            weight loss or mental health.There are resources for health
            professionals too and every medical specialty.We also list
            alternative health websites and therapies, and sites relating to
            issues such as addiction, weight loss or mental health.
          </p>
        </Grid>
        <Grid item xs={12} md={8}>
          <ItemsList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
