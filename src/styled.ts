import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: auto;
`;
export const StyledH1 = styled.h1`
  font-size: 5rem;
  line-height: 1.1;
  @media screen and (max-width: 960px) {
    font-size: 3rem;
  }
`;
export const StyledH2 = styled.h2`
  font-size: 3rem;
  margin: 4rem 0 2rem 0;
  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }
`;
export const StyledH3 = styled.h3`
  font-size: 2rem;
  margin: 0 0 1rem 0;
`;
export const StyledH4 = styled.h4`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;
export const StyledH5 = styled.h5`
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  color: #333333;
`;
export const StyledSection = styled.section`
  padding: 0 2rem;
`;
export const GithubImg = styled.img`
  height: 2rem;
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0 solid;
  border-radius: 50%;
  margin-left: 15px;
  height: 2.5rem;
  width: 2.5rem;
  &:hover {
    cursor: pointer;
    background: #bfc4cb;
    transition: 0.3s all;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  & > li {
    position: relative;
    padding: 0.2rem 0 0.2rem 1rem;
  }
  & > li:before {
    position: absolute;
    left: 0;
    display: inline-block;
    content: '•';
    color: #3a7bd5;
  }
`;
export const StyledLi = styled.li`
  position: relative;
  padding: 0.2rem 0 0.2rem 1rem;
  &:before {
    position: absolute;
    left: 0;
    display: inline-block;
    content: '•';
    color: #3a7bd5;
  }
`;
export const PeriodMark = styled.span`
  color: #3a7bd5;
`;
export const BigParagraph = styled.p`
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 500;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

export const Row = styled.div`
  display: flex;
  padding: 3rem 0;
  border-bottom: 1px solid #eeeeee;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const RowLeft = styled.div`
  flex-basis: 18rem;
  padding-right: 1rem;
  flex-shrink: 0;
  @media screen and (max-width: 960px) {
    flex-basis: 100%;
    padding-right: 0;
    padding-bottom: 1rem;
  }
`;
export const RowRight = styled.div`
  flex-grow: 1;
`;
export const StyledA = styled.a`
  color: #3a7bd5;
  transition: color 0.3s ease;
  font-weight: bold;
  margin-right: 0.2rem;
  margin-bottom: 2rem;
  text-decoration: underline;
  &:visited {
    color: #3a7bd5;
  }
  &:hover {
    color: #00d2ff;
    cursor: pointer;
  }
  &:last-child {
    margin-right: 0;
  }
`;
export const StyledP = styled.p`
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  line-height: 1.4;
`;
export const ProjectWrapper = styled.div`
  padding: 1.5rem 0;
  &:first-child {
    padding-top: 0;
  }
`;
export const Role = styled.span`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 16px;
`;
export const Other = styled.div`
  padding: 3rem 0;
  border-bottom: 1px solid #eeeeee;
`;
export const TimeWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;
export const StyledHr = styled.hr`
  border: none;
  border-bottom: 1px solid #eeeeee;
  overflow: visible;
`;
export const Project = styled.div`
  padding: 1.5rem 0;
  &:first-child {
    padding-top: 0;
  }
`;
export const Time = styled.time`
  display: block;
  margin-bottom: 1.3rem;
`;
