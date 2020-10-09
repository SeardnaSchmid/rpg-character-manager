import { Character } from '@viewer-app/shared/coriolis/character/character';
import { BodyStatType } from '@viewer-app/shared/coriolis/character/characterBodyStat';
import { AttributeType } from '@viewer-app/shared/coriolis/character/characterAttribute';

function updateEncumbrance(character: Character) {
  const generalEncumbranceMinimum = 0;

  const encumbaranceBodyStat = character.bodyStats.find((item) => item.type === BodyStatType.Encumbarance);

  // update minimum
  encumbaranceBodyStat.value.minimum = generalEncumbranceMinimum;
  // update maximum
  const strength = character.attributes.find((item) => item.type === AttributeType.Strength).value;
  encumbaranceBodyStat.value.maximum = strength * 2;

  // update current
  let newEncumbrance = 0;
  character.equipedItems.forEach((item) => {
    newEncumbrance += item.weight;
  });
  encumbaranceBodyStat.value.current = newEncumbrance;
}

function updateBodyStats(character: Character) {
  updateEncumbrance(character);
}

export { updateBodyStats };
