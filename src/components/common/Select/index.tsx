import "./styles.scss";

const SelectComponent = ({ countries, state }: any) => {
  return (
    <div className="select">
      <label className="select__label-select">País</label>
      <select
        className="select__text-select"
        value={state.value.country}
        onChange={(e) =>
          state.action({ ...state.value, country: e.target.value })
        }
      >
        <option
          className="select__text-select__state"
          defaultValue="Selecione..."
        >
          Selecione...
        </option>
        {countries &&
          countries.map((country: any) => (
            <option
              className="select__text-select__state"
              key={country.alpha2Code}
              value={country.alpha2Code}
            >
              {country.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export { SelectComponent };
