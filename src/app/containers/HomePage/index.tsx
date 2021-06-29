import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import BookCard from '../../components/bookCard';
import Marginer from '../../components/marginer';
import { NavBar } from '../../components/NavBar';
import  { TopSection } from './topSections';

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export const HomePage =()=>{
    return (
<PageContainer>
        <NavBar />
       <TopSection/>
       <Marginer direction="vertical" margin="4em" />
      <BookCard />
      
    </PageContainer>
    )
}
