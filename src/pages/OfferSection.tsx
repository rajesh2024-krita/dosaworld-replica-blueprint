import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { OfferSection as OfferSectionType } from '../Types/OfferSection';
import { offerSectionService } from '../Services/offerSectionService';

// Fallback images
import biryaniImage from "@/assets/briyani1.avif";
import bgImage from "@/assets/11062b_909c4c1a78e54f998e22ac4141a1505c~mv2.avif";

const OfferSection: React.FC = () => {
    const { t } = useTranslation();
    const [offerSections, setOfferSections] = useState<OfferSectionType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchOfferSections();
    }, []);

    const fetchOfferSections = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await offerSectionService.getAll();

            if (response.success && response.data.length > 0) {
                setOfferSections(response.data);
            } else {
                setError('No offer sections found');
            }
        } catch (err) {
            console.error('Error fetching offer sections:', err);
            setError('Failed to load offer sections');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600 border-solid"></div>
            </div>
        );
    }

    if (error || offerSections.length === 0) {
        return (
            <section className="bg-cover bg-center w-full" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="text-white p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-[#FF8800]">{error || t("promoBanner.title")}</h2>
                </div>
            </section>
        );
    }

    return (
        <>
            {offerSections.map((section) => (
                <section
                    key={section._id}
                    className="bg-cover bg-center w-full"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="bg-black bg-opacity-40 w-full h-full">
                        <div className="text-white p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                                <div>
                                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#FF8800]">{section.title}</h2>
                                    <p className="text-lg mb-2">{section.subtitle}</p>
                                    <p className="text-sm mb-6 text-restaurant-cream">{section.description}</p>

                                    <div className="space-y-4">
                                        {Object.keys(section.buckets).map((size) => {
                                            const bucket = section.buckets[size];
                                            console.log('bucket == ', bucket)
                                            return (
                                                <div key={size} className="flex justify-between items-center bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                                                    <div>
                                                        <h3 className="font-semibold text-xl">{bucket.name}</h3>
                                                        <p className="text-restaurant-cream">People - {bucket.people}</p>
                                                    </div>
                                                    <span className="text-2xl font-bold text-[#FF8800]">€ {bucket.price}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src={`https://dosaworldadmin.kritatechnosolutions.com${section.biryaniImage}` || biryaniImage}
                                        alt={section.title}
                                        className="w-64 h-64 object-cover rounded-lg shadow-lg border-2 border-white"
                                        onError={(e) => {
                                            e.currentTarget.src = biryaniImage;
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default OfferSection;
