import { Toolbar } from "@mui/material";
import "./SliderProject.css";
import SliderProjects from "./SliderProjects";
import ServicesCom from "./Services";
import AboutUs from "./AboutUs";
import { Box, Grid, Typography , Container} from "@mui/material";
import ContactUs from "./ContactUs";
import useMediaQuery from '@mui/material/useMediaQuery';
const stats = [
  { value: "75+", label: "Works Done" },
  { value: "25+", label: "employees" },
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Happy Clients" },
];
export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width:850px)');
  const isVerySmallScreen = useMediaQuery('(max-width:500px)');
  const getFontSize = (defaultSize) => {
    if (isVerySmallScreen) {
      return `${defaultSize - 10}px`;
    } else if (isSmallScreen) {
      return `${defaultSize - 5}px`;
    } else {
      return `${defaultSize}px`;
    }
  };
  return (
    <>
      <Box component="main" sx={{ mx: "auto" }} width={"100%"}>
      <Box sx={{ mx: 'auto', position: 'relative' }} bgcolor="black">
        <Toolbar />
        <video
          src="media/video.mp4"
          loop
          autoPlay
          muted
          width="100%"
          height="703px"
          style={{ display: 'block' }}
        ></video>
        <Container
          sx={{
            position: 'absolute',
            top: isSmallScreen ? '50%' : '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '0 20px',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            color="white"
            fontSize={getFontSize(35)}
          >
            Welcome to Geo Top
          </Typography>
          <Typography
            variant="h2"
            color="white"
            fontSize={getFontSize(35)}
            marginY="12px"
          >
            Where the Future is Happening Now
          </Typography>
          <Typography
            variant="h3"
            color="white"
            fontSize={getFontSize(23)}
            lineHeight="36px"
          >
            Geo Top is an information technology company and systems integrator,
            providing renowned clients in Egypt, Africa and The Middle East with
            top-notch solutions and services that help them achieve their business
            transformation and digitalization goals.
          </Typography>
        </Container>
      </Box>
        <AboutUs />
        <ServicesCom />
        <Box sx={{ mx: "auto" }} bgcolor={"black"}>
          <div
            style={{
              height: "700px",
              backgroundAttachment: "fixed",
              backgroundImage: "url('./media/map.png')",
            }}
          >
            <SliderProjects />
          </div>
        </Box>
        <Box sx={{ flexGrow: 1, py: 5, textAlign: "center" }}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{
              gap: "15px",
              marginLeft: "0 !important",
              width: "auto !important",
              marginTop: "20px",
            }}
          >
            {stats.map((stat, index) => (
              <Grid
                item
                xs={12}
                sm={5.6}
                md={2.6}
                key={index}
                sx={{
                  backgroundColor: "primary.main",
                  padding: "25px  0 25px 0 !important",
                }}
              >
                <Typography variant="h3" component="div" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="h6" component="div">
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <ContactUs />
        </Box>
      </Box>
    </>
  );
}
