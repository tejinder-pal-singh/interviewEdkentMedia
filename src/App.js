import Header from './components/widgets/Header';
import SideBar from './components/widgets/SideBar';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

// manipulating default theming colours in material UI according to design
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4C87FB"
    },
    background: {
      default: "#F5F6F8"
    },
    action: {
      active: "rgba(255, 0, 0, 0.04)",
      hover: "rgba(0, 255, 0, 0.04)",
      selected: "rgba(0, 0, 255, 0.04)",
      focus: "rgba(0, 33, 122, 0.04)",
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* rendering ccomponents */}
      <Header />
      <SideBar />
      {/* normalising CSS */}
      <CssBaseline />
    </ThemeProvider>

  );
}

export default App;
