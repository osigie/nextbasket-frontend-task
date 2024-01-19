import Typography from "@mui/material/Typography";

export const FooterListHeader = ({ title }: { title: string }) => {
  return (
    <Typography
      variant="subtitle2"
      fontWeight={700}
      textAlign="left"
      color="custom.main"
      fontSize="16px"
    >
      {title}
    </Typography>
  );
};
