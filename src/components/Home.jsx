import { Link } from "react-router-dom";
import wall from '../images/PXL_20220209_061934571.jpg'

export default function Home() {
  return (
    <div>
      <img src={wall} alt="Wall" />
      <Link to="/gallery">See the gallery</Link>
    </div>
  );
}
