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
import NotFoundPage from "./Pages/NotFoundPage";
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
                <Route path="/geotop" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/geotop/home" element={<Home/>} />
                <Route path="/geotop/ourprojects" element={<OurProject/>} />
                <Route path="/geotop/careers" element={<Careers/>} />
                <Route path="/geotop/gispage" element={<GisPage/>} />
                <Route path="/geotop/contactus" element={<ContactUs/>} />
                <Route path="/geotop/services" element={<Services/>} />
                <Route path="/geotop/websitedesignpage" element={<WebsiteDesignPage/>} />
                <Route path="/geotop/webdevelopmentpage" element={<WebDevelopmentPage/>} />
                <Route path="/geotop/trainingpage" element={<TrainingPage/>} />
                <Route path="/geotop/surveyingpage" element={<SurveyingPage/>} />
                <Route path="/geotop/rspage" element={<RSPage/>} />
                <Route path="/geotop/mobileapplicationpage" element={<MobileApplicationPage/>} />
                <Route path="/geotop/graphicdesignpage" element={<GraphicDesignPage/>} />
                <Route path="/geotop/droneImageprocessingpage" element={<DroneImageProcessingPage/>} />
                <Route path="/geotop/digitalmarketingpage" element={<DigitalMarketingPage/>} />
                <Route path="/geotop/bimpage" element={<BIMPage/>} />
                <Route path="/geotop/3dmodelingpage" element={<D3ModelingPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
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
