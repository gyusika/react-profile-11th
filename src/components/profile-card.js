import React from "react";
import styled from "styled-components";

export default function ProfileCard({
   id,
   name,
   age,
   role,
   univ,
   major,
   phoneNum,
   email,
   githubLink,
   imageUrl
}) {
  return (
    <Wrapper>
      <InfoWrapper>
        <Info>
          <Up>
            <Name>{name}({age})</Name>
            <Role>{role}</Role>
            <Univ>{univ}대학교 {major}과</Univ>
          </Up>
          <Bottom>
            <PhoneNum>{phoneNum}</PhoneNum>
            <Mail>{email}</Mail>
            <Git href={githubLink}>{githubLink}</Git>
          </Bottom>
        </Info>
        <Img src={imageUrl}/>
      </InfoWrapper>
      <ClubName>신촌 연합 IT 창업 동아리 CEOS</ClubName>
    </Wrapper>
  )
}

const ClubName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  margin: 0rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Img = styled.img`
  width: 20rem;
  height: 20rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 50%;
`;

const Up = styled.div`
  box-sizing: border-box; 
`;

const Bottom = styled.div`
  box-sizing: border-box; 
`;

const Name = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`; 

const Role = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const Univ = styled.div`
  font-size: 1.4rem;
`;

const PhoneNum = styled.div`
  font-size: 1.4rem;
  color: rgb(0, 0, 153);
`;

const Mail = styled.div`
  font-size: 1.4rem;
  color: rgb(0, 0, 153);
`;

const Git = styled.a`
  font-size: 1.4rem;
`;

const Wrapper = styled.div`
  width: 45%;
  background-color: rgb(255, 255, 255);
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-width: 1px solid rgb(204, 204, 204);
  border-radius: 1.5rem;
`;