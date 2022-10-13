import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/meat.jpg" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>Menu</h3>
            <h1>all menu are available </h1>
            <p>
              investigation's demonstraverunt lectors leger me li's quod ii
              legist sardius. Caritas est team process's dyaus, quine sequitur
              mutation consuetudes lectors.
            </p>
            <div className="about__btn">
              <a href="about" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
