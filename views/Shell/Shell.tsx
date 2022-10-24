import styled from "@emotion/styled";
import { ArrowBack as ArrowIcon } from '@mui/icons-material'
import * as types from "./Shell.types";
import {
  AccountCircle as ProfileIcon,
  Home as HomeIcon,
  Groups as GroupIcon,
} from "@mui/icons-material";
import {
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
} from "@mui/material";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.75);
  border-bottom: 1px solid #eee;
`;

const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

const Title = styled(Typography)`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0 1rem;
`;

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #eee;
`;

const Wrapper = styled.div`
  background: #EEE;
  min-height: 100vh;
  border: 1px solid transparent;
`

const Main = styled.main`
  padding-top: 3.5rem;
`

const Header = (props: { title: string }) => {
  const { title } = props

  return (
    <HeaderWrapper>
      {title !== "Profile" && (<Image src="https://picsum.photos/200/300" alt="" />)}

      {title === "Profile" && <IconButton><ArrowIcon /></IconButton>}
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};

const Footer = (props: { active: types.active }) => {
  const { active } = props;

  return (
    <FooterWrapper>
      <BottomNavigation showLabels value={active} onChange={console.log}>
        <BottomNavigationAction value="feed" label="Feed" icon={<HomeIcon />} />
        <BottomNavigationAction
          value="following"
          label="Following"
          icon={<GroupIcon />}
        />
        <BottomNavigationAction
          value="profile"
          label="Profile"
          icon={<ProfileIcon />}
        />
      </BottomNavigation>
    </FooterWrapper>
  );
};

export const Shell = (props: types.props) => {
  const { children, active, title } = props;

  return (
    <>
      <Wrapper>
        <Header title={title} />
        <Main>{children}</Main>
        <Footer active={active} />
      </Wrapper>
    </>
  );
};

export default Shell;
