import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mui/material";
import {
  faSnapchat,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Icons() {
  return (
    <div>
      <Link
        href="https://x.com/geotopgroup"
        color="inherit"
        sx={{ display: "inline-block" }}
      >
        <IconButton color="inherit">
          <XIcon />
        </IconButton>
      </Link>

      <Link
        href="https://www.instagram.com/geotop_19/"
        color="inherit"
        sx={{ display: "inline-block" }}
      >
        <IconButton color="inherit">
          <InstagramIcon />
        </IconButton>
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=6156027066670"
        color="inherit"
        sx={{ display: "inline-block" }}
      >
        <IconButton color="inherit">
          <FacebookRoundedIcon />
        </IconButton>
      </Link>
      <Link
        href="https://www.linkedin.com/company/geo-top-egypt/posts/?feedView=all"
        color="inherit"
        sx={{ display: "inline-block" }}
      >
        <IconButton color="inherit">
          <LinkedInIcon />
        </IconButton>
      </Link>
      <Link
        href="https://www.snapchat.com/add/geo_top24"
        color="inherit"
        sx={{ display: "inline-block" }}
      >
        <IconButton color="inherit">
          <FontAwesomeIcon icon={faSnapchat} />
        </IconButton>
      </Link>
      <Link
        href="https://www.tiktok.com/@geotopgroup"
        color="inherit"
        sx={{ display: "inline-block" }}
      >
        <IconButton color="inherit">
          <FontAwesomeIcon icon={faTiktok} />
        </IconButton>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UC-kKxua7mq6idaxYAEXP8kw"
        color="inherit"
        sx={{ display: "inline-block" }}
      >
        <IconButton color="inherit">
          <FontAwesomeIcon icon={faYoutube} />
        </IconButton>
      </Link>
    </div>
  );
}
