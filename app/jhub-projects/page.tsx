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
      <Image
        src={'/images/net-incubation-101.jpg'}
        alt="???"
        width={800}
        height={250}
        className="w-full"
      />
      <p className="text-sm">{description}</p>
    </div>

    <div className="flex justify-end items-center my-6">
      <a href={projectUrl} target="_blank" className="text-primary">
        <button className="text-white bg-main p-2">VISIT PROJECT</button>
      </a>
    </div>
    <div className="mt-2 md:mt-4">
      <div className="flex gap-2 flex-wrap md:mt-6 text-success underline">
        <span>AI innovation</span>
        <span>Data Democratization</span>
        <span>Sustainability</span>
        <span>Revolutional</span>
      </div>
    </div>
  </div>
);

const ProjectStar = () => (
  <svg
    width="496"
    height="589"
    viewBox="0 0 496 589"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M203.872 514.457L284.046 429.978L356.143 405.222L266.759 501.91L203.872 514.457ZM203.872 514.457L183.698 476.488M183.698 476.488L234.187 329.334L219.981 310.452L141.637 364.598L135.508 385.677M183.698 476.488L128.745 498.731M135.508 385.677L128.745 498.731M135.508 385.677L90.1035 325.207L91.01 461.746L128.745 498.731M92.162 164.139L109.376 315.662L148.246 343.002L218.538 285.483L220.806 221.68L174.392 189.306L120.403 172.782L92.162 164.139ZM444.311 271.885L342.659 393.419L303.754 342.45L293.784 294.886L310.275 261.78L388.894 263.132L444.311 271.885Z"
      stroke="#219653"
      stroke-opacity="0.6"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M273.916 40.8086C273.572 40.7033 273.208 40.8969 273.103 41.2409L244.585 134.42C240.89 146.49 226.67 151.669 216.079 144.801L143.621 97.8133C143.34 97.6316 142.968 97.6913 142.759 97.9516L90.9385 162.36C90.7095 162.645 90.7592 163.062 91.0488 163.285L175.283 228.091C185.183 235.708 185.166 250.641 175.25 258.235L90.1484 323.406C89.8674 323.621 89.8096 324.021 90.0182 324.307L135.237 386.289C135.442 386.569 135.83 386.64 136.12 386.45L217.284 333.384C227.215 326.891 240.603 330.988 245.199 341.927L282.759 431.33C282.893 431.65 283.254 431.808 283.581 431.691L355.744 405.635C356.077 405.515 356.253 405.151 356.141 404.815L322.093 303.178C318.125 291.334 326.469 278.95 338.936 278.179L445.013 271.618C445.378 271.596 445.652 271.278 445.622 270.914L438.727 188.535C438.699 188.202 438.424 187.944 438.09 187.938L351.746 186.323C339.125 186.087 330.239 173.836 333.933 161.766L362.451 68.5866C362.556 68.2426 362.363 67.8783 362.019 67.773L318.175 54.3544C318.038 54.3125 317.897 54.2692 317.76 54.2273L273.916 40.8086Z"
      fill="#219653"
    />
    <rect
      x="30.405"
      y="413"
      width="313"
      height="41"
      transform="rotate(19.0839 30.405 413)"
      fill="#219653"
    />
    <path
      d="M290.768 587.788L312.768 553.788L298.768 520.788L46.7681 432.788L17.7681 451.788L26.7681 493.788L290.768 587.788Z"
      stroke="#219653"
      stroke-opacity="0.6"
    />
    <path
      d="M36.2681 471.788L34.2681 422.788L314.268 525.788L284.268 563.288M36.2681 471.788L27.7681 493.788M36.2681 471.788L284.268 563.288M290.268 587.788L284.268 563.288"
      stroke="#219653"
      stroke-opacity="0.6"
    />
  </svg>
);

export default function JHUBProjects() {
  const projects = [
    {
      title: 'Data Protection Companion',
      projectUrl: 'https://datalawcompanion.org',
      description: `
        Welcome to the Data Protection Companion! Learn about the Data Protection Act and how it safeguards your personal information. Explore key features, understand your rights, and take control of your data. Delve deeper into the world of data protection and empower yourself with knowledge.
      `
    },
    {
      title: 'Solar Jiji',
      projectUrl: 'https://www.solarjiji.com',
      description: 'The Ultimate Solar Energy Predictor'
    },
    {
      title: 'Developing Impactful Tech Solutions and Spin-offs',
      projectUrl: 'https://farmex-suite.vercel.app/',
      description:
        'Bringing cutting-edge technology solutions to life and exploring spin-off opportunities for broader impact.'
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-3">
        We Incubate Projects with Sustainabile Impacts.
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-3">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:order-2">
          <ProjectStar />
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

      <div className="md:flex-row justify-between items-center grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="col-span-1">
          <Image
            src={'/images/hero-img-innovation-hub-02.jpg'}
            height={500}
            width={1200}
            alt="incubation project sections"
            className=""
          />
          <span className="text-secondary text-sm dark:text-white">
            JHUB main incubation studio
          </span>
        </div>

        <div className="col-span-1 flex flex-col gap-4">
          <h1 className="text-secondary font-semibold text-center text-3xl mb-4 flex-1">
            Visit Our Incubation Studio
          </h1>
          <div className="flex items-start gap-4">
            JHUB is on a mission to empower, cultivate creativity and drive
            innovation. Our Incubation Studio provides a collaborative
            environment where diverse ideas converge and transform into reality.
            We believe in the power of innovation to shape a better future. Join
            us in exploring the boundless possibilities at JHUB&apos;s
            Incubation Studio. Here, we foster an atmosphere that encourages
            experimentation and embraces the spirit of entrepreneurship. Embark
            on a journey of innovation with JHUB&apos;s Incubation Studio. Our
            collaborative space is designed to spark creativity and nurture
            groundbreaking ideas.
          </div>
        </div>
      </div>

      <div className="text-center my-5 md:my-6">
        <h1 className="text-success text-3xl md:text-4xl font-semibold md:font-extrabold">
          Projects that are Part of Our Innovation
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div className="mobile-phone" key={index}>
            <div className="status-bar"></div>
            <div className="screen">
              <iframe
                src={project?.projectUrl}
                style={{
                  width: '100%',
                  border: 'none',
                  height: '100%'
                }}
              />
            </div>
            <div className="home-button"></div>
          </div>
        ))}
      </div>
      {/* 

      CATEGORIES
      
      - Sustainable Agriculture
      - Sustainable Energy Solutions
      - Fintech solutions
      - Data & Compliance
      - 
      
      */}
    </div>
  );
}
