import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Check, Shirt, Star, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const TShirts = () => {
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
    });

    return () => ctx.revert();
  }, []);

  const methods = [
    'DTF (Direct to Film) Printing',
    'Screen Printing',
    'Heat Press',
    'Vinyl Heat Transfer',
    'Sublimation Printing',
    'Embroidery (Partner Service)'
  ];

  const apparelTypes = [
    'T-Shirts',
    'Hoodies & Sweatshirts',
    'Hats & Caps',
    'Tank Tops',
    'Long Sleeve Shirts',
    'Polo Shirts',
    'Aprons',
    'Tote Bags'
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Custom T-Shirts & Apparel Pensacola FL | DTF Printing – Gator Grafix</title>
        <meta name="description" content="Custom t-shirts & apparel printing in Pensacola, FL. DTF printing, screen printing & heat press. No minimum orders! Fast turnaround. Free quote: (850) 478-0486." />
        <link rel="canonical" href="https://signgator.com/services/t-shirts" />
      </Helmet>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gator-yellow to-yellow-400 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gator-red text-white px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
                Custom Apparel
              </span>
              <h1 className="font-display text-5xl md:text-6xl uppercase text-black drop-shadow-[4px_4px_0_#fff] mb-6">
                T-Shirts & Apparel
              </h1>
              <p className="text-xl text-black font-bold mb-8">
                Design your own apparel with our high-quality printing options.
                Perfect for teams, events, businesses, or personal use. No minimum orders!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="gator-btn inline-flex items-center justify-center gap-2"
                >
                  Get a Free Quote
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
                src="/Daphne-Gator-T-Shirt.webp"
                alt="Custom T-Shirts - Gator Grafix"
                className="w-full drop-shadow-[12px_12px_0_rgba(0,0,0,0.3)] rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Printing Methods */}
      <section ref={contentRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="animate-in">
              <img
                src="/Daphne Gator New 2026.webp"
                alt="T-Shirt Printing - Gator Grafix"
                className="w-full rounded-2xl border-3 border-black shadow-[12px_12px_0_#FFF212]"
                loading="lazy"
              />
            </div>

            {/* Right - Content */}
            <div className="animate-in">
              <h2 className="section-title text-gator-yellow mb-6" style={{ WebkitTextStroke: '1px black' }}>Printing Methods</h2>
              <p className="text-lg text-gray-700 mb-8">
                We offer multiple printing methods to ensure the best results for your design,
                quantity, and budget. From single custom shirts to large bulk orders!
              </p>

              <div className="space-y-4 mb-8">
                {methods.map((method, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gator-yellow rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="font-bold">{method}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="gator-btn inline-flex items-center gap-2"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apparel Types */}
      <section className="py-16 bg-gator-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-white mb-4">Apparel We Print On</h2>
            <p className="text-lg text-white font-bold max-w-2xl mx-auto">
              We can print on a wide variety of apparel items. If you don't see what you need, just ask!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {apparelTypes.map((item, index) => (
              <div key={index} className="bg-white p-4 border-3 border-black rounded-xl shadow-[6px_6px_0_#000] text-center hover:shadow-[8px_8px_0_#FFF212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                <Shirt className="w-8 h-8 mx-auto mb-2 text-gator-green" />
                <span className="font-display uppercase text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-white mb-4">Why Print With Us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: 'No Minimums', desc: 'Order just one shirt or a thousand' },
              { icon: Clock, title: 'Fast Turnaround', desc: 'Most orders ready in 3-5 days' },
              { icon: Users, title: 'Bulk Discounts', desc: 'Save more when you order more' },
            ].map((item, index) => (
              <div key={index} className="bg-gator-yellow p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#FFF212] text-center">
                <div className="w-16 h-16 bg-black rounded-full border-3 border-white flex items-center justify-center mb-4 mx-auto shadow-[3px_3px_0_#000]">
                  <item.icon className="w-8 h-8 text-gator-yellow" />
                </div>
                <h3 className="font-display text-xl uppercase mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gator-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/Gator Grafix Logo New 2026.webp"
            alt="Gator Grafix Logo"
            className="h-32 mx-auto mb-8 drop-shadow-[8px_8px_0_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
            Ready to Create Your Custom Apparel?
          </h2>
          <p className="text-xl text-black font-bold mb-8">
            Contact us today for a free quote on your t-shirt or apparel order!
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

export default TShirts;
