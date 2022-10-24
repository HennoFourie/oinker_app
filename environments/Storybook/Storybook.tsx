import { CssBaseline } from "@mui/material";
import { MockContainer as Shell } from "../../views/Shell/tests/Shell.mocks";
import "./Storybook.css";

export const Storybook = (props: { children: JSX.Element }) => {
  const { children } = props;

  return (
    <Shell>
      <>
        <CssBaseline />
        {children}
      </>
    </Shell>
  );
};

export default Storybook;
