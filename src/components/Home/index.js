import React from 'react';
import styled from 'styled-components';

import Text from '../../ui/Text';

import { ReactComponent as CircleSVG } from '../../images/portfolio-circle.svg';

export default function () {
   const Home = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 1440px;
      height: 100vh;
      gap: ${(props) => props.theme.mensure.triple};
   `;

   const PortfolioCircle = styled(CircleSVG)`
      transform: translateY(-11px);
   `;

   const TextContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.mensure.single};
      min-width: 602px;
      width: 55vw;
   `;

   const ComplementContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.mensure.half};
   `;

   const DarkSquare = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: right;
      align-items: end;
      background-color: ${(props) => props.theme.color.dark};
      padding-top: ${(props) => props.theme.mensure.single};
      padding-right: ${(props) => props.theme.mensure.double};
      padding-bottom: ${(props) => props.theme.mensure.single};
      padding-left: ${(props) => props.theme.mensure.double};
      gap: ${(props) => props.theme.mensure.double};

      :first-child {
         margin: 0 !important;
      }

      :last-child {
         margin: 0 !important;
      }
   `;

   return (
      <Home>
         <PortfolioCircle />
         <TextContainer>
            <Text type="d1" align='end'>Alexandre</Text>
            <DarkSquare>
               <Text type="d2">Ferreira</Text>
               <Text type="d2">Lima</Text>
            </DarkSquare>
            <ComplementContainer>
               <Text type="d3">Desenvolvedor</Text>
               <Text type="d3">Front-end</Text>
            </ComplementContainer>
         </TextContainer>
      </Home>
   );
}
