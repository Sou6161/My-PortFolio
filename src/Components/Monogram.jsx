// The site mark: a serif "S" set in the display face on an ink tile, with a
// tomato full stop, echoing the "Sourabh Saini." headline. public/favicon.png
// is the same mark rendered for the browser tab.
const Monogram = ({ className = "h-8 w-8 text-lg" }) => (
  <span
    aria-hidden="true"
    className={`relative grid shrink-0 place-items-center rounded-md bg-ink font-display font-bold leading-none text-paper ${className}`}
  >
    <span className="-mt-0.5">S</span>
    <span className="absolute bottom-[18%] right-[16%] h-[16%] w-[16%] rounded-full bg-tomato" />
  </span>
);

export default Monogram;
