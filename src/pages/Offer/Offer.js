import React, { Component } from "react";
import Card from "../../components/Card/Card";
import "./offer.css";
export class Offer extends Component {
  render() {
    return (
      <section id="offer">
          <div className="row py-5">
            <div className="col-12 text-center mb-4">
              <h1 className="mb-4 text-primary fw-bold">Offer</h1>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-lg-3 col-12 col-md-6">
              <Card
                titleClass={"text-primary"}
                headerProps={"border-0 rounded shadow"}
                title={"Free"}
                bodyTitle={"0 /"}
                bodyIcon={"$"}
                month={"month"}
                icon={"fa-solid fa-lock-open"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
                }
              />
            </div>
            <div className="col-lg-3 col-12 col-md-6">
              <Card
                titleClass={"text-primary"}
                headerProps={"border-0 rounded shadow"}
                bodyIcon={"$"}
                bodyTitle={"15 /"}
                month={"month"}
                title={"Basic"}
                icon={"fa-solid fa-lock-open"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
                }
              />
            </div>
            <div className="col-lg-3 col-12 col-md-6">
              <Card
                titleClass={"text-primary"}
                headerProps={"border-0 rounded shadow"}
                month={"month"}
                bodyTitle={"20 /"}
                bodyIcon={"$"}
                title={"Pro"}
                icon={"fas fa-lock fa-fw"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
                }
              />
            </div>
            <div className="col-lg-3 col-12 col-md-6">
              <Card
                titleClass={"text-primary"}
                headerProps={"border-0 rounded shadow"}
                month={"month"}
                bodyTitle={"25 /"}
                bodyIcon={"$"}
                title={"Enterprise"}
                icon={"fas fa-lock fa-fw"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
                }
              />
            </div>
          </div>
      </section>
    );
  }
}

export default Offer;
