'use client';

import React from 'react';
import { ChevronRight, Users, Shield, Lightbulb, ArrowRight } from 'lucide-react';

interface DescribeProps {
  title?: string;
  description?: string;
  className?: string;
}

const Describe: React.FC<DescribeProps> = ({
  title = 'What we will bring with Perspectra',
 
  className = '',
}) => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Multiple AI Perspectives',
      description: 'Get insights from various AI models, each bringing unique strengths and viewpoints to your questions.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Unbiased Decision Making',
      description: 'Eliminate single-point bias by comparing diverse AI opinions and finding balanced solutions.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Smarter Outcomes',
      description: 'Make more informed decisions with comprehensive analysis from brainstorming to complex problem-solving.',
    }
  ];

  const useCases = [
    'Business Strategy',
    'Creative Brainstorming',
    'Problem Solving',
    'Research & Analysis',
    'Decision Making'
  ];

  const steps = [
    { step: '1', title: 'Ask', desc: 'Submit your question or dilemma' },
    { step: '2', title: 'Analyze', desc: 'AI models collaborate and process' },
    { step: '3', title: 'Compare', desc: 'Get diverse insights and perspectives' },
    { step: '4', title: 'Decide', desc: 'Make informed choices with confidence' }
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      <section className={`py-16 md:py-24 px-4 md:px-6 w-full bg-[#1A0538]  ${className}`} style={{ fontFamily: 'Raleway, sans-serif' }}>
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div id="hero" className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light mb-4 md:mb-6 text-white tracking-tight leading-tight">
              {title}
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group-hover:border-purple-300 hover:bg-white/15">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-400/30 to-indigo-400/30 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <div className="text-purple-300">
                      {React.cloneElement(feature.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* How It Works Section */}
          <div className="mb-16 md:mb-24">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 md:mb-4 text-white tracking-tight">
                How It Works
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base px-4">
                Simple steps to make better decisions
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative">
                {steps.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="text-center group">
                      {/* Step Circle */}
                      <div className="relative mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium text-base md:text-lg mx-auto ">
                          {item.step}
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div>
                        <h4 className="text-base md:text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed px-2 md:px-0">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Desktop Arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-6 md:top-8 -right-4 z-10">
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Desktop connecting line */}
               
              </div>
            </div>
          </div>

       

          {/* Call to Action Section */}
        <div className="max-w-8xl mx-auto px-0">
  <div className="relative rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.5),#000000)] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22 fill=%22gray%22><circle cx=%222%22 cy=%222%22 r=%220.5%22 /></svg>')] bg-repeat">
    
    {/* Subtle background pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-6 md:top-10 left-6 md:left-10 w-12 md:w-20 h-12 md:h-20 border border-white/90 rounded-full"></div>
      <div className="absolute top-12 md:top-20 right-8 md:right-16 w-8 md:w-12 h-8 md:h-12 border border-white/70 rounded-full"></div>
      <div className="absolute bottom-8 md:bottom-16 left-12 md:left-20 w-6 md:w-8 h-6 md:h-8 bg-white/50 rounded-full"></div>
      <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 w-10 md:w-16 h-10 md:h-16 border border-white/40 rounded-full"></div>
    </div>

    <div className="relative z-10 space-y-6 md:space-y-8">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3 md:mb-4 tracking-tight leading-tight">
          Get your ideas clear
        </h2>
        <p className="text-purple-100 text-base md:text-lg max-w-2xl mx-auto px-2">
          Ready to unlock new perspectives? Join our waitlist and be among the first users to access Perspectra.
        </p>
      </div>

    </div>
  </div>
</div>

        </div>
      </section>
      {/* Footer Section */}
{/* Simple Footer */}
   <footer className="w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4">
          
          {/* Left: Profile Pictures */}
          <div className="flex items-center gap-3 order-2 sm:order-1">
            <div className="group relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-gray-600 hover:border-blue-400 transition-all duration-300 transform hover:scale-110">
                <a href="https://x.com/SwamiMalode">
                <img 
                  src="https://pbs.twimg.com/profile_images/1922698299645001728/cyXrdOO__400x400.jpg" 
                  alt="Team Member 1" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </a>
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 -z-10"></div>
            </div>
            
            <div className="group relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-gray-600 hover:border-purple-400 transition-all duration-300 transform hover:scale-110">
               <a href="https://x.com/localhost_ayush">
              <img 
                  src="https://pbs.twimg.com/profile_images/1805918675758714880/Q6-GfQnm_400x400.jpg" 
                  alt="Team Member 2" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </a> 
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          {/* Right: X (Twitter) Logo */}
          <div className="flex items-center order-1 sm:order-2">
            <a
              href="https://x.com/Perspectra_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full hover:bg-gray-800/50 transition-all duration-300"
              aria-label="Follow us on X (Twitter)"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-gray-400 group-hover:text-white transition-all duration-300 transform group-hover:scale-110"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </a>
          </div>
          
        </div>
      </div>
    </footer>

    </>
  );
};

export default Describe;