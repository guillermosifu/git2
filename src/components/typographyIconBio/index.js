import { Typography } from "@mui/material";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";

const TypographyIconBio = ({ text, icon }) => {
  const icons = {
    company: <BusinessRoundedIcon />,
  };

  return (
    <Typography
      sx={{ display: "flex", alignItems: "center" }}
      mt={mt}
      varian="body2"
    >
      {icons[icon]}
      &nbsp;&nbsp; {text}
    </Typography>
  );
};

export default TypographyIconBio;
