import { ItemFeature } from './itemFeature';
import { SkillType } from '../character/characterSkill';

export type CharacterItem = ItemWeapon | ItemArmor | ItemGadget;

export class CharacterItemBase {
  id?: string;
  name?: string;
  techTier?: ItemTechTier = ItemTechTier.ordinary;
  cost? = 0;
  features?: Array<ItemFeature> = [];
  isRestricted?: boolean = false;
  inHands?: boolean = false;
  weight?: ItemWeight = ItemWeight.normal;
  amount? = 1;
  baseSkill?: SkillType;
  itemSubCategory: ItemWeaponSubCategory | ItemArmorSubCategory | ItemGadgetSubCategory;
  protected _itemClassName: ItemClassName;

  constructor(init?: Partial<CharacterItemBase>) {
    Object.assign(this, init);
  }

  public getItemClassType(): ItemClassName {
    return this._itemClassName;
  }
}

export class ItemWeapon extends CharacterItemBase {
  bonusModifier? = 0; // bonus dice for
  initModifier? = 0;
  blastPower? = 0;
  damage: number;
  crit: number;
  range: ItemRange;

  constructor(init?: Partial<ItemWeapon>) {
    super(init);
    Object.assign(this, init);
    this._itemClassName = ItemClassName.itemWeapon;
  }
}

export class ItemArmor extends CharacterItemBase {
  armorRating: number;
  extraFeaturesSlots? = 0;

  constructor(init?: Partial<ItemArmor>) {
    super(init);
    Object.assign(this, init);
    this._itemClassName = ItemClassName.itemArmor;
  }
}

export class ItemGadget extends CharacterItemBase {
  constructor(init?: Partial<ItemGadget>) {
    super(init);
    Object.assign(this, init);
    this._itemClassName = ItemClassName.itemGadget;
  }
}

export enum ItemRange {
  close = 'close', // -2 modifier
  short = 'short', // 0 modifier
  long = 'long', // +2 modifier
  extreme = 'extreme', // +4 modifier
}

export function getItemRangeModifier(range: ItemRange): number {
  switch (range) {
    case ItemRange.close:
      return -2;
      break;
    case ItemRange.short:
      return 0;
      break
    case ItemRange.long:
      return 2;
      break
    case ItemRange.extreme:
      return 4;
      break
  }
}

export enum ItemClassName {
  itemArmor = 'itemArmor',
  itemWeapon = 'itemWeapon',
  itemGadget = 'itemGadget',
}

export enum ItemTechTier {
  primitive = 'primitive', // tech brought by firstcome or adapted local
  ordinary = 'ordinary', // tech used by ordinary folk
  advanced = 'advanced', // high end of the tech available on the open
  mysterious = 'mysterious', // icon stuff
  faction = 'faction', // faction only tech
  artifact = 'artifact', // portal builders remaining tech
}

export enum ItemWeight {
  tiny = 0, // 0 size
  light = 0.5, // 0.5 size
  normal = 1, // 1 size
  heavy = 2, // 2 size
  notWearable = 9001, // too heavy to wear
}

export enum ItemWeaponSubCategory {
  pistol,
  carabine,
  grape,
  rifle,
  heavyWeapon,
  kniveAndSword,
  axe,
  blunt,
  stunAndEnergy,
  explosive,
  grenade,
  other
}

export enum ItemArmorSubCategory {
  pistol,
  carabine,
  grape,
  rifle,
  heavyWeapon,
  kniveAndSword,
  axe,
  blunt,
  stunAndEnergy,
  explosive,
  grenade,
  other
}

export enum ItemGadgetSubCategory {
  pistol,
  carabine,
  grape,
  rifle,
  heavyWeapon,
  kniveAndSword,
  axe,
  blunt,
  stunAndEnergy,
  explosive,
  grenade,
  other
}
