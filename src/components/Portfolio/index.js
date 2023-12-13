import React from 'react';
import styled from 'styled-components';

import Home from '../Home';
import About from '../About';

import dotedBackground from '../../images/doted-background.png';

export default function () {
   const Portfolio = styled.div`
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      flex-direction: column;
      background: url(${dotedBackground});
      background-repeat: repeat;
      padding-right: ${(props) => props.theme.mensure.double};
      padding-left: ${(props) => props.theme.mensure.double};
   `;

   return (
      <Portfolio>
         <Home />
         <About />
      </Portfolio>
   );
}
