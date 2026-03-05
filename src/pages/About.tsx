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
    { year: '2005', title: 'Gator Grafix Founded', desc: 'Billy launched Gator Grafix with a bet on the future. While most sign shops were still cutting single-color vinyl, Billy invested in full-color digital printing — believing he could bring professional color signage to Pensacola at the same price as one-color signs. He was right.' },
    { year: '2006', title: 'First Certified Wrap Installer in Pensacola', desc: 'Gator Grafix became the first shop in Pensacola to earn professional vehicle wrap installation certification — before most local shops even knew wraps were a thing.' },
    { year: '2007', title: 'First Direct-to-Garment Printer in Pensacola', desc: 'When full-color printing directly onto t-shirts was still a novelty, Billy brought the first DTG printer to Pensacola. Suddenly, any design, any color, any quantity was possible — no screens, no setup fees, no minimums.' },
    { year: '2008', title: 'First Latex Printer in Pensacola', desc: 'Billy brought the area\'s first latex printer to Pensacola. Latex ink stretches around curves without cracking — a game-changer for vehicle wraps. More consistent colors, better durability, and results the competition simply couldn\'t match.' },
    { year: '2022', title: 'First Industrial DTF Printer in the Region', desc: 'After experimenting with DTF technology for over a year, Gator Grafix brought the first industrial-size DTF printer to the Gulf Coast. Faster, more durable, and even more versatile than DTG — another Pensacola first.' },
    { year: '2025', title: 'AI-Powered Design & Automation', desc: 'Gator Grafix integrated AI into the design process and shop automation — faster proofs, smarter workflows, and cutting-edge creative tools that help customers get from idea to finished product quicker than ever.' },
    { year: '2026', title: 'Still First. Still Family.', desc: 'Twenty-one years in, Billy and Daphne are still here. Still on the leading edge of every new technology. Still personally invested in every customer\'s project. The equipment has changed — the commitment hasn\'t.' },
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
        <meta name="description" content="Gator Grafix has been Pensacola's technology leader in signs, vehicle wraps & apparel printing since 2005. Family owned by Billy & Daphne — first certified wrap installer, first DTF printer, and first in the region for every major printing technology." />
        <link rel="canonical" href="https://signgator.com/about" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Gator Grafix",
          "description": "Gator Grafix is a family-owned sign shop in Pensacola, FL. Founded in 2005 by Billy and Daphne Gator, we specialize in vehicle wraps, custom signs, apparel, and business cards.",
          "url": "https://signgator.com/about",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Gator Grafix",
            "foundingDate": "2005",
            "founders": [{ "@type": "Person", "name": "Billy Gator" }, { "@type": "Person", "name": "Daphne Gator" }],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8447 Pensacola Blvd",
              "addressLocality": "Pensacola",
              "addressRegion": "FL",
              "postalCode": "32534",
              "addressCountry": "US"
            }
          }
        })}`}</script>
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
                Meet the Family Behind Pensacola's Most Fun Sign Shop
              </h1>
              <p className="text-xl text-black font-bold mb-4">
                Billy and Daphne have been building Gator Grafix since 2005 — and every step of the way,
                they've been the first to bring new printing technology to Pensacola.
              </p>
              <p className="text-black mb-8">
                Vehicle wraps. Latex printing. Direct-to-garment. DTF apparel. When new technology hits the industry,
                Gator Grafix brings it to the Gulf Coast — so you get better results at prices nobody else can match.
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
                alt="Gator Grafix retail storefront building located on Pensacola Blvd in Pensacola, FL"
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
              { number: '21', label: 'Years in Business' },
              { number: '5+', label: 'Pensacola Firsts' },
              { number: '100', label: '5-Star Reviews' },
              { number: '10K+', label: 'Happy Customers' },
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
                alt="Cartoon illustration of the Gator Grafix sign shop location in Pensacola, Florida"
                className="building-parallax w-full rounded-2xl border-3 border-black shadow-[12px_12px_0_#45B653]"
                loading="lazy"
              />
            </div>
            <div className="animate-in">
              <h2 className="section-title text-gator-green mb-6">How It All Started</h2>
              <p className="text-lg text-gray-700 mb-6">
                In 2005, most sign shops in Pensacola were doing the same thing — cutting single-color vinyl.
                Full-color digital printing existed, but it was expensive, and nobody was making it accessible.
                Billy saw that was about to change.
              </p>
              <p className="text-gray-700 mb-6">
                He invested in digital printing technology before it was mainstream, bet that he could drive the cost down,
                and made full-color signs available to Pensacola businesses at the same price as the old one-color jobs.
                It worked — and it set the pattern for everything that came after.
              </p>
              <p className="text-gray-700 mb-8">
                Every time a major technology shift hit the printing industry — latex inks for <Link to="/services/vehicle-wraps" className="text-gator-green hover:text-black font-bold underline decoration-2 underline-offset-2">vehicle wraps</Link>, direct-to-garment
                for <Link to="/services/t-shirts" className="text-gator-green hover:text-black font-bold underline decoration-2 underline-offset-2">apparel printing</Link>, DTF for no-minimum custom shirts — Gator Grafix was first in Pensacola.
                Not because it was easy, but because Billy genuinely believes the best technology should be available
                to every local business owner, not just the ones who can afford big-city prices.
              </p>
              <div className="bg-gator-yellow p-6 border-3 border-black rounded-2xl shadow-[6px_6px_0_#000]">
                <p className="font-display text-xl text-center">
                  "Our business is to help your business make more money."
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
              Behind every sign, wrap, and shirt is a real family who cares about your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gator-yellow p-8 border-3 border-black rounded-2xl shadow-[8px_8px_0_#000] text-center hover:shadow-[12px_12px_0_#C90010] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              <img
                src="/Gator Grafix Billy Gator 2026.webp"
                alt="Billy Gator - founder of Gator Grafix, Pensacola's first certified vehicle wrap installer"
                className="h-44 mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="font-display text-2xl uppercase mb-2">Billy</h3>
              <p className="text-gray-700 font-bold mb-2">Founder · Technology Pioneer</p>
              <p className="text-gray-600 text-sm">
                The guy who saw digital printing was the future before anyone else in Pensacola did —
                and has been first to bring every major technology to the Gulf Coast ever since.
              </p>
            </div>
            <div className="bg-gator-green p-8 border-3 border-black rounded-2xl shadow-[8px_8px_0_#000] text-center hover:shadow-[12px_12px_0_#FFF212] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              <img
                src="/Daphne Gator New 2026.webp"
                alt="Daphne Gator - co-founder and lead designer at Gator Grafix in Pensacola, FL"
                className="h-44 mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="font-display text-2xl uppercase text-white mb-2">Daphne</h3>
              <p className="text-white font-bold mb-2">Co-Founder · Lead Designer</p>
              <p className="text-white/80 text-sm">
                Daphne has been designing signs and bringing customers' visions to life since day one.
                The creative force behind Gator Grafix's work — and the reason every project looks great.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gator-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/GatorLowestPrices.webp"
            alt="Lowest Prices Guaranteed badge for custom signs and vehicle wraps by Gator Grafix"
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
