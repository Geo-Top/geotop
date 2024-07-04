// import EmailIcon from "@mui/icons-material/Email";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSnapchat,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Icons() {
  return (
    <div>
      <IconButton color="inherit">
        <XIcon />
      </IconButton>
      <IconButton color="inherit">
        <InstagramIcon />
      </IconButton>
      <IconButton color="inherit">
        <FacebookRoundedIcon />
      </IconButton>
      <IconButton color="inherit">
        <LinkedInIcon />
      </IconButton>
      {/* <IconButton color="inherit">
                <EmailIcon />
              </IconButton>
              <IconButton color="inherit">
                <LocalPhoneIcon />
              </IconButton> */}
      <IconButton color="inherit">
        <FontAwesomeIcon icon={faSnapchat} />
      </IconButton>
      <IconButton color="inherit">
        <FontAwesomeIcon icon={faTiktok} />
      </IconButton>
      {/* <IconButton color="inherit">
              <FontAwesomeIcon icon={faYoutube} />
              </IconButton> */}
    </div>
  );
}
