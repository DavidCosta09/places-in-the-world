import "./styles.scss";
import { CardsComponent } from "../common";

const TableComponent = ({ list, handleDelete, handleOpenModal }: any) => {
  return (
    <div className="table">
      <div className="table__content">
        {list &&
          list.map((country: any) => (
            <CardsComponent
              key={country.country}
              country={country}
              handleDelete={handleDelete}
              handleOpenModal={handleOpenModal}
            />
          ))}
      </div>
    </div>
  );
};

export { TableComponent };
