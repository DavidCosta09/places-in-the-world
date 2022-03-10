import "./styles.scss";
import InputMask from "react-input-mask";

const InputComponent = ({ label, data, state, color, shadow }: any) => {
  
  return (
    <>
      {!data ? (
        <div className="input">
          <label className="input__label" style={{ color: color }}>
            {label}
          </label>
          <input
            style={shadow && styles.boxShadow}
            className="input__text"
            placeholder="Digite o local que deseja conhecer"
            onChange={(text) =>
              state?.action({ ...state?.value, local: text.target.value })
            }
            value={state?.value.local}
          />
        </div>
      ) : (
        <div className="input data">
          <label className="input__label" style={{ color: color }}>
            {label}
          </label>
          <InputMask
            style={shadow && styles.boxShadow}
            mask="99/9999"
            onChange={(text) => {
              state?.action({ ...state?.value, meta: text.target.value });
            }}
            value={state?.value.meta}
            className="input__text"
            placeholder="mês/ano"
          />
        </div>
      )}
    </>
  );
};

const styles = {
  boxShadow: {
    webkitBoxShadow: "1px 3px 1px #9E9E9E",
    mozBoxShadow: "1px 3px 1px #9E9E9E",
    boxShadow: "1px 3px 1px #9E9E9E",
  },
};

export { InputComponent };
