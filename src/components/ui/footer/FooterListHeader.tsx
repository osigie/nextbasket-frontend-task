import Typography from "@mui/material/Typography";

export const FooterListHeader = ({ title }: { title: string }) => {
  return (
    <Typography
      variant="h5"
      textAlign="left"
      color="custom.main"
    >
      {title}
    </Typography>
  );
};
