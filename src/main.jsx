import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Menu, X, ExternalLink } from "lucide-react";
import "./styles.css";

const projects = [
  { title:"ATA Travel", tag:"Travel Platform", desc:"Worked on travel web application features, backend development, API integration and database management.", stack:"Laravel • PHP • MySQL • REST APIs", link:"https://atatravel.com.sg/" },
  { title:"Atlantic Leasing", tag:"Car Subscription", desc:"Worked on customer and subscription workflows, backend APIs, React integration and database optimization.", stack:"Laravel • React.js • MySQL • REST APIs", link:"https://atlanticleasing.online/" },
  { title:"UR Cab", tag:"Mobility Platform", desc:"Worked on driver onboarding, ride tracking, payout management, role-based dashboards and API integration.", stack:"Laravel • React.js • MySQL", link:null },
  { title:"Interior Design Platforms", tag:"Web & Admin CMS", desc:"Developed and maintained interior design websites and Core PHP admin panels for content and project management.", stack:"Core PHP • MySQL • JavaScript • HTML/CSS", link:null }
];

const skills = ["PHP","Laravel","React.js","JavaScript","Core PHP","Node.js","MySQL","REST APIs","SQL Optimization","Docker","AWS","Git / GitHub","WordPress","Responsive UI"];

function App(){
  const [open,setOpen]=React.useState(false);
  const go=(id)=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"})};
  return <div>
    <nav className="nav">
      <div className="nav-inner">
    <button className="brand" onClick={() => go("home")}>
      LOASHINI BOJAN<span></span>
    </button>
      <div className={open?"navlinks show":"navlinks"}>{["about","skills","projects","experience","contact"].map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}</div>
      <button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
    </nav>

    <main id="home">
      <section className="hero wrap">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="hero-copy">
          <div className="eyebrow"><span className="dot"/> Available for opportunities · Dubai, UAE</div>
          <h1>Full Stack Developer<br/><em>building useful digital products.</em></h1>
          <p className="lead">I’m Loashini Bojan, a Full Stack Developer with 3+ years of experience creating production-ready web applications with Laravel, PHP, React.js and MySQL.</p>
          <div className="actions"><button className="primary" onClick={()=>go("projects")}>View my work <ArrowUpRight size={18}/></button><a className="secondary" href="/Loashini_Resume.pdf" download><Download size={17}/> Download CV</a></div>
          <div className="social"><a href="mailto:loashinibojan@gmail.com"><Mail size={17}/> loashinibojan@gmail.com</a><a href="https://www.linkedin.com/in/loashini-bojan-651003356/" target="_blank"><span>in</span> LinkedIn</a></div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.8}} className="hero-card">
          <div className="code-top"><span/><span/><span/><small>developer.json</small></div>
          <pre>{`{
  "name": "Loashini Bojan",
  "role": "Full Stack Developer",
  "experience": "3+ years",
  "frontend": ["React.js", "JavaScript"],
  "backend": ["Laravel", "PHP"],
  "database": ["MySQL"],
  "focus": "Clean & scalable web apps"
}`}</pre>
        </motion.div>
      </section>

      <section id="about" className="section wrap">
        <div className="section-label">01 / ABOUT</div><div className="two-col"><div><h2>Turning ideas into <span>working products.</span></h2></div><div><p>I’m a Full Stack Developer experienced in building and maintaining web applications from backend APIs and database design to responsive React interfaces.</p><p>I’ve worked on travel, mobility, car subscription and interior design platforms, collaborating across development, deployment and ongoing improvements.</p></div></div>
        <div className="stats"><div><b>3+</b><span>Years experience</span></div><div><b>5+</b><span>Production apps</span></div><div><b>25%</b><span>SQL response improvement</span></div><div><b>30%</b><span>Downtime reduction</span></div></div>
      </section>

      <section id="skills" className="section soft"><div className="wrap"><div className="section-label">02 / SKILLS</div><h2>Tools I work with.</h2><div className="skill-grid">{skills.map((s,i)=><motion.div whileHover={{y:-4}} className="skill" key={s}><span>{String(i+1).padStart(2,"0")}</span>{s}</motion.div>)}</div></div></section>

      <section id="projects" className="section wrap"><div className="section-label">03 / PROJECTS</div><div className="section-head"><h2>Selected work.</h2><p>Real-world platforms and systems I’ve contributed to.</p></div><div className="project-grid">{projects.map((p,i)=><motion.article whileHover={{y:-7}} className="project" key={p.title}><div className="project-num">0{i+1}</div><div className="project-tag">{p.tag}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="stack">{p.stack}</div>{p.link?<a className="project-link" href={p.link} target="_blank">Visit project <ExternalLink size={15}/></a>:<div className="private">Private / internal project</div>}</motion.article>)}</div></section>

      <section id="experience" className="section soft"><div className="wrap"><div className="section-label">04 / EXPERIENCE</div><div className="experience"><div className="exp-date">AUG 2023 — JUN 2026</div><div><h3>Full Stack Developer</h3><p className="company">Smitiv Mobile Technologies · India</p><ul><li>Built Laravel authentication modules, REST APIs and backend workflows.</li><li>Integrated React.js interfaces with Laravel APIs and MySQL databases.</li><li>Worked on production applications, deployment, monitoring and optimization.</li><li>Improved SQL response time and reduced application downtime through optimization and maintenance.</li></ul></div></div></div></section>

      <section id="contact" className="contact wrap"><div className="contact-box"><div className="section-label">05 / CONTACT</div><h2>Let’s build something<br/><span>useful together.</span></h2><p>Open to Full Stack, Laravel, PHP, React.js and Web Development opportunities in Dubai, UAE.</p><div className="actions"><a className="primary" href="mailto:loashinibojan@gmail.com">Get in touch <ArrowUpRight size={18}/></a><a className="secondary" href="https://www.linkedin.com/in/loashini-bojan-651003356/" target="_blank"><span className="linkedin-icon">in</span>LinkedIn</a></div></div></section>
    </main>
    <footer><div className="wrap foot"><span>© {new Date().getFullYear()} Loashini Bojan</span><span>Full Stack Developer · Dubai, UAE</span></div></footer>
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);