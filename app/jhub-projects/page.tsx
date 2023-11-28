import React from 'react';

const ProjectCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default function JHUBProjects() {
  const projects = [
    {
      title: 'Climate Smart Agricultural Solutions and Digital Trade',
      description:
        'Innovative projects focused on sustainable agriculture and digital trade to address climate challenges.'
    },
    {
      title: 'Cultivating a Dynamic Innovation Ecosystem',
      description:
        'Creating an environment where ideas thrive, fostering collaboration and creativity among our community.'
    },
    {
      title: 'Developing Impactful Tech Solutions and Spin-offs',
      description:
        'Bringing cutting-edge technology solutions to life and exploring spin-off opportunities for broader impact.'
    },
    {
      title: 'Empowering Digital Entrepreneurs',
      description:
        'Supporting and empowering entrepreneurs with resources, mentorship, and a conducive ecosystem for growth.'
    },
    {
      title: 'Bridging Academia-Industry Divide',
      description:
        'Facilitating collaboration between academia and industry, ensuring knowledge transfer and real-world application.'
    },
    {
      title: 'Driving Market Adoption',
      description:
        'Strategizing and executing plans to drive the market adoption of innovative digital solutions developed within JHUB.'
    },
    {
      title: 'Promoting Diversity and Inclusion',
      description:
        'Fostering an inclusive environment where diverse voices and perspectives contribute to the success of our projects.'
    },
    {
      title: 'Sustaining Technological Excellence',
      description:
        'Continuously striving for excellence in technology, staying at the forefront of advancements and innovation.'
    }
    // Add more projects as needed
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">JHUB Projects</h1>
      <p className="text-lg mb-4">
        Explore the diverse range of projects at JHUB, each contributing to our
        mission of innovation, sustainability, and technological excellence.
        Click on each card to learn more about the exciting initiatives we are
        working on.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
