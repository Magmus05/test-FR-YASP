function ColumnsItemNorm({ name, norma }) {
  return (
    <div className="flex">
      <div className={`columns__item columns__${name}`}>
        <div
          style={{
            height: `${
              isNaN(Math.round(norma.procent)) ? 0 : Math.round(norma.procent)
            }%`,
          }}
          className=" columns__item_standard columns__item_alignment"
        >
          <div className="columns__item_value columns__item_standard-value ">
            {norma.value}
          </div>
        </div>
      </div>
      <p className=" columns__item_text">норматив</p>
    </div>
  );
}

export default ColumnsItemNorm;
