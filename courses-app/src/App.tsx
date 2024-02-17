import CourseCard from "./components/CoursesList/CourseCard/CourseCard";
import Header from "./components/Header/Header";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <CourseCard />
    </ThemeProvider>
  );
}

export default App;
