import React from "react";
import store from './store';
import setTechnology from './actions';

const ButtonGroup = (props) => {
  const { technologies } = props;

  const dispatchBtnAction = (e) => {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
  }

  return (
    <div>
      {technologies.map((tech, i) => (
        <button
          data-tech={tech}
          key={`btn-${i}`}
          className="hello-btn"
          onClick={dispatchBtnAction}
          >
          {tech}
        </button>
      ))}
    </div>
  )
};
export default ButtonGroup;