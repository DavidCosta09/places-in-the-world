import "./styles.scss";

const ButtonComponent = ({ handleSend, disabled }: any) => {
  return (
    <button
      className="buttons"
      onClick={() => handleSend()}
      disabled={disabled}
      style={disabled && { background: "#abababab" }}
    >
      <span className="buttons__button">Adicionar</span>
    </button>
  );
};

export { ButtonComponent };
