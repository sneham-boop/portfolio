function PrettySVG() {
  return (
    <>
      {Array(304)
        .fill(true)
        .map((_, i) => (
          <div className="pretty-line" key={i}>
            <svg className="pretty-svg" width={"2rem"} height={"2rem"}>
              <circle cx="1rem" cy="1rem" r="0.5rem" />
            </svg>
          </div>
        ))}
    </>
  );
}

export default PrettySVG;
