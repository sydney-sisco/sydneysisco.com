import * as React from 'react';
import './Slides.css';

// dynamic import of all images in src/images/slides
function importAll(r) {
  return r.keys().map(r).reverse();
}
const slides = importAll(require.context('../images/slides/', false, /\.(png|jpe?g|svg)$/));

// the delay between slides
const delay = 3000;

export default function Slides() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='slides'>
      {slides.map((slide, i) => (
        <img
          key={`slide-${i}`}
          src={slide}
          alt={`slide-${i}`}
          className={i === index ? 'slide active' : 'slide'}
        />
      ))}
    </div>
  )
}
