function PrettySVG() {
  return (
    <>
      {Array(1150)
        .fill(true)
        .map((_, i) => (
          <div className="pretty-line" key={i}>
            <svg width={"1rem"} height={"1rem"}>
              <circle cx="0.2rem" cy="0.2rem" r="0.2rem" />
            </svg>
          </div>
        ))}
    </>
  );
}

export default PrettySVG;
