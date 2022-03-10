import "./styles.scss";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";

const CardsComponent = ({ country, handleDelete, handleOpenModal }: any) => {
  return (
    <div className="card">
      <div className="card__card-top">
        <div className="card__card-top__flags">
          <img
            className="card__card-top__flags__country-flag"
            src={country.flag}
            alt=""
          />
          <span className="card__card-top__flags__country-name">
            {country.name}
          </span>
        </div>

        <div className="card__card-top__buttons">
          <button
            className="card__card-top__buttons__button"
            onClick={() => handleOpenModal(country)}
          >
            <EditIcon style={{ color: "#868686", fontSize: 20 }} />
          </button>
          <button
            className="card__card-top__buttons__button"
            onClick={() => handleDelete(country._id)}
          >
            <CloseIcon style={{ color: "#868686", fontSize: 20 }} />
          </button>
        </div>
      </div>

      <div className="card__card-bottom">
        <label className="card__card-bottom__locale">
          Local: {country.local}
        </label>
        <label className="card__card-bottom__locale">
          Meta: {country.meta}
        </label>
      </div>
    </div>
  );
};

export { CardsComponent };
