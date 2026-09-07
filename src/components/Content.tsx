import React from 'react';
import { ExternalLink, Github, Mail, Phone, Code, FileText, LayoutDashboard, Brain, Server, Cloud, ChevronRight, GraduationCap, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

// Common classes
const glassCardClass = "bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/[0.05] transition-all duration-300";
const glassCardInteractive = "bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg hover:border-[var(--color-brand)]/30 hover:bg-white/[0.05] transition-all duration-300 relative group";

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export const Content: React.FC = () => {
  return (
    <main className="relative bg-[var(--bg-content)] z-20 pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 space-y-32">
        
        {/* ABOUT SECTION */}
        <motion.section 
          id="about" 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display text-[var(--text-main)] font-bold">About</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className={`md:col-span-2 ${glassCardClass} flex items-center`}>
              <p className="text-[var(--text-muted)] text-lg md:text-xl leading-relaxed">
                AI-focused full-stack software engineer experienced in building maintainable web applications 
                and intelligent product workflows across Angular, TypeScript, Node.js, NestJS, Express.js, PostgreSQL, 
                MongoDB, Redis, and modern cloud tooling. Combines software engineering with UX/UI design to turn 
                product requirements into responsive, scalable, user-focused applications.
              </p>
            </motion.div>
            <div className="flex flex-col gap-6">
              <motion.div variants={itemVariants} className={`${glassCardClass} flex-1 flex flex-col justify-center items-center text-center gap-3 p-6 group hover:-translate-y-1`}>
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-brand)]/20 transition-all">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-[var(--text-main)] font-semibold">Open to opportunities</h3>
                  <p className="text-[var(--text-subtle)] text-sm mt-1">Available for roles</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className={`${glassCardClass} flex-1 flex flex-col justify-center items-center text-center gap-3 p-6 group hover:-translate-y-1`}>
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-brand)]/20 transition-all">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-[var(--text-main)] font-semibold">Based in Kerala</h3>
                  <p className="text-[var(--text-subtle)] text-sm mt-1">India / Remote</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section 
          id="skills" 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display text-[var(--text-main)] font-bold">Skills</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
            <motion.div variants={itemVariants} className="md:col-span-2">
              <SkillCard 
                icon={<LayoutDashboard size={20} />} 
                title="Frontend" 
                skills={['Angular 22', 'RxJS', 'NgRx', 'Tailwind CSS', 'Angular Material', 'SCSS', 'Bootstrap', 'ECharts', 'DHTMLX Gantt', 'FilePond', 'Google Maps', 'Stripe']} 
              />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2">
              <SkillCard 
                icon={<Server size={20} />} 
                title="Backend" 
                skills={['Node.js', 'NestJS', 'Express.js', 'Socket.io', 'JWT', 'Passport', 'CQRS', 'Clean Architecture']} 
              />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
              <SkillCard 
                icon={<Code size={20} />} 
                title="Languages" 
                skills={['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SQL']} 
              />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
              <SkillCard 
                icon={<Brain size={20} />} 
                title="AI / LLM" 
                skills={['Google Gemini', 'LangChain', 'LangGraph', 'Agentic Workflows', 'Prompt Engineering']} 
              />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
              <SkillCard 
                icon={<FileText size={20} />} 
                title="Data" 
                skills={['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'TypeORM', 'Mongoose']} 
              />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
              <SkillCard 
                icon={<Cloud size={20} />} 
                title="Cloud & DevOps" 
                skills={['AWS S3', 'Docker', 'Vercel', 'Netlify', 'GCP', 'Nginx', 'PM2', 'Git']} 
              />
            </motion.div>
          </div>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <motion.section 
          id="experience" 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display text-[var(--text-main)] font-bold">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="relative ml-4 md:ml-6 space-y-8 pb-4">
            {/* Timeline line */}
            <div className="absolute top-4 bottom-0 left-[-1px] w-px bg-gradient-to-b from-[var(--color-brand)]/50 via-white/10 to-transparent" />
            
            <motion.div variants={itemVariants}>
              <TimelineItem 
                role="Freelancer – WordPress Developer"
                company="Remote"
                date="Sep 2021 – Present"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TimelineItem 
                role="Manager / Senior Graphics Designer"
                company="DC Graphics"
                location="Thrissur, Kerala"
                date="Aug 2023 – May 2024"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TimelineItem 
                role="UX Designer Intern"
                company="HelpyMoto"
                companyUrl="#"
                location="Remote"
                date="Nov 2022 – Mar 2023"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section 
          id="work" 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display text-[var(--text-main)] font-bold">Selected Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <ProjectCard 
                title="Nirman AI"
                description="Construction & project-management platform. Features comprehensive dashboards, real-time collaboration, and intelligent scheduling."
                tags={['Angular', 'NgRx', 'NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'Socket.io', 'Docker', 'AWS S3']}
                link="nirman.albindavidc.com"
                featured={true}
              />
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <ProjectCard 
                title="Vidya AI"
                description="AI-driven educational platform."
                tags={['Angular 22', 'NestJS 11', 'TypeORM', 'MongoDB', 'JWT', 'LangChain', 'LangGraph']}
                link="vidya.albindavidc.com"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <ProjectCard 
                title="Nexus AI"
                description="Real-time fitness social platform with AI-assisted coaching."
                tags={['Angular', 'Node.js', 'Socket.io', 'AWS S3']}
                link="nexus.albindavidc.com"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <ProjectCard 
                title="Unbound"
                description="Customizable e-commerce platform with modular architecture."
                tags={['Node', 'Express MVC', 'MongoDB', 'OAuth']}
                link="unbound.albindavidc.com"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* EDUCATION & CERTS */}
        <motion.section 
          id="education" 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display text-[var(--text-main)] font-bold">Education & Certifications</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <motion.div variants={itemVariants} className="md:col-span-1">
               <EducationItem 
                 degree="MEAN Stack Development"
                 institution="Brototype"
                 year="2025"
               />
             </motion.div>
             <motion.div variants={itemVariants} className="md:col-span-1">
               <EducationItem 
                 degree="Mechatronics (MR) Engineering"
                 institution="APJ Abdul Kalam Technological University"
                 year="2023"
               />
             </motion.div>
             <motion.div variants={itemVariants} className="md:col-span-1">
               <EducationItem 
                 degree="UX Design"
                 institution="Google"
                 year="2022"
               />
             </motion.div>
             <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-2">
               <div className={`${glassCardInteractive} flex flex-col sm:flex-row items-start gap-5`}>
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-[var(--text-main)] font-semibold text-lg">Foundations & Certificates</h3>
                    <p className="text-[var(--text-muted)] mt-2 leading-relaxed">
                      Foundation of HTML/CSS/JS (Duke University), TCS ION Career Edge, Angular Certificate, Google Digital Marketing.
                    </p>
                  </div>
                </div>
             </motion.div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section 
          id="contact" 
          className="pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
           <motion.div variants={itemVariants} className={`${glassCardClass} max-w-4xl mx-auto text-center space-y-10 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand)]/5 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <h2 className="text-4xl md:text-5xl font-display text-[var(--text-main)] font-bold">Get in Touch</h2>
                <p className="text-[var(--text-muted)] max-w-lg mx-auto text-lg">
                  Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
              
              <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
                 <a href="mailto:albindavidc007@gmail.com" className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 w-full sm:w-auto rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-[var(--text-main)] hover:bg-white/[0.08] hover:border-[var(--color-brand)]/50 transition-all group">
                   <div className="text-[var(--color-brand)] group-hover:scale-110 transition-transform shrink-0">
                     <Mail size={18} className="sm:w-5 sm:h-5" />
                   </div>
                   <span className="font-medium tracking-wide text-sm sm:text-base truncate">albindavidc007@gmail.com</span>
                 </a>
                 <a href="tel:+919946799434" className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 w-full sm:w-auto rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-[var(--text-main)] hover:bg-white/[0.08] hover:border-[var(--color-brand)]/50 transition-all group">
                   <div className="text-[var(--color-brand)] group-hover:scale-110 transition-transform shrink-0">
                     <Phone size={18} className="sm:w-5 sm:h-5" />
                   </div>
                   <span className="font-medium tracking-wide text-sm sm:text-base">+91 9946799434</span>
                 </a>
              </div>

              <div className="relative z-10 flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-white/10">
                 <SocialIcon href="https://github.com/albindavidc" icon={<GithubIcon size={22} />} label="GitHub" />
                 <SocialIcon href="https://linkedin.com/in/albindavidc" icon={<LinkedInIcon size={20} />} label="LinkedIn" />
                 <SocialIcon href="https://leetcode.com/u/albindavidc" icon={<LeetCodeIcon size={22} />} label="LeetCode" />
              </div>
           </motion.div>
        </motion.section>

      </div>
    </main>
  );
};

// Sub-components
const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) => (
  <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-lg hover:border-[var(--color-brand)]/30 hover:bg-white/[0.05] transition-all duration-300 h-full flex flex-col group">
    <div className="flex items-center gap-3 mb-6 text-[var(--color-brand)] group-hover:-translate-y-1 transition-transform">
      <div className="w-10 h-10 rounded-xl bg-[var(--color-brand)]/10 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-[var(--text-main)] text-lg">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto">
      {skills.map(s => (
        <span key={s} className="px-3 py-1.5 bg-white/[0.05] border border-white/10 text-[var(--text-muted)] text-sm rounded-full transition-all duration-300 hover:border-[var(--color-brand)]/50 hover:text-[var(--text-main)] hover:bg-[var(--color-brand)]/10 hover:-translate-y-0.5 cursor-default">
          {s}
        </span>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ role, company, location, date }: any) => (
  <div className="relative pl-8 md:pl-10 group">
    <div className="absolute left-[-6px] top-3 w-3 h-3 bg-[var(--color-brand)] rounded-full ring-4 ring-[var(--bg-content)] group-hover:scale-125 transition-transform" />
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-lg hover:border-[var(--color-brand)]/30 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-3">
        <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--color-brand)] transition-colors">{role}</h3>
        <span className="text-xs font-bold text-[var(--color-brand)] tracking-widest uppercase shrink-0 px-3 py-1 bg-[var(--color-brand)]/10 rounded-full">{date}</span>
      </div>
      <div className="text-[var(--text-muted)] font-medium text-lg">
        {company} {location && <span className="text-[var(--text-subtle)]">· {location}</span>}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, description, tags, link, featured = false }: any) => (
  <a href={`https://${link}`} target="_blank" rel="noreferrer" className="block h-full group">
    <div className={`bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-lg hover:border-[var(--color-brand)]/40 hover:bg-white/[0.05] transition-all duration-500 h-full flex flex-col relative overflow-hidden hover:-translate-y-1 ${featured ? 'min-h-[320px]' : ''}`}>
      
      {/* Featured Background Glow */}
      {featured && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)]/10 rounded-full blur-[80px] -mr-10 -mt-10 group-hover:bg-[var(--color-brand)]/20 transition-colors duration-500 pointer-events-none" />
      )}

      <div className="flex justify-between items-start mb-6 relative z-10">
        <h3 className={`${featured ? 'text-3xl md:text-4xl' : 'text-2xl'} font-bold text-[var(--text-main)] group-hover:text-[var(--color-brand)] transition-colors`}>{title}</h3>
        <div className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[var(--text-muted)] group-hover:bg-[var(--color-brand)] group-hover:text-[#0a0a0a] group-hover:border-[var(--color-brand)] transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110 shrink-0">
          <ExternalLink size={20} />
        </div>
      </div>
      
      <p className="text-[var(--text-muted)] mb-8 flex-1 relative z-10 text-lg">{description}</p>
      
      <div className="flex flex-wrap gap-2 relative z-10">
        {tags.map((t: string) => (
          <span key={t} className="px-3 py-1.5 bg-white/[0.05] border border-white/10 text-[var(--text-muted)] text-sm rounded-full font-mono transition-colors duration-300 group-hover:border-[var(--color-brand)]/30 group-hover:text-[var(--text-main)] group-hover:bg-[var(--color-brand)]/5">
            {t}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const EducationItem = ({ degree, institution, year }: any) => (
  <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-lg hover:border-[var(--color-brand)]/30 hover:bg-white/[0.05] transition-all duration-300 h-full flex flex-col group hover:-translate-y-1">
    <div className="w-12 h-12 rounded-xl bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
      <GraduationCap size={24} />
    </div>
    <h3 className="text-[var(--text-main)] font-semibold text-lg">{degree}</h3>
    <div className="text-[var(--text-muted)] mt-2 flex-1">{institution}</div>
    <div className="text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase mt-6">{year}</div>
  </div>
);

const SocialIcon = ({ href, icon, label }: any) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    aria-label={label}
    className="w-14 h-14 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--color-brand)] hover:text-[#0a0a0a] hover:border-[var(--color-brand)] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
  >
    {icon}
  </a>
);

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 448 512" fill="currentColor">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
  </svg>
);

const LeetCodeIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z" />
    <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z" />
  </svg>
);
