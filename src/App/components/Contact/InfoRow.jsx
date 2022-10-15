function InfoRow({ icon, info }) {
  return (
    <div className="contact-info">
      <span className="material-symbols-rounded">{icon}</span>
      <span> {info}</span>
    </div>
  );
}

export default InfoRow;
