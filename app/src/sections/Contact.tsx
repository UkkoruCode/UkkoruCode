import { useEffect, useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'WhatsApp', icon: MessageCircle, href: '#' },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@ukkorucode.com',
    href: 'mailto:contact@ukkorucode.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+57 (1) 234 5678',
    href: 'tel:+5712345678',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bogotá, Colombia',
    href: '#',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a12] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Large Glow Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-ukkoru-blue/30 to-ukkoru-purple/30 rounded-full blur-[150px] animate-pulse-glow" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(65, 213, 250, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(65, 213, 250, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-ukkoru-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Business with{' '}
            <span className="text-gradient">Innovative Software?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a free
            consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h3>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-ukkoru-cyan focus:ring-ukkoru-cyan/20"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-ukkoru-cyan focus:ring-ukkoru-cyan/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Company Name
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-ukkoru-cyan focus:ring-ukkoru-cyan/20"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-ukkoru-cyan focus:ring-ukkoru-cyan/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-ukkoru-cyan to-ukkoru-medium hover:from-ukkoru-medium hover:to-ukkoru-cyan text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-glow-cyan disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ukkoru-cyan/20 to-ukkoru-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-ukkoru-cyan" />
                      </div>
                      <div>
                        <div className="text-white/50 text-sm">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-ukkoru-cyan/20 hover:border-ukkoru-cyan/50 transition-all group"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-white/70 group-hover:text-ukkoru-cyan transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Working Hours
                </h3>
                <div className="space-y-2 text-white/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
