import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export default function CampaignDetails() {
  const { slug } = useParams();

  const experience = portfolioData.experience.find(e => e.slug === slug);

  if (!experience) {
    return <Navigate to="/" replace />;
  }

  const { company, role, description, projects } = experience;
  
  // Safe extraction of hero images if projects exist
  const heroImages = projects[0]?.images || [];
  const heroImage1 = heroImages[0] || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=3000&auto=format&fit=crop';
  const heroImage2 = heroImages[1] || heroImages[0];

  // We find projects with metrics to populate the Impact section
  const projectsWithMetrics = projects.filter(p => p.metrics);

  return (
    <main className="pt-32">
      {/* Header Section */}
      <header className="px-10 mb-24 grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary font-extrabold">{role}</span>
            <span className="text-zinc-400 font-label text-[9px] uppercase tracking-widest font-bold ml-auto md:ml-0">· {experience.period}</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl lg:text-[120px] font-black leading-[0.85] tracking-tighter italic text-on-background">
            {company} <br/>
            <span className="text-stroke text-primary">Case Study</span>
          </h1>
        </div>
        <div className="col-span-12 md:col-span-4 pb-4">
          <p className="font-body text-secondary max-w-xs text-sm leading-relaxed mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="font-label text-[9px] uppercase tracking-widest px-3 py-1 bg-surface-container-highest border-0">Strategy</span>
            <span className="font-label text-[9px] uppercase tracking-widest px-3 py-1 bg-surface-container-highest border-0">Execution</span>
            <span className="font-label text-[9px] uppercase tracking-widest px-3 py-1 bg-surface-container-highest border-0">Management</span>
          </div>
        </div>
      </header>

      {/* Hero Mosaic */}
      <section className="px-10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[700px]">
          <div className="md:col-span-7 bg-surface-container overflow-hidden group aspect-square md:aspect-auto">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={`Campaign visual 1 for ${company}`} src={heroImage1}/>
          </div>
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="bg-primary overflow-hidden flex items-center justify-center relative p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90"></div>
              <h2 className="relative z-10 font-headline italic text-3xl md:text-4xl text-on-primary md:p-8 leading-tight">
                "Bridging strategic market positioning with uncompromised aesthetic execution."
              </h2>
            </div>
            <div className="bg-surface-container overflow-hidden group aspect-square md:aspect-auto">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={`Campaign visual 2 for ${company}`} src={heroImage2}/>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Showcase: Dynamic Bento Grid */}
      <section className="px-10 mb-32">
        <div className="mb-16">
          <h3 className="font-label text-[10px] uppercase tracking-[0.5em] text-secondary font-bold mb-4">Core Projects & Deliverables</h3>
          <div className="w-full h-[1px] bg-surface-container-highest"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          {projects.map((project, index) => {
            // Dynamic styling to alternate the bento grid layout heavily based on index
            const isDarkBlock = index % 3 === 2;
            const isImageFirst = index % 2 === 1;
            const imageDisplay = project.images?.[0] || heroImage1;
            
            return (
              <React.Fragment key={project.id}>
                
                {/* Visual Block (if imageFirst is true and there is an image to show) */}
                {isImageFirst && (
                  <div className="md:col-span-2 bg-surface-container overflow-hidden min-h-[400px]">
                    <img className="w-full h-full object-cover transition-all duration-700" alt={project.title} src={imageDisplay} />
                  </div>
                )}

                {/* Text Context Block */}
                <div className={`md:col-span-2 p-12 flex flex-col justify-between min-h-[500px] ${isDarkBlock ? 'bg-zinc-900 text-surface' : 'bg-surface-container-low text-on-surface'}`}>
                  <div>
                    <span className={`${isDarkBlock ? 'text-primary-fixed' : 'text-primary'} font-headline italic text-2xl mb-4 block`}>0{index + 1}</span>
                    <h4 className={`font-headline text-4xl lg:text-5xl font-bold tracking-tighter mb-4 uppercase ${isDarkBlock ? 'text-surface-container-lowest' : ''}`}>{project.brand ? `${project.brand} - ` : ''}{project.title}</h4>
                    <p className={`font-body text-sm leading-relaxed max-w-md ${isDarkBlock ? 'text-zinc-400' : 'text-secondary'}`}>
                      {project.description}
                    </p>
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="mt-6 space-y-2">
                        {project.highlights.map((point, i) => (
                           <li key={i} className={`font-label text-[10px] uppercase tracking-widest ${isDarkBlock ? 'text-zinc-500' : 'text-secondary/70'} flex gap-3`}>
                            <span className="text-primary-fixed font-black">/</span> {point}
                           </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-col gap-3 mt-8">
                      {project.links.map(link => (
                        <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className={`flex items-center w-fit gap-4 group cursor-pointer ${isDarkBlock ? 'text-primary-fixed' : 'text-primary'}`}>
                          <span className="font-label text-[10px] uppercase tracking-widest font-black">View Reference</span>
                          <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Visual Block (if imageFirst is false) */}
                {!isImageFirst && (
                  <div className="md:col-span-2 bg-surface-container overflow-hidden min-h-[400px]">
                    <img className="w-full h-full object-cover transition-all duration-700" alt={project.title} src={imageDisplay} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* Results: Impact Metrics (Only if metrics exist) */}
      {projectsWithMetrics.length > 0 && (
        <section className="bg-surface-container-highest py-32 px-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-[10%] -translate-y-1/4">
            <span className="font-headline italic text-[200px] md:text-[400px] text-primary font-black leading-none">ROI</span>
          </div>
          <div className="max-w-4xl relative z-10 w-full">
            <h3 className="font-headline text-6xl font-bold tracking-tighter mb-20 text-on-surface">The Measured Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-20">
              {projectsWithMetrics.slice(0, 4).map((proj, idx) => (
                <div key={idx} className="border-l-4 border-primary pl-8">
                  <span className="font-headline text-3xl lg:text-5xl font-black text-primary block mb-4">{proj.metrics.split('•')[0].trim()}</span>
                  <span className="font-label text-xs uppercase tracking-[0.3em] font-bold text-secondary">{proj.title}</span>
                  <p className="mt-4 font-body text-sm text-on-surface-variant leading-relaxed">
                    {proj.highlights[0] || proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Mask Section */}
      <section className="px-10 py-32 mb-16">
        <div className="flex flex-col md:flex-row items-center gap-24">
          <div className="relative w-full md:w-1/2 md:aspect-square max-w-xl min-h-[400px]">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-fixed z-0 hidden md:block"></div>
            <div className="editorial-mask w-full h-full bg-surface-container overflow-hidden relative z-10 shadow-2xl">
              <img className="w-full h-full object-cover" alt={`Portrait for ${company}`} src={projects[projects.length - 1]?.images?.[projects[projects.length - 1].images.length - 1] || heroImage1}/>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h5 className="font-label text-[10px] uppercase tracking-[0.4em] text-primary font-extrabold mb-6">Experience Summary</h5>
            <h2 className="font-headline text-4xl md:text-5xl font-black italic tracking-tighter mb-8 text-on-background">Visual Poise & Technical Precision</h2>
            <p className="font-body text-secondary text-lg mb-10 leading-relaxed">
              Every asset was crafted to maintain the energy that defines the {company} brand—unapologetically bold execution grounded by rigorous, architectural marketing structures.
            </p>
            <Link to="/" className="inline-flex items-center gap-4 bg-primary text-on-primary px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-primary-container transition-colors">
              Back to all work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
