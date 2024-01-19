import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

export const FooterListItem = ({ item }: { item: string }) => {
  return (
    <ListItem sx={{ paddingLeft: 0 }}>
      <Typography
        variant="subtitle2"
        fontWeight={700}
        textAlign="left"
        color="custom.light"
        fontSize="14px"
      >
        {item}
      </Typography>
    </ListItem>
  );
};
