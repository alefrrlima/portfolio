import React from 'react';
import styled from 'styled-components';

import Text from '../../ui/Text';

import { ReactComponent as ProjectsTitleSVG } from '../../images/projects-title.svg';
import IDGenScreen from '../../images/idgen-screen.png';
import BudgetBuddyScreen from '../../images/budgetbuddy-screen.png';

export default function () {
   const Projects = styled.div`
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.mensure.triple};
      width: 100%;
      max-width: 1440px;
      padding-right: ${(props) => props.theme.mensure.double};
      padding-left: ${(props) => props.theme.mensure.double};
   `;

   const ProjectsTitle = styled(ProjectsTitleSVG)``;

   const Content = styled.div`
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.mensure.extra};
      width: 100%;
      max-width: 500px;
   `;

   const Project = styled.div`
      display: flex;
      flex-direction: row;
      gap: ${(props) => props.theme.mensure.double};
   `;

   const Main = styled.div`
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.mensure.single};
   `;

   const Complement = styled.div`
      display: flex;
      flex-direction: row;
      gap: ${(props) => props.theme.mensure.single};
      flex-wrap: wrap;
   `;

   const Image = styled.img`
      max-width: 833px;
      flex: 1;
      min-width: 300px;
   `;

   return (
      <Projects>
         <ProjectsTitle />
         <Project>
            <Image src={BudgetBuddyScreen} />
            <Content>
               <Main>
                  <Text type="h1">BudgetBuddy</Text>
                  <Text type="p">
                     Meu quinto projeto. Um gerenciador de orçamentos com
                     sistema de cadastro e login, com localStorage.
                  </Text>
               </Main>
               <Complement>
                  <Text type="d5">HTML</Text>
                  <Text type="d5">CSS</Text>
                  <Text type="d5">JAVASCRIPT </Text>
                  <Text type="d5">REACT JS</Text>
               </Complement>
            </Content>
         </Project>

         <Project>
            <Image src={IDGenScreen} />
            <Content>
               <Main>
                  <Text type="h1">ID Gen</Text>
                  <Text type="p">
                     Meu terceiro projeto. Um gerador de carteirinhas
                     personalizadas.
                  </Text>
               </Main>
               <Complement>
                  <Text type="d5">HTML</Text>
                  <Text type="d5">CSS</Text>
                  <Text type="d5">JAVASCRIPT</Text>
               </Complement>
            </Content>
         </Project>
      </Projects>
   );
}
