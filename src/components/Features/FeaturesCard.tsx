import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="bg-emerald-900/10 shadow-sm rounded-lg p-6 flex flex-col gap-4 text-left">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
