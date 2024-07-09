import { Box, Typography, Container } from "@mui/material";
import "./Services.css";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    img: "img/gis.jpg",
    title: "GIS",
    desc: "Comprehensive GIS services for spatial analysis, mapping, and data visualization",
  },
  {
    id: 2,
    img: "img/desin.jpg",
    title: "Website design",
    desc: "Crafting responsive and visually appealing websites tailored to your business needs",
  },
  {
    id: 3,
    img: "img/Web-Application.png",
    title: "Web Development",
    desc: "Building robust and scalable web applications with the latest technologies",
  },
  {
    id: 4,
    img: "img/mobile.jpg",
    title: "Mobile Applications",
    desc: "Building intuitive and high-performance mobile apps for both iOS and Android platforms.",
  },
  {
    id: 5,
    img: "img/rs.jpeg",
    title: "RS",
    desc: "Remote Sensing services for accurate and detailed earth observation and analysis.",
  },
  {
    id: 6,
    img: "img/lidar.jpg",
    title: "Drone image processing",
    desc: "Delivering detailed analysis and processing of drone imagery for various applications.",
  },
  {
    id: 7,
    img: "img/Surveying.jpg",
    title: "Surveying",
    desc: "Professional surveying services for accurate land measurements and property boundaries",
  },
  {
    id: 8,
    img: "img/bim.jpg",
    title: "BIM",
    desc: "Building Information Modeling services for efficient construction project management",
  },
  {
    id: 9,
    img: "img/3d.jpg",
    title: "3d modeling",
    desc: "Creating detailed and realistic 3D models for various industries and applications.",
  },
  {
    id: 10,
    img: "img/graphics-designing.png",
    title: "graphic design",
    desc: "Providing creative graphic design services to strengthen your brand's visual communication.",
  },
  {
    id: 11,
    img: "img/digital-marketing.jpg",
    title: "Digital Marketing",
    desc: "Effective digital marketing strategies to boost your online presence and engagement.",
  },
  {
    id: 12,
    img: "img/trianing.jpg",
    title: "Training",
    desc: "Expert-led training programs to enhance your team's skills in various technical domains.",
  },
];

export default function ServicesCom() {
  return (
    <Box color="inherit">
      <section id="services">
        <Container sx={{ flexGrow: 1, p: 3, textAlign: "center" }}>
          <Typography variant="h4" component="div" gutterBottom>
            Services We Offer
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            What We Provide
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            “We provide custom software services, GIS solutions, and
            three-dimensional (3D) modeling and visualization to a variety of
            industries.”
          </Typography>
        </Container>
        <div className="cards-services">
          {services.map((service) => (
            <Link key={service.id} to={`/geotop/${service.title.replace(/ /g, "").toLowerCase()}page`} style={{ textDecoration: 'none'  }}>
            <Box
              
              sx={{ bgcolor: "primary.main" , color:"blackbg.main"}}
              className="card-services shape gradient-301"
               id="shape"
            >
              <div className="icon">
                <img src={service.img} alt={`${service.title} Icon`} />
              </div>
              <div className="details">
                <h2>
                  {service.title}
                </h2>
                <p>
                  {service.desc}
                </p>
              </div>
            </Box>
            </Link>
          ))}
        </div>
      </section>
    </Box>
  );
}
