import React from 'react';

const ForumCategoryCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default function ForumsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">JHUB Forums</h1>
      <p className="text-lg mb-4">
        Welcome to the JHUB Forums, your space for engaging discussions,
        knowledge sharing, and collaborative problem-solving. Join our vibrant
        community of innovators, entrepreneurs, and tech enthusiasts to connect,
        learn, and grow together.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        Explore Specialized Categories
      </h2>
      <p className="text-lg mb-4">
        Our forums are organized into specialized categories to cater to a wide
        range of interests. Whether you are passionate about software development, sustainable
        agriculture, entrepreneurship, or emerging technologies, you'll find a
        dedicated space for your discussions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Add forum category cards here */}
        <ForumCategoryCard
          title="Software Development and Data"
          description={`JHUB Forums aim to sharpen skills on Cloud, Geospatial Applications, Software development, and Data Science`}
        />
        <ForumCategoryCard
          title="Sustainable Agriculture"
          description="Discuss innovative practices for eco-friendly farming."
        />
        <ForumCategoryCard
          title="Entrepreneurship Insights"
          description="Share and gain insights into the world of entrepreneurship."
        />
        {/* Add more category cards as needed */}
      </div>

      <h2 className="text-2xl font-bold mb-4 mt-8">Join the Conversation</h2>
      <p className="text-lg mb-4">
        Participate in ongoing discussions, ask questions, share your
        experiences, and contribute to the collective knowledge of the JHUB
        community. Our forums are a dynamic space where ideas flourish, and
        connections are made.
      </p>

      <p className="text-lg mb-4">
        Whether you're a seasoned professional or just starting your journey,
        everyone is welcome to be a part of the JHUB Forums. Let's build a
        community that fosters collaboration and drives innovation forward.
      </p>

      <p className="text-lg mb-4">
        Ready to join the conversation? Sign up now and start exploring the
        diverse world of knowledge within the JHUB community.
      </p>
    </div>
  );
}
