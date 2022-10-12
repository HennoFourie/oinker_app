import { Shell } from "../Shell";
import { MockContainer } from "../../../store/tests/store.mock";

export default {
  title: "views/Shell",
};

export const Default = () => (
  <MockContainer>
    <Shell active='feed'><div>123</div></Shell>
  </MockContainer>
);
