import * as React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components/Home";
import { createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GisPage from "./Pages/GisPage";
import WebsiteDesignPage from "./Pages/WebsiteDesignPage";
import WebDevelopmentPage from "./Pages/WebDevelopmentPage";
import TrainingPage from "./Pages/TrainingPage";
import SurveyingPage from "./Pages/SurveyingPage";
import RSPage from "./Pages/RSPage";
import MobileApplicationPage from "./Pages/MobileApplicationPage";
import GraphicDesignPage from "./Pages/GraphicDesignPage";
import DroneImageProcessingPage from "./Pages/DroneImageProcessingPage";
import DigitalMarketingPage from "./Pages/DigitalMarketingPage";
import BIMPage from "./Pages/BIMPage";
import D3ModelingPage from "./Pages/3DModelingPage";
import OurProject from "./Pages/OurProject";
import Careers from "./Pages/careers";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
function getDesignTokens(mode) {
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#eeeeee" },
            secondary: { main: "#f5f5f5" },
            blackbg: { main: "#272727" },
          }
        : {
            primary: { main: "#272727" },
            secondary: { main: "#f48fb1" },
            blackbg: { main: "#eeeeee" },
          }),
    },
  };
}

function App(props) {
  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode") || "light"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // eslint-disable-next-line no-unused-vars, react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header
              handleDrawerToggle={handleDrawerToggle}
              mobileOpen={mobileOpen}
              setMode={setMode}
              theme={theme}
            />
            <Box component="main" sx={{ mx: "auto" }} width={"100%"}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/ourprojects" element={<OurProject/>} />
                <Route path="/careers" element={<Careers/>} />
                <Route path="/gispage" element={<GisPage/>} />
                <Route path="/contactus" element={<ContactUs/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/websitedesignpage" element={<WebsiteDesignPage/>} />
                <Route path="/webdevelopmentpage" element={<WebDevelopmentPage/>} />
                <Route path="/trainingpage" element={<TrainingPage/>} />
                <Route path="/surveyingpage" element={<SurveyingPage/>} />
                <Route path="/rspage" element={<RSPage/>} />
                <Route path="/mobileapplicationpage" element={<MobileApplicationPage/>} />
                <Route path="/graphicdesignpage" element={<GraphicDesignPage/>} />
                <Route path="/droneImageprocessingpage" element={<DroneImageProcessingPage/>} />
                <Route path="/digitalmarketingpage" element={<DigitalMarketingPage/>} />
                <Route path="/bimpage" element={<BIMPage/>} />
                <Route path="/3dmodelingpage" element={<D3ModelingPage/>} />
              </Routes>
            </Box>
          </Box>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;
