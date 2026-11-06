// Renders a bullet string where **double-starred** parts are the figures worth
// spotting (the same words the resume sets in bold). They pick up the parent's
// spot colour through --c, falling back to ink.
const Rich = ({ text }) =>
  text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong
        key={i}
        className="font-semibold text-[var(--c,rgb(var(--ink)))]"
      >
        {part}
      </strong>
    ) : (
      part
    )
  );

export default Rich;
