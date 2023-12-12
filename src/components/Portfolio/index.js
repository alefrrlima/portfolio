import React from 'react';
import styled from 'styled-components';

import Text from '../../ui/Text';
import Home from '../Home';

import dotedBackground from '../../images/doted-background.png';

export default function () {
   const Portfolio = styled.div`
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      background: url(${dotedBackground});
      background-repeat: repeat;
      padding-right: ${(props) => props.theme.mensure.single};
      padding-left: ${(props) => props.theme.mensure.single};
   `;

   return (
      <Portfolio>
         <Home />
      </Portfolio>
   );
}
