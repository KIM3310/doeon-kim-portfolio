import React from 'react';
import { WHY_MAZELONE, PROFILE } from '../constants';
import Section from './Section';
import { Sparkles, Brain, Rocket, Target, Linkedin, ArrowRight } from 'lucide-react';

const icons = [Target, Rocket, Brain];

const WhyFit: React.FC = () => {
  return (
    <Section id="why-me" className="bg-bg-soft">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent-gold text-xs tracking-widest uppercase mb-4">
          <Sparkles className="w-3 h-3" />
          <span>Value Proposition</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif-heading font-bold text-white mb-6">
          Why I am the Perfect Fit for <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-white">Mazelon</span>
        </h2>
        <p className="text-primary-muted max-w-2xl mx-auto font-light leading-relaxed">
          AI 모델 최적화부터 MLOps 파이프라인 구축까지.<br className="hidden md:block"/>
          마젤원이 필요로 하는 <strong>'문제를 끝까지 해결하는 집요함'</strong>과 <strong>'실행력'</strong>을 증명합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {WHY_MAZELONE.map((item, idx) => {
          const Icon = icons[idx] || Sparkles;
          return (
            <div 
              key={idx} 
              className="group relative p-8 rounded-2xl bg-[#08080a] border border-white/5 hover:border-accent-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-gold/5 flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Icon className="w-24 h-24 text-white" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-accent-gold group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-xs font-bold tracking-widest text-primary-muted uppercase mb-2">
                  {item.keyword}
                </h4>
                <h3 className="text-xl font-bold text-white mb-4 font-serif-heading">
                  {item.title}
                </h3>
                <p className="text-primary-muted text-sm leading-7 mb-6 grow">
                  {item.description}
                </p>
                
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <p className="text-xs text-accent-soft font-medium flex items-center gap-2 mb-2">
                    <Target className="w-3 h-3" />
                    Mazelon Needs:
                  </p>
                  <p className="text-xs text-white/70 pl-5 leading-relaxed bg-white/5 p-2 rounded">
                    {item.match}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LinkedIn Call To Action */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-r from-white/10 via-accent-gold/20 to-white/10 max-w-4xl mx-auto">
        <div className="bg-[#0a0a0c] rounded-[22px] px-8 py-12 md:px-16 md:py-16 text-center relative overflow-hidden">
           {/* Decorative background glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
           
           <h3 className="text-2xl md:text-3xl font-serif-heading text-white mb-4 relative z-10">
             Explore Deeper Insights
           </h3>
           <p className="text-primary-muted mb-8 font-light leading-relaxed max-w-2xl mx-auto relative z-10">
             상세한 프로젝트 회고와 기술적 의사결정 과정, 트러블슈팅 로그는<br className="hidden md:block"/> 
             <strong>LinkedIn</strong>에 자세히 기록해두었습니다.<br/>
             방문해 주신다면 저의 <strong>기술적 깊이와 열정</strong>을 더 확실하게 확인하실 수 있습니다.
           </p>
           
           <a 
             href={PROFILE.linkedin}
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-[#050505] rounded-full font-bold text-sm tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(226,209,195,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] relative z-10"
           >
             <Linkedin className="w-5 h-5" />
             <span>Visit My LinkedIn</span>
             <ArrowRight className="w-4 h-4" />
           </a>
        </div>
      </div>
    </Section>
  );
};

export default WhyFit;
