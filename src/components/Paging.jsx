import Pagination from "react-js-pagination";
import { styled } from "styled-components";

/*
activePage : 현재 페이지
itemsCountPerPage : 한 페이지 당 보여줄 보험 개수
totalItemsCount : 총 아이템 수
pageRangeDisplayed : paginator에서 보여줄 페이지 범위
예를 들어, pageRangeDisplayed를 5로 설정한 경우, 현재 페이지를 기준으로 앞뒤로 총 5개의 페이지 버튼이 보여짐.
prevPageText : 이전 페이지로 가기를 나타내는 텍스트
nextPageText : 다음 페이지로 가기를 나타내는 텍스트
*/

const Paging = ({ page, count, setPage, contentPerPage }) => {
  return (
    <StyledPagination>
      <Pagination
        activePage={page}
        itemsCountPerPage={contentPerPage}
        totalItemsCount={count}
        pageRangeDisplayed={3}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={setPage}
      />
    </StyledPagination>
  );
};

export default Paging;

const StyledPagination = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    gap: 19px;
  }

  ul.pagination li {
    display: inline-block;
    width: 41px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.WHITE};
    border: 1px solid ${({ theme }) => theme.colors.GRAY01};
  }

  ul.pagination li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.GRAY01};
  }

  ul.pagination li.active a {
    color: ${({ theme }) => theme.colors.WHITE};
  }

  ul.pagination li.active {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.RED04};
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.RED03};
  }
`;
