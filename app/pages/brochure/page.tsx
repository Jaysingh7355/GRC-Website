'use client';
import React from 'react';
import { FiDownload, FiPhone, FiMapPin, FiInfo } from 'react-icons/fi';
import Head from 'next/head';

const BrochurePage = () => {
    const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const fileUrl = '/Brochure.pdf';
        // Optional: Check if file exists (client-side check is limited, server-side is better)
        fetch(fileUrl)
            .then((response) => {
                if (!response.ok) {
                    alert('Sorry, the brochure file is not available. Please contact support.');
                    e.preventDefault();
                }
            })
            .catch(() => {
                alert('Error accessing the brochure file. Please contact support.');
                e.preventDefault();
            });
    };

    return (
        <div className="bg-background min-h-screen px-4 py-12 sm:px-6 lg:px-8">
            <Head>
                <title>Brochure | Varanasi GRC</title>
                <meta
                    name="description"
                    content="Download the official Varanasi GRC brochure to explore our GRC products including Jalis, Columns, Panels, and custom designs. Get detailed information in one place."
                />
                <meta
                    name="keywords"
                    content="GRC Brochure Varanasi, GRC Jali brochure, GRC product catalog, Varanasi GRC brochure download"
                />
            </Head>

            <div className="mx-auto max-w-6xl">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h1 className="text-foreground mb-4 text-4xl font-extrabold">
                        <span className="border-primary border-b-4 pb-2">
                            Varanasi GRC Construction Solutions
                        </span>
                    </h1>
                    <div className="bg-card mt-6 rounded-lg p-6 shadow-md">
                        <div className="text-muted-foreground flex flex-col justify-center gap-6 sm:flex-row">
                            <div className="flex items-center gap-2">
                                <FiMapPin className="text-primary" />
                                <span>
                                    Gate, Kunwar Road, near Indian Oil Petrol Pump, Belawa, Varanasi
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiPhone className="text-primary" />
                                <div>
                                    <span>Phone: +917355989418</span>
                                    <span className="mx-2">|</span>
                                </div>
                                <FiPhone className="text-primary inline" />
                                <div>
                                    <span>Phone: +919108538301</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Download Card */}
                    <div className="bg-card rounded-xl border p-6 shadow-lg">
                        <div className="flex h-full flex-col justify-between text-center">
                            <div>
                                <FiDownload className="text-primary mx-auto mb-4 h-12 w-12" />
                                <h2 className="text-foreground mb-4 text-2xl font-bold">
                                    Download Brochure
                                </h2>
                                <div className="text-muted-foreground mb-6 flex items-center justify-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <FiInfo className="text-primary" />
                                        <span>PDF Format</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiInfo className="text-primary" />
                                        <span>5.2 MB</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a
                                    href="/Brochure.pdf"
                                    download
                                    onClick={handleDownloadClick}
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 font-medium transition-colors duration-200"
                                >
                                    <FiDownload className="h-5 w-5" />
                                    Download Now
                                </a>
                                <p className="text-muted-foreground mt-4 text-sm">
                                    Includes complete technical specifications
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Product Highlights */}
                    <div className="bg-card rounded-xl border p-6 shadow-lg">
                        <h2 className="text-foreground mb-6 text-2xl font-bold">
                            Featured Products
                        </h2>
                        <div className="text-muted-foreground grid grid-cols-1 gap-4">
                            {[
                                'GRC Fins',
                                'GRC Domes',
                                'Decorative Elements',
                                'Noise Barriers',
                                'Cladding Panels',
                                'Screens & Jalis',
                                'Cornices & Arch',
                                'Landscape Planters',
                            ].map((product) => (
                                <div key={product} className="flex items-center gap-2">
                                    <span className="text-primary">▹</span>
                                    {product}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Specs */}
                    <div className="bg-card rounded-xl border p-6 shadow-lg">
                        <h2 className="text-foreground mb-6 text-2xl font-bold">Key Features</h2>
                        <div className="text-muted-foreground space-y-6">
                            <div>
                                <h3 className="text-foreground mb-2 font-semibold">
                                    Material Benefits
                                </h3>
                                <ul className="space-y-2">
                                    <li>High-strength GRC</li>
                                    <li>Weather resistant</li>
                                    <li>Lightweight construction</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-foreground mb-2 font-semibold">Applications</h3>
                                <ul className="space-y-2">
                                    <li>Architectural facades</li>
                                    <li>Interior decoration</li>
                                    <li>Landscape elements</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-foreground mb-2 font-semibold">
                                    Certifications
                                </h3>
                                <ul className="space-y-2">
                                    <li>ISO 9001:2015</li>
                                    <li>Green Building</li>
                                    <li>Fire Safety Rated</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrochurePage;
