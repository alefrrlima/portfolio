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
   `;

   const TextContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.mensure.triple};
   `;

   const AboutTitle = styled(AboutTitleSVG)``;

   const ComplementContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.mensure.double};
      width: 40vw;
   `;

   const ImageContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      max-width: 562px;
      max-height: 562px;
      width: 40vw;
      height: 40vw;
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
