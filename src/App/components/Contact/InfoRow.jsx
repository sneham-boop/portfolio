function InfoRow({ icon, info, link }) {
  return (
    <div className="info-row">
      {link && (
        <a href={link}>
          <span className="material-symbols-rounded">{icon}</span>
        </a>
      )}
      {!link && <span className="material-symbols-rounded">{icon}</span>}
      <span> {info}</span>
    </div>
  );
}

export default InfoRow;
