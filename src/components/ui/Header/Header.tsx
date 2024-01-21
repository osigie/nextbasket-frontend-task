import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
function Header() {
  return (
    <header>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          backgroundColor: "secondary.main",
          color: "white",
          padding: "16px 32px",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <Typography
            variant="subtitle2"
            display="block"
            fontWeight={700}
            marginRight={"24px"}
          >
            <a
              href="tel:(225) 555-0118"
              style={{ display: "flex", alignItems: "center" }}
            >
              <LocalPhoneIcon sx={{ fontSize: "16px" }} />
              (225) 555-0118
            </a>
          </Typography>

          <Typography variant="subtitle2" display="block" fontWeight={700}>
            <a
              href="tel:(225) 555-0118"
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <MailOutlineIcon sx={{ fontSize: "16px" }} />
              michelle.rivera@example.com
            </a>
          </Typography>
        </Box>
        <Typography variant="subtitle2" display="block" fontWeight={700}>
          <p>Follow Us and get a chance to win 80% off</p>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ display: "flex", alignItems: "center", gap: "15px" }}
          fontWeight={700}
        >
          Follow Us :
          <InstagramIcon sx={{ fontSize: "16px" }} />
          <YouTubeIcon sx={{ fontSize: "16px" }} />
          <FacebookIcon sx={{ fontSize: "16px" }} />
          <TwitterIcon sx={{ fontSize: "16px" }} />
        </Typography>
      </Box>
    </header>
  );
}

export default Header;
