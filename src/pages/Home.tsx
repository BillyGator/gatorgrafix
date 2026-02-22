import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, ArrowRight, Star, Clock, Award, Check, Car, Signpost, Shirt, CreditCard } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero animations
    gsap.from('.hero-badge', {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(2)',
      delay: 0.2
    });

    gsap.from('.hero-title span', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      delay: 0.4
    });

    gsap.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      delay: 0.8
    });

    gsap.from('.hero-cta', {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(2)',
      delay: 1
    });

    gsap.from('.hero-mascot', {
      x: 150,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 0.5
    });

    // Floating animation for mascot
    gsap.to('.hero-mascot', {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Parallax effect on scroll
    gsap.to('.parallax-bg', {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 100,
      ease: 'none'
    });

    gsap.to('.parallax-mascot', {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: -50,
      ease: 'none'
    });

    // Service cards animation with 3D effect
    gsap.fromTo('.service-card',
      {
        y: 80,
        opacity: 0,
        rotateX: 15
      },
      {
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
          toggleActions: 'play none none none' // Don't reverse, just play once
        },
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.2, // increased stagger to be more obvious
        ease: 'power2.out',
        clearProps: 'all' // Ensure inline styles are removed after animation
      });

    // About section parallax
    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      x: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    gsap.from('.about-image', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      x: 80,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  }, { scope: container });

  const services = [
    {
      icon: Car,
      title: 'Vehicle Wraps',
      description: 'Full & partial vehicle wraps, fleet graphics, and custom designs.',
      link: '/services/vehicle-wraps',
      image: '/Vehicle_Wrap_Page_Icon.webp',
      color: 'from-gator-red to-red-600'
    },
    {
      icon: Signpost,
      title: 'Signs & Banners',
      description: 'Yard signs, banners, lighted signs, and magnetic signs.',
      link: '/services/signs-banners',
      image: '/gator-grafix-custom-sign-design-banner-printing-services.webp',
      color: 'from-gator-green to-green-600'
    },
    {
      icon: Shirt,
      title: 'T-Shirts & Apparel',
      description: 'DTF printing, screen printing, and heat press services.',
      link: '/services/t-shirts',
      image: '/Daphne-Gator-T-Shirt-Link.webp',
      color: 'from-gator-yellow to-yellow-500'
    },
    {
      icon: CreditCard,
      title: 'Business Cards',
      description: 'Professional business cards, decals, and marketing materials.',
      link: '/services/business-cards',
      image: '/Daphne-Gator-B-Cards-Link.webp',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  const whyChooseUs = [
    { icon: Award, title: 'Lowest Prices Guaranteed', desc: 'Best prices on the entire Gulf Coast!' },
    { icon: Clock, title: 'Fast Turnaround', desc: 'Quick delivery without compromising quality.' },
    { icon: Star, title: '20+ Years Experience', desc: 'Family owned and operated since 2005.' },
    { icon: Check, title: '100% Satisfaction', desc: 'We stand behind every product we make.' },
  ];

  return (
    <div ref={container} className="overflow-hidden">
      <Helmet>
        <title>Gator Grafix | Signs, Wraps &amp; Apparel – Pensacola, FL</title>
        <meta name="description" content="Pensacola's most fun sign shop! Guaranteed lowest prices on custom signs, vehicle wraps, DTF t-shirts & business cards. Family owned since 2005. Call (850) 478-0486." />
        <link rel="canonical" href="https://signgator.com/" />
      </Helmet>
      {/* Hero Section - Reduced padding */}
      <section ref={heroRef} className="relative min-h-[85vh] gator-gradient overflow-hidden">
        {/* Animated background elements with parallax */}
        <div className="parallax-bg absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-gator-yellow/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gator-red/10 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="hero-badge inline-block bg-gator-red text-white px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000] animate-pulse-glow">
                Family Owned Since 2005
              </div>

              <h1 className="hero-title font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-none mb-6">
                <span className="block text-white drop-shadow-[4px_4px_0_#000]">Pensacola's</span>
                <span className="block text-gator-yellow drop-shadow-[4px_4px_0_#000] text-stroke">Most Fun</span>
                <span className="block text-gator-red drop-shadow-[4px_4px_0_#000]">Sign Shop!</span>
              </h1>

              <p className="hero-text text-lg md:text-xl text-black font-bold mb-8 max-w-xl mx-auto lg:mx-0">
                Gator Grafix makes your brand <span className="text-gator-red">SNAP</span> with custom signs, vehicle wraps, and apparel.
                <span className="block mt-2 text-gator-red font-display text-xl">Lowest prices guaranteed on the entire Gulf Coast!</span>
              </p>

              <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="gator-btn flex items-center justify-center gap-2 group"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:8504780486"
                  className="px-8 py-4 font-display text-lg uppercase tracking-wide bg-white text-black border-3 border-black rounded-xl shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#45B653] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (850) 478-0486
                </a>
              </div>

              {/* Trust Badges - Rounded */}
              <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
                  <Award className="w-5 h-5 text-gator-green" />
                  <span className="font-display text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
                  <Clock className="w-5 h-5 text-gator-green" />
                  <span className="font-display text-sm">Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
                  <Star className="w-5 h-5 text-gator-yellow fill-gator-yellow" />
                  <span className="font-display text-sm">5-Star Rated</span>
                </div>
              </div>
            </div>

            {/* Right Content - Mascot with parallax */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="parallax-mascot hero-mascot relative">
                <img
                  src="/Billy and Daphne Gator holding Wrap tools.webp"
                  alt="Billy & Daphne Gator - Gator Grafix Mascots"
                  className="w-full max-w-lg lg:max-w-xl drop-shadow-[12px_12px_0_rgba(0,0,0,0.3)]"
                  loading="eager"
                />
                {/* Floating badges - Rounded */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gator-yellow border-3 border-black rounded-full flex items-center justify-center animate-bounce shadow-[4px_4px_0_#000]">
                  <span className="font-display text-xs text-center leading-tight">SINCE<br />2005</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gator-red border-3 border-black rounded-full flex items-center justify-center animate-pulse shadow-[4px_4px_0_#000]">
                  <span className="font-display text-xs text-white text-center leading-tight">LOWEST<br />PRICE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services Section - Similar to SignGator.com layout with rounded corners */}
      <section className="services-section py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gator-green text-white px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
              What We Do
            </span>
            <h2 className="section-title text-gator-green mb-4">Our Services</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-bold">
              From wraps to shirts, if you can imagine it, we can print it!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="service-card group relative bg-white rounded-2xl overflow-hidden border-3 border-black shadow-[10px_10px_0_rgba(0,0,0,0.9),0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[16px_16px_0_#45B653,0_12px_40px_rgba(0,0,0,0.18)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center overflow-hidden rounded-t-2xl`}>
                  <img
                    src={service.image}
                    alt={`${service.title} - Gator Grafix Service`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gator-yellow rounded-full border-3 border-black flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[3px_3px_0_#000]">
                      <service.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-display text-2xl uppercase">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="flex items-center text-gator-red font-display uppercase text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="gator-btn inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section - With parallax */}
      <section className="about-section py-16 bg-gator-yellow relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-content">
              <span className="inline-block bg-gator-red text-white px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
                Our Story
              </span>
              <h2 className="section-title text-gator-red mb-6">The Gator Grafix Family</h2>
              <p className="text-lg text-black font-bold mb-6">
                Founded in 2005, Gator Grafix is a proud family-owned business rooted in Pensacola, Florida.
                Our commitment to quality and customer satisfaction has driven us to become a trusted name in the printing industry.
              </p>
              <p className="text-black mb-8">
                We take pride in our ability to deliver exceptional products that reflect our clients' visions,
                all while maintaining a personal touch that only a family-operated company can offer.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 border-3 border-black rounded-xl shadow-[6px_6px_0_#000]">
                  <div className="font-display text-4xl text-gator-green">20+</div>
                  <div className="font-bold">Years Experience</div>
                </div>
                <div className="bg-white p-4 border-3 border-black rounded-xl shadow-[6px_6px_0_#000]">
                  <div className="font-display text-4xl text-gator-red">10K+</div>
                  <div className="font-bold">Happy Customers</div>
                </div>
              </div>

              <Link
                to="/about"
                className="gator-btn inline-flex items-center gap-2"
              >
                Meet the Family
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="about-image relative">
              <img
                src="/Billy & Daphne Gator In Front of Building.webp"
                alt="Gator Grafix Building in Pensacola"
                className="w-full rounded-2xl border-3 border-black shadow-[12px_12px_0_#000]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-gator-red text-white p-4 border-3 border-black rounded-xl shadow-[6px_6px_0_#000]">
                <div className="font-display text-2xl">8447 Pensacola Blvd</div>
                <div className="text-sm">Pensacola, FL 32534</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - 3D Cards */}
      <section className="why-section py-16 bg-black relative overflow-hidden">
        <div className="why-bg-pattern absolute -inset-y-[150px] inset-x-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF212' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            <span className="inline-block bg-gator-yellow text-black px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
              Why Gator Grafix?
            </span>
            <h2 className="section-title-white mb-0">The Gator Difference</h2>
          </div>

          <div className="parallax-truck mt-4 lg:mt-10 flex justify-center w-full px-4 lg:px-8">
            <img
              src="/Jeep_Gladiator_GatorGrafix_Jeep_wrap.webp"
              alt="Gator Grafix custom Jeep Gladiator full vehicle wrap in Pensacola FL"
              className="w-full max-w-5xl lg:max-w-6xl drop-shadow-[16px_16px_0_rgba(0,0,0,0.8)]"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative z-20">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-card bg-white p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#45B653] hover:shadow-[12px_12px_0_#C90010] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-gator-yellow rounded-full border-3 border-black flex items-center justify-center mb-4 mx-auto shadow-[3px_3px_0_#000]">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-display text-xl uppercase text-center mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gator-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/GatorLowestPrices.webp"
            alt="Lowest Prices Guaranteed - Gator Grafix"
            className="h-40 mx-auto mb-8 drop-shadow-[8px_8px_0_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-black font-bold mb-8">
            Contact us today for a free quote on your next project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="gator-btn inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:8504780486"
              className="px-8 py-4 font-display text-lg uppercase tracking-wide bg-white text-black border-3 border-black rounded-xl shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#45B653] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (850) 478-0486
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
