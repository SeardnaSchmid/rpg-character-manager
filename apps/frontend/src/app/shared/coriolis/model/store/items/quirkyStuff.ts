import { AdvancedSkillType, GeneralSkillType } from '../../character/characterSkill';
import { ItemGadget, ItemTechTier, ItemWeight } from '../../character/item';
import { v4 } from 'uuid';

export const quantenFluxGenerator: ItemGadget = new ItemGadget({
  id: v4(),
  amount: 0,
  baseSkill: AdvancedSkillType.MysticalPowers,
  cost: 0,
  techTier: ItemTechTier.mysterious,
  name: 'QuantenFluxGenerator',
  weight: ItemWeight.normal,
  // skillToBeInfluenced: { skillToBeModified: SkillType.Technology, modifierValue: 42 }
});
export const jostersLangerPenis: ItemGadget = new ItemGadget({
  id: v4(),
  name: 'JostersLangerPenis',
  weight: ItemWeight.notWearable,
  cost: 9001,
  baseSkill: GeneralSkillType.MeleeCombat,
  techTier: ItemTechTier.advanced,
  amount: 1,
  features: [],
});

export const quirkyStuffList = {
  quantenFluxGenerator,
  jostersLangerPenis,
};
