import './Home.css';
import Button from '@mui/material/Button';
import Slides from './Slides';

export default function Home() {
  return (
    <div className="home">
      <Slides />
      <div className="bio">
        <h3>Hello. I'm Sydney, a human.</h3>
        <p>Creation unlocks long-forgotten joy. Make your mark before the machines take over.</p>
      </div>
      <div className="gallery-button">
        <Button
          href="/gallery"
          variant="contained"
          sx={{
            borderRadius: '300px',
            backgroundColor: '#a4b7b5',
            padding: '21px 34px',
          }}
        >
          See the gallery
        </Button>
      </div>
      <div className="newsletter-button">
        <Button
          href="/newsletter"
          variant="contained"
          sx={{
            borderRadius: '300px',
            backgroundColor: '#5c6060',
            padding: '13px 26px',
            textTransform: 'none',
          }}
        >
          Sign up for my newsletter
        </Button>
      </div>
    </div>
  );
}
