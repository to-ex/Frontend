import Paging from "../components/Paging";
import styled from "styled-components";
import ContentBox from "../components/ContentBox";
import { useState } from "react";
import { useEffect } from "react";
import { AxiosScrapGet } from "../api/AxiosScrap";

const ScrapPage = () => {
  const [content, setContent] = useState([]);
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

  const fetchData = async () => {
    try {
      const response = await AxiosScrapGet();
      setContent(response.data.data.content);
      // console.log(response.data.data.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const indexOfLastContent = currentPage * contentPerPage; // 현재 페이지의 마지막 content index
    const indexOfFirstContent = indexOfLastContent - contentPerPage;

    const validContent = content || [];
    setCount(validContent.length);
    setCurrentContent(
      validContent.slice(indexOfFirstContent, indexOfLastContent)
    );
  }, [currentPage, contentPerPage, content]);

  return (
    <Container>
      <MainTitle>스크랩</MainTitle>
      <ContentBoxContainer>
        {currentContent.map((content) => (
          <ContentBox
            key={content.boardId}
            data={content}
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
  margin: 120px 0 65px 0;
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
