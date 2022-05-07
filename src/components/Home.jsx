import './Home.css';
import Button from '@mui/material/Button';
import Slides from './Slides';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a4b7b5',
      dark: '#b6c5c4',
      contrastText: '#fff',
    },
    secondary: {
      main: '#5c6060',
      dark: '#7c8080',
      contrastText: '#fff',
    },
  },
});

export default function Home() {
  return (
    <div className="home">
      <Slides />
      <div className="bio">
        <h3>Hello. I'm Sydney, a human.</h3>
        <p>Creation unlocks long-forgotten joy. Make your mark before the machines take over.</p>
      </div>
      <div className="gallery-button">
        <ThemeProvider theme={theme}>
          <Button
            href="/gallery"
            variant="contained"
            color="primary"
            sx={{
              borderRadius: '300px',
              padding: '21px 34px',
            }}
          >
            See the gallery
          </Button>
        </ThemeProvider>
      </div>
      <div className="newsletter-button">
        <ThemeProvider theme={theme}>
          <Button
            href="/newsletter"
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: '300px',
              padding: '13px 26px',
              textTransform: 'none',
            }}
          >
            Sign up for my newsletter
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}
