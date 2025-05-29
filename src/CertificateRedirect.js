import React, { useEffect, useState } from "react";
import "./CertificateRedirect.css";

const CertificateRedirect = () => {
  const [certLink, setCertLink] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("q");

    if (!myParam) {
      window.location.href = "https://archive.nptel.ac.in";
    } else {
      setCertLink(
        `/content/NOC/NOC25/SEM1/Ecertificates/109/noc25-hs12/Course/${myParam}.pdf`
      );
    }
  }, []);

  return (
    <div className="container">
      <button className="center-button">
        {certLink && (
          <a
            href={certLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-link"
          >
            Course Certificate
          </a>
        )}
      </button>
    </div>
  );
};

export default CertificateRedirect;
