import styled from "styled-components";
import Trashimg from "../assets/images/Trash.svg";
import EmptyHeart from "../assets/images/EmptyHeart.svg";
import FullHeart from "../assets/images/FullHeart.svg";
import Comment from "../assets/images/ChatCircle.svg";

const ContentBox = ({ dummyData }) => {
  const {
    title,
    typetag,
    countrytag,
    text,
    contentimg,
    ishearted,
    heartcount,
    commentcount,
    date,
  } = dummyData;
  // const [heart, setHeart] = useState(EmptyHeart);
  // const [heartCount, setHeartCount] = useState(3);
  // console.log(dummyData);
  // const toggleHeart = () => {
  //   setHeart((prevHeart) => {
  //     if (prevHeart === EmptyHeart) {
  //       setHeartCount(heartCount + 1);
  //       return FullHeart;
  //     } else {
  //       setHeartCount(heartCount - 1);
  //       return EmptyHeart;
  //     }
  //   });
  // };

  return (
    <Container>
      <Top>
        <Title>
          <TitleText>{title}</TitleText>
          <TagBox>
            <TypeTag>#{typetag}</TypeTag>
            <CountryTag>#{countrytag}</CountryTag>
          </TagBox>
        </Title>
        <DeleteBtn>
          <img src={Trashimg} alt="Trash Icon" />
        </DeleteBtn>
      </Top>
      <Middle>
        <Content>
          <Text>{text}</Text>
        </Content>
        <ImgBox>
          <ContentImg src={contentimg} alt={title} />
        </ImgBox>
      </Middle>
      <Bottom>
        <ReactionBox>
          <HeartIcon>
            {ishearted === true ? (
              <img src={FullHeart} alt="FullHeartIcon" />
            ) : (
              <img src={EmptyHeart} alt="EmptyHeartIcon" />
            )}
          </HeartIcon>
          <HeartCount>{heartcount}</HeartCount>
          <CommentIcon>
            <img src={Comment} alt="Comment Icon" />
          </CommentIcon>
          <CommentCount>{commentcount}</CommentCount>
        </ReactionBox>
        <Date>{date}</Date>
      </Bottom>
    </Container>
  );
};

export default ContentBox;

const Container = styled.div`
  width: 1496px;
  height: 404px;
  box-shadow: 0 0 10px #ebebeb;
  border-radius: 12px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  margin: 38px 0 0 48px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
`;

const TagBox = styled.div`
  display: flex;
  gap: 15px;
`;

const TypeTag = styled.div`
  width: 126px;
  height: 42px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.RED04};
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.RED04};
`;

const CountryTag = styled.div`
  width: 126px;
  height: 42px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  background-color: ${({ theme }) => theme.colors.RED04};
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 54px;
`;

const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 33px;
`;

const Content = styled.div`
  width: 1029px;
  height: 103px;
  border: 1px solid #ffd0d8;
  border-radius: 12px;
  padding: 25px 22px;
  margin-left: 52px;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 35px;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
`;

const ImgBox = styled.div`
  margin-right: 48px;
`;

const ContentImg = styled.img`
  width: 267px;
  height: 155px;
  border-radius: 12px;
  object-fit: cover;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReactionBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 52px;
  margin-top: 19px;
`;

const HeartIcon = styled.button`
  width: 26px;
  height: 26px;
  margin-bottom: 3px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const HeartCount = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 0;
  margin-left: 10px;
`;

const CommentIcon = styled.div`
  width: 26px;
  height: 26px;
  margin-left: 15px;
`;

const CommentCount = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 0;
  margin-left: 6px;
`;

const Date = styled.p`
  color: #adadad;
  font-size: 20px;
  font-weight: 500;
  margin-right: 57px;
`;
