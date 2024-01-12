import React from 'react';
import styled from 'styled-components';

import Home from '../Home';
import About from '../About';
import Tecnologies from '../Tecnologies';
import Projects from '../Projects';
import Contact from '../Contact';

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
      gap: ${(props) => props.theme.mensure.extra};
   `;

   return (
      <Portfolio>
         <Home />
         <About />
         <Tecnologies />
         <Projects />
         <Contact />
      </Portfolio>
   );
}
