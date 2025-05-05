import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Banner = styled.div`
  background-color: #8566FF;
  padding: 32px 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 48px;
`;

export const BannerContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
  color: white;
  z-index: 1;
  position: relative;
`;

export const BannerTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

export const BannerSubtitle = styled.p`
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #212529;
  margin: 48px 0 80px;
`;

export const MetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Meta = styled.div`
  font-size: 1rem;
  color: #3182f6;
  font-weight: 300;
  & span {
    font-weight: 500;
  }
`;

export const ApplyButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ApplyButton = styled.button`
  all: unset;
  background: #4078F2;
  color: #fff;
  padding: 20px 120px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  
  &:hover {
    background: #3366E6;
  }
`;

export const Section = styled.div`
  margin-bottom: 48px;
`;

export const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin: 0 0 20px 0;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  
  & li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 16px;
    line-height: 1.6;
    color: #343a40;
    
    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #adb5bd;
    }
  }
`;