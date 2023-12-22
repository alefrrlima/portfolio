import React from 'react';

import styled from 'styled-components';

import Text from '../../ui/Text';

import { ReactComponent as ContactTitleSVG } from '../../images/contact-title.svg';

export default function () {
   const Contact = styled.div`
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

   const ContactTitle = styled(ContactTitleSVG)``;

   const Link = styled.a`
      cursor: pointer !important;
   `;

   return (
      <Contact>
         <ContactTitle />
         <Container>
            <Link>
               <Text type="link">CURRÍCULO</Text>
            </Link>
            <Link href="mailto:alexandrelima.beta@gmail.com">
               <Text type="link">EMAIL</Text>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/">
               <Text type="link">INSTAGRAM</Text>
            </Link>
            <Link target="_blank" href="https://github.com/alefrrlima">
               <Text type="link">GITHUB</Text>
            </Link>
            <Link
               target="_blank"
               href="https://www.linkedin.com/in/alefrrlima/"
            >
               <Text type="link">LINKEDIN</Text>
            </Link>
         </Container>
      </Contact>
   );
}
