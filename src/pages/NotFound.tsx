import { Link } from 'react-router-dom';
import { Home, Phone, ArrowRight, Signpost } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div className="min-h-screen gator-gradient flex items-center justify-center overflow-hidden relative">
            <Helmet>
                <title>404 Error: Page Not Found | Gator Grafix</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* Animated background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse" />
                <div className="absolute bottom-20 right-10 w-56 h-56 bg-gator-yellow/20 rounded-full animate-bounce" style={{ animationDuration: '3.5s' }} />
                <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-gator-red/10 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16">

                {/* 404 Badge */}
                <div className="inline-block bg-gator-red text-white px-6 py-3 font-display text-2xl uppercase mb-6 border-3 border-black rounded-xl shadow-[6px_6px_0_#000] animate-bounce">
                    404 — Page Not Found
                </div>

                {/* Gator Image */}
                <div className="relative inline-block mb-8">
                    <picture>
                        <source srcSet="/404-Gator.webp" type="image/webp" />
                        <img
                            src="/404-Gator.png"
                            alt="Gator Grafix confused mascot - page not found"
                            className="w-72 md:w-96 mx-auto drop-shadow-[12px_12px_0_rgba(0,0,0,0.35)]"
                            loading="eager"
                            width={384}
                            height={384}
                        />
                    </picture>
                    {/* Floating badge */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gator-yellow border-3 border-black rounded-full flex items-center justify-center animate-spin shadow-[4px_4px_0_#000]" style={{ animationDuration: '8s' }}>
                        <span className="font-display text-xs text-center leading-tight">OOPS!</span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-none mb-4">
                    <span className="block text-white drop-shadow-[4px_4px_0_#000]">Uh Oh,</span>
                    <span className="block text-gator-yellow drop-shadow-[4px_4px_0_#000]">We Got Lost</span>
                    <span className="block text-gator-red drop-shadow-[4px_4px_0_#000]">In The Swamp!</span>
                </h1>

                <p className="text-lg md:text-xl text-black font-bold mb-10 max-w-xl mx-auto">
                    That page doesn't exist — but don't worry, we can get you back on track!
                    <span className="block mt-2 text-white font-display text-lg">
                        Check out our links below 👇
                    </span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        to="/"
                        className="gator-btn inline-flex items-center justify-center gap-2 group"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/services"
                        className="px-8 py-4 font-display text-lg uppercase tracking-wide bg-white text-black border-3 border-black rounded-xl shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#45B653] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
                    >
                        <Signpost className="w-5 h-5" />
                        Our Services
                    </Link>
                    <a
                        href="tel:8504780486"
                        className="px-8 py-4 font-display text-lg uppercase tracking-wide bg-gator-red text-white border-3 border-black rounded-xl shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
                    >
                        <Phone className="w-5 h-5" />
                        (850) 478-0486
                    </a>
                </div>

                {/* Quick Nav Links */}
                <div className="flex flex-wrap gap-3 justify-center">
                    {[
                        { label: 'Vehicle Wraps', to: '/services/vehicle-wraps' },
                        { label: 'Signs & Banners', to: '/services/signs-banners' },
                        { label: 'T-Shirts & Apparel', to: '/services/t-shirts' },
                        { label: 'Business Cards', to: '/services/business-cards' },
                        { label: 'About Us', to: '/about' },
                        { label: 'Contact', to: '/contact' },
                    ].map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="bg-white text-black font-display text-sm uppercase px-4 py-2 border-3 border-black rounded-xl shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#45B653] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default NotFound;
