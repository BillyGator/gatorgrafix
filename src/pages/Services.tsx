import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Car, Signpost, Shirt, CreditCard, Sticker, FileText } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-item', {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        rotateX: 10,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out'
      });

      // Parallax for additional services
      gsap.to('.additional-services', {
        scrollTrigger: {
          trigger: '.additional-services',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: -20,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []);

  const allServices = [
    {
      title: 'Vehicle Wraps & Graphics',
      description: 'Transform your vehicle into a moving billboard with our high-quality wraps and graphics. From full wraps to partial designs, we do it all!',
      features: ['Full Vehicle Wraps', 'Partial Wraps', 'Fleet Graphics', 'Window Perforation', 'Color Change Wraps', 'Custom Graphics'],
      link: '/services/vehicle-wraps',
      image: '/Gator-Blue-Jeep-Wrap copy.webp',
      mascot: '/Billy Gator Orange Camo Jeep Gladiator.webp',
      icon: Car,
      color: 'bg-gator-red'
    },
    {
      title: 'Signs & Banners',
      description: 'From eye-catching banners to durable signs, we provide custom solutions to help your business stand out.',
      features: ['Yard Signs', 'Banners', 'Lighted Signs', 'Magnetic Signs', 'Vinyl Lettering', 'Full Color Graphics'],
      link: '/services/signs-banners',
      image: '/Gator-Banner.webp',
      mascot: '/gator-grafix-custom-sign-design-banner-printing-services.webp',
      icon: Signpost,
      color: 'bg-gator-green'
    },
    {
      title: 'T-Shirts & Apparel',
      description: 'Our t-shirts and apparel services include DTF printing, screen printing, and heat press for personalized clothing.',
      features: ['DTF Printing', 'Screen Printing', 'Heat Press', 'Custom Designs', 'No Minimum Orders', 'Quick Turnaround'],
      link: '/services/t-shirts',
      image: '/Daphne-Gator-T-Shirt.webp',
      mascot: '/Daphne Gator New 2026.webp',
      icon: Shirt,
      color: 'bg-gator-yellow'
    },
    {
      title: 'Business Cards & Marketing',
      description: 'Enhance your brand with our business cards, decals, stickers, and marketing materials tailored to your specifications.',
      features: ['Business Cards', 'Decals & Stickers', 'Flyers', 'Brochures', 'Door Hangers', 'Postcards'],
      link: '/services/business-cards',
      image: '/Daphne-Gator-B-Cards.webp',
      mascot: '/daphne-gator-custom-graphic-design-logo-services.webp',
      icon: CreditCard,
      color: 'bg-blue-500'
    }
  ];

  const additionalServices = [
    { icon: Sticker, title: 'Labels & Decals', desc: 'Custom labels and decals for any application' },
    { icon: FileText, title: 'Marketing Materials', desc: 'Flyers, brochures, and promotional items' },
    { icon: Phone, title: 'And Much More!', desc: 'If you can imagine it, we can print it!' },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Services | Vehicle Wraps, Signs, Apparel & More – Gator Grafix</title>
        <meta name="description" content="Gator Grafix offers vehicle wraps, custom signs & banners, DTF t-shirt printing, and business cards in Pensacola, FL. Guaranteed lowest prices on the Gulf Coast!" />
        <link rel="canonical" href="https://signgator.com/services" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Gator Grafix Services",
          "description": "All printing and sign services offered by Gator Grafix in Pensacola, FL",
          "url": "https://signgator.com/services",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Vehicle Wraps & Graphics", "url": "https://signgator.com/services/vehicle-wraps" },
            { "@type": "ListItem", "position": 2, "name": "Signs & Banners", "url": "https://signgator.com/services/signs-banners" },
            { "@type": "ListItem", "position": 3, "name": "T-Shirts & Apparel", "url": "https://signgator.com/services/t-shirts" },
            { "@type": "ListItem", "position": 4, "name": "Business Cards & Marketing", "url": "https://signgator.com/services/business-cards" }
          ]
        })}`}</script>
      </Helmet>
      {/* Hero */}
      <section className="bg-gator-green py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-gator-yellow text-black px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
            What We Offer
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white font-bold max-w-2xl mx-auto">
            From wraps to shirts, if you can imagine it, we can print it!
            Check out all the amazing services we offer at Gator Grafix.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section ref={servicesRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {allServices.map((service, index) => (
              <div
                key={index}
                className={`service-item grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`${service.color} rounded-2xl p-2 border-3 border-black shadow-[8px_8px_0_#000]`}>
                    <img
                      src={service.mascot}
                      alt={`${service.title} - Gator Grafix Service`}
                      className="w-full h-72 object-contain bg-white rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  {/* Floating icon - Rounded */}
                  <div className={`absolute -bottom-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-20 h-20 ${service.color} rounded-full border-3 border-black flex items-center justify-center shadow-[4px_4px_0_#000]`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-display text-3xl md:text-4xl uppercase text-black mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <div className={`w-3 h-3 ${service.color} rounded-full border-2 border-black`} />
                        <span className="font-bold text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="gator-btn inline-flex items-center gap-2 group"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services py-16 bg-gator-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-gator-red mb-4">And Much More!</h2>
            <p className="text-lg text-black font-bold">We offer a wide range of additional services to meet all your printing needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((item, index) => (
              <div key={index} className="bg-white p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#000] text-center hover:shadow-[12px_12px_0_#45B653] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-gator-green rounded-full border-3 border-black flex items-center justify-center mb-4 mx-auto shadow-[3px_3px_0_#000]">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl uppercase mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white drop-shadow-[4px_4px_0_#C90010] mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Give us a call and we'll help you figure out the best solution for your project!
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
              className="px-8 py-4 font-display text-lg uppercase tracking-wide bg-white text-black border-3 border-black rounded-xl shadow-[6px_6px_0_#FFF212] hover:shadow-[8px_8px_0_#45B653] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
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

export default Services;
