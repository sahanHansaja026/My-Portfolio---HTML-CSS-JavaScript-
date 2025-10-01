import Image from "next/image";


export default function Home() {
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
      <div className="row row-firstcolor">
        <div className="splitcontent">
          <div className="content">
            <p>Sahan</p>
            <p>Hansja.</p>
            <div className="yellowbar"></div>
          </div>
          <div className="secondcontent">
            <h6>- Introduction</h6>
            <h5>
              Full Stack Developer and UX/UI Designer, base in<br/>
              Sri Lanka
            </h5>
            <p>
              As a passionate Software Engineering undergraduate, I’m constantly exploring new technologies and building projects that solve real-world problems. From web platforms to mobile apps and AI integration, I enjoy turning ideas into impactful solutions
            </p>
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
              src="/images/profile.png"
              alt="My Profile"
              width={240}
              height={250}
            />
          </div>
          <div className="thedetails">
            <div className="additem">
              <Image
                src="/images/pluse.png"
                alt="My Profile"
                width={45}
                height={50}
              />
              <h2>Passionate about building smart, real-world solutions</h2>
            </div>
            <div className="additem">
              <Image
                src="/images/pluse.png"
                alt="My Profile"
                width={45}
                height={50}
              />
              <h2>Skilled in Python, MERN, and Flutter</h2>
            </div>
            <div className="additem">
              <Image
                src="/images/pluse.png"
                alt="My Profile"
                width={45}
                height={50}
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
              src="/images/box.png"
              alt="My Profile"
              width={55}
              height={60}
            />
            <div className="selectparagraph">
              <p>Project</p>
              <p>Designer</p>
            </div>
          </div>
          <div className="selectionbox">
            <Image
              src="/images/pen.png"
              alt="My Profile"
              width={55}
              height={60}
            />
            <div className="selectparagraph">
              <p>UI/UX</p>
              <p>Designer</p>
            </div>
          </div>
          <div className="selectionbox">
            <Image
              src="/images/youtube.png"
              alt="My Profile"
              width={55}
              height={60}
            />
            <div className="selectparagraph">
              <p>Content</p>
              <p>Creator</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
