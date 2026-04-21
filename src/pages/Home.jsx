import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export default function Home() {
  const { personal, experience, skills } = portfolioData;

  return (
    <main className="pt-24 md:pt-32">
      {/* Hero Section — also serves as #about anchor */}
      <section id="about" className="px-6 md:px-10 lg:px-20 mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 z-10">
          <p className="text-primary font-label text-[12px] tracking-[0.4em] font-bold uppercase mb-4">{personal.role}</p>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter italic leading-[0.85] text-on-surface mb-6 md:mb-8">
            {personal.name.split(' ')[0]} <span className="text-primary">{personal.name.split(' ')[1]}</span>
          </h1>
          <p className="max-w-md text-secondary text-lg leading-relaxed mb-10">
            {personal.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="inline-block bg-primary text-on-primary px-8 py-4 font-bold text-[11px] tracking-[0.3em] uppercase shadow-[0_16px_40px_rgba(176,0,70,0.15)] hover:-translate-y-1 transition-transform">Explore Portfolio</a>
            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 font-bold text-[11px] tracking-[0.3em] uppercase hover:-translate-y-1 transition-transform group">
                <span className="material-symbols-outlined text-base group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                LinkedIn
              </a>
            )}
            {personal.resumeUrl && personal.resumeUrl !== '#' && (
              <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary px-8 py-4 font-bold text-[11px] tracking-[0.3em] uppercase transition-all group">
                <span className="material-symbols-outlined text-base group-hover:translate-y-1 transition-transform">download</span>
                Download CV
              </a>
            )}
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="w-full aspect-[4/5] bg-surface-container-high overflow-hidden editorial-mask relative group">
            <img alt="Professional portrait of Uyen Ngo" className="w-full h-full object-cover transition-all duration-700" src={personal.image}/>
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-50"></div>
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-fixed-dim/30 editorial-mask -z-10"></div>
        </div>
      </section>

      {/* Work History */}
      <section className="bg-surface-container-low py-20 md:py-32 px-6 md:px-10 lg:px-20 overflow-hidden" id="work">
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-20">
          <h2 className="font-headline text-5xl italic font-black tracking-tighter text-on-surface">Work History</h2>
          <span className="font-label text-[10px] tracking-[0.5em] text-secondary uppercase font-bold">Provenance & Partnerships</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-outline-variant/10">
          {experience.map((exp, index) => (
            <WorkCard 
              key={exp.id}
              num={`0${index + 1}`} 
              title={exp.company} 
              role={exp.role}
              period={exp.period}
              desc={exp.description} 
              slug={exp.slug}
            />
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-20" id="expertise">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="relative">
            <div className="sticky top-40">
              <h2 className="font-headline text-8xl font-black tracking-tighter italic text-on-surface mb-8">Expertise</h2>
              <div className="w-32 h-2 bg-primary mb-10"></div>
              <p className="text-secondary text-xl max-w-sm leading-relaxed">A specialized toolkit built at the intersection of psychology, design, and commerce.</p>
              
              <div className="mt-12">
                <span className="font-label text-[10px] tracking-[0.5em] text-secondary uppercase font-bold mb-4 block">Core Toolkit</span>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-surface-container-low text-[10px] font-bold tracking-widest uppercase text-secondary border border-outline-variant/30">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-20">
            <ExpertiseBlock 
              icon="auto_awesome"
              title="Editorial Branding"
              desc="Transforming commercial brands into lifestyle icons through curated visual narratives and high-fidelity design systems."
              tags={["Visual Strategy", "Typography Design"]}
              colorClass="text-primary"
              bgClass="bg-surface-container-highest"
            />
            <ExpertiseBlock 
              icon="insights"
              title="Growth Strategy"
              desc="Data-informed decision making that respects the brand's aesthetic soul while driving measurable ROI across social and search."
              tags={["Market Analysis", "Ads Performance"]}
              colorClass="text-tertiary"
              bgClass="bg-surface-container"
            />
            <ExpertiseBlock 
              icon="campaign"
              title="Content Direction"
              desc="High-production value storytelling that bridges video, photography, and copy for the modern social ecosystem."
              tags={["Art Direction", "Copywriting"]}
              colorClass="text-primary"
              bgClass="bg-surface-container-low"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-on-surface text-surface py-20 md:py-32 px-6 md:px-10 lg:px-20 relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-10 editorial-mask translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-headline text-4xl md:text-6xl font-black italic tracking-tighter mb-10 md:mb-16 text-center">Start a Conversation</h2>
          <form
            action="https://formsubmit.co/puncornuyen@gmail.com"
            method="POST"
            className="space-y-8 md:space-y-12"
          >
            {/* FormSubmit config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="relative group">
                <input name="name" required type="text" placeholder="Your Name" className="w-full bg-transparent border-0 border-b border-surface/20 py-4 px-0 focus:ring-0 focus:border-primary transition-all placeholder:text-surface/40 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest focus:outline-none" />
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-focus-within:w-full transition-all duration-500"></div>
              </div>
              <div className="relative group">
                <input name="email" required type="email" placeholder="Your Email" className="w-full bg-transparent border-0 border-b border-surface/20 py-4 px-0 focus:ring-0 focus:border-primary transition-all placeholder:text-surface/40 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest focus:outline-none" />
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-focus-within:w-full transition-all duration-500"></div>
              </div>
            </div>
            <div className="relative group">
              <textarea name="message" required rows="4" placeholder="Your Project Vision" className="w-full bg-transparent border-0 border-b border-surface/20 py-4 px-0 focus:ring-0 focus:border-primary transition-all placeholder:text-surface/40 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest focus:outline-none"></textarea>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-focus-within:w-full transition-all duration-500"></div>
            </div>
            <button type="submit" className="w-full bg-primary text-on-primary py-5 md:py-6 font-bold text-[12px] tracking-[0.5em] uppercase hover:bg-primary-container transition-colors shadow-2xl relative overflow-hidden group">
              <span className="relative z-10 transition-transform duration-300 group-hover:tracking-[0.8em]">Send Inquiry</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function WorkCard({ num, title, role, period, desc, slug }) {
  return (
    <div className="bg-background p-10 md:p-12 hover:bg-zinc-50 transition-all duration-500 group flex flex-col justify-between items-start border-b md:border-b-0 md:border-r border-outline-variant/20 last:border-0 relative">
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-start mb-8">
          <span className="text-primary font-headline text-4xl italic group-hover:scale-110 transition-transform duration-500">{num}</span>
          <span className="font-label text-[9px] uppercase tracking-widest text-secondary/60 bg-surface-container px-2 py-1">{period}</span>
        </div>
        <h3 className="font-headline text-3xl font-bold tracking-tight mb-2 text-on-surface">{title}</h3>
        <p className="font-label text-[10px] uppercase tracking-widest text-primary font-bold mb-6">{role}</p>
        <p className="text-secondary mb-8 leading-relaxed text-sm max-w-sm">{desc}</p>
      </div>
      <Link to={`/work/${slug}`} className="relative z-10 flex items-center gap-2 text-primary font-black text-[10px] tracking-widest uppercase hover:gap-4 transition-all">
        Explore Case Study <span className="material-symbols-outlined text-base">arrow_right_alt</span>
      </Link>
    </div>
  );
}

function ExpertiseBlock({ icon, title, desc, tags, colorClass, bgClass }) {
  return (
    <div className={`p-10 ${bgClass} flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-500`}>
      <span className={`material-symbols-outlined text-5xl ${colorClass}`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
      <h4 className="font-headline text-4xl font-bold italic tracking-tight">{title}</h4>
      <p className="text-secondary">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className={`px-4 py-2 bg-background text-[10px] font-bold tracking-widest uppercase ${colorClass}`}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
