import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Check, Star, Clock, Ruler } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const SignsBanners = () => {
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

  const products = [
    'Yard Signs',
    'Banners (All Sizes)',
    'Lighted Signs',
    'Magnetic Signs',
    'Vinyl Lettering',
    'Full Color Graphics',
    'Trade Show Displays',
    'Real Estate Signs'
  ];

  const bannerTypes = [
    { title: 'Vinyl Banners', desc: 'Durable outdoor banners for any occasion', image: '/Gator-Banner.webp' },
    { title: 'Yard Signs', desc: 'Perfect for real estate, events, and promotions', image: '/billy-gator-wide-format-banner-printing-services.webp' },
    { title: 'Custom Graphics', desc: 'Full color designs to make your brand pop', image: '/gator-grafix-custom-sign-design-banner-printing-services.webp' },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Custom Signs & Banners Pensacola FL | Yard Signs, Vinyl – Gator Grafix</title>
        <meta name="description" content="Custom signs & banners in Pensacola, FL. Yard signs, vinyl banners, lighted signs, magnetic signs & full-color graphics. Fast turnaround. Lowest prices guaranteed!" />
        <link rel="canonical" href="https://signgator.com/services/signs-banners" />
      </Helmet>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gator-green to-green-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gator-yellow text-black px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
                Custom Signs
              </span>
              <h1 className="font-display text-5xl md:text-6xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
                Signs & Banners
              </h1>
              <p className="text-xl text-white font-bold mb-8">
                From eye-catching banners to durable signs, we provide custom solutions
                to help your business stand out and get noticed!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="gator-btn inline-flex items-center justify-center gap-2 bg-gator-yellow text-black border-black"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:8504780486"
                  className="px-8 py-4 font-display text-lg uppercase tracking-wide bg-white text-black border-3 border-black rounded-xl shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#FFF212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (850) 478-0486
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Gator-Banner.webp"
                alt="Signs & Banners - Gator Grafix"
                className="w-full drop-shadow-[12px_12px_0_rgba(0,0,0,0.3)] rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section ref={contentRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="animate-in">
              <h2 className="section-title text-gator-green mb-6">Custom Signs for Every Need</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you need a single yard sign or a hundred banners for your next event,
                we've got the equipment and expertise to deliver high-quality results at the lowest prices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {products.map((product, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gator-green rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold">{product}</span>
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

            {/* Right - Image */}
            <div className="animate-in">
              <img
                src="/gator-grafix-custom-sign-design-banner-printing-services.webp"
                alt="Sign Making Process - Gator Grafix"
                className="w-full rounded-2xl border-3 border-black shadow-[12px_12px_0_#45B653]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banner Types */}
      <section className="py-16 bg-gator-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-gator-red mb-4">Our Banner Options</h2>
            <p className="text-lg text-black font-bold max-w-2xl mx-auto">
              We offer a variety of banner types to suit your specific needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bannerTypes.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border-3 border-black shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#45B653] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                <div className="h-48 bg-gator-green flex items-center justify-center p-4 rounded-t-2xl">
                  <img src={item.image} alt={item.title} className="h-full object-contain" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl uppercase mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-white mb-4">Why Our Signs Stand Out</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: 'Premium Quality', desc: 'High-resolution printing on durable materials' },
              { icon: Clock, title: 'Fast Production', desc: 'Most orders ready in 24-48 hours' },
              { icon: Ruler, title: 'Any Size', desc: 'From small signs to massive banners' },
            ].map((item, index) => (
              <div key={index} className="bg-gator-green p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#FFF212] text-center">
                <div className="w-16 h-16 bg-white rounded-full border-3 border-black flex items-center justify-center mb-4 mx-auto shadow-[3px_3px_0_#000]">
                  <item.icon className="w-8 h-8 text-gator-green" />
                </div>
                <h3 className="font-display text-xl uppercase text-white mb-2">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gator-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/Billy-Gator Standing in front of Building.webp"
            alt="Gator Grafix - Pensacola Sign Shop"
            className="h-44 mx-auto mb-8 drop-shadow-[8px_8px_0_rgba(0,0,0,0.3)] rounded-2xl"
            loading="lazy"
          />
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
            Need Custom Signs?
          </h2>
          <p className="text-xl text-black font-bold mb-8">
            Contact us today and let's create something amazing together!
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

export default SignsBanners;
