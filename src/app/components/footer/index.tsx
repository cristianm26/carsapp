import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../logo";


const FooterContainer = styled.div`
  //min-height: 24em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
  `};
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `};
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `};
  & > a {
    ${tw`
      text-sm
    text-white
      transition-all
      hover:text-gray-200
    `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;


const Footer = () => {
    return (
        <FooterContainer>
          <InnerContainer>
                <AboutContainer>
                    <Logo color="white"/>
                    <AboutText>
                        Yourcar es una empresa de alquiler y venta de automóviles ubicada en muchos
                        países de todo el mundo que tienen automóviles de alta calidad y los mejores
                        Servicio.
                    </AboutText>
                </AboutContainer>
                <SectionContainer>
                  <HeaderTitle>Nuestros Enlaces</HeaderTitle>
                  <LinksList>
                    <ListItem><a href="#">Inicio</a></ListItem>
                    <ListItem><a href="#">Acerca de Nosotros</a></ListItem>
                    <ListItem><a href="#">Servicios</a></ListItem>
                    <ListItem><a href="#">Modelos</a></ListItem>
                    <ListItem><a href="#">Blog</a></ListItem>
                  </LinksList>
                </SectionContainer>
                <SectionContainer>
                  <HeaderTitle>Otros Enlaces</HeaderTitle>
                  <LinksList>
                    <ListItem><a href="#">FAQ</a></ListItem>
                    <ListItem><a href="#">Contactanos</a></ListItem>
                    <ListItem><a href="#">Soporte</a></ListItem>
                    <ListItem><a href="#">Politicas de Privacidad</a></ListItem>
                    <ListItem><a href="#">Terminos &amp; Condiciones</a></ListItem>
                  </LinksList>
                </SectionContainer>
                <SectionContainer>
                  <HeaderTitle>Llamanos Ahora</HeaderTitle>
                  <HorizontalContainer>
                    <RedIcon>
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </RedIcon>
                    <SmallText>
                      593 084255721
                    </SmallText>
                  </HorizontalContainer>
                </SectionContainer>
                <SectionContainer>
                  <HeaderTitle> Correo</HeaderTitle>
                  <HorizontalContainer>
                    <RedIcon>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </RedIcon>
                    <SmallText>
                      info@gmail.com
                    </SmallText>
                  </HorizontalContainer>
                </SectionContainer>
          </InnerContainer>
          <BottomContainer>
            <CopyrightText>Copyright &copy: {new Date().getFullYear()} YouCar. Todos los Derechos Reservados</CopyrightText>
          </BottomContainer>
        </FooterContainer>
    )
}

export default Footer
