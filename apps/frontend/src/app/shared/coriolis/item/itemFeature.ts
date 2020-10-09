import { SkillType } from '../character/characterSkill';
import { AttributeType, SpecialDiceType } from '../../index';

export enum ItemFeatureType {
  bulky = 'bulky', // test
  small = 'small',
  long = 'long',
  reliable = 'reliable',
  cellPowered = 'cellPowered',
  mercurium = 'mercurium',
  flexible = 'flexible',
  stun = 'stun',
  slow = 'slow',
  antiVehicle = 'antiVehicle',
  thermalSweep = 'thermalSweep',
  highCapacity = 'highCapacity',
  armorPiercing = 'armorPiercing',
  blocksVisionAndSensors = 'blocksVisionAndSensors',
  singleShot = 'singleShot',
  fire1 = 'fire1',
  fire2 = 'fire2',
  fire3 = 'fire3',
  fire4 = 'fire4',
  fire5 = 'fire5',
  fire6 = 'fire6',
  blastPower1 = 'blastPower1',
  blastPower2 = 'blastPower2',
  blastPower3 = 'blastPower3',
  blastPower4 = 'blastPower4',
  blastPower5 = 'blastPower5',
  blastPower6 = 'blastPower6',
  automaticFire = 'automaticFire',
  silent = 'silent',
  buildInGrenadeLauncher = 'buildInGrenadeLauncher',
  nightSights = 'nightSights',
  thermostaticSuit = 'thermostaticSuit',
  vacuumSuit = 'vacuumSuit',
  oxygenSupply = 'oxygenSupply',
  reinforcedExoServos = 'reinforcedExoServos',
  custom = 'custom',
  reduceOneHitBy3 = 'reduceOneHitBy3',
}

export type UserInteractionFunctionType = () => boolean;

export class ItemFeature {
  name: string;
  type: ItemFeatureType;
  private _modifier: number;
  typeToBeModified: SkillType | AttributeType | SpecialDiceType;
  defaultUserInput? = true;
  askForUserInput? = false;

  public constructor(init?: Partial<ItemFeature>) {
    Object.assign(this, init);
  }

  userQuestionAtUse?: UserInteractionFunctionType = () => true;

  public getModifier(): number {
    if (this.askForUserInput) {
      // TODO Implement Dialog
      return this._modifier;
    } else {
      if (this.defaultUserInput) {
        // modifier can be applied
        return this._modifier;
      } else {
        // modifier does not apply because of the question
        return 0;
      }
    }
  }
}
