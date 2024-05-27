import React from "react";
import ComponentSection from "./components/ComponentsSection/ComponentsSection";
import { ColumnsItem } from "./components/ColumnsItem/ColumnsItem";
import DeflectionBlock from "./components/DeflectionBlock/DeflectionBlock";
import TitleBlock from "./components/TitleBlock/TitleBlock";
import ColumnsItemNorm from "./components/ColumnsItemNorm/ColumnsItemNorm";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);
  const [values, setValues] = React.useState({});

  React.useEffect(() => {
    fetch("https://65c35fe039055e7482c0b7bd.mockapi.io/yasp", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setValues(res[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeValues = (title, openAndClosePupop) => {
    setValues(data.find((item) => item.title === title));
    openAndClosePupop();
  };

  const calculatePercentage = (num, max) => (num / max) * 100;

  let max;
  let sumDev
  let sumTest
  let sumProd
  if (values.title) {
    sumDev = values.dev.front + values.dev.back + values.dev.db;
    sumTest = values.test.front + values.test.back + values.test.db;
    sumProd = values.prod.front + values.prod.back + values.prod.db;
    max = Math.max(sumDev, sumTest, sumProd);
  }
  
  return (
    values.title && (
      <section className="container">
        <TitleBlock changeValues={changeValues} data={data} values={values} />
        <div className=" data">
          <DeflectionBlock devToTest={sumTest - sumDev} testToProd={sumProd - sumTest}/>
          
          <div className=" columns">
            <ColumnsItem
              name={"dev"}
              front={{
                procent: calculatePercentage(values.dev.front, max),
                value: values.dev.front,
              }}
              serv={{
                procent: calculatePercentage(values.dev.back, max),
                value: values.dev.back,
              }}
              db={{
                procent: calculatePercentage(values.dev.db, max),
                value: values.dev.db,
              }}
            />
            <ColumnsItem
              name={"test"}
              front={{
                procent: calculatePercentage(values.test.front, max),
                value: values.test.front,
              }}
              serv={{
                procent: calculatePercentage(values.test.back, max),
                value: values.test.back,
              }}
              db={{
                procent: calculatePercentage(values.test.db, max),
                value: values.test.db,
              }}
            />
            <ColumnsItem
              name={"prod"}
              front={{
                procent: calculatePercentage(values.prod.front, max),
                value: values.prod.front,
              }}
              serv={{
                procent: calculatePercentage(values.prod.back, max),
                value: values.prod.back,
              }}
              db={{
                procent: calculatePercentage(values.prod.db, max),
                value: values.prod.db,
              }}
            />
            <ColumnsItemNorm
              name={"standard"}
              norma={{
                procent: calculatePercentage(values.norm, max),
                value: values.norm,
              }}
            />
          </div>
        </div>

        <ComponentSection />
      </section>
    )
  );
}

export default App;
