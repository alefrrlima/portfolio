import React from 'react';
import styled from 'styled-components';

import Text from '../../ui/Text';

import dotedBackground from '../../images/doted-background.png';

export default function () {
   const Portfolio = styled.div`
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      background: url(${dotedBackground});
      background-repeat: repeat;
      padding: 2rem;
   `;

   return (
      <Portfolio>
         <Text type="D1">Opa</Text>
         <Text type="D2">Opa</Text>
         <Text type="D3">Opa</Text>
         <Text type="D4">Opa</Text>
         <Text type="D5">Opa</Text>
         <Text type="H1">Opa</Text>
         <Text type="P">Opa</Text>
      </Portfolio>
   );
}
