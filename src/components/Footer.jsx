import { Box, Typography, Link } from "@mui/material";
import "./Footer.css";
import Icons from "./Icons";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
  return (
    <Box
      component="footer"
      className="footer"
      color="inherit"
      sx={{
        p: 4,
        bgcolor: "primary.main",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Box
        className="footer__section footer__about"
        color="inherit"
        sx={{ mb: 2 }}
      >
        <Typography
          color="#007BFF"
          variant="h2"
          component="div"
          className="footer__logo"
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
            fontSize: "25px",
            fontWeight: "600",
          }}
        >
          <img
            style={{ width: "60px" }}
            src="./media/Geo Top.png"
            alt="Geo Top.png"
          />
          Geo Top
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Geo Top is a premier provider of GIS solutions, offering advanced
          technology and expert services globally. With a focus on innovation
          and precision, Geo Top delivers tailored geospatial solutions to
          empower organizations and drive success.
        </Typography>
        <Box
          className="footer__social"
          sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link
              href="mailto:geotopgroup@gmail.com"
              color="inherit"
              sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}
            >
              <IconButton color="inherit">
                <EmailIcon />
              </IconButton>
              <Typography variant="body2">geotopgroup@gmail.com</Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link
              href="tel:+201204698455"
              color="inherit"
              sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}
            >
              <IconButton color="inherit">
                <LocalPhoneIcon />
              </IconButton>
              <Typography variant="body2">+20 120-469-8455</Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link
              href="https://wa.me/01204698455"
              color="inherit"
              sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}
            >
              <IconButton color="inherit">
                <WhatsAppIcon/>
              </IconButton>
              <Typography variant="body2">+20 120-469-8455</Typography>
            </Link>
          </Box>
        </Box>
        <Box className="footer__social" sx={{ display: "flex", gap: 1 }}>
          <Link href="#" color="inherit" sx={{ display: "inline-block" }}>
            <Icons />
          </Link>
        </Box>
      </Box>

      {/* {["Company", "Pages", "Legal", "Resources"].map((section, index) => (
        <Box key={index} className="footer__section" sx={{ mb: 2 }}>
          <Typography variant="h6" component="div" sx={{ mb: 1 }}>
            {section}
          </Typography>
          <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
            {section === "Company" && (
              <>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    About Us
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Careers
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Press
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Blog
                  </Link>
                </Box>
              </>
            )}
            {section === "Pages" && (
              <>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Login
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Register
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Add list
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Contact
                  </Link>
                </Box>
              </>
            )}
            {section === "Legal" && (
              <>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Terms
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    About Us
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Team
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Privacy
                  </Link>
                </Box>
              </>
            )}
            {section === "Resources" && (
              <>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Blog
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Service
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Product
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="#" color="inherit" underline="hover">
                    Pricing
                  </Link>
                </Box>
              </>
            )}
          </Box>
        </Box>
      ))} */}

      <Box className="footer__bottom" sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body2" color="textSecondary">
          All rights reserved © Geo Top 2024
        </Typography>
      </Box>
    </Box>
  );
}
