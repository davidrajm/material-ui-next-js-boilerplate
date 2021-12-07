import { Box } from "@mui/material";
import NavBar from "@/components/Navigation/NavBar";
import HeadMeta from "@/utils/HeadMeta";
import { Container, Grid } from "@mui/material";
import LeftBar from "@/components/Navigation/LeftBar";

const MainLayout = ({ title, description, children }) => {
  return (
    <Box component="main">
      <HeadMeta title={title} description={description} />
      <NavBar />
      <Grid container>
        <Grid
          item
          md={2}
          sx={{
            height: "100vh",
            overflow: "hidden",
            display: { xs: "none", md: "block" },
            borderRight: 1,
            borderColor: "grey.300",
          }}
        >
          <LeftBar />
        </Grid>
        <Grid item xs={12} md={10}>
          <Container>{children}</Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
