# React Forms Practice

![](image.png)

## Learning Objectives
- Use event listeners for forms, including submit and change events
- Explain the difference between controlled and uncontrolled elements, including form elements.
- Build a component with a controlled form that has multiple inputs of different types
- Refactor a component that uses multiple state hooks to use one that dynamically handles multiple inputs

## Instructions
- Make the form in `src/App.jsx` a controlled form:
  - Replace the `input` elements with a new component called `Input`
  - Replace any special input types with their own component, e.g. `TextArea`
  - Add state for each field using the React `useState` hook
  - Make each field a controlled component by passing down state & event handlers via props
  - `console.log` the value of each field when the form is submitted

## Extension 1
- Refactor your solution so that instead of having a dedicated state for each field, you have just a single state object for 
  the entire form
