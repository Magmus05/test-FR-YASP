import "./DeflectionBlock.css";

function DeflectionBlock({ devToTest, testToProd }) {



  return (
    <div className="deflection-block">
      <div className="deflection-block__line deflection-block__line1"></div>

      <div
        className={`deflection-block__item   ${
          devToTest < 0 ? "deflection-block__item_minus" : ""
        } ${devToTest > 0 ? "deflection-block__item_plus" : ""} ${
          devToTest === 0 ? "deflection-block__item_zero" : ""
        }`}
        style={String(devToTest).length >= 4 ? { fontSize: "9px", fontWeight: 500 } : {}}
      >
        {devToTest > 0 && (
          <>
            <span className="arrow-plus"></span>
            <span>+</span>
          </>
        )}
        {devToTest < 0 && <span className="arrow-minus"></span>}

        {devToTest}
      </div>
      <div className="deflection-block__line deflection-block__line2"></div>
      <div className="deflection-block__line deflection-block__line3"></div>

      <div
        className={`deflection-block__item  ${
          testToProd < 0 ? "deflection-block__item_minus" : ""
        } ${testToProd > 0 ? "deflection-block__item_plus" : ""} ${
          testToProd === 0 ? "deflection-block__item_zero" : ""
        }`}
        style={String(testToProd).length >= 4 ? {fontSize: "9px", fontWeight: 500} : {}}
      >
        {testToProd > 0 && (
          <>
            <span className="arrow-plus"></span>
            <span>+</span>
          </>
        )}
        {testToProd < 0 && <span className="arrow-minus"></span>}
        {testToProd}

        {/* {testToProd} */}
      </div>
      <div className="deflection-block__line deflection-block__line4"></div>
    </div>
  );
}

export default DeflectionBlock;
