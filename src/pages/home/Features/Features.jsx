import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch("/features.json")
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])

    return (
        <div className="mb-8 mt-16 w-[95%] lg:w-full mx-auto">
            <h2 className="text-center text-4xl font-semibold">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    features.map(feature => <FeatureCard key={feature.id} feature={feature}></FeatureCard>)
                }
            </div>

        </div>
    );
};

export default Features;