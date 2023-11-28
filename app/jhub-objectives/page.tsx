import React from 'react';
import ContactUs from '../contact-us/page';

export default function JHUBObjectives() {
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">JHUB Africa Objectives & Values</h1>
      <p className="text-lg leading-relaxed">
        Develop Climate Smart Agricultural Solutions and Digital Trade to Cultivate a Dynamic Innovation Ecosystem.
        Develop impactful Tech Solutions and spin-offs to empower Digital Entrepreneurs.
        Bridge Academia-Industry Divide and drive Market Adoption.
        Promote Diversity and Inclusion to sustain Technological Excellence.
      </p>
      <ContactUs />
    </div>
  );
}
