import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { certificate1, certificate2, certificate3, certificate4, certificate5, certificate6, certificate7, certificate8, certificate9, certificate10, certificate11 } from "../../assets/index";

const certificateMap = {
  1: { src: certificate6, title: "Web Development Certification", des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React." },
  2: { src: certificate9, title: "Machine Learning Specialization", des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques." },
  3: { src: certificate3, title: "Cloud Computing Certification", des: "Achieved certification in cloud computing, covering major platforms and deployment strategies." },
  4: { src: certificate4, title: "Web Development Certification", des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React." },
  5: { src: certificate5, title: "Machine Learning Specialization", des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques." },
  6: { src: certificate1, title: "Cloud Computing Certification", des: "Achieved certification in cloud computing, covering major platforms and deployment strategies." },
  7: { src: certificate7, title: "Web Development Certification", des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React." },
  8: { src: certificate11, title: "Machine Learning Specialization", des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques." },
  9: { src: certificate2, title: "Cloud Computing Certification", des: "Achieved certification in cloud computing, covering major platforms and deployment strategies." },
  10: { src: certificate10, title: "Web Development Certification", des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React." },
  11: { src: certificate8, title: "Machine Learning Specialization", des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques." },
};

const CertificateView = () => {
  const { id } = useParams();
  const certificate = certificateMap[id];

  if (!certificate) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-bodyColor text-lightText">
        <p className="text-xl mb-4">Certificate not found</p>
        <Link to="/certificates" className="px-4 py-2 bg-designColor text-white rounded hover:bg-opacity-80">
          Back to Certificates
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bodyColor text-lightText p-4">
      <div className="max-w-4xl w-full p-4 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327]">
        <h1 className="text-3xl font-bold text-center mb-8 text-designColor">{certificate.title}</h1>
        <div className="mb-8">
          <img
            src={certificate.src}
            alt={certificate.title}
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg mb-8">{certificate.des}</p>
        <Link to="/certificates" className="px-4 py-2 bg-designColor text-white rounded hover:bg-opacity-80">
          Back to Certificates
        </Link>
      </div>
    </div>
  );
};

export default CertificateView;