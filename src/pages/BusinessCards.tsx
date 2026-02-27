import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Check, CreditCard, Star, Clock, Palette, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const BusinessCards = () => {
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

  const products = [
    'Business Cards',
    'Postcards',
    'Flyers',
    'Brochures',
    'Door Hangers',
    'Custom Decals',
    'Vinyl Stickers',
    'Marketing Materials'
  ];

  const cardOptions = [
    { title: 'Standard Cards', desc: '14pt gloss or matte finish', price: 'Starting at $25' },
    { title: 'Premium Cards', desc: '16pt with UV coating', price: 'Starting at $35' },
    { title: 'Specialty Cards', desc: 'Raised foil, spot UV, or rounded corners', price: 'Starting at $50' },
  ];

  const faqs = [
    {
      question: "How much do business cards cost at Gator Grafix?",
      answer: "Standard 14pt gloss or matte business cards start at just $25. Premium 16pt with UV coating start at $35, and specialty cards with raised foil, spot UV, or rounded corners start at $50. Contact us for a custom quote on your order."
    },
    {
      question: "How fast can I get my business cards?",
      answer: "Most business card orders are ready in 2-3 business days. Rush turnaround is sometimes available — call us at (850) 478-0486 and we'll see what we can do for your deadline."
    },
    {
      question: "Do you offer custom design for business cards?",
      answer: "Yes! Our in-house design team can create a professional business card design from scratch, matching your brand colors and style. We provide a digital proof for your approval before printing."
    },
    {
      question: "What file format should I submit for my design?",
      answer: "We accept PDF, AI, EPS, PSD, and high-resolution PNG or JPEG files (300 DPI or higher). If you're unsure whether your file will work, just send it over and we'll let you know."
    },
    {
      question: "Do you print other marketing materials besides business cards?",
      answer: "Absolutely! We print flyers, brochures, door hangers, postcards, custom decals, vinyl stickers, and more. If you need something specific, just ask — chances are we can print it!"
    },
    {
      question: "What finish options are available for business cards?",
      answer: "We offer gloss, matte, UV coating, raised foil, spot UV, and rounded corner options. Each finish gives your card a different look and feel. Ask us for samples if you'd like to see them in person!"
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Business Cards & Marketing Materials Pensacola FL – Gator Grafix</title>
        <meta name="description" content="Professional business cards, flyers, brochures, decals & stickers in Pensacola, FL. Standard cards from $25. Fast 2-3 day turnaround. Custom design available. Call (850) 478-0486." />
        <link rel="canonical" href="https://signgator.com/services/business-cards" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
          }))
        })}`}</script>
      </Helmet>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gator-yellow text-black px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
                Marketing Materials
              </span>
              <h1 className="font-display text-5xl md:text-6xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
                Business Cards & More
              </h1>
              <p className="text-xl text-white font-bold mb-8">
                Make a lasting impression with professionally designed and printed business cards,
                marketing materials, and promotional products.
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
                src="/Daphne-Gator-B-Cards.webp"
                alt="Daphne Gator presenting a stack of professional custom printed business cards"
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
              <h2 className="section-title text-blue-500 mb-6">Marketing Materials</h2>
              <p className="text-lg text-gray-700 mb-8">
                From business cards to brochures, we provide high-quality printing for all your
                marketing needs. Enhance your brand with professional materials that make an impact.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {products.map((product, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
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
                src="/daphne-gator-custom-graphic-design-logo-services.webp"
                alt="Daphne Gator offering custom graphic design services for business cards and marketing materials"
                className="w-full rounded-2xl border-3 border-black shadow-[12px_12px_0_#3B82F6]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Card Options */}
      <section className="py-16 bg-gator-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-gator-red mb-4">Business Card Options</h2>
            <p className="text-lg text-black font-bold max-w-2xl mx-auto">
              Choose the perfect card for your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cardOptions.map((item, index) => (
              <div key={index} className="bg-white p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#000] text-center hover:shadow-[12px_12px_0_#3B82F6] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-blue-500 rounded-full border-3 border-black flex items-center justify-center mb-4 mx-auto shadow-[3px_3px_0_#000]">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl uppercase mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <div className="bg-gator-yellow px-4 py-2 border-2 border-black rounded-lg inline-block">
                  <span className="font-display text-sm">{item.price}</span>
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
            <h2 className="section-title-white mb-4">Why Choose Our Printing?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Palette, title: 'Custom Design', desc: 'Professional design services available' },
              { icon: Star, title: 'Premium Quality', desc: 'High-quality cardstock and finishes' },
              { icon: Clock, title: 'Fast Turnaround', desc: 'Most orders ready in 2-3 days' },
            ].map((item, index) => (
              <div key={index} className="bg-blue-500 p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#FFF212] text-center">
                <div className="w-16 h-16 bg-white rounded-full border-3 border-black flex items-center justify-center mb-4 mx-auto shadow-[3px_3px_0_#000]">
                  <item.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="font-display text-xl uppercase text-white mb-2">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-500 text-white px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">Got Questions?</span>
            <h2 className="section-title text-blue-500 mb-4">Business Card FAQs</h2>
            <p className="text-lg text-gray-700 font-bold">Everything you need to know about our printing services</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-3 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0_#000] transition-all hover:shadow-[8px_8px_0_#3B82F6]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 bg-white hover:bg-blue-50 transition-colors text-left"
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
            src="/Billy and Daphne Gator holding Wrap tools.webp"
            alt="Billy and Daphne Gator holding vehicle wrap tools, representing Gator Grafix high-quality services"
            className="h-44 mx-auto mb-8 drop-shadow-[8px_8px_0_rgba(0,0,0,0.3)] rounded-2xl"
            loading="lazy"
          />
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
            Ready to Make an Impression?
          </h2>
          <p className="text-xl text-black font-bold mb-8">
            Contact us today for a free quote on business cards and marketing materials!
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

export default BusinessCards;
