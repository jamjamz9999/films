import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CVSection: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
    return (
        <div ref={ref} className="mb-12">
            {isVisible && (
                <>
                    <h2 className="text-3xl md:text-4xl font-black uppercase text-white animate-fadeInUp">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-ferrari-red mt-3 mb-6 animate-fadeInUp" style={{ animationDelay: '150ms' }}></div>
                    {children}
                </>
            )}
        </div>
    );
};

const ExperienceItem: React.FC<{ title: string; company: string; date: string; children: React.ReactNode; }> = ({ title, company, date, children }) => (
    <div className="mb-6">
        <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-bold text-light-gray">{title}</h3>
            <p className="text-sm text-gray-400">{date}</p>
        </div>
        <p className="text-md text-gold-cream font-semibold">{company}</p>
        <p className="text-gray-300 mt-2 text-sm leading-relaxed">{children}</p>
    </div>
);

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
    <div>
        <h4 className="text-lg font-bold text-gold-cream mb-2 uppercase tracking-wider">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => <span key={skill} className="bg-dark-secondary text-light-gray text-sm px-3 py-1 rounded-sm">{skill}</span>)}
        </div>
    </div>
);


const About: React.FC = () => {
  return (
    <section id="about" className="bg-dark-primary min-h-screen">
      <div className="w-full h-[50vh] relative flex items-center justify-center text-center text-white overflow-hidden bg-dark-secondary">
        <img 
          src="https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Nick Asenjo at work"
          className="absolute z-0 w-full h-full object-cover opacity-30"
        />
        <div className="z-10 relative px-4 pt-24 overflow-hidden">
           <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider animate-fadeInUp">
             About <span className="text-ferrari-red">Me</span>
           </h1>
        </div>
      </div>
       <div className="container mx-auto px-6 py-20 md:py-24 max-w-5xl">
            <CVSection title="Professional Profile">
                <p className="text-lg text-light-gray leading-relaxed animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                    Dynamic and creative videographer with over a decade of experience in producing high-quality cinematic content for a diverse range of clients, from global brands to independent artists. A storyteller at heart, I specialize in translating complex narratives into compelling visual experiences that engage, inspire, and drive results. Adept in all stages of production, from concept development and storyboarding to shooting, editing, and color grading.
                </p>
            </CVSection>

            <CVSection title="Work Experience">
                <div className="animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                    <ExperienceItem title="Lead Videographer & Editor" company="Nick Asenjo Films" date="2018 - Present">
                        Managed all aspects of video production for corporate clients, music artists, and documentary projects. Led creative direction, operated primary camera systems (RED, ARRI), and oversaw post-production workflows to deliver polished final products on time and within budget.
                    </ExperienceItem>
                </div>
                 <div className="animate-fadeInUp" style={{ animationDelay: '450ms' }}>
                    <ExperienceItem title="Cinematographer" company="Mountain Peak Films" date="2020 - 2023">
                        Served as Director of Photography for "The Alpinist" documentary series. Responsible for capturing stunning visuals in extreme environments, managing a camera crew, and collaborating with the director to achieve a specific cinematic tone.
                    </ExperienceItem>
                 </div>
                 <div className="animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                    <ExperienceItem title="Freelance Videographer" company="Various Clients" date="2014 - 2018">
                        Provided comprehensive videography services including shooting commercials, live events, and music videos. Built a strong client base through high-quality work and a reputation for professionalism and creativity.
                    </ExperienceItem>
                 </div>
            </CVSection>

            <CVSection title="Skills">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                        <SkillCategory title="Cameras & Hardware" skills={['RED Komodo', 'ARRI Alexa Mini', 'Sony FX Series', 'Gimbal Operation', 'Drone Piloting (FAA Certified)', 'Professional Lighting']} />
                    </div>
                    <div className="animate-fadeInUp" style={{ animationDelay: '450ms' }}>
                        <SkillCategory title="Software" skills={['DaVinci Resolve', 'Adobe Premiere Pro', 'After Effects', 'Final Cut Pro', 'Color Grading', 'Sound Design']} />
                    </div>
                </div>
            </CVSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <CVSection title="Awards & Recognition">
                    <ul className="list-disc list-inside text-light-gray space-y-2 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                        <li>Best Cinematography - Indie Film Fest 2023 (for "Neon Noir")</li>
                        <li>Gold Award, Corporate Branding - The Ad Awards 2022</li>
                        <li>Vimeo Staff Pick - 2021</li>
                    </ul>
                </CVSection>
                
                 <CVSection title="Education">
                     <ul className="list-disc list-inside text-light-gray space-y-2 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                        <li><strong>BFA in Film Production</strong> - NYU Tisch School of the Arts (2010-2014)</li>
                        <li>Advanced Color Grading Certificate - AbelCine (2019)</li>
                    </ul>
                </CVSection>
            </div>
       </div>
    </section>
  );
};

export default About;
