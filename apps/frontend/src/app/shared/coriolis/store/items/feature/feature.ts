import { ItemFeature, ItemFeatureType } from '../../../item/itemFeature';
import { SkillType, SpecialDiceType } from '../../../character';

const bulky: ItemFeature = {
  name: "bulky",
  type: ItemFeatureType.bulky,
  typeToBeModified: SkillType.Dexterity,
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
  typeToBeModified: SkillType.Dexterity,
  modifier: -2,
};


export const features = {
  bulky
}
