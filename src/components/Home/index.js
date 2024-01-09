import React from 'react';
import styled from 'styled-components';

import Scroll from '../../ui/Scroll';

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
      padding-right: ${(props) => props.theme.mensure.double};
      padding-left: ${(props) => props.theme.mensure.double};

      @media (max-width: ${(props) => props.theme.screen.m}) {
         padding-top: ${(props) => props.theme.mensure.double};
         padding-bottom: ${(props) => props.theme.mensure.double};
         padding-right: ${(props) => props.theme.mensure.single};
         padding-left: ${(props) => props.theme.mensure.single};
      }
   `;

   const PortfolioCircle = styled(CircleSVG)`
      height: 95vh;
      width: 95vh;
      position: absolute;
      left: 0;
      transform: translateX(-45%);
      max-width: 80vh;
      max-height: 80vh;
      animation: spin 10s infinite linear, appear 1s;

      @keyframes appear {
         0% {
            opacity: 0;
         }

         100% {
            opacity: 100;
         }
      }

      @keyframes spin {
         0% {
            transform: translateX(-45%);
         }

         100% {
            transform: translateX(-45%) rotate(360deg);
         }
      }

      @media (max-width: ${(props) => props.theme.screen.l}) {
         height: 95vw;
         width: 95vw;
      }

      @media (max-width: ${(props) => props.theme.screen.s}) {
         height: 140vw;
         width: 140vw;
      }

      @media (max-width: ${(props) => props.theme.screen.xs}) {
         max-width: 60vh;
         max-height: 60vh;
         transform: translateX(-45%) translatey(8%);

         @keyframes spin {
            0% {
               transform: translateX(-45%);
            }

            100% {
               transform: translateX(-45%) translateY(8%) rotate(360deg);
            }
         }
      }
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

      @media (max-width: ${(props) => props.theme.screen.l}) {
         gap: ${(props) => props.theme.mensure.single};
      }

      @media (max-width: ${(props) => props.theme.screen.s}) {
         gap: ${(props) => props.theme.mensure.half};
      }
   `;

   const Complement = styled.div`
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.mensure.half};
      align-items: end;
      justify-content: end;
      align-self: flex-end;
      height: 50%;

      @media (max-width: ${(props) => props.theme.screen.s}) {
         gap: ${(props) => props.theme.mensure.half};
      }
   `;

   return (
      <Home>
         <PortfolioCircle />
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
         {/* <Scroll /> */}
      </Home>
   );
}
