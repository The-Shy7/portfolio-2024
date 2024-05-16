import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
        <h2>About Me</h2>
        <div className="flex-about">
            <div className="about-text">
                <p>
                    As a developer, I thrive on challenges that promote personal growth and experience.
                    With a strong foundation in software development, I enjoy working on both the front-end and back-end of applications.
                    I am always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.
                </p>
                <p>
                    Throughout my career, I have worked on a wide range of projects, from simple static websites to complex enterprise-level applications.
                    I am proficient in using a variety of development tools and frameworks to create elegant and effective solutions to complex problems.
                    I am committed to continuous learning and exploring new technologies, constantly seeking out opportunities to enhance my skills and knowledge!
                </p>
            </div>
            <div className="about-img">
                <Image src="/images/about-upscaled.png" className="profile-img" width={300} height={500} alt="Hiking picture" />
            </div>
        </div>
    </div>
  );
}

export default About;