import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Career Quest</h1>
      <p className="text-lg mb-4">
        Career Quest is your ultimate career guidance platform, designed to help individuals navigate the complex world of professional development and job markets. Our mission is to empower people to make informed career decisions and achieve their professional goals.
      </p>
      <p className="text-lg mb-4">
        Founded by a team of career experts, data scientists, and industry professionals, Career Quest combines cutting-edge AI technology with human expertise to provide personalized career advice, job market insights, and skill development resources.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Core Values</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Empowerment through knowledge</li>
        <li>Data-driven decision making</li>
        <li>Continuous learning and adaptation</li>
        <li>Personalized guidance for every individual</li>
        <li>Integrity and transparency in our recommendations</li>
      </ul>
      <p className="text-lg">
        At Career Quest, we're committed to helping you unlock your full potential and navigate the ever-changing landscape of career opportunities. Join us on this exciting journey to discover and achieve your professional aspirations.
      </p>
    </div>
  );
};

export default AboutUs;