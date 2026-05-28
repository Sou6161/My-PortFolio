const certificates = [
  {
    issuer: "Meta",
    title: "JavaScript Certification",
    link: "https://drive.google.com/file/d/1DIKPD-ICa1hJ6iQx38Wna7LsC0Ry8WZD/view",
  },
  {
    issuer: "Meta",
    title: "Advanced React Certification",
    link: "https://drive.google.com/file/d/1DLr7BYZzPxbwkq8UmwviE6Gl9y3l3LZB/view",
  },
  {
    issuer: "HackerRank",
    title: "Frontend React Certification",
    link: "https://drive.google.com/file/d/1mwcQaqoMrueQvh9oxkLkKpbNN7JLlyAA/view",
  },
];

const EducationSection = () => {
  return (
    <div className="grid gap-14 md:grid-cols-2">
      {/* Education */}
      <div>
        <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">
          Education
        </h3>
        <div className="mt-5">
          <p className="font-display text-lg font-semibold text-white">
            B.Sc. Biotechnology
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Mangalmay Institute of Engineering &amp; Technology, Greater Noida
          </p>
          <p className="mt-1 font-mono text-xs text-slate-500">
            Aug 2018 — Sep 2021
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Where I picked up the problem-solving habits I use as an engineer.
          </p>
        </div>
      </div>

      {/* Certificates */}
      <div>
        <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">
          Certifications
        </h3>
        <ul className="mt-5 divide-y divide-white/5">
          {certificates.map((cert) => (
            <li key={cert.title}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 py-3 transition-colors"
              >
                <span>
                  <span className="text-base text-slate-300 group-hover:text-white">
                    {cert.title}
                  </span>
                  <span className="ml-2 font-mono text-xs text-slate-500">
                    {cert.issuer}
                  </span>
                </span>
                <span className="text-slate-500 transition-colors group-hover:text-accent">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationSection;
