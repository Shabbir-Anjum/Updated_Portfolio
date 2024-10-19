import React from 'react';
import Title from '../layouts/Title';
import CertificateCard from './CertificateCard';

// Import your certificate images here
import { certificate1, certificate2, certificate3,certificate4, certificate5, certificate6 ,certificate7, certificate8, certificate9 ,certificate10, certificate11 } from "../../assets/index";

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      title: "Web Development Certification",
      des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React.",
      src: certificate6,
      link: "https://example.com/certificate1"
    },
    {
      id: 2,
      title: "Machine Learning Specialization",
      des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
      src: certificate9,
      link: "https://example.com/certificate2"
    },
    {
      id: 3,
      title: "Cloud Computing Certification",
      des: "Achieved certification in cloud computing, covering major platforms and deployment strategies.",
      src: certificate3,
      link: "https://example.com/certificate3"
    },
    {
      id: 4,
      title: "Web Development Certification",
      des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React.",
      src: certificate4,
      link: "https://example.com/certificate1"
    },
    {
      id: 5,
      title: "Machine Learning Specialization",
      des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
      src: certificate5,
      link: "https://example.com/certificate2"
    },
    {
      id: 6,
      title: "Cloud Computing Certification",
      des: "Achieved certification in cloud computing, covering major platforms and deployment strategies.",
      src: certificate1,
      link: "https://example.com/certificate3"
    },
    {
      id: 7,
      title: "Web Development Certification",
      des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React.",
      src: certificate7,
      link: "https://example.com/certificate1"
    },
    {
      id: 8,
      title: "Machine Learning Specialization",
      des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
      src: certificate11,
      link: "https://example.com/certificate2"
    },
    {
      id: 9,
      title: "Cloud Computing Certification",
      des: "Achieved certification in cloud computing, covering major platforms and deployment strategies.",
      src: certificate2,
      link: "https://example.com/certificate3"
    },
    {
      id: 10,
      title: "Web Development Certification",
      des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React.",
      src: certificate10,
      link: "https://example.com/certificate1"
    },
    {
      id: 11,
      title: "Machine Learning Specialization",
      des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
      src: certificate8,
      link: "https://example.com/certificate2"
    },
    // Add more certificates as needed
  ];

  return (

    <section
      id="certificates"
      className="w-full h-auto bg-bodyColor text-lightText px-4"
    >
      <div className='max-w-screen-xl mx-auto w-full p-4 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000'>

   
      <div className="flex justify-center items-center text-center">
        <Title
          title="MY ACHIEVEMENTS AND QUALIFICATIONS"
          des="Certificates"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {certificatesData.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            title={certificate.title}
            des={certificate.des}
            src={certificate.src}
            link={certificate.link}
          />
        ))}
      </div>
      </div>
    </section>
  );
}

export default Certificates;