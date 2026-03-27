import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Target, Zap, Users, Code, Gamepad2, Mic, Palette } from 'lucide-react';
import logo from './assets/logo.png';
import './index.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const [showContent, setShowContent] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Reveal content after the dramatic intro
    const timer = setTimeout(() => setShowContent(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <AnimatePresence>
        {!introFinished && (
          <motion.div 
            className="logo-intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="reveal-container">
              {/* Animated Path */}
              <svg viewBox="0 0 200 200" className="reveal-svg">
                <motion.path
                  d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20"
                  fill="transparent"
                  stroke="#111"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                
                {/* Secondary flowing line */}
                <motion.path
                  d="M100,40 C110,40 120,50 120,60 C120,70 110,80 100,80 C90,80 80,70 80,60 C80,50 90,40 100,40"
                  fill="transparent"
                  stroke="#111"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>

              <motion.img 
                src={logo} 
                alt="YS Logo" 
                className="intro-logo"
                initial={{ opacity: 0, scale: 0.8, filter: 'grayscale(100%)' }}
                animate={{ opacity: 1, scale: 1, filter: 'grayscale(0%)' }}
                transition={{ 
                  duration: 2.5, 
                  delay: 1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onAnimationComplete={() => {
                  setTimeout(() => setIntroFinished(true), 1200);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <>
          <nav>
            <motion.div 
              className="container nav-content"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <img src={logo} alt="YS Logo" className="logo" />
              <button className="btn">Get in Touch</button>
            </motion.div>
          </nav>

          <main>
            <section className="hero">
              <motion.div 
                className="container"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <span className="tag">Creative Design & Management Firm</span>
                <h1>Designing Future Digital Experiences</h1>
                <p>
                  YS is a creative design, development, and management firm dedicated to pioneering AI-driven solutions. 
                  We transform complex systems into progressive journeys through the power of creative thinking and strategic gamification.
                </p>
                <button className="btn btn-primary">Discover Our Projects</button>
              </motion.div>
            </section>

            <section id="mission" style={{ background: '#f8f9fa' }}>
              <div className="container">
                <motion.div 
                  className="section-title"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <span className="tag">Mission & Vision</span>
                  <h2>Infusing Creativity into Technology</h2>
                </motion.div>

                <div className="grid">
                  <motion.div 
                    className="card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                  >
                    <h3>Our Mission</h3>
                    <p>To infuse creativity and gamification into every project, delivering meaningful value by designing systems that people don’t just use, but truly experience.</p>
                  </motion.div>
                  <motion.div 
                    className="card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                  >
                    <h3>Our Vision</h3>
                    <p>To be the global pioneers in bringing captivating, innovative products to life—utilizing creative thinking to help humanity experience the absolute best of what technology makes possible.</p>
                  </motion.div>
                </div>
              </div>
            </section>

            <section id="values">
              <div className="container">
                <motion.div 
                  className="section-title"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <h2>Core Values</h2>
                  <p>The principles that drive our innovation and progress.</p>
                </motion.div>

                <motion.div 
                  className="grid"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {[
                    { icon: <Sparkles />, title: 'Innovation', desc: 'Constantly pushing the boundaries of what AI can achieve.' },
                    { icon: <Target />, title: 'Adaptation', desc: 'Staying ahead of the curve by evolving with the digital landscape.' },
                    { icon: <Zap />, title: 'Progress', desc: 'Bettering ourselves and our environment through automation and smarter tools.' },
                    { icon: <Users />, title: 'Engagement', desc: 'Ensuring every product draws users in through deep, progressive gamification.' }
                  ].map((value, i) => (
                    <motion.div key={i} className="card" variants={fadeIn}>
                      <div className="text-accent" style={{ marginBottom: '1rem' }}>{value.icon}</div>
                      <h3>{value.title}</h3>
                      <p>{value.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            <section id="projects" style={{ background: '#111', color: 'white' }}>
              <div className="container">
                <div className="section-title">
                  <h2 style={{ color: 'white' }}>Current Projects</h2>
                </div>

                <div className="barakai-grid">
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                  >
                    <span className="tag" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>Flagship Gaming Platform</span>
                    <h2 style={{ color: 'white', fontSize: '3rem', margin: '1rem 0' }}>Barakai</h2>
                    <p style={{ color: '#ccc', marginBottom: '2rem' }}>
                      Redefining digital storytelling by merging high-fidelity PC gaming with narrative-depth Manga, powered by integrated AI generation.
                    </p>
                    <ul style={{ marginBottom: '2rem' }}>
                      <li style={{ color: '#aaa', margin: '0.5rem 0' }}>• AI-Generated Narratives</li>
                      <li style={{ color: '#aaa', margin: '0.5rem 0' }}>• Progressive World Evolution</li>
                      <li style={{ color: '#aaa', margin: '0.5rem 0' }}>• Unified Media Experience</li>
                    </ul>
                    <button className="btn" style={{ background: 'white', color: 'black' }}>Learn More</button>
                  </motion.div>
                  <motion.div 
                    className="card" 
                    style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                  >
                    <span className="tag" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>Education & Content</span>
                    <h3 style={{ color: 'white', marginTop: '1rem' }}>Yossi Cohen Platform</h3>
                    <p style={{ color: '#aaa' }}>
                      End-to-end design and management of a gamified learning environment for NLP and professional development.
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                      <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Online Courses</h4>
                        <p style={{ fontSize: '0.9rem', color: '#888' }}>Gamified learning journeys for peak engagement.</p>
                      </div>
                      <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Podcast Enablement</h4>
                        <p style={{ fontSize: '0.9rem', color: '#888' }}>Infrastructure for high-quality content delivery.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            <section id="services">
              <div className="container">
                <div className="section-title">
                  <span className="tag">What We Do</span>
                  <h2>Our Services</h2>
                </div>

                <motion.div 
                  className="grid"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {[
                    { icon: <Code />, title: 'AI System Design', desc: 'Developing intelligent frameworks that automate and optimize workflows.' },
                    { icon: <Gamepad2 />, title: 'Gamification Strategy', desc: 'Integrating progressive mechanics into non-gaming environments to increase user stickiness.' },
                    { icon: <Palette />, title: 'Artistic Direction', desc: 'Providing a unique creative vision for digital products and platforms.' },
                    { icon: <Zap />, title: 'Concept Development', desc: 'Bringing ideas from initial thought to a fully realized, interactive reality.' }
                  ].map((service, i) => (
                    <motion.div key={i} className="card" variants={fadeIn}>
                      <div className="text-accent" style={{ marginBottom: '1rem' }}>{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {introFinished && (
              <motion.footer 
                className="footer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="container">
                  <img src={logo} alt="YS Logo" style={{ height: '30px', opacity: 0.5, marginBottom: '1rem' }} />
                  <p>© {new Date().getFullYear()} YS Creative Firm. All rights reserved.</p>
                  <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Pioneering AI-Driven Solutions & Gamification</p>
                  <button className="btn" style={{ marginTop: '2rem' }}>Get in Touch</button>
                </div>
              </motion.footer>
            )}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
