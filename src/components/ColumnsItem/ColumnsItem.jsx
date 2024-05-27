import "./ColumnsItem.css";

export const ColumnsItem = ({ name, front, serv, db }) => {
  return (
    <div className="flex">
      <div className={`columns__item columns__${name}`}>
        <div className={`columns__item-arrow columns__item-arrow-${name}`}>
          {name === "test" && (
            <div className="columns__item-arrow columns__item-arrow2"> </div>
          )}
        </div>

        <div
          style={{
            flex: `0 0 ${
              isNaN(Math.round(front.procent)) ? 0 : Math.round(front.procent)
            }%`,
          }}
          className=" columns__item_front columns__item_alignment"
        >
          <div className=" columns__item_value ">{front.value}</div>
        </div>

        <div
          style={{
            flex: `0 0 ${
              isNaN(Math.round(serv.procent)) ? 0 : Math.round(serv.procent)
            }%`,
          }}
          className=" columns__item_serv columns__item_alignment"
        >
          <div className=" columns__item_value ">{serv.value}</div>
        </div>

        <div
          style={{
            flex: `0 0 ${
              isNaN(Math.round(db.procent)) ? 0 : Math.round(db.procent)
            }% `,
          }}
          className=" columns__item_db columns__item_alignment"
        >
          <div className=" columns__item_value ">{db.value}</div>
        </div>
      </div>
      <p className=" columns__item_text">{name}</p>
    </div>
  );
};
