function ShowIcons() {
  const icons = () => {
    const links = {
      "fa-brands fa-github": "https://github.com/sneham-boop",
      "fa-brands fa-linkedin": "https://www.linkedin.com/in/mahajansneha/",
      "fa-brands fa-codepen": "https://codepen.io/snehacodes",
      "fa-solid fa-calendar": "https://calendly.com/hellosneha/30min",
    };
    return (
      <div className="social-icons">
        {Object.keys(links).map((icon, i) => (
          <a href={links[icon]} target="_blank" rel="noreferrer" key={i}>
            <i className={`${icon} icons`} />
          </a>
        ))}
      </div>
    );
  };
  return <>{icons()}</>;
}

export default ShowIcons;
