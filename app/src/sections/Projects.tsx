import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Code2, Server, Database, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A comprehensive online shopping solution with advanced product management, secure payment processing, real-time inventory tracking, and personalized user experiences.',
    image: '/project-ecommerce.jpg',
    technologies: [
      { name: 'React', icon: Code2 },
      { name: 'Node.js', icon: Server },
      { name: 'MongoDB', icon: Database },
    ],
    stats: { users: '50K+', revenue: '+150%' },
  },
  {
    title: 'Corporate Website',
    description:
      'A professional website for a leading corporation featuring modern design, CMS integration, multi-language support, and advanced analytics dashboard.',
    image: '/project-corporate.jpg',
    technologies: [
      { name: 'Next.js', icon: Code2 },
      { name: 'PostgreSQL', icon: Database },
      { name: 'AWS', icon: Server },
    ],
    stats: { users: '100K+', revenue: '+200%' },
  },
  {
    title: 'Mobile Application',
    description:
      'A user-friendly mobile app for a service-based business with real-time notifications, in-app messaging, appointment booking, and payment integration.',
    image: '/project-mobile.jpg',
    technologies: [
      { name: 'Flutter', icon: Smartphone },
      { name: 'Firebase', icon: Database },
      { name: 'REST API', icon: Server },
    ],
    stats: { users: '25K+', revenue: '+120%' },
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a12] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ukkoru-purple/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ukkoru-blue/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="inline-block text-ukkoru-cyan text-sm font-semibold tracking-wider uppercase mb-4">
              Our Projects
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Some of Our <span className="text-gradient">Recent Work</span>
            </h2>
          </div>
          <p className="text-white/60 text-lg max-w-md mt-4 lg:mt-0">
            Explore our portfolio of successful projects delivered for clients
            across various industries.
          </p>
        </div>

        {/* Project Showcase */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Project Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-ukkoru-cyan/20 to-ukkoru-purple/20 opacity-50" />

                {/* Image */}
                <div
                  className={`relative transition-all duration-500 ${
                    isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                >
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/80 via-transparent to-transparent" />

                {/* Stats Badge */}
                <div className="absolute bottom-4 left-4 flex gap-4">
                  <div className="glass rounded-xl px-4 py-2">
                    <div className="text-2xl font-bold text-gradient">
                      {activeProject.stats.users}
                    </div>
                    <div className="text-white/60 text-xs">Active Users</div>
                  </div>
                  <div className="glass rounded-xl px-4 py-2">
                    <div className="text-2xl font-bold text-gradient">
                      {activeProject.stats.revenue}
                    </div>
                    <div className="text-white/60 text-xs">Revenue Growth</div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute -bottom-6 right-4 flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevProject}
                  className="w-12 h-12 rounded-full border-white/20 bg-[#0a0a12]/80 hover:bg-white/10 hover:border-ukkoru-cyan/50"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextProject}
                  className="w-12 h-12 rounded-full border-white/20 bg-[#0a0a12]/80 hover:bg-white/10 hover:border-ukkoru-cyan/50"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>

            {/* Project Details */}
            <div
              className={`transition-all duration-500 ${
                isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
              }`}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {activeProject.title}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {activeProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {activeProject.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 glass rounded-full px-4 py-2"
                    >
                      <tech.icon className="w-4 h-4 text-ukkoru-cyan" />
                      <span className="text-white text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-ukkoru-cyan to-ukkoru-medium text-white font-semibold rounded-full hover:shadow-glow-cyan transition-all duration-300"
              >
                View Project Details
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-gradient-to-r from-ukkoru-cyan to-ukkoru-medium'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-ukkoru-cyan/50 text-ukkoru-cyan font-semibold rounded-full hover:bg-ukkoru-cyan/10 transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
