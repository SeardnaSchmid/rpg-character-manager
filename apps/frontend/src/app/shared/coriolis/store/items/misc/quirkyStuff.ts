import { SkillType } from '../../../character/characterSkill';
import { ItemGadget, ItemTechTier, ItemWeight } from '../../../item/item';
import { v4 } from 'uuid';
import { ItemFeatureType } from '../../../item/itemFeature';

const quantenFluxGenerator: ItemGadget = new ItemGadget({
  id: v4(),
  amount: 0,
  baseSkill: SkillType.MysticalPowers,
  cost: 0,
  techTier: ItemTechTier.mysterious,
  name: 'QuantenFluxGenerator',
  weight: ItemWeight.normal,
  // skillToBeInfluenced: { skillToBeModified: SkillType.Technology, modifierValue: 42 }
});
const jostersLangerPenis: ItemGadget = new ItemGadget({
  id: v4(),
  name: 'JostersLangerPenis',
  weight: ItemWeight.notWearable,
  cost: 9001,
  baseSkill: SkillType.MeleeCombat,
  techTier: ItemTechTier.advanced,
  amount: 1,
  features: [
    {
      type: ItemFeatureType.custom,
      name: 'mitGrosserMachtKommtGrosseVerantwortung',
      modifier: 9001,
      typeToBeModified: SkillType.MeleeCombat,
    },
  ],
});

export const quirkyStuff = {
  quantenFluxGenerator,
  jostersLangerPenis,
};
