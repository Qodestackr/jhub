import Link from 'next/link';
import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>

      <p className="text-gray-700 mb-4">
        Your privacy is important to us. This Privacy Policy explains how JHUB
        collects, uses, and protects your personal information when you use our
        website. - We never spam you.
      </p>

      <h3 className="text-xl font-bold mb-2">1. Information We Collect</h3>
      <p className="text-gray-700 mb-4">
        We may collect personal information such as your name, email address,
        and other relevant details when you register on our platform or interact
        with our services.
      </p>

      <h3 className="text-xl font-bold mb-2">2. Use of Information</h3>
      <p className="text-gray-700 mb-4">
        We use the collected information to provide and improve our services,
        communicate with you, and ensure the security of our platform.
      </p>

      <h3 className="text-xl font-bold mb-2">3. Third-Party Disclosure</h3>
      <p className="text-gray-700 mb-4">
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties unless we provide you with advance notice or as
        required by law.
      </p>

      <Link
        href={'/data-protection-details'}
        className="text-3xl text-success underline"
      >
        Learn More About Our Data Protection Details
      </Link>
    </div>
  );
};

export default PrivacyPage;
