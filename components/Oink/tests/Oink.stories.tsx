import { Oink } from "../Oink";
import { createMockOink } from "../../../schema/oink/tests/oinks.mocks";
import { createMockProfile } from "../../../schema/profile/tests/profile.mocks";

export default {
  title: "components/Oink",
};

const oink = createMockOink();
const profile = createMockProfile();

const BASE_PROPS = {
  date: oink.createDate,
  embedImage: oink.image,
  imageUrl: profile.profileImg,
  name: profile.displayName,
  text: oink.text,
};

export const Default = () => <Oink {...BASE_PROPS} />;

export const NoImage = () => <Oink {...BASE_PROPS} embedImage={null} />;

export const ShortText = () => <Oink {...BASE_PROPS} text="1" />;

export const LongText = () => (
  <Oink
    {...BASE_PROPS}
    text="In 2011 het die lugdiens 'n massiewe transformasie ondergaan – met die 
    verandering van sy handelsmerk na Virgin Australia. Dit het die bekendstelling 
    van 'n nuwe vliegtuigkleurskema, nuwe uniforms en nuwe spyskaartopsies aan boord 
    sowel as 'n besigheidsklasproduk ingesluit, wat Virgin Blue nie gehad het nie. 
    Nuwe wyerompvliegtuie is aangeskaf om met Qantas mee te ding, en die uitrol van 
    besigheidsklas oor die hele Virgin Australia-netwerk. In 2019 is dit geoormerk 
    as een van Australië se top 10 belastingontduikers, wat $18 miljard verdien terwyl 
    hulle geen belasting betaal het nie."
  />
);

export const ShortUserName = () => <Oink {...BASE_PROPS} name="R" />;

export const LongUserName = () => (
  <Oink
    {...BASE_PROPS}
    name="The Incredible, Phenomenal, Mr. User Himself, The Very Best!"
  />
);

export const FarBack = () => (
  <Oink {...BASE_PROPS} date={new Date("1991-11-29")} />
);
