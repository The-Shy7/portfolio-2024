import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
        <Image src='/images/profile.png' className="profile-img" width={300} height={300} alt="Tahmin's profile picture" />
        <div className="hero-text">
            <h1>Hi, I'm Tahmin 👋🏽</h1>
            <p>Filler text</p>
            <div className="hero-social-icons">
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
    </div>
  );
}

export default Hero;