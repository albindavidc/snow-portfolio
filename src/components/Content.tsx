import React from 'react';
import { ExternalLink, Github, Mail, Phone, Code, FileText, LayoutDashboard, Brain, Server, Cloud, ChevronRight, GraduationCap } from 'lucide-react';

export const Content: React.FC = () => {
  return (
    <main className="relative bg-[var(--bg-content)] z-20 pb-24">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-24 space-y-32">
        
        {/* ABOUT SECTION */}
        <section id="about" className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display text-[var(--text-main)] font-bold">About</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-color)] to-transparent" />
          </div>
          <p className="text-[var(--text-muted)] text-lg md:text-xl leading-relaxed max-w-4xl">
            AI-focused full-stack software engineer experienced in building maintainable web applications 
            and intelligent product workflows across Angular, TypeScript, Node.js, NestJS, Express.js, PostgreSQL, 
            MongoDB, Redis, and modern cloud tooling. Combines software engineering with UX/UI design to turn 
            product requirements into responsive, scalable, user-focused applications.
          </p>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display text-[var(--text-main)] font-bold">Skills</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-color)] to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={<Code size={20} />} 
              title="Languages" 
              skills={['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SQL']} 
            />
            <SkillCard 
              icon={<LayoutDashboard size={20} />} 
              title="Frontend" 
              skills={['Angular 22', 'RxJS', 'NgRx', 'Tailwind CSS 4', 'Angular Material', 'SCSS', 'Bootstrap', 'ECharts', 'DHTMLX Gantt', 'FilePond', 'Google Maps', 'Stripe']} 
            />
            <SkillCard 
              icon={<Server size={20} />} 
              title="Backend" 
              skills={['Node.js', 'NestJS 11', 'Express.js', 'Socket.io', 'JWT', 'Passport', 'CQRS', 'Clean Architecture']} 
            />
            <SkillCard 
              icon={<Brain size={20} />} 
              title="AI / LLM" 
              skills={['Google Gemini', 'LangChain', 'LangGraph', 'Agentic Workflows', 'Prompt Engineering']} 
            />
            <SkillCard 
              icon={<FileText size={20} />} 
              title="Data" 
              skills={['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'TypeORM', 'Mongoose']} 
            />
            <SkillCard 
              icon={<Cloud size={20} />} 
              title="Cloud & DevOps" 
              skills={['AWS S3', 'Docker', 'Vercel', 'Netlify', 'GCP', 'Nginx', 'PM2', 'Git']} 
            />
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display text-[var(--text-main)] font-bold">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-color)] to-transparent" />
          </div>

          <div className="relative border-l border-[var(--border-color)] ml-3 space-y-12">
            <TimelineItem 
              role="Freelancer – WordPress Developer"
              company="Remote"
              date="Sep 2021 – Present"
            />
            <TimelineItem 
              role="Manager / Senior Graphics Designer"
              company="DC Graphics"
              location="Thrissur, Kerala"
              date="Aug 2023 – May 2024"
            />
            <TimelineItem 
              role="UX Designer Intern"
              company="HelpyMoto"
              companyUrl="#"
              location="Remote"
              date="Nov 2022 – Mar 2023"
            />
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="work" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display text-[var(--text-main)] font-bold">Selected Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-color)] to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard 
              title="Nirman AI"
              description="Construction & project-management platform."
              tags={['Angular', 'NgRx', 'NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'Socket.io', 'Docker', 'AWS S3']}
              link="nirman.albindavidc.com"
            />
            <ProjectCard 
              title="Vidya AI"
              description="AI-driven educational platform."
              tags={['Angular 22', 'NestJS 11', 'TypeORM', 'MongoDB', 'JWT', 'LangChain', 'LangGraph']}
              link="vidya.albindavidc.com"
            />
            <ProjectCard 
              title="Nexus AI"
              description="Real-time fitness social platform with AI-assisted coaching."
              tags={['Angular', 'Node.js', 'Socket.io', 'AWS S3']}
              link="nexus.albindavidc.com"
            />
            <ProjectCard 
              title="Unbound"
              description="Customizable e-commerce platform."
              tags={['Node', 'Express MVC', 'MongoDB', 'OAuth']}
              link="unbound.albindavidc.com"
            />
          </div>
        </section>

        {/* EDUCATION & CERTS */}
        <section id="education" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display text-[var(--text-main)] font-bold">Education & Certifications</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-color)] to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <EducationItem 
               degree="Mechatronics (MR) Engineering"
               institution="APJ Abdul Kalam Technological University"
               year="2023"
             />
             <EducationItem 
               degree="MEAN Stack Development"
               institution="Brototype"
               year="2025"
             />
             <EducationItem 
               degree="UX Design"
               institution="Google"
               year="2022"
             />
             <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-6 rounded-xl flex items-start gap-4 hover:border-[var(--border-hover)] transition-colors">
                <div className="mt-1 text-[var(--color-brand)]">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-[var(--text-main)] font-semibold text-lg">Foundations & Certificates</h3>
                  <p className="text-[var(--text-muted)] mt-2 text-sm leading-relaxed">
                    Foundation of HTML/CSS/JS (Duke University), TCS ION Career Edge, Angular Certificate, Google Digital Marketing.
                  </p>
                </div>
              </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-12 pt-12 border-t border-[var(--border-color)]">
           <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-display text-[var(--text-main)] font-bold">Get in Touch</h2>
              <p className="text-[var(--text-muted)] max-w-lg mx-auto">
                Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-6 pt-6">
                 <a href="mailto:albindavidc@gmail.com" className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">
                   <Mail size={18} />
                   <span>albindavidc@gmail.com</span>
                 </a>
                 <a href="tel:+919946799434" className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">
                   <Phone size={18} />
                   <span>+91 9946799434</span>
                 </a>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
                 <SocialLink href="https://github.com/albindavidc" icon={<Github size={20} />} label="GitHub" />
                 <SocialLink href="https://linkedin.com/in/albindavidc" icon={<ExternalLink size={20} />} label="LinkedIn" />
                 <SocialLink href="https://leetcode.com/u/albindavidc" icon={<Code size={20} />} label="LeetCode" />
              </div>
           </div>
        </section>

      </div>
    </main>
  );
};

// Sub-components
const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) => (
  <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-6 rounded-xl hover:border-[var(--border-hover)] transition-colors">
    <div className="flex items-center gap-3 mb-4 text-[var(--color-brand)]">
      {icon}
      <h3 className="font-semibold text-[var(--text-main)]">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(s => (
        <span key={s} className="px-3 py-1 bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-[var(--text-muted)] text-xs rounded-full">
          {s}
        </span>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ role, company, location, date }: any) => (
  <div className="relative pl-8 sm:pl-12">
    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-[var(--color-brand)] rounded-full ring-4 ring-[var(--bg-content)]" />
    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
      <h3 className="text-xl font-bold text-[var(--text-main)]">{role}</h3>
      <span className="text-sm font-medium text-[var(--color-brand)]/80 tracking-widest uppercase shrink-0">{date}</span>
    </div>
    <div className="text-[var(--text-muted)] font-medium">
      {company} {location && <span className="text-[var(--text-subtle)]">· {location}</span>}
    </div>
  </div>
);

const ProjectCard = ({ title, description, tags, link }: any) => (
  <div className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-8 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] transition-all duration-300 flex flex-col h-full">
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-2xl font-bold text-[var(--text-main)] group-hover:text-[var(--color-brand)] transition-colors">{title}</h3>
      <a href={`https://${link}`} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">
        <ExternalLink size={20} />
      </a>
    </div>
    <p className="text-[var(--text-muted)] mb-8 flex-1">{description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((t: string) => (
        <span key={t} className="px-2.5 py-1 bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-[var(--text-muted)] text-xs rounded-md font-mono">
          {t}
        </span>
      ))}
    </div>
    <a href={`https://${link}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors w-fit">
      View Live <ChevronRight size={16} />
    </a>
  </div>
);

const EducationItem = ({ degree, institution, year }: any) => (
  <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-6 rounded-xl flex items-start gap-4 hover:border-[var(--border-hover)] transition-colors">
    <div className="mt-1 text-[var(--text-subtle)]">
      <GraduationCap size={24} />
    </div>
    <div>
      <h3 className="text-[var(--text-main)] font-semibold text-lg">{degree}</h3>
      <div className="text-[var(--text-muted)] mt-1">{institution}</div>
      <div className="text-[var(--text-subtle)] text-sm mt-2">{year}</div>
    </div>
  </div>
);

const SocialLink = ({ href, icon, label }: any) => (
  <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] hover:border-[var(--border-hover)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </a>
);
