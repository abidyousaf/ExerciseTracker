import React from "react";

function Servises() {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">
            Swimming and running offer a wide range of physical, mental, and
            social benefits, with the main difference being that swimming is
            less stressful on joints.
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-5x">
              <i className="fas fa-circle  text-primary" />
              <i className="fas fa-swimming-pool  fa-stack-1x fa-inverse" />
            </span>
            <h4 className="my-3">Swimming</h4>
            <p className="text-muted">
              "The water is your friend...you don't have to fight with water,
              just share the same spirit as the water, and it will help you
              move.".
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-5x">
              <i className="fas fa-circle  text-primary" />
              <i className="fas fa-running fa-stack-1x fa-inverse" />
            </span>
            <h4 className="my-3">Running</h4>
            <p className="text-muted">
              “I started strong but I crossed the finish line even stronger.”
              “Even when you think you're done, you can always give a little
              more.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-5x">
              <i className="fas fa-circle text-primary" />
              <i className="fas fa-bicycle fa-stack-1x fa-inverse" />
            </span>
            <h4 className="my-3">Bicycle</h4>
            <p className="text-muted">
              Behind me, there’s nothing. Ahead of me, there’s everything. Such
              is life on the road on a bike!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servises;
