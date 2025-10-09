'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import { notFound, useParams } from 'next/navigation';

const products = [
    { name: 'GRC Jali', image: 'grc_jali' },
    { name: 'GRC Screen', image: 'grc_screen' },
    { name: 'GRC Fins', image: 'grc_fins' },
    { name: 'GRC Landscape', image: 'grc_landscape' },
    { name: 'GRC Domes', image: 'grc_domes' },
    { name: 'GRC Capital', image: 'grc_capital' },
    { name: 'GRC Brackets', image: 'grc_brackets' },
    { name: 'GRC Balusters', image: 'grc_balusters' },
    { name: 'GRC Arch', image: 'grc_arch' },
    { name: 'GRC Sculpture', image: 'grc_sculpture' },
    { name: 'GRC Railing', image: 'grc_railing' },
    { name: 'GRC Pillar', image: 'grc_pillar' },
    { name: 'Noise Barrier', image: 'grc_noise_barrier' },
    { name: 'GRC Mural', image: 'grc_mural' },
    { name: 'GRC Fountains', image: 'grc_fountain' },
    { name: 'GRC Planter', image: 'grc_planter' },
    { name: 'GRC Column', image: 'grc_column' },
    { name: 'GRC Cornice', image: 'grc_cornice' },
    { name: 'GRC Columns and Capital', image: 'grc_columns_capital' },
    { name: 'GRC Decorative Element', image: 'grc_decorative_element' },
];

const validCities = [
    'lucknow',
    'kanpur',
    'varanasi',
    'prayagraj',
    'agra',
    'meerut',
    'ghaziabad',
    'noida',
    'bareilly',
    'aligarh',
    'moradabad',
    'saharanpur',
    'gorakhpur',
    'firozabad',
    'jhansi',
    'muzaffarnagar',
    'ayodhya',
    'mathura',
    'faizabad',
    'raebareli',
    'azamgarh',
    'ballia',
    'banda',
    'basti',
    'bulandshahr',
    'etawah',
    'sitapur',
    'unnao',
    'sultanpur',
    'barabanki',
    'jaunpur',
    'mirzapur',
    'ghazipur',
    'shahjahanpur',
    'lalitpur',
    'ambedkarnagar',
    'bahraich',
    'balrampur',
    'deoria',
    'etah',
    'gonda',
    'hathras',
    'kannauj',
    'kaushambi',
    'maharajganj',
    'mainpuri',
    'mau',
    'pilibhit',
    'rampur',
    'sambhal',
    'sonbhadra',
    'hardoi',
    'lakhimpur kheri',
    'bhopal',
    'delhi',
    'gurugram',
    'faridabad',
    'mumbai',
    'thane',
    'navi mumbai',
    'pune',
    'bengaluru',
    'hyderabad',
    'chennai',
    'kolkata',
    'ahmedabad',
    'jaipur',
    'surat',
    'indore',
    'nagpur',
    'coimbatore',
    'vijayawada',
    'visakhapatnam',
    'chandigarh',
    'patna',
    'raipur',
    'dehradun',
    'ranchi',
    'trivandrum',
    'guwahati',
    'vrindavan',
    'haridwar',
    'rishikesh',
    'ujjain',
    'amritsar',
    'puri',
    'mysuru',
    'jodhpur',
];

export default function CityPage() {
    const params = useParams();
    const city = params?.city?.toString().toLowerCase();

    if (!city || !validCities.includes(city)) notFound();

    const cityName = city.charAt(0).toUpperCase() + city.slice(1);

    const generateSlug = (name: string) =>
        name
            .toLowerCase()
            .replace(/ /g, '_')
            .replace(/[^a-z0-9_]/g, '');

    return (
        <>
            <Head>
                <title>GRC Products in {cityName} | JRC GRC Solutions</title>
                <meta
                    name="description"
                    content={`Premium GRC architectural products in ${cityName}: jali, columns, panels, cornices & more. Design, manufacture & install GRC elements in ${cityName}.`}
                />
            </Head>

            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="px-6 py-20 text-center">
                    <h1 className="mb-4 text-5xl font-bold text-gray-900">
                        GRC Solutions in <span className="text-blue-600">{cityName}</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Transform your architectural projects in {cityName} with premium-grade
                        <strong> Glass Fiber Reinforced Concrete (GRC)</strong> products. Aesthetic,
                        durable, and made to last.
                    </p>
                </section>

                {/* Product Grid */}
                <section className="px-6 py-10 lg:px-20">
                    <h2 className="mb-8 text-center text-3xl font-semibold text-gray-800">
                        Our GRC Product Range
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                            >
                                <Image
                                    src={`/product/${product.image}.jpg`}
                                    alt={product.name}
                                    width={400}
                                    height={250}
                                    className="h-56 w-full rounded-t-2xl object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="mb-2 text-lg font-semibold text-gray-800">
                                        {product.name}
                                    </h3>
                                    <Button asChild className="mt-3 w-full" variant="outline">
                                        <Link href={`/products/${generateSlug(product.name)}`}>
                                            View Details <FiArrowRight className="ml-2" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="mt-20 bg-blue-50 py-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-800">
                        Custom GRC Design & Installation in {cityName}
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-gray-600">
                        We specialize in end-to-end architectural GRC solutions — from design to
                        installation. Reach out to us for consultation or quotation.
                    </p>
                    <div className="flex flex-col justify-center gap-6 text-lg sm:flex-row">
                        <a
                            href="tel:+917355989418"
                            className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow transition hover:bg-blue-700"
                        >
                            <FiPhone className="mr-2 inline" /> +91 7355989418
                        </a>
                        <a
                            href="mailto:varanasigrcconstruction7355@gmail.com"
                            className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        >
                            <FiMail className="mr-2 inline" /> Email Us
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
