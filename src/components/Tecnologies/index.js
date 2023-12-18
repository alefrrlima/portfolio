import React from 'react';

import styled from 'styled-components';

import Text from '../../ui/Text';

import { ReactComponent as TecnologiesTitleSVG } from '../../images/tecnologies-title.svg';

export default function () {
   const Tecnologies = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: ${(props) => props.theme.color.dark};
      padding: ${(props) => props.theme.mensure.double};
      justify-content: center;
      align-items: center;
      gap: ${(props) => props.theme.mensure.double};
      

   `;

   const Container = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 800px;
      gap: ${(props) => props.theme.mensure.single};
      justify-content: center;
      align-items: center;
   `;

   const TecnologiesTitle = styled(TecnologiesTitleSVG)``;

   return (
      <Tecnologies>
         <TecnologiesTitle />
         <Container>
            <Text type="d4">FIGMA</Text>
            <Text type="d4">HTML</Text>
            <Text type="d4">CSS</Text>
            <Text type="d4">SASS</Text>
            <Text type="d4">JAVASCRIPT</Text>
            <Text type="d4">GIT</Text>
            <Text type="d4">NODE JS</Text>
            <Text type="d4">REACT JS</Text>
            <Text type="d4">REACT NATIVE</Text>
            <Text type="d4">STYLED COMPONENTS</Text>
         </Container>
      </Tecnologies>
   );
}
