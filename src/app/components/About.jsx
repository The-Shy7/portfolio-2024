import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
        <h2>About Me</h2>
        <div className="flex-about">
            <div className="about-text">
                <p>Filler 1</p>
                <p>Filler 2</p>
            </div>
            <div className="about-img">
                <Image src="/images/about.png" className="profile-img" width={300} height={500} alt="Hiking picture" />
            </div>
        </div>
    </div>
  );
}

export default About;