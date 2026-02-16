import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description:
      'Building responsive, high-quality websites tailored to your business goals. From landing pages to complex web applications.',
    image: '/service-web.png',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
  },
  {
    title: 'Web Applications',
    description:
      'Building robust and efficient web applications for all your enterprise needs. Scalable solutions that grow with your business.',
    image: '/service-apps.png',
    features: ['Scalable Architecture', 'Real-time Updates', 'Cloud Integration'],
  },
  {
    title: 'Custom Software',
    description:
      'Crafting bespoke software solutions to meet your unique business requirements. Tailored to fit your exact needs.',
    image: '/service-custom.png',
    features: ['Tailored Solutions', 'API Integration', 'Legacy Migration'],
  },
  {
    title: 'Enterprise Solutions',
    description:
      'Providing comprehensive enterprise solutions to optimize your entire operations. Streamline processes and boost productivity.',
    image: '/service-enterprise.png',
    features: ['ERP Systems', 'CRM Integration', 'Data Analytics'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a12] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ukkoru-blue/5 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ukkoru-cyan/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-ukkoru-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to help
            your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative h-full glass rounded-2xl overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'scale-105 shadow-glow-cyan border-ukkoru-cyan/30'
                    : ''
                }`}
                style={{
                  transform:
                    hoveredIndex === index
                      ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg)'
                      : 'perspective(1000px) rotateX(0) rotateY(0)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-ukkoru-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/50"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-ukkoru-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-ukkoru-cyan text-sm font-medium group/link"
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </div>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-ukkoru-cyan/10 to-ukkoru-purple/10 transition-opacity duration-300 pointer-events-none ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <div
          className={`mt-16 glass rounded-3xl p-8 lg:p-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Need a <span className="text-gradient">Custom Solution?</span>
              </h3>
              <p className="text-white/60">
                We specialize in creating tailored software solutions that address
                your specific business challenges. Let&apos;s discuss your project
                requirements.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ukkoru-cyan to-ukkoru-medium text-white font-semibold rounded-full hover:shadow-glow-cyan transition-all duration-300"
              >
                Start Your Project
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
