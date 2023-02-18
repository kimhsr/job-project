import React from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { AiOutlineDown } from 'react-icons/ai';

const Container = styled.div`
  margin-top: 25px;
  width: 100%;
`;

const TopMain = styled.div`
  width: 100%;
  max-width: 71.25rem;
  margin: 0px auto;
  padding-bottom: 24px 0px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #cdccc6;
  border-radius: 5px;
  overflow: hidden;
`;

const SearchBox = styled.input`
  width: 100%;
  height: 52px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(GoSearch)`
  font-size: 24px;
  padding-left: 16px;
  padding-right: 12px;
`;

const SelectBox = styled.div`
  display: flex;
  gap: 8px;
`;

const SelectButton = styled.button`
  display: flex;
  margin-top: 16px;
  gap: 8px;
  height: 52px;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #cdccc6;
`;

const SelectContent = styled.div``;

const SelectBold = styled.b``;

const ButtonIcon = styled(AiOutlineDown)`
  font-size: 14px;
`;

const Button1 = styled.button``;

function Postings() {
  return (
    <Container>
      <TopMain>
        <SearchForm>
          <SearchIcon />
          <SearchBox type='text' placeholder='회사, 포지션, 스킬을 검색해주세요.' />
        </SearchForm>
        <SelectBox>
          <SelectButton>
            <SelectContent>지역</SelectContent>
            <SelectBold>전체</SelectBold>
            <ButtonIcon />
          </SelectButton>
          <SelectButton>
            <SelectContent>경력</SelectContent>
            <SelectBold>전체</SelectBold>
            <ButtonIcon />
          </SelectButton>
          <SelectButton>
            <SelectContent>기술스택</SelectContent>
            <SelectBold>전체</SelectBold>
            <ButtonIcon />
          </SelectButton>
        </SelectBox>
      </TopMain>
    </Container>
  );
}

export default Postings;
