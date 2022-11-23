export const bici = [
  {
    id: 0,
    alt: "Ladron",
    img: "menuRobo.png",
    titulo: "Robo",
    texto:
      "Si te roban la bici, tenés disponible una suma asegurada para reponerla.",
  },
  {
    id: 1,
    alt: "Bici",
    img: "menuBicicleta.png",
    titulo: "¿Dónde estás cubierto?",
    texto:
      "A lo largo y ancho del país, durante las 24 hs. Así que solo preocupate por elegir tu recorrido y disfrutarlo.",
    hasUsarSeguro: true,
  },
  {
    id: 2,
    alt: "remove",
    img: "remove.png",
    changeColor: true,
    titulo: "Tené en cuenta lo que NO cubre tu póliza",
    lista: [
      {
        id: 0,
        texto:
          "&#x25CF;&nbsp;&nbsp;Hurto, es decir pérdida o extravío de la bici.",
      },
      {
        id: 1,
        texto:
          "&#x25CF;&nbsp;&nbsp;Robo de los accesorios de la bici (no cubre casco, candado, etc).",
      },
    ],
  },
];
export const pyme = [
  {
    id: 0,
    alt: "fuego Caja",
    img: "fuegoCaja.png",
    titulo: "¿Cómo lo hacemos?",
    texto: "Dándote cobertura ante alguna de estas situaciones:",
    lista: [
      {
        id: 0,
        texto: "Incendio de tu mobiliario y mercadería.",
      },
      {
        id: 1,
        texto: "Robo de tus bienes y mercadería.",
      },
      {
        id: 2,
        texto: "Equipos electrónicos cubiertos por robo, incendio o accidente.",
      },
      {
        id: 3,
        texto: "Daño a cristales verticales.",
      },
      {
        id: 4,
        texto: "Demandas de terceros por daños (Responsabilidad civil)",
      },
    ],
    textFooter:
      "Además, nos hacemos cargo de los gastos ocasionados por un robo, remoción de escombros, actos de vandalismo y daños por granizo.",
    listPosition: "text-left",
  },
  {
    id: 1,
    alt: "PC",
    img: "pc.png",
    titulo: "Un seguro a tu medida",
    texto:
      "Vos sabés mejor que nadie lo que necesitás proteger. Elegí la cobertura que querés sumar:",
    lista: [
      {
        id: 0,
        texto: "Incendio de la construcción del inmueble.",
      },
      {
        id: 1,
        texto: "Daños por agua a la mercadería y mobiliario.",
      },
      {
        id: 2,
        texto: "Cobertura de robo para la recaudación.",
      },
      {
        id: 3,
        texto:
          "Responsabilidad civil para marquesinas, ascensores o alimentos.",
      },
    ],
    listPosition: "text-left",
  },
  {
    id: 2,
    alt: "Vidrio Roto",
    img: "brokenGlass.png",
    titulo: "Más prevenís, menos pagás…",
    texto:
      "Te ofrecemos un descuento preferencial si contás con alguna de estas medidas de seguridad:",
    lista: [
      {
        id: 0,
        texto: "Sistema de alarmas",
      },
      {
        id: 1,
        texto: "Cámaras de seguridad monitoreadas",
      },
      {
        id: 2,
        texto: "Personal de vigilancia",
      },
    ],
    listPosition: "text-left",
  },
];
export const pymeIntegral = [
  {
    id: 0,
    alt: "Fuego Caja",
    img: "fuegoCaja.png",
    titulo: "Incendio",
    texto:
      "Incendio del mobiliario y mercadería. Además cubrimos remoción de escombros y daño por granizo.",
  },
  {
    id: 1,
    alt: "Robo",
    img: "menuRobo.png",
    titulo: "Robo y cristales",
    texto:
      "Robo de tus bienes y mercadería o gastos ocasionados por robo. También cubrimos los cristales verticales.",
  },
  {
    id: 2,
    alt: "PC",
    img: "pc.png",
    titulo: "Equipos electrónicos",
    texto:
      "Cobertura en caso de incendio, robo, accidentes o daños por tensión. <p>&nbsp</p><p> <b style= 'font-weight:bold; color:#000'> Responsabilidad civil</b> </p> Demandas de terceros por daños.",
  },
  {
    id: 3,
    alt: "Indemnizacion",
    img: "Indemnizacion.png",
    titulo: "Asistencias para tu negocio 24 hs",
    texto:
      "Contás con los mejores profesionales para darte una mano por cualquier imprevisto que surja en tu negocio.",
    conoceMas: true,
  },
  // {
  //   id: 4,
  //   alt: "Asistir",
  //   img: "menuAsistir.png",
  //   titulo: "Demandas de terceros",
  //   texto: "Demandas de terceros Responsabilidad Civil por daños.",
  // },
  {
    id: 5,
    textLast: "Sumás las coberturas que necesites:",
    linkOneLine: true,
    rarePadding: true,
    last: [
      {
        id: 0,
        texto: "Incendio de la construcción del inmueble",
      },
      {
        id: 1,
        texto: "Daños por agua a la mercadería y mobiliario.",
      },
      {
        id: 2,
        texto: "Cobertura de robo para la recaudación.",
      },
      {
        id: 3,
        texto: "Responsabilidad civil para marquesinas, ascensores o alimentos",
      },
    ],
  },
];
export const hogar = [
  {
    id: 0,
    alt: "fuego",
    img: "menuFuego.png",
    titulo: "El incendio de tu casa y tus cosas",
    texto:
      "Pérdidas causadas por fuego, rayo o explosión. También cubrimos los daños producidos por terremoto, granizo y fuertes vientos.",
  },
  {
    id: 1,
    alt: "ladron",
    img: "menuRobo.png",
    titulo: "Robo y hurto",
    texto:
      'Si te roban los bienes que aseguraste y los daños en puertas y/o ventanas que puedan ocurrir a consecuencia de este hecho. <p>&nbsp</p><p> <b style= "font-weight:bold; color:#000"> Demandas de terceros</b> </p> Responsabilidad civil por daños.',
  },
  {
    id: 2,
    alt: "billetera",
    img: "menuGastos.png",
    titulo: "Gastos derivados del siniestro y cristales",
    texto:
      "Coberturas que se activan ante un siniestro: gastos de alojamiento, remoción de escombros y más. ¡Tus cristales verticales ya están cubiertos!",
  },
  {
    id: 3,
    alt: "campana",
    img: "menuAsistir.png",
    titulo: "Asistencias",
    texto:
      "¡Dejá tu casa en buenas manos! Ahora contás con una amplia red de profesionales, que te ayudarán cuando más lo necesites simplificando tu día a día.",
    conoceMas: true,
  },
  {
    id: 4,
    textLast: "Agregá lo que no puede faltarte.",
    last: [
      {
        id: 0,
        texto: "Objetos especifícos",
      },
      {
        id: 1,
        texto: "Grupos electrógenos",
      },
      {
        id: 2,
        texto: "Bicicleta",
      },
      {
        id: 3,
        texto: "Mascotas",
      },
      {
        id: 4,
        texto: "Accidentes Personales para Personal Doméstico",
      },
      {
        id: 5,
        texto: "Palos de Golf",
      },
    ],
  },
];
export const preventips = {
  className: "object-cover object-right",
  texto: "Mas prevenís, menos pagás",
  alt: "ancianos",
  img: "hombre.jpg",
  imgDesktop: "hombre.jpg",
};
export const asistencia = [
  {
    id: 0,
    titulo: "RESOLVIENDO TU URGENCIA",
    children: 4,
    textoBottom:
      "* Hasta tres prestaciones de cada uno, con un tope de $1.500 por evento. Podés solicitarlo los 365 días del año.",
  },
  {
    id: 1,
    titulo: "EN CADA DETALLE O DESPERFECTO",
    subtitulo:
      "Siempre hay cosas que se pueden romper o que querés cambiar. Para esas situaciones, contás con 2 servicios anuales, con un tope de $1.200 cada uno y una garantía de 3 meses. Usalos para:",
    children: 4,
    textoBottom:
      "* Hasta tres prestaciones de cada uno, con un tope de $1.500 por evento. Podés solicitarlo los 365 días del año.",
  },
  {
    id: 2,
    titulo: "ANTE EVENTOS EXTREMOS",
    subtitulo:
      "Si tu comercio quedó seriamente dañado y no están garantizadas las condiciones de seguridad en él, contás con:",
    children: 2,
  },
  {
    id: 3,
    titulo: "ASESORÁNDOTE",
    children: 2,
  },
];
