import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Slider from 'react-slick';
import { Theme } from '../styles/Theme';
import { ReactComponent as CalculatorIcon } from '../assets/images/Calculator.svg';
import { ReactComponent as CalendarIcon } from '../assets/images/Calendar.svg';
import { ReactComponent as WindowsIcon } from '../assets/images/Windows.svg';
import { ReactComponent as NoteIcon } from '../assets/images/Note.svg';
import { ReactComponent as SearchIcon } from '../assets/images/Search.svg';
import CardBackground from '../assets/images/Card.svg';
import Banner1Background from '../assets/images/Banner1.svg';
import Banner2Background from '../assets/images/Banner2.svg';
import Banner3Background from '../assets/images/Banner3.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const SearchBar = styled.div`
  margin: auto;
  margin-bottom: 50px;
  margin-top: 150px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  box-shadow: 0 0 3px ${({ theme }) => theme.colors.RED04};
  color: ${({ theme }) => theme.colors.GRAY02};
  border-radius: 50px;
  width: 801px;
  height: 69px;
  box-sizing: border-box;
  font-size: 20px;
  text-align: left;
  position: relative;
`;

const SearchIconWrap = styled.div`
  position: absolute;
  right: 50px;
  top: 23px;
`;

const Banner = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.RED01};
  border-radius: 22px;
  margin-bottom: 40px;
  width: 1348px;
  height: 308px;
  margin: 0 auto;
  background-position: center;
`;

const MainBanner1 = styled(Banner)`
  background-image: url(${Banner1Background});
  background-color: rgba(255, 250, 230, 0.4);
  border: 2px solid rgba(217, 206, 178, 0.5);
`;

const MainBanner2 = styled(Banner)`
  background-image: url(${Banner2Background});
  background-color: rgba(183, 229, 180, 0.2);
  border: 2px solid rgba(241, 241, 241, 1);
`;

const MainBanner3 = styled(Banner)`
  background-image: url(${Banner3Background});
  background-color: rgba(219, 238, 237, 0.5);
  border: 2px solid rgba(206, 229, 208, 0.5);
`;

const BannerContent = styled.div`
  p {
    font-size: 30px;
    margin: 10px 0;
  }
  text-align: left;
  h4 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.RED04};
  }
  position: absolute;
  top: 45px;
  left: 900px;
  font-weight: bold;
`;

const Button = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.RED04};
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  text-decoration: none;
  border-radius: 50px;
  margin-top: 10px;
  width: 180px;
  height: 52px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 160px;
  right: 227px;
  line-height: 52px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.RED04};
    color: ${({ theme }) => theme.colors.WHITE};
    border: 1px solid ${({ theme }) => theme.colors.RED04};
  }
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: 20px;
  }

  .slick-dots li {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #FFA7B6;
    opacity: 1;
  }

  .slick-dots li.slick-active {
    width: 40px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.RED04};
    border-radius: 10px;
    top: 4px;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0;
  }
`;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,  
  autoplaySpeed: 2500,  
  cssEase: 'ease-in-out', 
};

const FeatureCards = styled.div`
  display: flex;
  width: 1348px;
  margin: auto;
  margin-top: 50px;
  gap: 40px;
  margin-bottom: 50px;
`;

const FeatureCard = styled.div`
  position: relative;
  background: url(${CardBackground}) no-repeat center;
  padding: 40px 30px;
  width: 303px;
  height: 241px;
  box-sizing: border-box;
  margin: auto;

  p {
    font-size: 18px;
    text-align: left;
    color: ${({ theme }) => theme.colors.RED04};
    margin: 0;
    margin-top: 7px;
  }

  h2 {
    font-size: 28px;
    text-align: left;
    margin: 0;
  }

  &::after {
    content: '↗';
    position: absolute;
    top: 8px;
    right: -1px;
    width: 45px;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.WHITE};
    border: 1px solid ${({ theme }) => theme.colors.RED04};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.RED04};
    cursor: pointer;
  }

  &::after:hover {
    background-color: ${({ theme }) => theme.colors.RED04};
    border: 1px solid ${({ theme }) => theme.colors.WHITE};
    color: ${({ theme }) => theme.colors.WHITE};
  }
  &:hover::after {
    background-color: ${({ theme }) => theme.colors.RED04};
    border: 1px solid ${({ theme }) => theme.colors.WHITE};
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;

const CalculatorIconWrap = styled.div`
  position: absolute;
  right: 25px;
  bottom: 23px;
`;

const CalendarIconWrap = styled.div`
  position: absolute;
  right: 25px;
  bottom: 23px;
`;

const WindowsIconWrap = styled.div`
  position: absolute;
  right: 25px;
  bottom: 23px;
`;

const NoteIconWrap = styled.div`
  position: absolute;
  right: 25px;
  bottom: 23px;
`;

function MainPage() {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <SearchBar>
          교환학생 준비, 투엑스에게 물어보세요!
          <SearchIconWrap>
            <SearchIcon src="../assets/images/Search.svg" alt="돋보기" />
          </SearchIconWrap>
        </SearchBar>
        <StyledSlider {...sliderSettings}>
          <div>
            <MainBanner1>
              <BannerContent>
                <p>최대 500만원 지원!</p>
                <p>미래에셋 교환학생 장학금</p>
                <h4>지금 바로 미래에셋 홈페이지에서 자세하게 확인해 보세요!</h4>
                <Button href="#">
                  이동하기 ↗
                </Button>
              </BannerContent>
            </MainBanner1>
          </div>
          <div>
            <MainBanner2>
              <BannerContent>
                <p>연간 400~500만원</p>
                <p>서울장학재단 학업장려금 지원!</p>
                <h4>지금 한국장학재단 홈페이지에서 자세하게 확인해 보세요!</h4>
                <Button href="#">
                  이동하기 ↗
                </Button>
              </BannerContent>
            </MainBanner2>
          </div>
          <div>
          <MainBanner3>
              <BannerContent>
                <p>최대 4,000유로 지원!</p>
                <p>아센듀오 교환학생 장학금</p>
                <h4>지금 바로 아셈듀오 홈페이지에서 자세하게 확인해 보세요!</h4>
                <Button href="#">
                  이동하기 ↗
                </Button>
              </BannerContent>
            </MainBanner3>
          </div>
        </StyledSlider>
        <FeatureCards>
          <FeatureCard>
            <h2>학사</h2>
            <p>원하는 국가 선택 후 바로 확인!</p>
            <CalculatorIconWrap>
              <CalculatorIcon src="../assets/images/Calculator.svg" alt="학사 아이콘" />
            </CalculatorIconWrap>
          </FeatureCard>
          <FeatureCard>
            <h2>어학</h2>
            <p>어학시험일정 관리도 한번에!</p>
            <NoteIconWrap>
              <NoteIcon src="../assets/images/Note.svg" alt="어학 아이콘" />
            </NoteIconWrap>
          </FeatureCard>
          <FeatureCard>
            <h2>커뮤니티</h2>
            <p>혼자 하는 고민은 이제 그만!</p>
            <WindowsIconWrap>
              <WindowsIcon src="../assets/images/Windows.svg" alt="커뮤니티 아이콘" />
            </WindowsIconWrap>
          </FeatureCard>
          <FeatureCard>
            <h2>캘린더</h2>
            <p>교환학생 준비 더욱 간편하게!</p>
            <CalendarIconWrap>
              <CalendarIcon src="../assets/images/Calendar.svg" alt="캘린더 아이콘" />
            </CalendarIconWrap>
          </FeatureCard>
        </FeatureCards>
      </Container>
    </ThemeProvider>
  );
}

export default MainPage;

