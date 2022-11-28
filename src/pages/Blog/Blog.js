import React from "react";
import img1 from "../../assets/react.png";

const Blog = () => {
  return (
    <div>
      <div className="hero mt-12">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img1} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-2xl font-bold">
              What are the different ways to manage a state in a React
              application?
            </h1>
            <p className="py-6">
              There are four main types of state that needs to be properly
              managed in React apps : Those are - 1.Local state 2.Global state
              3.Server state 4.URL state .
            </p>
            <p className="py-6">
              Local (UI) state – Local state is data we manage in one or another
              component. Local state is most often managed in React using the
              useState hook. Global (UI) state – Global state is data we manage
              across multiple components. Global state is necessary when we want
              to get and update data anywhere in our app, or in multiple
              components at least.Server state – Data that comes from an
              external server that must be integrated with our UI state. Server
              state is a simple concept, but can be hard to manage alongside all
              of our local and global UI state.URL state – Data that exists on
              our URLs, including the pathname and query parameters.
            </p>
          </div>
        </div>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img1} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-2xl font-bold">
              How does prototypical inheritance work?
            </h1>
            <p className="py-6">
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf.
              Nowadays, in modern language, it is being set using __proto__.
            </p>
          </div>
        </div>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img1} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-2xl font-bold">
              What is a unit test? Why should we write unit tests?
            </h1>
            <p className="py-6">
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
              This testing methodology is done during the development process by
              the software developers and sometimes QA staff. The main objective
              of unit testing is to isolate written code to test and determine
              if it works as intended. Unit testing is an important step in the
              development process, because if done correctly, it can help detect
              early flaws in code which may be more difficult to find in later
              testing stages.
            </p>
          </div>
        </div>
      </div>
      <div className="hero mb-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img1} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-2xl font-bold">React vs. Angular vs. Vue?</h1>
            <p className="py-2">
              React is based on JavaScript, but it’s mostly combined with JSX
              (JavaScript XML), a syntax extension that allows you to create
              elements that contain HTML and JavaScript at the same time.
              Anything you create with JSX could also be created with the React
              JavaScript API, but most developers prefer JSX because it’s more
              intuitive.
            </p>
            <p className="py-2">
              The Vue.js core library focuses on the View layer only. It’s
              called a progressive framework because you can extend its
              functionality with official and third-party packages, such as Vue
              Router or Vuex, to turn it into an actual framework. Although Vue
              is not strictly associated with the MVVM (Model-View-ViewModel)
              pattern, its design was partly inspired by it. With Vue, you’ll be
              working mostly on the ViewModel layer, to make sure that the
              application data is processed in a way that allows the framework
              to render an up-to-date View.
            </p>
            <p className="py-2">
              AngularJS, the original framework, is an MVC
              (Model-View-Controller)) framework. But in Angular 2, there’s no
              strict association with MV*-patterns as it is also
              component-based. Projects in Angular are structured into Modules,
              Components, and Services. Each Angular application has at least
              one root component and one root module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
