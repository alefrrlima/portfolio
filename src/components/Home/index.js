import React from 'react';
import styled from 'styled-components';

import Text from '../../ui/Text';

import { ReactComponent as CircleSVG } from '../../images/portfolio-circle.svg';

export default function () {
   const Home = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: right;
      width: 100%;
      height: 100vh;
      padding-top: ${(props) => props.theme.mensure.triple};
      padding-bottom: ${(props) => props.theme.mensure.triple};
   `;

   const Portfolio = styled(CircleSVG)`
      height: 95vh;
      width: 95vh;
      position: absolute;
      left: -43vh;
      animation: in 15s linear 0s infinite;

      /* @keyframes in {
         from {
            transform: rotate(0deg);
         }
         to {
            transform: rotate(360deg);
         }
      } */
   `;

   const Container = styled.div`
      display: flex;
      flex-direction: column;
      height: 100%;
   `;

   const Name = styled.div`
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: baseline;
      gap: ${(props) => props.theme.mensure.double};
      align-self: flex-start;
      height: 50%;
   `;

   const Complement = styled.div`
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.mensure.half};
      align-items: end;
      justify-content: end;
      align-self: flex-end;
      height: 50%;
   `;

   return (
      <Home>
         <Portfolio />
         <Container>
            <Name>
               <Text type="d1">Alexandre</Text>
               <Text type="d1">Ferreira</Text>
               <Text type="d1">Lima</Text>
            </Name>
            <Complement>
               <Text type="d3">Dev</Text>
               <Text type="d3">Front-end</Text>
            </Complement>
         </Container>
      </Home>
   );
}
