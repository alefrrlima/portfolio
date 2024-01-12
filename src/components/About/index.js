import React from 'react';
import styled from 'styled-components';

import Text from '../../ui/Text';

import { ReactComponent as AboutTitleSVG } from '../../images/about-title.svg';
import { ReactComponent as LargeCircleSVG } from '../../images/large-circle.svg';
import { ReactComponent as MediumCircleSVG } from '../../images/medium-circle.svg';
import { ReactComponent as SmallCircleSVG } from '../../images/small-circle.svg';
import ProfilePicturePNG from '../../images/profile-picture.png';

export default function () {
   const About = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      max-width: 1440px;
      margin-top: ${(props) => props.theme.mensure.double};
      padding-right: ${(props) => props.theme.mensure.double};
      padding-left: ${(props) => props.theme.mensure.double};

      @media (max-width: ${(props) => props.theme.screen.m}) {
         padding-right: ${(props) => props.theme.mensure.triple};
         padding-left: ${(props) => props.theme.mensure.triple};
         flex-direction: column;
         gap: ${(props) => props.theme.mensure.extra};
         margin-top: unset;
      }

      @media (max-width: ${(props) => props.theme.screen.s}) {
         padding-right: ${(props) => props.theme.mensure.double};
         padding-left: ${(props) => props.theme.mensure.double};
      }

      @media (max-width: ${(props) => props.theme.screen.xs}) {
         padding-right: ${(props) => props.theme.mensure.single};
         padding-left: ${(props) => props.theme.mensure.single};
      }
   `;

   const TextContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.mensure.triple};
      width: 50vw;
      max-width: 700px;

      @media (max-width: ${(props) => props.theme.screen.l}) {
         gap: ${(props) => props.theme.mensure.double};
      }

      @media (max-width: ${(props) => props.theme.screen.m}) {
         width: 100%;
      }
   `;

   const AboutTitle = styled(AboutTitleSVG)`
      @media (max-width: ${(props) => props.theme.screen.l}) {
         width: 200px;
         height: 65px;
      }
   `;

   const ComplementContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.mensure.double};

      @media (max-width: ${(props) => props.theme.screen.l}) {
         gap: ${(props) => props.theme.mensure.single};
      }
   `;

   const ImageContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      max-width: 500px;
      max-height: 500px;
      width: 35vw;
      height: 35vw;
      align-self: center;

      @media (max-width: ${(props) => props.theme.screen.m}) {
         width: 50vw;
         height: 50vw;
      }
   `;

   const LargeCircle = styled(LargeCircleSVG)`
      z-index: 1;
      width: 100%;
      height: 100%;
   `;

   const MediumCircle = styled(MediumCircleSVG)`
      position: absolute;
      left: 0;
      top: 0;
      transform: translateY(-32px) translateX(-16px);
      z-index: 2;
      width: 50%;
      height: 50%;
   `;

   const SmallCircle = styled(SmallCircleSVG)`
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 4;
      width: 28%;
      height: 28%;
   `;

   const ProfilePicture = styled.img`
      position: absolute;
      z-index: 3;
      width: 100%;
      height: 100%;
   `;

   return (
      <About>
         <TextContainer>
            <AboutTitle />
            <ComplementContainer>
               <Text>
                  Me chamo Alexandre Ferreira Lima, tenho 25 anos e moro em
                  Florianópolis - SC.
               </Text>
               <Text>
                  Venho de Campo Mourão - PR, onde me formei em Administração
                  pela Universidade Estadual do Paraná.
               </Text>
               <Text>
                  Sempre estive envolvido com tecnologia, hoje trabalho como
                  Desenvolvedor Front-end.
               </Text>
            </ComplementContainer>
         </TextContainer>
         <ImageContainer>
            <LargeCircle />
            <ProfilePicture src={ProfilePicturePNG} />
            <MediumCircle />
            <SmallCircle />
         </ImageContainer>
      </About>
   );
}
