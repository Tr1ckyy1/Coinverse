function ChooseBox({ icon, title, text }) {
  return (
    <div className="choosebox-container">
      <span>{icon}</span>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ChooseBox;
