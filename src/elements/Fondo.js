import React from "react";
import styled from "styled-components";

// import { ReactComponent as Img } from "./../imagenes/9WYxT.png";

const Fondo = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#0099ff"
        fillOpacity="1"
        d="M0,0L26.7,37.3C53.3,75,107,149,160,186.7C213.3,224,267,224,320,186.7C373.3,149,427,75,480,85.3C533.3,96,587,192,640,213.3C693.3,235,747,181,800,144C853.3,107,907,85,960,96C1013.3,107,1067,149,1120,170.7C1173.3,192,1227,192,1280,186.7C1333.3,181,1387,171,1413,165.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
      ></path>
    </Svg>
  );
};

export default Fondo;

const Svg = styled.svg`
  height: 50vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 0;
  path {
    fill: rgba(135, 182, 194, 0.15);
  }
`;

// const PuntosArriba = styled(Puntos)`
//   position: fixed;
//   z-index: 1;
//   top: 2.5rem; /* 40px */
//   left: 2.5rem; /* 40px */
// `;

// const PuntosAbajo = styled(Puntos)`
//   position: fixed;
//   z-index: 1;
//   bottom: 2.5rem; /* 40px */
//   right: 2.5rem; /* 40px */
// `;
