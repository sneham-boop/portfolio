function Icon({ icon, link }) {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <i className={`fa-brands fa-${icon} fa-4x icon`} onClick={handleClick} />
  );
}

export default Icon;
