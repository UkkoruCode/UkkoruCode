import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Lightbulb, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description:
      'Develop innovative, scalable, and secure technological solutions that drive the digital growth of companies in Colombia and Latin America.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description:
      'To be one of the leading software development companies in Latin America, recognized for technical excellence and constant innovation.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We embrace cutting-edge technologies and creative approaches to deliver solutions that keep our clients ahead of the curve.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We work closely with our clients, ensuring transparent communication and shared success throughout every project.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a12] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ukkoru-blue/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ukkoru-purple/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-ukkoru-cyan/50" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-ukkoru-purple/50" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/about-team.jpg"
                  alt="UkkoruCode Team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ukkoru-dark/40 via-transparent to-ukkoru-cyan/10" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6">
                <div className="text-4xl font-bold text-gradient">5+</div>
                <div className="text-white/70 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="inline-block text-ukkoru-cyan text-sm font-semibold tracking-wider uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              We Are <span className="text-gradient">UkkoruCode</span>
            </h2>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>
                UkkoruCode is a Colombian company specialized in the design,
                development, and implementation of innovative technological
                solutions. We combine strategy, engineering, and creativity to
                build robust, scalable, and results-oriented digital products.
              </p>
              <p>
                Our team of experienced developers and designers work
                collaboratively to deliver products that not only meet but exceed
                your expectations. We believe in the power of technology to
                transform businesses and drive growth.
              </p>
              <p>
                With a focus on quality, innovation, and client satisfaction, we
                have successfully delivered over 150 projects across various
                industries, helping businesses achieve their digital
                transformation goals.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative glass rounded-2xl p-6 hover-lift transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ukkoru-cyan/20 to-ukkoru-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ukkoru-cyan/20 to-ukkoru-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-ukkoru-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
