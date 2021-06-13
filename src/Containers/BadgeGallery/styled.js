import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: .5rem;
  align-items: flex-start;

`;

export const Title = styled.h1`
  color: #043353;

`;