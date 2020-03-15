import React from "react";
import Items from "./Items";
import Item from "./Item";
import Mycarousel from "./Mycarousel";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Sectionmenu = () => {
  const match = useRouteMatch();
  return (
    <section id="section-menu">
      <div>
        <Switch>
          <Route path={`/sectionmenu/product/:name`}>
            <Item />
          </Route>
          {/* <Route path={`/product/:name`}>
            <Item />
          </Route> */}
          <Route path={`${match.path}/:name`}>
            {/* <div className="row justify-content-center mb-5">
              <div className="col-md-10 text-center">
                <h2
                  className="mb-4 text-uppercase pb_letter-spacing-2"
                  style={{ marginTop: '40px', paddingBottom: '0px' }}
                >
                  
                </h2>
              </div>
            </div> */}
            <Items />
          </Route>
          <Route path={`${match.path}`}>
            <Mycarousel />
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 text-center">
                <h2
                  className="mb-4 text-uppercase pb_letter-spacing-2"
                  style={{ marginTop: "40px", paddingBottom: "0px" }}
                >
                  INTRODUCTION
                </h2>
                We want to facilitate the students through web and mobile
                application that helps connecting them with career counsellors
                and searching and gaining knowledge about educational
                institutes. Our application will help students find their
                strengths and weaknesses and what career path suits them best
                and eliminate the cycle of visiting institutes, asking around
                and hearing biased opinions. A person can get consultancy easily
                at their home through web and android application. Student just
                has to create an account for getting consultancy and after that
                they can video call, audio call and text chat according to their
                necessities. Hard coded material about some famous universities
                and colleges available for their facility.
              </div>
            </div>

            <div className="row justify-content-center mb-5">
              <div className="col-md-10 text-center">
                <h2
                  className="mb-4 text-uppercase pb_letter-spacing-2"
                  style={{ marginTop: "40px", paddingBottom: "0px" }}
                >
                  CONSULTANTS
                </h2>
              </div>
            </div>
            <Items />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Sectionmenu;
