import styled from 'styled-components';

export default function Modal({
  month,
  date,
  day,
  toggleModal,
  getNewSchedule,
}) {
  const submitSchedule = () => {
    toggleModal();
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalTitle>
          {month}월 {date}일({day})
        </ModalTitle>
        <ModalInput
          placeholder="일정을 입력해주세요"
          onChange={getNewSchedule}
        />
        <ModalButton type="button" onClick={submitSchedule}>
          확인
        </ModalButton>
      </ModalContent>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(118, 118, 118, 0.7);
  z-index: 1;
`;

const ModalContent = styled.div`
  position: absolute;
  width: 400px;
  height: 220px;
  padding: 20px 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: #fff;
  z-index: 2;
`;

const ModalTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const ModalInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  font-family: 'SpoqaHanSansNeo-Regular';

  &:focus {
    outline: none;
  }
`;

const ModalButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  background-color: #3d85f5;
  color: #fff;
`;
