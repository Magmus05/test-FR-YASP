import React from "react";
import "./TitleBlock.css";

function TitleBlock({ changeValues, data, values }) {
  const [openPupop, setOpenPupop] = React.useState(false);
  const openAndClosePupop = () => {
    setOpenPupop(!openPupop);
  };

  return (
    <div className="title-block">
      <h1 className="title">{`Количество пройденных тестов "${values.title}"`}</h1>
      <div className="title-menu" onClick={openAndClosePupop}>
        ...
      </div>
      {openPupop && (
        <ul className="title-block__pupop">
          {data.map((item, i) => (
            <li
              onClick={(e) =>
                changeValues(e.target.innerText, openAndClosePupop)
              }
              key={i}
              className="title-block__pupop-item"
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TitleBlock;
