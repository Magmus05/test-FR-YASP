// import React from 'react'
import "./ComponentsSection.css";


function ComponentsSection (){
	return (
		<div className="components-section">
		<div className="component-block">
			<div className="component-block__color component-block__color_front"></div>
			<p className="component-block__text">Клиентская часть</p>
		</div>
		<div className="component-block">
			<div className="component-block__color component-block__color_back"></div>
			<p className="component-block__text">Северная часть</p>
		</div>
		<div className="component-block">
			<div className="component-block__color component-block__color_db"></div>
			<p className="component-block__text">База данных</p>
		</div>
	</div>
	)
}
export default ComponentsSection;
