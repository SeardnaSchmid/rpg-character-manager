import { ItemFeature, ItemFeatureType } from '../../../character/itemFeature';
import { GeneralSkillType, SpecialDiceType } from '../../../character';

const bulky: ItemFeature = {
  name: "bulky",
  type: ItemFeatureType.bulky,
  typeToBeModified: GeneralSkillType.Dexterity,
  modifier: -2,
};
const long: ItemFeature = {
  name: "long",
  type: ItemFeatureType.long,
  typeToBeModified: SpecialDiceType.Initiative,
  modifier: 2,
};
const small: ItemFeature = {
  name: "small",
  type: ItemFeatureType.small,
  typeToBeModified: GeneralSkillType.Dexterity,
  modifier: -2,
};


export const features = {
  bulky
}
