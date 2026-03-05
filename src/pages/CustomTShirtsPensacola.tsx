import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Check, Shirt, Star, Zap, Users, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const CustomTShirtsPensacola = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const audiences = [
    { icon: Users, title: 'Youth Sports Leagues', desc: 'Baseball, soccer, football, basketball — no minimum means you only order what your team actually needs.' },
    { icon: Shirt, title: 'School & PTA Events', desc: 'Spirit week, field day, fundraisers — get exactly the number of shirts you need, no leftovers.' },
    { icon: Star, title: 'Church & Community Groups', desc: 'Events, mission trips, volunteer days — any quantity, any design, fast turnaround.' },
    { icon: Zap, title: 'Small Businesses', desc: 'Staff uniforms, branded merchandise, trade show giveaways — start small and reorder anytime.' },
    { icon: Users, title: 'Military Family Events', desc: 'Homecomings, reunions, unit gear — we proudly serve Pensacola\'s military community.' },
    { icon: Shirt, title: 'Reunions & Parties', desc: 'Family reunions, bachelorette parties, birthday events — custom shirts make any event memorable.' },
  ];

  const dtfBenefits = [
    { title: 'No Minimum Orders', desc: 'Need just one shirt? No problem. Screen printers require 12–24+ minimums. We don\'t.' },
    { title: 'Unlimited Colors', desc: 'Full-color photographic prints at no extra cost. No color limits, no setup fees per color.' },
    { title: 'Works on Dark Fabrics', desc: 'Bright, vivid prints on black, navy, or any dark color — something screen printing struggles with.' },
    { title: 'Fast 3–5 Day Turnaround', desc: 'Most orders ready in 3–5 business days. Rush available — call us to check availability.' },
    { title: 'Free Design Included', desc: 'No art files? No problem. Our in-house designer creates your artwork at no extra charge.' },
    { title: 'Lowest Price Guaranteed', desc: 'We guarantee the lowest prices on the Gulf Coast. Find a better price and we\'ll beat it.' },
  ];

  const howItWorks = [
    { step: '1', title: 'Send Us Your Idea', desc: 'Call, email, or stop by with your design concept, logo, or just a rough idea. We\'ll handle the rest.' },
    { step: '2', title: 'We Design It', desc: 'Our in-house team creates a full-color digital proof. You approve it before anything gets printed.' },
    { step: '3', title: 'We Print & Press', desc: 'Using our DTF printing system, your design is printed on film and heat-pressed directly onto the garment.' },
    { step: '4', title: 'Pick Up or Deliver', desc: 'Stop by our shop at 8447 Pensacola Blvd or arrange local delivery. Most orders ready in 3–5 days.' },
  ];

  const faqs = [
    {
      question: "What is DTF printing and how is it different from screen printing?",
      answer: "DTF (Direct to Film) transfers a full-color design onto fabric using a specialized printer and heat press — no screens, no setup costs, no minimums. Screen printing requires minimum orders (usually 12–24 shirts) because of the setup involved. DTF is perfect for small runs, complex multi-color designs, and orders of any size."
    },
    {
      question: "Is there really no minimum order?",
      answer: "Absolutely none. You can order a single custom shirt if that's all you need. We serve everyone from individuals who want one personalized tee to sports leagues ordering 50+ uniforms. Larger orders do receive bulk pricing — just ask."
    },
    {
      question: "Do I need to have my design ready?",
      answer: "Not at all! Our in-house design team will create your artwork from scratch at no extra charge. Just tell us what you're looking for — colors, text, any ideas — and we'll build a proof for your approval before printing."
    },
    {
      question: "How long does it take to get my shirts?",
      answer: "Most orders are ready in 3–5 business days after design approval. Need it faster? Call us at (850) 478-0486 — rush turnaround is sometimes available depending on our schedule."
    },
    {
      question: "What types of shirts and garments can you print on?",
      answer: "T-shirts, hoodies, sweatshirts, long sleeves, tank tops, polo shirts, hats, tote bags, aprons, and more. You can bring your own blanks or we can source them for you."
    },
    {
      question: "Do you serve areas outside of Pensacola?",
      answer: "Yes! We serve all of Northwest Florida and Southwest Alabama, including Gulf Breeze, Pace, Milton, Navarre, Pensacola Beach, Perdido Key, and the Fort Walton Beach / Destin area. Local pickup at our Pensacola Blvd shop is always available."
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Custom T-Shirts Pensacola FL | No Minimums, Any Quantity – Gator Grafix</title>
        <meta name="description" content="Custom t-shirts in Pensacola with no minimum orders. DTF printing for sports leagues, schools, events & businesses. Free design included. Lowest prices guaranteed. Call (850) 478-0486." />
        <link rel="canonical" href="https://signgator.com/services/custom-t-shirts-pensacola" />
        <meta property="og:title" content="Custom T-Shirts Pensacola FL | No Minimums – Gator Grafix" />
        <meta property="og:description" content="Custom t-shirts in Pensacola with no minimums. DTF printing, free design, fast turnaround. Sports leagues, schools, events & businesses. Lowest prices guaranteed." />
        <meta property="og:url" content="https://signgator.com/services/custom-t-shirts-pensacola" />
        <meta property="og:image" content="https://signgator.com/og-share.png" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
              }))
            },
            {
              "@type": "Service",
              "name": "Custom T-Shirts Pensacola — No Minimums",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Gator Grafix",
                "url": "https://signgator.com",
                "telephone": "+18504780486",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "8447 Pensacola Blvd",
                  "addressLocality": "Pensacola",
                  "addressRegion": "FL",
                  "postalCode": "32534"
                }
              },
              "description": "DTF custom t-shirt printing in Pensacola, FL with no minimum orders. Free design included. Serving sports leagues, schools, businesses, and events.",
              "areaServed": ["Pensacola, FL", "Gulf Breeze, FL", "Navarre, FL", "Milton, FL", "Pace, FL", "Pensacola Beach, FL"],
              "url": "https://signgator.com/services/custom-t-shirts-pensacola"
            }
          ]
        })}`}</script>
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
                DTF Printing · Pensacola, FL
              </span>
              <h1 className="font-display text-5xl md:text-6xl uppercase text-black drop-shadow-[3px_3px_0_rgba(255,255,255,0.5)] leading-none mb-6">
                Custom T-Shirts in Pensacola —<br />
                <span className="text-gator-red drop-shadow-[3px_3px_0_#000]">Any Quantity.</span><br />
                No Minimums.
              </h1>
              <p className="text-xl text-black font-bold mb-4">
                Screen printers turn you away for small orders. We don't.
                Order <strong>one shirt or a thousand</strong> — same great quality, same guaranteed lowest price.
              </p>
              <p className="text-black mb-8">
                Free design included. 3–5 day turnaround. Serving Pensacola, Gulf Breeze, Navarre, Milton &amp; beyond.
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
              <a
                href="https://www.google.com/search?q=Gator+Grafix+Pensacola+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white px-4 py-2.5 border-3 border-black rounded-xl shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#45B653] transition-all mt-4 w-fit"
              >
                <Star className="w-4 h-4 text-gator-yellow fill-gator-yellow" />
                <span className="font-display text-sm">★★★★★ 100+ Google Reviews</span>
              </a>
            </div>
            <div className="relative">
              <img
                src="/Daphne-Gator-T-Shirt.webp"
                alt="Daphne Gator showcasing custom DTF printed t-shirts with no minimum orders in Pensacola, FL"
                className="w-full drop-shadow-[12px_12px_0_rgba(0,0,0,0.3)] rounded-2xl"
                loading="eager"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gator-red border-3 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0_#000] animate-bounce">
                <span className="font-display text-xs text-white text-center leading-tight uppercase">No<br />Min!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DTF Beats Screen Printing */}
      <section ref={contentRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gator-red text-white px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
              Why DTF?
            </span>
            <h2 className="section-title text-gator-red mb-4">Why We Use DTF Printing</h2>
            <p className="text-xl text-gray-700 font-bold max-w-2xl mx-auto">
              DTF (Direct to Film) is the modern standard for custom apparel — and why we can say yes when other shops say no.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dtfBenefits.map((benefit, index) => (
              <div key={index} className="animate-in bg-white p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#C90010] hover:shadow-[10px_10px_0_#FFF212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 bg-gator-yellow rounded-full border-3 border-black flex items-center justify-center mb-4 shadow-[2px_2px_0_#000]">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-display text-lg uppercase mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-gator-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-black text-white px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
              Who We Print For
            </span>
            <h2 className="section-title text-black mb-4">Perfect For Every Group in Pensacola</h2>
            <p className="text-xl text-black font-bold max-w-2xl mx-auto">
              No minimums means no one gets left out. If you need shirts, we can print them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <div key={index} className="bg-white p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#000] hover:shadow-[10px_10px_0_#45B653] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-gator-red rounded-full border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0_#000]">
                  <audience.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg uppercase mb-2">{audience.title}</h3>
                <p className="text-gray-600 text-sm">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gator-yellow text-black px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
              Simple Process
            </span>
            <h2 className="section-title-white mb-4">From Idea to Shirt in 4 Steps</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div key={index} className="bg-white p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#45B653] text-center">
                <div className="w-14 h-14 bg-gator-yellow border-3 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_0_#000]">
                  <span className="font-display text-2xl">{step.step}</span>
                </div>
                <h3 className="font-display text-lg uppercase mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <img
              src="/Daphne Gator New 2026.webp"
              alt="Daphne Gator mascot promoting DTF custom t-shirt printing in Pensacola, FL"
              className="h-48 mx-auto drop-shadow-[8px_8px_0_rgba(255,242,18,0.5)]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gator-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-gator-yellow text-black px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
            Local & Regional
          </span>
          <h2 className="section-title-white mb-6">Serving All of Northwest Florida</h2>
          <p className="text-xl text-white font-bold mb-8">
            Walk in or call from anywhere in the region. We print for customers across the Emerald Coast and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Pensacola', 'Gulf Breeze', 'Navarre', 'Pace', 'Milton', 'Pensacola Beach', 'Perdido Key', 'Fort Walton Beach', 'Destin', 'Crestview'].map((city) => (
              <span key={city} className="bg-white text-black px-4 py-2 border-3 border-black rounded-xl font-display text-sm shadow-[3px_3px_0_#000]">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gator-yellow text-black px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
              Got Questions?
            </span>
            <h2 className="section-title text-gator-red mb-4">Custom T-Shirt FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-3 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0_#000] transition-all hover:shadow-[8px_8px_0_#FFF212]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 bg-white hover:bg-gator-yellow/20 transition-colors text-left"
                >
                  <span className="font-display text-lg uppercase pr-4">{faq.question}</span>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-5 pt-0 bg-white border-t-2 border-gray-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gator-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/GatorLowestPrices.webp"
            alt="Lowest Prices Guaranteed badge - Gator Grafix custom t-shirts Pensacola"
            className="h-40 mx-auto mb-8 drop-shadow-[8px_8px_0_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-4">
            Ready to Get Your Shirts Printed?
          </h2>
          <p className="text-xl text-black font-bold mb-8">
            No minimums. Free design. Lowest prices guaranteed. Let's get started.
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

export default CustomTShirtsPensacola;
