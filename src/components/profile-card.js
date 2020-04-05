import React from "react";
import styled from "styled-components";

export default function Prof({
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
    <div>
      <Card>
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
        
        const Img = styled.img`
           ...
        `;
      </Card>
      <Ceos>신촌 연합 IT 창업 동아리 CEOS</Ceos>
    </div>
  )
}

const ClubName = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.6rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Img = styled.div`
  width: 40%;
  height: 40%;
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

const PN = styled.div`
  font-size: 1.4rem;
  color: rgb(0, 0, 153);
`;

const Mail = styled.div`
  font-size: 1.4rem;
  color: rgb(0, 0, 153);
`;

const Git = styled.div`
  font-size: 1.4rem;
`;
