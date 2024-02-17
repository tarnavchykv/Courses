import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

const CourseCard: React.FC = () => {
  return (
    <Box sx={{ mt: 20, mb: 20, ml: 40, mr: 40 }}>
      <Paper elevation={4}>
        <Container sx={{ padding: 2, display: "flex", alignItems: "center" }}>
          <Box padding={2} flexGrow={0}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1.6rem",
              }}
            >
              JavaScript
            </Typography>
            <Typography variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box
            display={"flex"}
            flexDirection={"column"}
            padding={2}
            flexGrow={1}
            minWidth={"fit-content"}
          >
            <Box display={"flex"} flexDirection={"row"}>
              <Typography fontWeight={600} flexGrow={1} mr={2}>
                {"Authors: "}
              </Typography>
              <Typography flexGrow={0}>
                Anna Sidorenko, Valentina Larina
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"row"}>
              <Typography fontWeight={600} flexGrow={1} mr={2}>
                {"Duration: "}
              </Typography>
              <Typography flexGrow={0}>8 hours</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"row"}>
              <Typography fontWeight={600} flexGrow={1} mr={2}>
                {"Created: "}
              </Typography>
              <Typography flexGrow={0}>17.02.2024</Typography>
            </Box>
            <Button
              sx={{ maxWidth: "fit-content", mr: "auto", ml: "auto", mt: 5 }}
              variant="contained"
            >
              Start Now!
            </Button>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};

export default CourseCard;
