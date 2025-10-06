'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '../lightDark/DarkModeToggle';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 flex h-20 w-full items-center transition-all duration-300 ${
                isScrolled ? 'bg-card shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">
                {/* Logo - Fixed position */}
                <div className="flex-shrink-0">
                    <Link href="/" className="group relative">
                        <Tooltip>
                            <TooltipTrigger>
                                <Image
                                    src="/logo.png"
                                    alt="GRC Logo"
                                    width={50}
                                    height={50}
                                    className="h-[50px] w-[50px] rounded-full object-cover transition-opacity group-hover:opacity-90"
                                    priority
                                />
                                <TooltipContent>
                                    <p>Home</p>
                                </TooltipContent>
                            </TooltipTrigger>
                        </Tooltip>
                    </Link>
                </div>

                {/* Desktop Menu - Fixed layout */}
                <nav className="font-yantramanav text-foreground mx-4 hidden flex-nowrap items-center gap-4 text-base font-medium lg:flex xl:gap-6">
                    <Link
                        href="/"
                        className="text-primery hover:text-chart-2 py-2 whitespace-nowrap transition"
                    >
                        Home
                    </Link>
                    <Link
                        href="/pages/about"
                        className="text-primery hover:text-chart-2 py-2 whitespace-nowrap transition"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/pages/products"
                        className="text-primery hover:text-chart-2 py-2 whitespace-nowrap transition"
                    >
                        our Products
                    </Link>
                    <Link
                        href="/pages/projects"
                        className="text-primery hover:text-chart-2 py-2 whitespace-nowrap"
                    >
                        Our Project
                    </Link>
                    <Link
                        href="/pages/brochure"
                        className="text-primery hover:text-chart-2 py-2 whitespace-nowrap transition"
                    >
                        Our Brochure
                    </Link>
                    <Link
                        href="/pages/contact"
                        className="text-primery hover:text-chart-2 py-2 whitespace-nowrap transition"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/pages/contact"
                        className="text-primery hover:text-chart-2 py-2 whitespace-nowrap transition"
                    >
                        Blog
                    </Link>
                </nav>

                {/* Desktop Contact Section - Fixed position */}
                <div className="hidden flex-shrink-0 items-center gap-4 lg:flex xl:gap-6">
                    <div>
                        <Tooltip>
                            <TooltipTrigger>
                                <ModeToggle />
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>Toggle theme</span>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <a
                        href="tel:+919876543210"
                        className="text-primery hover:text-chart-2 flex items-center text-base whitespace-nowrap"
                    >
                        📞 +91 7355989418
                    </a>
                    <Link href="/pages/contact" passHref legacyBehavior>
                        <Button
                            variant={'outline'}
                            className="hover:bg- hover:text-chart-2 rounded-lg px-4 py-2 text-base whitespace-nowrap shadow-md transition"
                        >
                            Get a Quote
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button - Fixed position */}
                <button
                    className="flex-shrink-0 rounded-lg p-2 transition-transform duration-300 focus:outline-none lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <div className="relative h-6 w-6">
                        <span
                            className={`absolute block h-0.5 w-full rounded bg-current transition-transform duration-300 ${
                                isOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
                            }`}
                        ></span>
                        <span
                            className={`absolute block h-0.5 w-full rounded bg-current transition-opacity duration-300 ${
                                isOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                        ></span>
                        <span
                            className={`absolute block h-0.5 w-full rounded bg-current transition-transform duration-300 ${
                                isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
                            }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`bg-card absolute top-full right-0 left-0 overflow-hidden shadow-md transition-all duration-300 ${
                    isOpen ? 'max-h-[500px]' : 'max-h-0'
                }`}
            >
                <nav className="bg-background align-center flex flex-col justify-center space-y-3 p-4">
                    {/* Mobile menu items */}
                    {[
                        ['Home', '/'],
                        ['About Us', '/pages/about'],
                        ['our Products', '/pages/products'],
                        ['Our Project', '/pages/projects'],
                        ['Our Brochure', '/pages/brochure'],
                        ['Contact Us', '/pages/contact'],
                    ].map(([title, url]) => (
                        <Link
                            key={url}
                            href={url}
                            className="text-primery hover:text-chart-2 hover:bg-muted w-full rounded-lg py-2 text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            {title}
                        </Link>
                    ))}

                    <div className="flex w-full flex-col items-center space-y-4 border-t pt-4">
                        <ModeToggle />
                        <a
                            href="tel:+919876543210"
                            className="text-primery hover:text-chart-2 flex items-center py-2 whitespace-nowrap"
                        >
                            📞 +91 7355989418
                        </a>
                        <Link
                            href="/pages/contact"
                            className="text-primery hover:text-chart-2 w-full rounded-lg px-6 py-2 text-center transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Get a Quote
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
