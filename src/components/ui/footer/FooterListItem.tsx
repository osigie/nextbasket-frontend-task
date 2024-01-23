import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

export const FooterListItem = ({ item }: { item: string }) => {
  return (
    <ListItem sx={{ paddingLeft: 0 }}>
      <Typography
        variant="h6"
        textAlign="left"
        color="custom.light"
        sx={{
          "&:hover ": { color: "primary.main" },
        }}
      >
        {item}
      </Typography>
    </ListItem>
  );
};
