const Footer = () => {
  return (
    <>
        <hr/>
        <div className="footer-container">
            <p>© {new Date().getFullYear()} Tahmin's Portfolio</p>
            <div className="footer-social-icons">
                <a
                    href="https://github.com/The-Shy7"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    </>
  );
}

export default Footer;