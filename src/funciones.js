export const resize = (parent, child, px = 0) => {
  let tamaño = document.querySelector(parent).clientHeight.toString();
  tamaño = parseInt(tamaño, 10) + px;
  tamaño += 'px';
  document.querySelector(child).style.height = tamaño;
};

export const collapseMenu = () => {
  /*document.querySelector(".button__menu").classList.toggle("active");
    var content = document.querySelector(".menu__desplegado")
    if (content.style.maxHeight){
        content.style.maxHeight = null
        orangeMenu()
    } else {
        content.style.maxHeight = content.scrollHeight + "px"
        orangeMenu()
    }*/
  document.querySelector('.button__menu').classList.toggle('active');
  const content = document.querySelector('.menu__desplegado');
  if (content.style.maxWidth) {
    content.style.borderLeftWidth = '0rem';
    content.style.maxWidth = null;
    document.body.classList.add('overflow-auto');
    if (document.body.classList.contains('overflow-hidden')) {
      document.body.classList.remove('overflow-hidden');
    }
    //orangeMenu()
  } else {
    document.body.classList.add('overflow-hidden');
    if (document.body.classList.contains('overflow-auto')) {
      document.body.classList.remove('overflow-auto');
    }
    content.style.maxWidth = '175px';
    content.style.borderLeftWidth = '.10rem';
    //orangeMenu()
  }
};

export const orangeMenu = () => {
  document.querySelector('.menu__mobile').classList.toggle('orangeHeaderMenu');
};

export const collapseMenuDesktop = () => {
  document.querySelector('.button__menu').classList.toggle('active');
  const content = document.querySelector('.menu__desplegado-desktop');
  if (content.style.maxWidth) {
    content.style.maxWidth = null;
  } else {
    content.style.maxWidth = `${content.scrollWidth + 100}px`;
  }
};

export const validOrientationAndSize = (type) => {
  if (window.innerWidth > window.innerHeight || window.orientation === 90 || window.orientation === -90) {
    return 'Landscape';
  }
  return 'Primary';
};

export const resizeLandscape = () => {
  const tamHomeWidth = `${parseInt(window.width, 10)}px`;
  const tamHomeHeight = `${parseInt((window.height / 3) * 2, 10)}px`;
  document.querySelector('#img_home').style.width = tamHomeWidth;
  document.querySelector('#img_home').style.height = tamHomeHeight;
};

export const resizePrimary = () => {
  const tamHome = `${parseInt((window.height / 3) * 2, 10)}px`;
  document.querySelector('#img_home').style.height = tamHome;
};

export const animateCSS = (element, animationName, callback) => {
  const node = document.querySelector(element);
  const animationNames = animationName.split(' ');
  node.classList.add('animated');
  for (let i = 0; i < animationNames.length; i++) {
    node.classList.add(animationNames[i]);
  }
  const handleAnimationEnd = () => {
    node.classList.remove('animated');
    for (let i = 0; i < animationNames.length; i++) {
      node.classList.remove(animationNames[i]);
    }
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  };

  node.addEventListener('animationend', handleAnimationEnd);
};

export const resetClass = (elementName, className) => {
  const arrayClass = className.split(' ');

  if (typeof className === 'string' && typeof elementName === 'string') {
    const element = document.querySelector(elementName);
    if (element != null) {
      element.removeAttribute('class');
      if (elementName.includes('.')) {
        // eslint-disable-next-line no-param-reassign
        elementName = elementName.replace('.', '');
        element.classList.add(elementName);
      }
      arrayClass.forEach((onlyClass) => {
        element.classList.add(onlyClass);
      });
    } else {
      console.error('El elemento no existe');
    }
  } else {
    console.error('Uno de los parametros no es string');
  }
};

export const back = (ir) => {
  switch (ir) {
    case 'noCubre':
      Controlador.header(device);
      Controlador.noCubre();
      break;
    case 'cubre':
      Controlador.header(device);
      Controlador.cubreParent();
      break;
    default:
      break;
  }
};

export const changeDevice = () => {
  const TAM_DESKTOP = 1024;
  const tamaño = window.innerWidth ;
  return tamaño < TAM_DESKTOP ? 'mobile' : 'desktop';
};

export const collapse = (id, device) => {
  const arrows = document.querySelectorAll('.contenido');
  for (let i = 0; i < arrows.length; i++) {
    const element = document.querySelectorAll('.arrowAnticipate')[i];
    const content = document.querySelectorAll('.contenido')[id];
    if (id === i) {
      element.classList.toggle('active');
      element.classList.remove('spin');
      if (content.style.maxHeight) {
        if (device === 'mobile') {
          element.style.transform = 'rotate(90deg)';
        } else {
          element.style.transform = 'rotate(-90deg)';
        }
        element.classList.add('spinClose');
        element.addEventListener('animationend', () => {
          element.classList.remove('spinClose');
        });
        content.style.maxHeight = null;
      } else {
        element.classList.add('spin');
        element.style.transform = 'rotate(0deg)';
        element.onanimationend = () => {
          element.classList.remove('spin');
        };
        content.style.maxHeight = `${content.scrollHeight}px`;
      }

    } else {
      if (element.classList.contains('active')) {
        element.classList.toggle('active');
        element.classList.remove('spin');
        arrows[i].style.maxHeight = null;
        element.classList.add('spinClose');
        if (device === 'mobile') {
          element.style.transform = 'rotate(90deg)';
        } else {
          element.style.transform = 'rotate(-90deg)';
        }
        element.addEventListener('animationend', () => {
          element.classList.remove('spinClose');
        });
      }
    }
  }
};

export const viewportToPixels = (value) => {
  const parts = value.match(/([0-9.]+)(vh|vw)/);
  const q = Number(parts[1]);
  const side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]];
  return side * (q / 100);
};
