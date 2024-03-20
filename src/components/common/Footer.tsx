import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-4 py-6 border-t flex items-center justify-between">
      <p className="transition-all duration-500 hover:tracking-wide">
        &copy;2024 Design & Developed By&nbsp;
        <span className="text-tertiary">Nadim Chowdhury</span>
      </p>
      <div className="flex items-center gap-2">
        <Link href="https://www.linkedin.com/in/nadim-chowdhury">
          <FaLinkedin className="footer-icon-hover" />
        </Link>
        <Link href="https://github.com/nadim-chowdhury">
          <FaGithub className="footer-icon-hover" />
        </Link>
        <Link href="https://www.facebook.com/nadim.ch0wdhury">
          <FaFacebook className="footer-icon-hover" />
        </Link>
        <Link href="https://twitter.com/nadim_ch0wdhury">
          <FaTwitter className="footer-icon-hover" />
        </Link>
      </div>
    </footer>
  );
}
