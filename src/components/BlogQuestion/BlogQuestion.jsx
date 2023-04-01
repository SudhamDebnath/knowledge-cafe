import React from "react";

const BlogQuestion = () => {
  return (
      <div>
          
      <h1 className="text-center m-5 text-decoration-underline">Blogs</h1>

      {/* Cards Section */}

      <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <div class="col">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">01. Props vs state</h5>
              <p class="card-text">
               
                In React, props and state are two concepts that are frequently
                used to manage and manipulate data in a component. <br /> Props (short
                for "properties") are used to pass data from a parent component
                to a child component. They are immutable, meaning they cannot be
                changed within the child component. Instead, the parent
                component can update the props and re-render the child component
                with the updated values. Props are passed to a component as
                attributes in JSX and accessed within the component using
                this.props. State, on the other hand, is used to manage data
                that can change within a component. State is mutable, meaning it
                can be changed using this.setState() within the component. When
                the state changes, the component will automatically re-render to
                reflect the new state. State should be used to manage data that
                is specific to the component and not passed down from a parent
                component. <br /> In summary, props are used to pass data from a parent
                to a child component, while state is used to manage data that
                can change within a component.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">02. How does useState work?</h5>
              <p class="card-text">
                useState is a built-in React Hook that allows functional
                components to have state. It takes an initial value as an
                argument and returns an array containing the current state value
                and a function to update it. Whenever the state is updated, the
                component will re-render with the updated value. useState can be
                called multiple times in the same component to manage multiple
                state variables.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                03. Purpose of useEffect other than fetching data.
              </h5>
              <p class="card-text">
                {" "}
                useEffect is a built-in React Hook that allows you to perform
                side effects in functional components. Side effects include
                things like modifying the DOM, setting up subscriptions, and
                timers. Other than fetching data, useEffect can be used for a
                variety of tasks, such as: 1.Modifying the DOM: You can use
                useEffect to modify the DOM after the component has rendered.
                This can be useful for setting focus on an input field or
                scrolling to a specific part of the page. 2. Cleaning up after
                side effects: If your component creates subscriptions or timers,
                you can use useEffect to clean them up when the component
                unmounts or when the dependencies change. 3. Updating document
                title: You can use useEffect to update the document title based
                on the current state of the component. 4. Integration with
                third-party libraries: useEffect can be used to integrate with
                third-party libraries that need to run side effects. Overall,
                useEffect is a powerful tool for managing side effects in React
                components. It allows you to perform tasks that are
                traditionally associated with class components in functional
                components.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">04. How Does React work?</h5>
              <p class="card-text">
                React is a JavaScript library for building user interfaces. It
                uses a component-based approach where each component represents
                a part of the UI. When a component's state changes, React will
                update the DOM to reflect the new state. React uses a virtual
                DOM (a lightweight representation of the actual DOM) to optimize
                updates. When a component's state changes, React will compare
                the new virtual DOM tree with the previous one, and then update
                only the parts of the actual DOM that have changed. This makes
                updates faster and more efficient. React components can be
                either functional or class-based. Functional components are
                simpler and easier to read and write, while class-based
                components have more features and can manage state and lifecycle
                methods. React provides a set of built-in Hooks, such as
                useState and useEffect, that allow functional components to
                manage state and perform side effects. React can be used with a
                variety of other libraries and frameworks, such as Redux for
                state management and React Native for building mobile apps.
                Overall, React provides a powerful and efficient way to build
                user interfaces with JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogQuestion;
