import React from 'react';
import { useHistory } from 'react-router-dom';
import { animateCSS } from '../funciones';

const ButtonLink = (props) => {
  const { className } = props;
  const { to } = props;
  const { children } = props;
  let { animation } = props;
  if (!animation) {
    animation = 'fadeOut faster';
  }
  const history = useHistory();
  return (
    <button
      type='button'
      className={className}
      onClick={() => {
        animateCSS('main', animation, () => {
          history.push(to);
        });
        document.querySelector('footer') &&
        animateCSS('footer', animation);
      }}
    >
      {children}
    </button>
  );
};

export default ButtonLink;
