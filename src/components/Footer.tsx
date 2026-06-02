import { FaStar } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-dark-blue mt-8 h-20">
      <Container className="flex h-full items-center justify-between">
        <p className="text-white">leboncoin 2006 - 2026</p>
        <p className="hidden text-white md:block">
          Made by Ewa Majowska at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a>
        </p>
        <div className="flex">
          <span className="flex items-center gap-2 bg-green-500 p-1 px-2 text-sm font-bold text-white">
            <FaStar color="white" /> Trustpilot
          </span>
          <span className="bg-white p-1 px-2 text-sm text-mist-500">
            142.7k avis
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
