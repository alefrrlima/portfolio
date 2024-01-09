import React from 'react';
import styled from 'styled-components';

export default function Text({ type, children, align }) {
   const D1 = styled.span`
      font-size: ${(props) => props.theme.size.extra};
      font-weight: ${(props) => props.theme.weight.small};
      line-height: ${(props) => props.theme.height.fit};
      color: ${(props) => props.theme.color.dark};
      text-align: ${align};
      cursor: default;

      @media (max-width: ${(props) => props.theme.screen.l}) {
         font-size: ${(props) => props.theme.size.large};
      }

      @media (max-width: ${(props) => props.theme.screen.s}) {
         font-size: ${(props) => props.theme.size.medium};
      }
   `;
   const D2 = styled.span`
      font-size: ${(props) => props.theme.size.large};
      font-weight: ${(props) => props.theme.weight.small};
      line-height: ${(props) => props.theme.height.fit};
      color: ${(props) => props.theme.color.light};
      text-align: ${align};
      cursor: default;
   `;
   const D3 = styled.span`
      font-size: ${(props) => props.theme.size.medium};
      font-weight: ${(props) => props.theme.weight.small};
      line-height: ${(props) => props.theme.height.fit};
      color: ${(props) => props.theme.color.primary};
      text-align: ${align};
      cursor: default;

      @media (max-width: ${(props) => props.theme.screen.s}) {
         font-size: ${(props) => props.theme.size.regular};
         font-weight: ${(props) => props.theme.weight.regular};
      }
   `;
   const D4 = styled.span`
      font-size: ${(props) => props.theme.size.regular};
      font-weight: ${(props) => props.theme.weight.small};
      line-height: ${(props) => props.theme.height.regular};
      color: ${(props) => props.theme.color.light};
      padding: ${(props) => props.theme.mensure.half};
      border: 1px solid ${(props) => props.theme.color.light};
      width: fit-content;
      text-transform: uppercase;
      text-align: ${align};
      cursor: default;
   `;
   const D5 = styled.span`
      font-size: ${(props) => props.theme.size.regular};
      font-weight: ${(props) => props.theme.weight.small};
      line-height: ${(props) => props.theme.height.regular};
      color: ${(props) => props.theme.color.primary};
      text-transform: uppercase;
      text-align: ${align};
      cursor: default;
   `;
   const Link = styled.span`
      font-size: ${(props) => props.theme.size.regular};
      font-weight: ${(props) => props.theme.weight.small};
      line-height: ${(props) => props.theme.height.regular};
      color: ${(props) => props.theme.color.light};
      padding: ${(props) => props.theme.mensure.half};
      border: 1px solid ${(props) => props.theme.color.light};
      width: fit-content;
      text-transform: uppercase;
      text-align: ${align};
      transition: 0.1s;
      cursor: pointer;

      &:hover {
         color: ${(props) => props.theme.color.dark};
         background-color: ${(props) => props.theme.color.light};
      }
   `;
   const H1 = styled.span`
      font-size: ${(props) => props.theme.size.medium};
      font-weight: ${(props) => props.theme.weight.small};
      line-height: ${(props) => props.theme.height.medium};
      color: ${(props) => props.theme.color.dark};
      text-align: ${align};
      cursor: default;
   `;
   const P = styled.span`
      font-size: ${(props) => props.theme.size.regular};
      font-weight: ${(props) => props.theme.weight.regular};
      line-height: ${(props) => props.theme.height.regular};
      color: ${(props) => props.theme.color.dark};
      text-align: ${align};
      cursor: default;

      @media (max-width: ${(props) => props.theme.screen.l}) {
         font-size: ${(props) => props.theme.size.small};
      }
   `;

   switch (type) {
      case 'd1':
         return <D1>{children}</D1>;
         break;
      case 'd2':
         return <D2>{children}</D2>;
         break;
      case 'd3':
         return <D3>{children}</D3>;
         break;
      case 'd4':
         return <D4>{children}</D4>;
         break;
      case 'd5':
         return <D5>{children}</D5>;
         break;
      case 'link':
         return <Link>{children}</Link>;
         break;
      case 'h1':
         return <H1>{children}</H1>;
         break;
      default:
         return <P>{children}</P>;
         break;
   }
}
