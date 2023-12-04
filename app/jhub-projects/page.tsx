import Image from 'next/image';
import React from 'react';

const ProjectCard = ({
  title,
  description,
  projectUrl /** projectImageUrl: '', */
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col">
    <div className="flex-grow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>

    <div className="flex justify-end">
      <a href={projectUrl} target="_blank" className="text-primary">
        <button className="text-white bg-main p-4">VISIT PROJECT</button>
      </a>
    </div>
  </div>
);

export default function JHUBProjects() {
  const projects = [
    {
      title: 'Data Protection Companion',
      projectUrl: 'https://data-protection-act.vercel.app/',
      // projectImageUrl: '',
      description: `
        Welcome to the Data Protection Companion! Learn about the Data Protection Act and how it safeguards your personal information. Explore key features, understand your rights, and take control of your data. Delve deeper into the world of data protection and empower yourself with knowledge.
      `
    },
    {
      title: 'Cultivating a Dynamic Innovation Ecosystem',
      projectUrl: '/',
      // projectImageUrl: '',
      description:
        'Creating an environment where ideas thrive, fostering collaboration and creativity among our community.'
    },
    {
      title: 'Developing Impactful Tech Solutions and Spin-offs',
      projectUrl: '/',
      // projectImageUrl: '',
      description:
        'Bringing cutting-edge technology solutions to life and exploring spin-off opportunities for broader impact.'
    },
    {
      title: 'Empowering Digital Entrepreneurs',
      projectUrl: '/',
      // projectImageUrl: '',
      description:
        'Supporting and empowering entrepreneurs with resources, mentorship, and a conducive ecosystem for growth.'
    },
    {
      title: 'Bridging Academia-Industry Divide',
      projectUrl: '/',
      // projectImageUrl: '',
      description:
        'Facilitating collaboration between academia and industry, ensuring knowledge transfer and real-world application.'
    },
    {
      title: 'Driving Market Adoption',
      projectUrl: '/',
      // projectImageUrl: '',
      description:
        'Strategizing and executing plans to drive the market adoption of innovative digital solutions developed within JHUB.'
    },
    {
      title: 'Promoting Diversity and Inclusion',
      projectUrl: '/',
      // projectImageUrl: '',
      description:
        'Fostering an inclusive environment where diverse voices and perspectives contribute to the success of our projects.'
    },
    {
      title: 'Sustaining Technological Excellence',
      projectUrl: '/',
      // projectImageUrl: '',
      description:
        'Continuously striving for excellence in technology, staying at the forefront of advancements and innovation.'
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-3">JHUB Projects We Incubate.</h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-3">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:order-2">
          <Image
            width={300}
            height={200}
            className="md:w-[90%]"
            src={`/images/product/star_ihub.svg`}
            alt="star-image-for projects"
            style={{
              filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(30deg)'
            }}
          />
        </div>
        <div className="md:ml-6 md:order-1">
          <p className="text-lg mb-4">
            Embarking on a journey to foster a generation of creators, builders,
            and leaders, we proudly showcase the myriad projects nurtured by the
            esteemed contributors at JHUB. In the spirit of trust and
            collaboration, these visionary individuals entrust us with their
            pursuit of excellence, innovation, and sustainability. Dive into the
            rich tapestry of projects undertaken by JHUB Contributors, each a
            testament to the unwavering belief in our ability to catalyze growth
            and facilitate brilliance. We extend a warm invitation, encouraging
            you to become an integral part of our community, where collective
            aspirations meet transformative endeavors. Join us on this enriching
            voyage, where trust is the cornerstone, and together, we cultivate a
            culture of relentless progress. Your journey towards excellence,
            innovation, and sustainability starts here :: with JHUB, where
            aspirations take flight and dreams find their wings.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            // projectImageUrl: '',
            projectUrl={project?.projectUrl}
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
