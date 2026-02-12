import React from 'react';
import { CERTIFICATIONS, PROFILE } from '../constants';
import Section from './Section';
import { Award, GraduationCap, Languages, Mail } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <Section id="certifications">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
        <div>
           <h2 className="text-3xl md:text-4xl font-serif-heading font-medium text-white mb-2">Credentials</h2>
           <p className="text-primary-muted font-light">Certified expertise in enterprise platforms.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CERTIFICATIONS.map((cert, idx) => (
          <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 hover:border-accent-gold/30 transition-all flex flex-col justify-between group">
            <div>
                <Award className="w-5 h-5 text-accent-gold mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-medium text-sm mb-2 leading-snug">{cert.name}</h4>
            </div>
            <p className="text-white/30 text-xs mt-4 uppercase tracking-widest">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const EducationAndLanguages: React.FC = () => {
    return (
        <Section id="education" className="bg-bg-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Education */}
                <div className="p-8 border border-white/5 bg-[#050505]">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-white/5 rounded-full">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-serif-heading text-white">Education</h3>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium text-white mb-1">한국방송통신대학교</h4>
                        <p className="text-primary-muted font-light">컴퓨터과학과 (2026.03 입학 예정)</p>
                    </div>
                </div>

                {/* Languages */}
                <div className="p-8 border border-white/5 bg-[#050505]">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-white/5 rounded-full">
                            <Languages className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-serif-heading text-white">Global Communication</h3>
                    </div>
                    <ul className="space-y-6">
                        <li className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-white">Korean</span>
                                <span className="text-white/40">Native</span>
                            </div>
                            <div className="w-full h-[1px] bg-white/10">
                                <div className="h-full bg-accent-gold w-full"></div>
                            </div>
                        </li>
                         <li className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-white">English</span>
                                <span className="text-white/40">Business Fluent</span>
                            </div>
                            <div className="w-full h-[1px] bg-white/10">
                                <div className="h-full bg-accent-gold w-[85%]"></div>
                            </div>
                        </li>
                         <li className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-white">Japanese</span>
                                <span className="text-white/40">Business Fluent</span>
                            </div>
                            <div className="w-full h-[1px] bg-white/10">
                                <div className="h-full bg-accent-gold w-[80%]"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    )
}

const Footer: React.FC = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-[#050505]">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
                <h2 className="text-3xl font-serif-heading font-medium text-white mb-4">{PROFILE.name}</h2>
                <p className="text-primary-muted mb-8 font-light max-w-md mx-auto">{PROFILE.title}</p>
                <div className="flex justify-center items-center gap-3 text-white/60 text-sm mb-12">
                     <Mail className="w-4 h-4" />
                     <a href={`mailto:${PROFILE.email}`} className="hover:text-accent-gold transition-colors border-b border-transparent hover:border-accent-gold">{PROFILE.email}</a>
                </div>
                <p className="text-white/20 text-xs tracking-widest uppercase">
                    © {new Date().getFullYear()} Doeon Kim.
                </p>
            </div>
        </footer>
    )
}

export { Certifications, EducationAndLanguages, Footer };
