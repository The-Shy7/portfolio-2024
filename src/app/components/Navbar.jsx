import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo">
            <Link href="/">
                Tahmin&apos;s Portfolio
            </Link>
        </div>
        <a href="https://tahmin-talukder-resume.vercel.app/" className="cta-btn">Resume</a>
    </div>
  );
}

export default Navbar;