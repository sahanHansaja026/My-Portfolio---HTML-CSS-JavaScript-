"use client";
import Image from "next/image";
import { useEffect, useState, FormEvent } from "react";

export default function Home() {
  const fullText = `As a passionate Software Engineering undergraduate, I’m constantly exploring new technologies and building projects that solve real-world problems. From web platforms to mobile apps and AI integration, I enjoy turning ideas into impactful solutions.`;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 20); // Adjust speed (milliseconds) here
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const items = document.querySelectorAll(".additem");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  useEffect(() => {
    const blogItems = document.querySelectorAll(".blog-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement; // cast to HTMLElement
            const index = Array.from(blogItems).indexOf(entry.target);
            target.style.transitionDelay = `${index * 0.2}s`; // stagger delay
            target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    blogItems.forEach((item) => observer.observe(item));
  }, []);

  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const action =
      "https://docs.google.com/forms/d/e/1FAIpQLSd08_5tv2FVAghqLuWLLBOCb82EZQ5STn1p5zBt6llk_MIhMA/formResponse";

    try {
      await fetch(action, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Error submitting form", err);
      setStatus("error");
    }
  };

  useEffect(() => {
    const formFields = document.querySelectorAll(".contactinfo .field");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            formFields.forEach((field, index) => {
              const el = field as HTMLElement;
              setTimeout(() => {
                el.classList.add("animate");
              }, index * 200); // 0.2s stagger
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (formFields.length) observer.observe(formFields[0]);
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll(".subimages");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = Array.from(images).indexOf(entry.target);
            target.style.transitionDelay = `${index * 0.2}s`; // stagger animation
            target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    images.forEach((img) => observer.observe(img));
  }, []);

  
  return (
    <main>
      {/* First row: Hero section */}
      <div className="row row-firstcolor">
        <div className="navbar-container">
          <div className="navbar">
            <a href="#">About</a>
            <a href="#">Work</a>
            <a href="#">Content</a>
          </div>
        </div>

      </div>
      <div className="row row-firstcolor02">
        <div className="splitcontent">
          <div className="content">
            <p>Sahan</p>
            <p>Hansja.</p>
            <div className="yellowbar"></div>
          </div>
          <div className="secondcontent">
            <h6>- Introduction</h6>
            <h5>
              Full Stack Developer and UX/UI Designer, base in<br />
              Sri Lanka
            </h5>
            <p>{displayedText}</p>
            <a>My Journey →</a>
          </div>
        </div>
      </div>


      {/* Second row */}
      <div className="row row-secondcolor">
        <div className="secflexcontent">
          <div className="thiredcontent">
            <h6>- About Me</h6>
            <p>“Hi, I’m Sahan Hansaja, a Software Engineering undergraduate at SLTC Research University. I love building modern web and mobile applications, exploring AI integration, and solving real-world problems through technology”</p>

            <br />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/profile.png`}
              alt="My Profile"
              width={240}
              height={250}
              className="myhideprofile1"
            />
          </div>
          <div className="thedetails">
            <div className="additem">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/pluse.png`}
                alt="My Profile"
                width={45}
                height={50}
                className="plusbtn"
              />
              <h2>Passionate about building smart, real-world solutions</h2>
            </div>
            <div className="additem">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/pluse.png`}
                alt="My Profile"
                width={45}
                height={50}
                className="plusbtn"
              />
              <h2>Skilled in Python, MERN, and Flutter</h2>
            </div>
            <div className="additem">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/pluse.png`}
                alt="My Profile"
                width={45}
                height={50}
                className="plusbtn"
              />
              <h2>AI & Machine Learning Enthusiast</h2>
            </div>
          </div>
        </div>

      </div>
      <div className="row row-firstcolor2">
      </div>
      <div className="row row-firstcolor">
        <div className="selctionboxcontainer">
          <div className="selectionbox">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/box.png`}
              alt="My Profile"
              width={55}
              height={60}
              className="sectionicon"
            />
            <div className="selectparagraph">
              <p>Project</p>
              <p>Designer</p>
            </div>
          </div>
          <div className="selectionbox">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/pen.png`}
              alt="My Profile"
              width={55}
              height={60}
              className="sectionicon"
            />
            <div className="selectparagraph">
              <p>UI/UX</p>
              <p>Designer</p>
            </div>
          </div>
          <a href="https://youtube.com/@baniya-mark?si=t2mlz73lO-WjfYKD">
            <div className="selectionbox">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/youtube.png`}
                alt="My Profile"
                width={55}
                height={60}
                className="sectionicon"
              />
              <div className="selectparagraph">
                <p>Content</p>
                <p>Creator</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row row-firstcolor3">
        <div className="fourthcontent">
          <h6>- About Me</h6>
          <h3>
            All Creative Works,<br />
            Selected Projects.
          </h3>
          <a>Explore More →</a>
        </div>
        <div className="imagecontainers1">
          <div className="subimages">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/image1.png`}
              alt="My Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="row row-firstcolor4">
        <div className="seconimage">
          <div className="subimages">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/image2.png`}
              alt="My Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="row row-firstcolor4">
        <div className="thirdimage">
          <div className="subimages">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/image3.png`}
              alt="My Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="row row-secondcolor2">
        <div className="fifthcontent">
          <h6>- Blog</h6>
          <h3>
            What’s new ?<br />
            My blog and news.
          </h3>
        </div>
        <div className="blog-list">
          <div className="blog-item">
            <span className="blog-date"><a href="https://medium.com/@sahanhansaja026/️-smart-parking-detection-using-esp32-fastapi-postgresql-0cf20c1e64fe">Sep 08 . Blog</a></span>
            <span className="blog-title"><a href="https://medium.com/@sahanhansaja026/️-smart-parking-detection-using-esp32-fastapi-postgresql-0cf20c1e64fe">Smart Parking Detection using ESP32, FastAPI & PostgreSQL</a></span>
            <span className="blog-arrow"><a href="https://medium.com/@sahanhansaja026/️-smart-parking-detection-using-esp32-fastapi-postgresql-0cf20c1e64fe">→</a></span>
          </div>

          <div className="blog-item">
            <span className="blog-date"><a href="https://medium.com/@sahanhansaja026/creating-a-backend-with-mongodb-and-firebase-6f192a1abfc9">May 06 . Blog</a></span>
            <span className="blog-title"><a href="https://medium.com/@sahanhansaja026/creating-a-backend-with-mongodb-and-firebase-6f192a1abfc9">Creating a Backend with MongoDB and Firebase: File Storage Meets Data Management</a></span>
            <span className="blog-arrow"><a href="https://medium.com/@sahanhansaja026/creating-a-backend-with-mongodb-and-firebase-6f192a1abfc9">→</a></span>
          </div>

          <div className="blog-item">
            <span className="blog-date"><a href="https://youtu.be/F4Yb2p6bK7k">Apr 26 . Vlog</a></span>
            <span className="blog-title"><a href="https://youtu.be/F4Yb2p6bK7k">Deploying My React App with GitHub Actions & AWS S3 What I Learned</a></span>
            <span className="blog-arrow"><a href="https://youtu.be/F4Yb2p6bK7k">→</a></span>
          </div>

          <div className="blog-item">
            <span className="blog-date"><a href="https://medium.com/@sahanhansaja026/building-a-dynamic-search-bar-for-a-mern-stack-website-cefd966da536">Sep 09 . Blog</a></span>
            <span className="blog-title"><a href="https://medium.com/@sahanhansaja026/building-a-dynamic-search-bar-for-a-mern-stack-website-cefd966da536">Dynamic Search Bar for a MERN Stack Website</a></span>
            <span className="blog-arrow"><a href="https://medium.com/@sahanhansaja026/building-a-dynamic-search-bar-for-a-mern-stack-website-cefd966da536">→</a></span>
          </div>
        </div>
      </div>
      <div className="row row-firstcolor6">
        <div className="contactpage">
          <div className="sixthcontent">
            <h6>- About Me</h6>
            <h3>
              Got a project ?<br />
              Let’s talk.
            </h3>
            <a href="mailto:sahanhansaja026@gmail.com?subject=Hello&body=Hi Sahan,">Email Me →</a>
          </div>
          <div className="contactinfo">
            <h3>Estimate your project ?<br />
              Let me know hear.</h3>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <div className="lable">What’s your name ?</div>
                <input type="text" name="entry.1191268187" required />
              </div>

              <div className="field">
                <div className="lable">What’s your Email ?</div>
                <input type="email" name="entry.1389639083" required />
              </div>

              <div className="field submitbtn">
                <input type="submit" value="Tell Me →" />
              </div>

              {status === "success" && (
                <p className="text-green-500 text-lg mt-2">😊</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-lg mt-2">😢</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="row row-firstcolor7">
        <div className="centerfooter">
          <p>Thanks for scrolling </p>
        </div>
        <div className="iconbox">
          <a href="https://github.com/sahanHansaja026">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/github.png`}
              alt="github"
              width={35}
              height={35}
            />
          </a>
          <a href="https://www.linkedin.com/in/sahan-hansaja-35502b256?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bt8f9pDeCSOCGOCvJVvJ1Dg%3D%3D">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/linkdin.png`}
              alt="linkdin"
              width={35}
              height={35}
            />
          </a>
          <a href="https://youtube.com/@baniya-mark?si=t2mlz73lO-WjfYKD">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/youtube.png`}
              alt="YouTube"
              width={35}
              height={35}
            />
          </a>

        </div>
      </div>
    </main>
  );
}
