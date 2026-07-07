import { profile } from '../data/profile';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built from scratch, launched into orbit.
      </p>
    </footer>
  );
}
