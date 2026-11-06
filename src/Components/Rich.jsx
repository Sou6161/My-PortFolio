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
