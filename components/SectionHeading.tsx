import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, alignment = 'center', light = false }) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className={`block mb-3 text-xs font-bold tracking-[0.2em] uppercase ${light ? 'text-brand-accent' : 'text-brand-accent'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-serif font-semibold ${light ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      <div className={`h-1 w-16 bg-brand-accent mt-6 ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;