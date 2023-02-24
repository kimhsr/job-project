import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 71.25rem;
  margin: auto;
  margin-top: 24px;
  height: 1000px;
  display: flex;
  gap: 30px;
`;

const LeftSection = styled.div`
  width: 70%;
`;

const LeftCount = styled.div`
  margin-bottom: 10px;
`;

const LeftRecruit = styled.div`
  display: flex;
  border: 1px solid #cdccc6;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 20px;
`;

const RecruitImg = styled.div``;

const RecruitContent = styled.div``;

const RightSection = styled.div`
  width: 30%;
`;

const RightBox = styled.div`
  margin-top: 30px;
  border: 1px solid #cdccc6;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 300px;
`;

function PostBottom() {
  return (
    <Container>
      <LeftSection>
        <LeftCount>
          총 <b>x개</b>의 공고
        </LeftCount>
        <LeftRecruit>
          <RecruitImg style={{ flexGrow: '1' }}>이미지</RecruitImg>
          <RecruitContent style={{ flexGrow: '8' }}>
            <div>
              <b>[잡다] 개발자 전 부문 인재 영입</b>
            </div>
            <div>지역 경력 기술스택</div>
          </RecruitContent>
          <div style={{ flexGrow: '1' }}>회사이름</div>
        </LeftRecruit>
        <LeftRecruit>
          <RecruitImg style={{ flexGrow: '1' }}>이미지</RecruitImg>
          <RecruitContent style={{ flexGrow: '8' }}>
            <div>
              <b>[잡다] 개발자 전 부문 인재 영입</b>
            </div>
            <div>지역 경력 기술스택</div>
          </RecruitContent>
          <div style={{ flexGrow: '1' }}>회사이름</div>
        </LeftRecruit>
        <LeftRecruit>
          <RecruitImg style={{ flexGrow: '1' }}>이미지</RecruitImg>
          <RecruitContent style={{ flexGrow: '8' }}>
            <div>
              <b>[잡다] 개발자 전 부문 인재 영입</b>
            </div>
            <div>지역 경력 기술스택</div>
          </RecruitContent>
          <div style={{ flexGrow: '1' }}>회사이름</div>
        </LeftRecruit>
        <LeftRecruit>
          <RecruitImg style={{ flexGrow: '1' }}>이미지</RecruitImg>
          <RecruitContent style={{ flexGrow: '8' }}>
            <div>
              <b>[잡다] 개발자 전 부문 인재 영입</b>
            </div>
            <div>지역 경력 기술스택</div>
          </RecruitContent>
          <div style={{ flexGrow: '1' }}>회사이름</div>
        </LeftRecruit>
        <LeftRecruit>
          <RecruitImg style={{ flexGrow: '1' }}>이미지</RecruitImg>
          <RecruitContent style={{ flexGrow: '8' }}>
            <div>
              <b>[잡다] 개발자 전 부문 인재 영입</b>
            </div>
            <div>지역 경력 기술스택</div>
          </RecruitContent>
          <div style={{ flexGrow: '1' }}>회사이름</div>
        </LeftRecruit>
      </LeftSection>
      <RightSection>
        <RightBox>고정 박스</RightBox>
      </RightSection>
    </Container>
  );
}

export default PostBottom;
