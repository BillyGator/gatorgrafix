import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Check, Star, Clock, Shield, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const VehicleWraps = () => {
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

      // Parallax for hero image
      gsap.to('.parallax-hero-img', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: -80,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    'Full & Partial Vehicle Wraps',
    'Fleet Graphics',
    'Color Change Wraps',
    'Window Perforation',
    'Custom Graphics & Logos',
    'Paint Protection Film',
    'Chrome Delete',
    'Roof & Accent Wraps'
  ];

  const benefits = [
    { icon: Star, title: 'Premium Materials', desc: 'We use only high-quality 3M and Avery Dennison vinyl' },
    { icon: Clock, title: 'Fast Turnaround', desc: 'Most wraps completed in 3-5 business days' },
    { icon: Shield, title: '1-Year Warranty', desc: 'Our wraps come with a comprehensive warranty' },
    { icon: Star, title: 'Mobile Service', desc: 'We can come to you for fleet installations' },
  ];

  // Vehicle Wrap FAQs
  const faqs = [
    {
      question: "How long does a vehicle wrap last?",
      answer: "A professionally installed vehicle wrap typically lasts 5-7 years with proper care. Factors like sun exposure, climate, and maintenance can affect longevity. We use premium 3M and Avery Dennison materials for maximum durability."
    },
    {
      question: "Will a wrap damage my vehicle's paint?",
      answer: "No! In fact, vehicle wraps actually protect your original paint from UV rays, minor scratches, and road debris. When professionally removed, your paint will be in the same condition as when the wrap was installed."
    },
    {
      question: "How much does a vehicle wrap cost?",
      answer: "Pricing varies based on vehicle size, wrap coverage (full vs. partial), and design complexity. Full wraps typically range from $2,500-$5,000, while partial wraps and graphics start around $800. Contact us for a free custom quote!"
    },
    {
      question: "How long does installation take?",
      answer: "Most vehicle wraps are completed in 3-5 business days. This includes surface preparation, installation, and quality inspection. Larger fleet projects may take longer depending on the number of vehicles."
    },
    {
      question: "Can I wash my wrapped vehicle?",
      answer: "Yes! You can hand wash your wrapped vehicle or use a touchless car wash. Avoid automatic brushes and high-pressure washers directly on edges. We recommend waiting 2 weeks after installation before the first wash."
    },
    {
      question: "Can you wrap any vehicle?",
      answer: "We can wrap cars, trucks, vans, SUVs, boats, trailers, and more! If it has a smooth surface, we can likely wrap it. Contact us to discuss your specific vehicle and project needs."
    },
    {
      question: "Do you offer design services?",
      answer: "Absolutely! Our in-house design team will work with you to create a custom wrap design that perfectly represents your brand. We provide digital proofs before printing so you know exactly what to expect."
    },
    {
      question: "Is there a warranty on your wraps?",
      answer: "Yes! We offer a 1-year warranty on all our vehicle wraps covering material defects and installation issues. Our premium materials also come with manufacturer warranties for added peace of mind."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Vehicle Wraps Pensacola FL | Full & Partial Wraps – Gator Grafix</title>
        <meta name="description" content="Professional vehicle wraps in Pensacola, FL. Full wraps, partial wraps, fleet graphics & color change wraps. 3M & Avery materials. 1-year warranty. Free quote: (850) 478-0486." />
        <link rel="canonical" href="https://signgator.com/services/vehicle-wraps" />
      </Helmet>
      {/* Hero */}
      <section className="hero-section bg-gradient-to-br from-gator-red to-red-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gator-yellow text-black px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
                Vehicle Graphics
              </span>
              <h1 className="font-display text-5xl md:text-6xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
                Vehicle Wraps
              </h1>
              <p className="text-xl text-white font-bold mb-8">
                Transform your vehicle into a moving billboard! Our high-quality vehicle wraps
                and graphics will make your brand stand out on the road.
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
                src="/Gator-Blue-Jeep-Wrap copy.webp"
                alt="Vehicle Wraps - Gator Grafix"
                className="parallax-hero-img w-full drop-shadow-[12px_12px_0_rgba(0,0,0,0.3)] rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={contentRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="animate-in">
              <img
                src="/Billy Gator Orange Camo Jeep Gladiator.webp"
                alt="Vehicle Wrap Services - Billy Gator"
                className="w-full rounded-2xl border-3 border-black shadow-[12px_12px_0_#C90010]"
                loading="lazy"
              />
            </div>

            {/* Right - Features */}
            <div className="animate-in">
              <h2 className="section-title text-gator-red mb-6">What We Offer</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you need a full wrap for your business fleet or a color change for your personal vehicle,
                we've got you covered with premium materials and expert installation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gator-green rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold">{feature}</span>
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

      {/* Benefits */}
      <section className="py-16 bg-gator-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-gator-red mb-4">Why Choose Our Wraps?</h2>
            <p className="text-lg text-black font-bold max-w-2xl mx-auto">
              We use only the best materials and techniques to ensure your wrap looks great and lasts for years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#000] text-center hover:shadow-[12px_12px_0_#45B653] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-gator-red rounded-full border-3 border-black flex items-center justify-center mb-4 mx-auto shadow-[3px_3px_0_#000]">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-lg uppercase mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gator-green text-white px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
              Got Questions?
            </span>
            <h2 className="section-title text-gator-green mb-4">Vehicle Wrap FAQs</h2>
            <p className="text-lg text-gray-700 font-bold">
              Everything you need to know about vehicle wraps
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-3 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0_#000] transition-all hover:shadow-[8px_8px_0_#45B653]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 bg-white hover:bg-gator-yellow/20 transition-colors text-left"
                >
                  <span className="font-display text-lg uppercase pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="p-5 pt-0 bg-white border-t-2 border-gray-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-white mb-4">Our Process</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From design to installation, we handle everything to ensure a perfect result.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Consultation', desc: 'Discuss your vision and goals' },
              { step: '2', title: 'Design', desc: 'Custom design created for you' },
              { step: '3', title: 'Print', desc: 'High-quality vinyl printing' },
              { step: '4', title: 'Install', desc: 'Professional installation' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gator-green p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#FFF212] text-center">
                  <div className="font-display text-5xl text-white drop-shadow-[2px_2px_0_#000] mb-2">{item.step}</div>
                  <h3 className="font-display text-xl uppercase text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gator-yellow" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gator-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/Gator Grafix Billy Gator 2026.webp"
            alt="Billy Gator - Gator Grafix Mascot"
            className="h-44 mx-auto mb-8 drop-shadow-[8px_8px_0_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
            Ready to Wrap Your Ride?
          </h2>
          <p className="text-xl text-black font-bold mb-8">
            Contact us today for a free quote on your vehicle wrap!
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

export default VehicleWraps;
