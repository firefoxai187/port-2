import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="w-full border-0 py-12 px-6 md:px-10 bg-zinc-100 mt-24">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 max-w-[1920px] mx-auto">
        
        <div className="flex flex-col gap-3">
          <span className="font-headline text-2xl italic font-black text-on-surface">{personal.name}</span>
          <p className="font-body uppercase text-[10px] tracking-[0.3em] font-bold text-secondary">
            {personal.role} · {personal.location}
          </p>
          <p className="font-body uppercase text-[10px] tracking-[0.3em] font-bold text-secondary">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 items-center">
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-body uppercase text-[10px] tracking-[0.3em] font-bold text-secondary hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
