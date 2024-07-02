import Paging from "../components/Paging";
import styled from "styled-components";
import ContentBox from "../components/ContentBox";
import { useState } from "react";
import { useEffect } from "react";

const ScrapPage = () => {
  const dummyDatas = [
    {
      index: 0,
      title: "스페인 교환학생 후기1",
      writer: "김퓨처",
      typetag: "공유해요",
      countrytag: "스페인",
      text: `스페인의 경우 1월말에서 2,3월까지는 꽤 쌀쌀해서 경량 패딩에 목도리를 하고 안에는 목폴라를 껴입었던 것 같습니다.\n 그에 반해 여름에는 매우 덥고 햇빛이 정말 강합니다. 저의 경우 얼굴에 일광화상까지 입었는데 썬크림을 잘 챙겨 바르셔야 합니다.\n 스페인의 집에는 대부분 에어컨이 없어서 집이 정말 더웠는데 손선풍기로 경우 버텼던 것 같습니다. 탁상용 선풍기를 챙겨 가시는 걸 강력 추천드립니다`,
      contentimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwG3CZvGW--EbIiMVsaKDkwlGuy4zIvjP20A&s",
      ishearted: true,
      heartcount: 3,
      commentcount: 9,
      date: "2024.05.07",
      ismine: false,
    },
    {
      index: 1,
      title: "프랑스 교통카드",
      writer: "김미래",
      typetag: "공유해요",
      countrytag: "프랑스",
      text: `프랑스로 교환학생 준비 중인데 1년동안 무제한으로 이용할 수 있는 교통카드를 구매하는게 좋을까요??\n가격은 1년에 342유로 + 신청비 8유로로 350유로이고, 1년치 충전한다고 가정했을 때 약  750유로 정도 하더라고요..`,
      contentimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwG3CZvGW--EbIiMVsaKDkwlGuy4zIvjP20A&s",
      ishearted: false,
      heartcount: 3,
      commentcount: 9,
      date: "2024.05.07",
      ismine: true,
    },
    {
      index: 2,
      title: "스페인 교환학생 후기3",
      writer: "김퓨처",
      typetag: "공유해요",
      countrytag: "스페인",
      text: `스페인의 경우 1월말에서 2,3월까지는 꽤 쌀쌀해서 경량 패딩에 목도리를 하고 안에는 목폴라를 껴입었던 것 같습니다.\n 그에 반해 여름에는 매우 덥고 햇빛이 정말 강합니다. 저의 경우 얼굴에 일광화상까지 입었는데 썬크림을 잘 챙겨 바르셔야 합니다.\n 스페인의 집에는 대부분 에어컨이 없어서 집이 정말 더웠는데 손선풍기로 경우 버텼던 것 같습니다. 탁상용 선풍기를 챙겨 가시는 걸 강력 추천드립니다`,
      contentimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwG3CZvGW--EbIiMVsaKDkwlGuy4zIvjP20A&s",
      ishearted: true,
      heartcount: 3,
      commentcount: 9,
      date: "2024.05.07",
      ismine: true,
    },
    {
      index: 3,
      title: "스페인 교환학생 후기4",
      writer: "김퓨처",
      typetag: "공유해요",
      countrytag: "스페인",
      text: `스페인의 경우 1월말에서 2,3월까지는 꽤 쌀쌀해서 경량 패딩에 목도리를 하고 안에는 목폴라를 껴입었던 것 같습니다.\n 그에 반해 여름에는 매우 덥고 햇빛이 정말 강합니다. 저의 경우 얼굴에 일광화상까지 입었는데 썬크림을 잘 챙겨 바르셔야 합니다.\n 스페인의 집에는 대부분 에어컨이 없어서 집이 정말 더웠는데 손선풍기로 경우 버텼던 것 같습니다. 탁상용 선풍기를 챙겨 가시는 걸 강력 추천드립니다`,
      contentimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwG3CZvGW--EbIiMVsaKDkwlGuy4zIvjP20A&s",
      ishearted: true,
      heartcount: 3,
      commentcount: 9,
      date: "2024.05.07",
      ismine: true,
    },
    {
      index: 4,
      title: "스페인 교환학생 후기5",
      writer: "김퓨처",
      typetag: "공유해요",
      countrytag: "스페인",
      text: `스페인의 경우 1월말에서 2,3월까지는 꽤 쌀쌀해서 경량 패딩에 목도리를 하고 안에는 목폴라를 껴입었던 것 같습니다.\n 그에 반해 여름에는 매우 덥고 햇빛이 정말 강합니다. 저의 경우 얼굴에 일광화상까지 입었는데 썬크림을 잘 챙겨 바르셔야 합니다.\n 스페인의 집에는 대부분 에어컨이 없어서 집이 정말 더웠는데 손선풍기로 경우 버텼던 것 같습니다. 탁상용 선풍기를 챙겨 가시는 걸 강력 추천드립니다`,
      contentimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwG3CZvGW--EbIiMVsaKDkwlGuy4zIvjP20A&s",
      ishearted: true,
      heartcount: 3,
      commentcount: 9,
      date: "2024.05.07",
      ismine: true,
    },
  ];

  const [content, setContent] = useState(dummyDatas);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [contentPerPage] = useState(3); // 한 페이지에 보여질 content 개수
  const [currentContent, setCurrentContent] = useState([]); // 현재 페이지에서 보여지는 contents

  const setPage = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (index) => {
    setContent((prevContent) =>
      prevContent.filter((item) => item.index !== index)
    );
  };

  useEffect(() => {
    const indexOfLastContent = currentPage * contentPerPage; // 현재 페이지의 마지막 content index
    const indexOfFirstContent = indexOfLastContent - contentPerPage;
    setCount(content.length);
    setCurrentContent(content.slice(indexOfFirstContent, indexOfLastContent));
    window.scrollTo(0, 0);
  }, [currentPage, contentPerPage, content]);

  return (
    <Container>
      <MainTitle>스크랩</MainTitle>
      <ContentBoxContainer>
        {currentContent.map((dummyData) => (
          <ContentBox
            key={dummyData.index}
            dummyData={dummyData}
            onDelete={handleDelete}
          ></ContentBox>
        ))}
      </ContentBoxContainer>
      <Paging
        page={currentPage}
        count={count}
        setPage={setPage}
        contentPerPage={contentPerPage}
      />
    </Container>
  );
};

export default ScrapPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 70px 0 65px 0;
`;

const MainTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

const ContentBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  margin: 62px 0 65px 0;
`;
