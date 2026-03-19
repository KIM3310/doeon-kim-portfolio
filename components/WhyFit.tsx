import React from 'react';
import { WHY_TEAMS_HIRE_ME, PROFILE } from '../constants';
import Section from './Section';
import { Sparkles, Brain, Rocket, Target, Linkedin, ArrowRight } from 'lucide-react';

const icons = [Target, Rocket, Brain];

const WhyFit: React.FC = () => {
  return (
    <Section id="why-me" className="bg-bg-soft">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent-gold text-xs tracking-widest uppercase mb-4">
          <Sparkles className="w-3 h-3" />
          <span>Why this portfolio works</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif-heading font-bold text-white mb-6">
          Why teams trust me with <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-white">reliable AI systems</span>
        </h2>
        <p className="text-primary-muted max-w-2xl mx-auto font-light leading-relaxed">
          프로젝트 수를 늘리는 대신, 대표 시스템만 남겨 신뢰성, 운영성, 평가 가능성이 드러나게 정리했습니다.
          툴콜링, incident 대응, governed delivery처럼 실제로 어려운 문제를 끝까지 닫는 방식이 강점입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {WHY_TEAMS_HIRE_ME.map((item, idx) => {
          const Icon = icons[idx] || Sparkles;
          return (
            <div key={idx} className="group relative p-8 rounded-2xl bg-[#08080a] border border-white/5 hover:border-accent-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-gold/5 flex flex-col h-full">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon className="w-24 h-24 text-white" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-accent-gold group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-bold tracking-widest text-primary-muted uppercase mb-2">{item.keyword}</h4>
                <h3 className="text-xl font-bold text-white mb-4 font-serif-heading">{item.title}</h3>
                <p className="text-primary-muted text-sm leading-7 mb-6 grow">{item.description}</p>
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <p className="text-xs text-accent-soft font-medium flex items-center gap-2 mb-2">
                    <Target className="w-3 h-3" />
                    Teams need:
                  </p>
                  <p className="text-xs text-white/70 pl-5 leading-relaxed bg-white/5 p-2 rounded">{item.match}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative rounded-3xl p-1 bg-gradient-to-r from-white/10 via-accent-gold/20 to-white/10 max-w-4xl mx-auto">
        <div className="bg-[#0a0a0c] rounded-[22px] px-8 py-12 md:px-16 md:py-16 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
          <h3 className="text-2xl md:text-3xl font-serif-heading text-white mb-4 relative z-10">Explore deeper project notes</h3>
          <p className="text-primary-muted mb-8 font-light leading-relaxed max-w-2xl mx-auto relative z-10">
            상세한 프로젝트 회고와 기술적 의사결정 과정, 트러블슈팅 로그는 <strong>LinkedIn</strong>과 <strong>GitHub</strong>에서 더 깊게 확인할 수 있습니다.
            canonical repo 기준으로 빠르게 연결해 두었습니다.
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
