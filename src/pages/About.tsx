import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Award, Users, Clock, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animate-in', {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });

      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      });

      // Parallax for building image
      gsap.to('.building-parallax', {
        scrollTrigger: {
          trigger: '.building-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: -40,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []);

  const timeline = [
    { year: '2005', title: 'Gator Grafix Founded', desc: 'Established in Pensacola, Florida as a small family-owned business dedicated to quality printing services.' },
    { year: '2007', title: 'Expansion of Services', desc: 'Introduced custom apparel and vehicle wraps, broadening our service offerings.' },
    { year: '2008', title: 'New Facility', desc: 'Moved to a larger facility to accommodate advanced printing technology.' },
    { year: '2020', title: 'Digital Transformation', desc: 'Implemented state-of-the-art eco-friendly latex digital printing technology.' },
    { year: '2022', title: 'Direct to Film Printing', desc: 'Added the area\'s first commercial direct to film printer for apparel.' },
    { year: '2025', title: 'AI Integration', desc: 'Integrating AI into our creative process for cutting-edge designs.' },
  ];

  const values = [
    { icon: Heart, title: 'Family Values', desc: 'We treat every customer like family' },
    { icon: Award, title: 'Quality First', desc: 'We never compromise on quality' },
    { icon: Users, title: 'Customer Focused', desc: 'Your satisfaction is our priority' },
    { icon: Clock, title: 'Fast Service', desc: 'Quick turnaround without cutting corners' },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us | Gator Grafix – Family Owned Sign Shop Since 2005</title>
        <meta name="description" content="Learn about Gator Grafix, Pensacola's most fun sign shop. Family owned & operated since 2005 by Billy & Daphne Gator. 20+ years of experience, 10,000+ happy customers." />
        <link rel="canonical" href="https://signgator.com/about" />
      </Helmet>
      {/* Hero */}
      <section className="bg-gator-yellow py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gator-red text-white px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
                Our Story
              </span>
              <h1 className="font-display text-5xl md:text-6xl uppercase text-black drop-shadow-[4px_4px_0_#fff] mb-6">
                The Gator Grafix Family
              </h1>
              <p className="text-xl text-black font-bold mb-8">
                Founded in 2005, Gator Grafix is a proud family-owned business rooted in Pensacola, Florida.
                Our commitment to quality and customer satisfaction has made us the go-to sign shop on the Gulf Coast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="gator-btn inline-flex items-center justify-center gap-2"
                >
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:8504780486"
                  className="px-8 py-4 font-display text-lg uppercase tracking-wide bg-white text-black border-3 border-black rounded-xl shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#C90010] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (850) 478-0486
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Billy & Daphne Gator In Front of Building.webp"
                alt="Gator Grafix Building - Pensacola Sign Shop"
                className="w-full rounded-2xl border-3 border-black shadow-[12px_12px_0_#000]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-gator-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Years Experience' },
              { number: '10K+', label: 'Happy Customers' },
              { number: '100%', label: 'Satisfaction' },
              { number: '#1', label: 'In Pensacola' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-5xl md:text-6xl text-white drop-shadow-[3px_3px_0_#000]">{stat.number}</div>
                <div className="text-white font-bold mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={contentRef} className="building-section py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <img
                src="/Building Cartoon High Res.webp"
                alt="Gator Grafix Building - Pensacola Location"
                className="building-parallax w-full rounded-2xl border-3 border-black shadow-[12px_12px_0_#45B653]"
                loading="lazy"
              />
            </div>
            <div className="animate-in">
              <h2 className="section-title text-gator-green mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                Gator Grafix began as a small family dream in 2005. What started as a humble sign shop
                has grown into one of the most trusted printing companies on the Gulf Coast.
              </p>
              <p className="text-gray-700 mb-6">
                We take pride in our ability to deliver exceptional products that reflect our clients' visions,
                all while maintaining the personal touch that only a family-operated company can offer.
              </p>
              <p className="text-gray-700 mb-8">
                Our team of skilled designers and installers are passionate about what they do, and it shows
                in every project we complete. From small business cards to full vehicle wraps, we put the same
                level of care and attention into every job.
              </p>
              <div className="bg-gator-yellow p-6 border-3 border-black rounded-2xl shadow-[6px_6px_0_#000]">
                <p className="font-display text-xl text-center">
                  "If you can imagine it, we can print it!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-white mb-4">Our Journey</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From our humble beginnings to where we are today, here's how Gator Grafix has evolved.
            </p>
          </div>

          <div className="timeline space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gator-green rounded-full border-3 border-black flex items-center justify-center shadow-[4px_4px_0_#FFF212]">
                  <span className="font-display text-lg text-white">{item.year}</span>
                </div>
                <div className="flex-1 bg-white p-5 border-3 border-black rounded-2xl shadow-[6px_6px_0_#45B653]">
                  <h3 className="font-display text-xl uppercase text-gator-red mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gator-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-white mb-4">Our Values</h2>
            <p className="text-lg text-white font-bold max-w-2xl mx-auto">
              These core principles guide everything we do at Gator Grafix.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#FFF212] text-center hover:shadow-[12px_12px_0_#C90010] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-gator-yellow rounded-full border-3 border-black flex items-center justify-center mb-4 mx-auto shadow-[3px_3px_0_#000]">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-display text-xl uppercase mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-gator-red mb-4">Meet the Gators</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our friendly mascots represent the fun, professional service you'll receive at Gator Grafix.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gator-yellow p-8 border-3 border-black rounded-2xl shadow-[8px_8px_0_#000] text-center hover:shadow-[12px_12px_0_#C90010] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              <img
                src="/Gator Grafix Billy Gator 2026.webp"
                alt="Billy Gator - Gator Grafix Mascot"
                className="h-44 mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="font-display text-2xl uppercase mb-2">Billy Gator</h3>
              <p className="text-gray-700">The boss gator who makes sure every job is done right!</p>
            </div>
            <div className="bg-gator-green p-8 border-3 border-black rounded-2xl shadow-[8px_8px_0_#000] text-center hover:shadow-[12px_12px_0_#FFF212] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              <img
                src="/Daphne Gator New 2026.webp"
                alt="Daphne Gator - Gator Grafix Mascot"
                className="h-44 mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="font-display text-2xl uppercase text-white mb-2">Daphne Gator</h3>
              <p className="text-white/80">The creative gator who brings your designs to life!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gator-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/GatorLowestPrices.webp"
            alt="Lowest Prices Guaranteed - Gator Grafix"
            className="h-40 mx-auto mb-8 drop-shadow-[8px_8px_0_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
            Join the Gator Grafix Family
          </h2>
          <p className="text-xl text-black font-bold mb-8">
            We'd love to work with you on your next project!
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

export default About;
