import "./styles.scss";
import { SelectComponent } from "../common/Select/index";
import { InputComponent } from "../common";
import { ButtonComponent } from "../common";

const FormComponent = ({ countries, state, handleSend }: any) => {
  return (
    <div className="formulary">
      <div className="formulary__content">
        <SelectComponent countries={countries} state={state} />

        <InputComponent
          label="Local"
          placeholder="Digite o local que deseja conhecer"
          state={state}
        />
        <InputComponent label="Meta" placeholder="mês/ano" data state={state} />
        <ButtonComponent
          handleSend={handleSend}
          // disabled={
          //   state?.value?.country !== "" &&
          //   state?.value?.local !== "" &&
          //   state?.value?.meta !== ""
          //     ? false
          //     : true
          // }
        />
      </div>
    </div>
  );
};

export { FormComponent };
