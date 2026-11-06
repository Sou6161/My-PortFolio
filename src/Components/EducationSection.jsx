const certificates = [
  {
    issuer: "Meta",
    title: "JavaScript",
    link: "https://drive.google.com/file/d/1DIKPD-ICa1hJ6iQx38Wna7LsC0Ry8WZD/view",
  },
  {
    issuer: "Meta",
    title: "Advanced React",
    link: "https://drive.google.com/file/d/1DLr7BYZzPxbwkq8UmwviE6Gl9y3l3LZB/view",
  },
  {
    issuer: "HackerRank",
    title: "React (Advanced)",
    link: "https://drive.google.com/file/d/1mwcQaqoMrueQvh9oxkLkKpbNN7JLlyAA/view",
  },
];

const EducationSection = () => {
  return (
    <div className="grid gap-14 md:grid-cols-2">
      {/* Education */}
      <div data-reveal>
        <h3 className="font-mono text-xs uppercase tracking-wider text-ink-muted">
          Education
        </h3>
        <div className="mt-5">
          <p className="font-display text-xl font-semibold text-ink">
            B.Sc. Biotechnology
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            Mangalmay Institute of Engineering and Technology, Greater Noida
          </p>
          <p className="mt-1 font-mono text-xs text-ink-muted">
            Aug 2018 – Sep 2021
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Where I picked up the problem-solving habits I use as an engineer.
          </p>
        </div>
      </div>

      {/* Certificates */}
      <div data-reveal style={{ "--d": "150ms" }}>
        <h3 className="font-mono text-xs uppercase tracking-wider text-ink-muted">
          Certifications
        </h3>
        <ul className="mt-5 divide-y divide-ink/10">
          {certificates.map((cert) => (
            <li key={cert.title}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 py-3 transition-colors"
              >
                <span>
                  <span className="text-base text-ink decoration-mustard decoration-2 underline-offset-4 group-hover:underline">
                    {cert.title}
                  </span>
                  <span className="ml-2 font-mono text-xs text-ink-muted">
                    {cert.issuer}
                  </span>
                </span>
                <span className="text-ink-muted transition-colors group-hover:text-tomato">
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
