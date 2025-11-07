type Data = {
  designation?: string;
  company?: string;
  timeline?: string;
  location?: string;
  list?: {
    item?: string;
  }[];
};

export default function Resume() {
  const data: Data[] = [
    {
      designation: "Front-End Engineer",
      company: "Squared",
      timeline: "2024 — Present",
      location: "United States - Remote",
      list: [
        {
          item: "Resolved 10+ critical bugs, continuously improving application logic, accessibility, and design responsiveness.",
        },
        {
          item: "Actively collaborated within a cross-functional team in an Agile environment, contributing to project planning, execution, and achieving key objectives.",
        },
        {
          item: "Updated and maintained data across the state management library using Redux Toolkit, and successfully built and shipped new features to production.",
        },
      ],
    },
    {
      designation: "Front-End UI/UX Developer",
      company: "Planet Green Solutions ",
      timeline: "2022 - 2024",
      location: "UAE - Onsite",
      list: [
        {
          item: "Designed, built, and delivered high-quality, accessible websites and web applications for government and private sector clients.",
        },
        {
          item: "Developed complete front-end architectures for large-scale projects using React, JavaScript, jQuery, SASS, and CSS, following established design system standards.",
        },
        {
          item: "Led front-end development for a web application for the Federal Tax Authority (UAE), creating reusable UI components and maintaining consistent design patterns.",
        },
        {
          item: "Delivered responsive and high-performing websites for The Education and Human Resource Council, The Roads General Authority (Saudi Arabia), and other government organizations.",
        },
        {
          item: "Built and maintained private-sector websites, including Glaze, a leading brand in the natural stone industry.",
        },
        {
          item: "Implemented new features and updates across 20+ existing client websites, resolved UI issues, and enhanced overall usability.",
        },
        {
          item: "Optimized web performance, accessibility, and SEO, achieving Lighthouse performance scores above 90 through code refinements and best practices.",
        },
        {
          item: "Collaborated with designers, developers, and product managers using Agile methodologies to align design intent with technical feasibility and ensure timely delivery.",
        },
      ],
    },
    {
      designation: "Front-End UI/UX Developer",
      company: "SCNext",
      timeline: "2021 - 2022",
      location: "UAE - Onsite",
      list: [
        {
          item: "Took ownership of the entire user interface for the Peridot web application, leading the front-end development single-handedly using HTML5, CSS3, Bootstrap, and JavaScript, delivering a polished and fully responsive experience across 50+ pages.",
        },
        {
          item: "Created reusable, scalable components that were implemented across all product pages, significantly improving development efficiency and maintaining a consistent visual and functional design throughout the web application.",
        },
        {
          item: "Enhanced and maintained the company website using Elementor (WordPress), ensuring accurate content, seamless navigation, and an improved overall user experience that reflected brand quality.",
        },
      ],
    },
    {
      designation: "Front-End UI/UX Developer",
      company: "Keywordio",
      timeline: "2020 - 2021",
      location: "Sweden - Remote",
      list: [
        {
          item: "Designed and built pixel-perfect, responsive landing pages using HTML5, CSS3, Bootstrap, Material UI, JavaScript, and React, delivering seamless experiences across devices and screen sizes.",
        },
        {
          item: "Debugged and refactored existing code to enhance performance, maintainability, and overall user experience.",
        },
        {
          item: "Developed reusable components for HubSpot and WordPress, accelerating development cycles and ensuring consistent design patterns across multiple pages.",
        },
        {
          item: "Conducted monthly learning workshops for team members, fostering knowledge sharing, skill development, and cross-team collaboration.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <header className="mb-6 flex flex-col gap-3">
        <div className="">
          <h1 className="text-6xl font-semibold mb-4 font-caveat">
            Rudolph Pereira
          </h1>
          <p className="w-full text-sm">
            Front-End Engineer with 4+ years of experience building responsive,
            accessible web applications using React, TypeScript, and modern UI
            frameworks. Skilled in crafting engaging, inclusive, and
            user-centered digital experiences.
          </p>
        </div>

        <div className="text-xs font-medium flex gap-5">
          <p className="font-bold">rudolphdev20@gmail.com</p>
          <p className="font-bold">+971 506062583 | +91 9819468208</p>
          <p className="font-bold"> http://rudolphpereira.com </p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <h2 className="text-lg font-bold mb-2">Relevant Experience</h2>

          {data.map((item) => (
            <div key={item.company} className="mb-3">
              <div className="mb-1.5">
                <span className="font-bold text-base">{item.designation}</span>
                <div className="flex gap-2 items-center">
                  <span className="font-bold text-sm">{item.company}</span>
                </div>
                <span className="text-gray-600 text-xs font-semibold">
                  {item.location} - {item.timeline}
                </span>
              </div>

              <ul className="list-disc ml-5 space-y-2 text-xs text-gray-700">
                {item.list?.map((value, index) => (
                  <li key={index}>{value.item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <div className="mb-4">
            <h2 className="text-lg font-bold  mb-2">Skills</h2>

            <div className="mb-4">
              <h3 className="font-bold text-sm mb-1">Programming Languages</h3>
              <p className="text-xs text-gray-700">
                JavaScript, TypeScript, HTML, CSS
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-sm mb-1">Libraries & Frameworks</h3>
              <p className="text-xs text-gray-700">
                React, Next.js, Vite, Redux Toolkit, Tailwind, Shadcn, Framer
                Motion
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-sm mb-1">Tools & Platforms</h3>
              <p className="text-xs text-gray-700">
                Git, GitHub, Vercel, Vercel Analytics, HubSpot, Figma
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Education</h2>

            <div className="flex flex-col gap-2">
              <div className="">
                <h3 className="font-bold text-sm mb-1">University of Mumbai</h3>
                <p className="text-xs text-gray-700">Bachelor of Mass Media</p>
              </div>
              <div className="">
                <h3 className="font-bold text-sm mb-1">
                  The Interaction Design Foundation
                </h3>
                <p className="text-xs text-gray-700">
                  Human-Computer Interaction
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Interests</h2>
            <p className="text-xs text-gray-700">
              Micro interactions, web accessibility, responsive design,
              cross-browser compatibility, web performance optimization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
