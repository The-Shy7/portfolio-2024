import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo">
            <Link href="/">
                Tahmin&apos;s Portfolio
            </Link>
        </div>
        <a href="" className="cta-btn">Resume</a>
    </div>
  );
}

export default Navbar;