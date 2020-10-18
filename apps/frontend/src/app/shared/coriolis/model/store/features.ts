import {
  BodyStatType,
  CharacterModifier,
  GeneralSkillType,
  ItemFeatureType,
  SpecialDiceType,
} from '../character';

export const antiVehicle: CharacterModifier = {
  name: 'antiVehicle',
  type: ItemFeatureType.antiVehicle,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Anti-vehicle means that the weapon is designed to take out\n' +
    'vehicles or fortifications. The weapon does +2 damage against\n' +
    'these targets.',
};
export const armorPiercing: CharacterModifier = {
  name: 'armorPiercing',
  type: ItemFeatureType.armorPiercing,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Armor-piercing weapons fire very fast or extra heavy projectiles\n' +
    'that penetrate armor more effectively, but tend to cause\n' +
    'less damage to soft targets. The Armor Rating of the target\n' +
    'is reduced by 2, but the damage is reduced by 1 if the target\n' +
    'has no armor.',
};
export const automaticFire: CharacterModifier = {
  name: 'automaticFire',
  type: ItemFeatureType.automaticFire,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Automatic fire means that the weapon is capable of fully automatic\n' +
    'fire (page 89).',
};
export const bulkyWeapon: CharacterModifier = {
  name: 'bulkyWeapon',
  type: ItemFeatureType.bulkyWeapon,
  modifier: -2,
  typeToBeModified: GeneralSkillType.RangedCombat,
  infoText:
    'Bulky weapons cannot be used standing up without a weapon\n' +
    'harness, or the shooter will suffer a -2 to ranged combat.',
};
export const bulkyArmor: CharacterModifier = {
  name: 'bulkyArmor',
  type: ItemFeatureType.bulkyArmor,
  modifier: -2,
  typeToBeModified: GeneralSkillType.Dexterity,
  infoText: 'Bulky armor gives the wearer a -2 to dexterity rolls.',
};
export const builtInWeapon: CharacterModifier = {
  name: 'builtInWeapon',
  type: ItemFeatureType.builtInWeapon,
  modifier: 0,
  typeToBeModified: undefined,
  infoText:
    'Built-in weapon: The armor has a built-in weapon – a pistol, dagger\n' +
    'or short sword. The weapon must be purchased separately.',
};
export const cellPowered: CharacterModifier = {
  name: 'cellPowered',
  type: ItemFeatureType.cellPowered,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Cell-powered melee weapons require a cell to function. Without\n' +
    'a cell, they are treated as their Primitive counterparts.',
};
export const camouflageUnit: CharacterModifier = {
  name: 'camouflageUnit',
  type: ItemFeatureType.camouflageUnit,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Camouflage unit: When activated, the unit creates a camouflage\n' +
    'field around the suit that makes it almost invisible and very difficult\n' +
    'to detect (-3 to observation).',
};
export const highDensityArmanite: CharacterModifier = {
  name: 'highDensityArmanite',
  type: ItemFeatureType.highDensityArmanite,
  typeToBeModified: BodyStatType.Armor,
  modifier: 1,
  infoText: 'High-density armanite: +1 to Armor Rating.',
};
export const hydrostaticGel: CharacterModifier = {
  name: 'hydrostaticGel',
  type: ItemFeatureType.hydrostaticGel,
  typeToBeModified: undefined,
  modifier: 0,
  infoText: 'Hydrostatic gel: +3 to Armor against explosions or falling.',
};
export const fire1: CharacterModifier = {
  name: 'fire1',
  type: ItemFeatureType.fire1,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Fire makes objects and targets catch fire when they are hit by\n' +
    'the weapon (see Fire in Chapter 5). The number tells you how\n' +
    'many dice to roll for the fire each turn.',
};
export const fire2: CharacterModifier = {
  name: 'fire2',
  type: ItemFeatureType.fire2,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Fire makes objects and targets catch fire when they are hit by\n' +
    'the weapon (see Fire in Chapter 5). The number tells you how\n' +
    'many dice to roll for the fire each turn.',
};
export const fire3: CharacterModifier = {
  name: 'fire3',
  type: ItemFeatureType.fire3,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Fire makes objects and targets catch fire when they are hit by\n' +
    'the weapon (see Fire in Chapter 5). The number tells you how\n' +
    'many dice to roll for the fire each turn.',
};
export const fire4: CharacterModifier = {
  name: 'fire4',
  type: ItemFeatureType.fire4,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Fire makes objects and targets catch fire when they are hit by\n' +
    'the weapon (see Fire in Chapter 5). The number tells you how\n' +
    'many dice to roll for the fire each turn.',
};
export const fire5: CharacterModifier = {
  name: 'fire5',
  type: ItemFeatureType.fire5,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Fire makes objects and targets catch fire when they are hit by\n' +
    'the weapon (see Fire in Chapter 5). The number tells you how\n' +
    'many dice to roll for the fire each turn.',
};
export const fire6: CharacterModifier = {
  name: 'fire6',
  type: ItemFeatureType.fire6,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Fire makes objects and targets catch fire when they are hit by\n' +
    'the weapon (see Fire in Chapter 5). The number tells you how\n' +
    'many dice to roll for the fire each turn.',
};
export const flexibleWeapon: CharacterModifier = {
  name: 'flexibleWeapon',
  type: ItemFeatureType.flexibleWeapon,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Flexible weapons, such as whips, can be used to pin an opponent\n' +
    'even without rolling extra sixes (see page 86) – the first six rolled\n' +
    'can be used to achieve a grapple hold.',
};
export const longWeapon: CharacterModifier = {
  name: 'longWeapon',
  type: ItemFeatureType.longWeapon,
  typeToBeModified: SpecialDiceType.Initiative,
  modifier: 2,
  infoText:
    'Long weapons add a +2 to the weapon’s initiative bonus – but\n' +
    'only in the first turn of combat.',
};
export const thermostaticSuit: CharacterModifier = {
  name: 'thermostaticSuit',
  type: ItemFeatureType.thermostaticSuit,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Thermostatic suit: See details under Survival and Colonization\n' +
    'on page 117.',
};
export const vacuumSuit: CharacterModifier = {
  name: 'vacuumSuit',
  type: ItemFeatureType.vacuumSuit,
  typeToBeModified: undefined,
  modifier: 0,
  infoText: 'Vacuum suit: Protects against vacuum and radiation.',
};
export const magneticBoots: CharacterModifier = {
  name: 'magneticBoots',
  type: ItemFeatureType.magneticBoots,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Magnetic boots: The boots of the suit have electromagnets to make\n' +
    'them work in zero-G and stick to ship hulls.',
};
export const zeroGJet: CharacterModifier = {
  name: 'zeroGJet',
  type: ItemFeatureType.zeroGJet,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Zero-G jet: Tiny thrusters give increased maneuverability in zero-G\n' +
    '(+1 to dexterity).',
};
export const microServos: CharacterModifier = {
  name: 'microServos',
  type: ItemFeatureType.microServos,
  typeToBeModified: undefined,
  modifier: 0,
  infoText: 'Micro servos: Give a +1 to dexterity for jumping and running.',
};
export const oxygenSupply: CharacterModifier = {
  name: 'oxygenSupply',
  type: ItemFeatureType.oxygenSupply,
  typeToBeModified: undefined,
  modifier: 0,
  infoText: 'Oxygen supply: Eight hours’ worth of oxygen, in a closed helmet.',
};
export const ablativeArmor: CharacterModifier = {
  name: 'ablativeArmor',
  type: ItemFeatureType.ablativeArmor,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'ABLATIVE ARMOR (A)\n' +
    'Reduces the damage of one hit by 3. The hit disables the armor\n' +
    'which must be repaired by an engineer to function again.',
};
export const reinforcedExoServos: CharacterModifier = {
  name: 'reinforcedExoServos',
  type: ItemFeatureType.reinforcedExoServos,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Reinforced exo servos: +2 to force rolls. Throwing weapons have\n' +
    'their damage increased by 1.',
};
export const mercurium: CharacterModifier = {
  name: 'mercurium',
  type: ItemFeatureType.mercurium,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Mercurium means that the blade of the weapon is hidden inside\n' +
    'the hilt, requiring an observation test with a -2 modifier to\n' +
    'spot during a search.',
};
export const reliableWeapon: CharacterModifier = {
  name: 'reliableWeapon',
  type: ItemFeatureType.reliableWeapon,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Reliable weapons are simple and robust, and will almost never\n' +
    'break. The weapon jam effect will cost the GM 4 DP instead of 3.',
};
export const slowWeapon: CharacterModifier = {
  name: 'slowWeapon',
  type: ItemFeatureType.slowWeapon,
  typeToBeModified: undefined,
  modifier: 0,
  infoText: 'Slow weapons can only be fired every other turn.',
};
export const silent: CharacterModifier = {
  name: 'silent',
  type: ItemFeatureType.silent,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Silent is a function that can be activated (a fast action) to\n' +
    'make the weapon quieter and harder to detect when it is fired\n' +
    '(requiring an observation test). A weapon in silent mode\n' +
    'does -1 damage.',
};
export const stun: CharacterModifier = {
  name: 'stun',
  type: ItemFeatureType.stun,
  typeToBeModified: undefined,
  modifier: 0,
  infoText: 'Stun means that the weapon inflicts stress instead of damage.',
};
export const thermalSweep: CharacterModifier = {
  name: 'thermalSweep',
  type: ItemFeatureType.thermalSweep,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Thermal sweep means that the weapon can fire a continuous\n' +
    'thermal beam that can be swept across several enemies. This\n' +
    'works like automatic fire above.',
};
export const singleShotWeapon: CharacterModifier = {
  name: 'singleShotWeapon',
  type: ItemFeatureType.singleShotWeapon,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'Single-shot weapons have no magazines and must be reloaded\n' +
    'between each shot.',
};
export const lightWeapon: CharacterModifier = {
  name: 'lightWeapon',
  type: ItemFeatureType.lightWeapon,
  typeToBeModified: BodyStatType.Encumbarance,
  modifier: -0.5,
  infoText:
    'Light weapons only count as half an item in the character inventory\n' +
    '(page 27). They are also easier to carry concealed, requiring an\n' +
    'observation test for someone to spot the weapon.',
};
export const small: CharacterModifier = lightWeapon;
export const heavyWeapon: CharacterModifier = {
  name: 'heavyWeapon',
  type: ItemFeatureType.heavyWeapon,
  typeToBeModified: BodyStatType.Encumbarance,
  modifier: 1,
  infoText: 'Heavy weapons count as two items in the character inventory.',
};
export const highCapacityWeapon: CharacterModifier = {
  name: 'highCapacityWeapon',
  type: ItemFeatureType.highCapacityWeapon,
  typeToBeModified: undefined,
  modifier: 0,
  infoText:
    'High capacity weapons have extra-large magazines or extra\n' +
    'cells that enable the shooter to ignore the first 1 rolled when\n' +
    'firing fully automatic fire (page 89).',
};

export const allFeatures = {
  antiVehicle,
  armorPiercing,
  automaticFire,
  builtInWeapon,
  bulkyArmor,
  bulkyWeapon,
  cellPowered,
  fire1,
  fire2,
  fire3,
  fire4,
  fire5,
  fire6,
  flexibleWeapon,
  heavyWeapon,
  highCapacityWeapon,
  highDensityArmanite,
  hydrostaticGel,
  lightWeapon,
  longWeapon,
  magneticBoots,
  mercurium,
  oxygenSupply,
  ablativeArmor,
  reinforcedExoServos,
  reliableWeapon,
  silent,
  singleShotWeapon,
  slowWeapon,
  small,
  stun,
  thermalSweep,
  thermostaticSuit,
  vacuumSuit,
};
