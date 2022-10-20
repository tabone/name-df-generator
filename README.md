# Name Generator

Generates a random Dwarf Fortress Name.

## Installation

```bash
npm install --save name-df-generator
```

## Usage

```javascript
import { Name, variants } from "name-df-generator"

const dwarf = new Name({
  seed: "seed",
  variant: variants.DWAR
})

const human = new Name({
  seed: "seed-human",
  variant: variants.HUMAN
})

const goblin = new Name({
  seed: "seed-goblin",
  variant: variants.GOBLIN
})

const elvish = new Name({
  seed: "seed-elvish",
  variant: variants.ELVISH
})

const english = new Name({
  seed: "seed-english",
  variant: variants.ENGLISH
})

const dwarven = new Name({
  seed: "seed-dwarven",
  variant: variants.DWARVEN
})

console.log(dwarf.toString(), '=>', dwarf.conversion) // => Lushòb Sheshekfel => Lushòb Tipseam
console.log(human.toString(), '=>', human.conversion) // => Oli Lesnokerleb => Oli Forestferocity
console.log(goblin.toString(), '=>', goblin.conversion) // => Ostost Susmangkasp => Ostost Leaksandal
console.log(elvish.toString(), '=>', elvish.conversion) // => Futace Emithopíware => Futace Girdlepus
console.log(english.toString(), '=>', english.conversion) // => Shrine Humorbulwark => Shrine Humorbulwark
console.log(dwarven.toString(), '=>', dwarven.conversion) // => Rorung Uthegtögum => Rorung Cancerverse
```

## Name API

### new Name({ [seed:`string`,variant:`string`] }) => `Name`

Used to create a new Name

### .name => `string`

Used to get the Deity's name.

### .first => `string`

Used to get the first name.

### .last => `string`

Used to get the last name.

### .conversion => `string`

Used to get the conversion of the name.

### .toString => `string`

Used to get the full name.

## References

- [DF2014:Language](https://dwarffortresswiki.org/index.php/Language)
