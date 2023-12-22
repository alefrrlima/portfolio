import React from 'react';

import styled from 'styled-components';

import { ReactComponent as CircleSVG } from '../../images/scroll-circle.svg';
import { ReactComponent as ArrowSVG } from '../../images/scroll-arrow.svg';

export default function () {
   const Scroll = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 100px;
      left: 50vw;
      transform: translateX(-50%);

      animation: appear 1s ease-in-out;

      @keyframes appear {
         from {
            transform: translateY(-10px);
            opacity: 0;
         }
         to {
            transform: translateY(0);
            opacity: 100;
         }
      }
   `;

   const Circle = styled(CircleSVG)`
      position: absolute;
   `;
   const Arrow = styled(ArrowSVG)`
      position: absolute;
   `;

   return (
      <Scroll>
         <Circle />
         <Arrow />
      </Scroll>
   );
}
