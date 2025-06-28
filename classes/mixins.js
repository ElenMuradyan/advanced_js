// ─────── Mixins for Human Abilities ───────

const canJump = {
    jump () {
        return `${this.name} is jumping`;
    }
};

const canRun = {
    run () {
        return `${this.name} is running`;
    }
};

const speaksSpanish = {
    greetSpanish() {
        return "¡Hola!";
    }
};

const speaksFrench = {
    greetFrench() {
        return "Bonjour!";
    }
};

const canVote = {
    eligible: true,
    vote () {
        if(this.eligible === true){
            return "Voting...";
        } else {
            return "Not eligible";
        }
    }
};

// ─────── Human Class ───────

class Human {
    constructor(name) {
        this._name = name;
    }

    get name () {
        return this._name;
    }
}

// Mix abilities into Human prototype
Object.assign(Human.prototype, canJump, canRun, canVote, speaksFrench, speaksSpanish);

// Create a human instance
const human = new Human('elen');

// ─────── Global Logger Mixin ───────

const withLogger = {
    log(message) {
        console.log(`[${this.constructor.name}] ${message}`);
    }
};

// Add logger to all objects
Object.assign(Object.prototype, withLogger);

// ─────── User Class (demonstrates Object.prototype logger) ───────

class User {
    constructor(name) {
        this.name = name;
    }
}

// ─────── Additional Abilities ───────

const canFly = {
    fly() {
        return `${this.name} is flying`;
    }
};

const canSwim = {
    swim() {
        return `${this.name} is swimming`;
    }
};

const canCastSpells = {
    cast() {
        return `${this.name} casts a fireball 🔥`;
    }
};

// ─────── Character Class ───────

class Character {
    constructor(name) {
        this._name = name;
    }

    get name () {
        return this._name;
    }
}

// ─────── Ability Assignment for Characters (by instance) ───────

// Assigns abilities directly to a character instance
function assignAbilities (character, abilitiesArray) {
    for(let i = 0; i < abilitiesArray.length; i++){
        for(let key in abilitiesArray[i]){
            if(character.hasOwnProperty(key)){
                // Prevent key conflicts by creating unique method names
                let index = 0;
                let name = key + index;
                while(character.hasOwnProperty(name)){
                    index++;
                    name = key + index;
                }
                character[name] = abilitiesArray[i][key];
            } else {
                character[key] = abilitiesArray[i][key];
            }
        }
    }
}

// Create a wizard character and assign abilities
const wizard = new Character("Star");
assignAbilities(wizard, [canCastSpells, canFly]);

console.log(wizard.cast()); // Star casts a fireball 🔥
console.log(wizard.fly());  // Star is flying

// ─────── Elf Class ───────

class Elf {
    constructor(name) {
        this.name = name;
    }
}

// ─────── Prototype Mixin Composition for Elves ───────

// Assigns abilities to a class prototype
function composeMixins(target, ...mixins) {
    for(let i = 0; i < mixins.length; i++){
        Object.assign(target, mixins[i]);
    }
}

// Add abilities to Elf prototype
composeMixins(Elf.prototype, canFly, canCastSpells);

// Create an Elf instance and test
const legolas = new Elf("Legolas");
console.log(legolas.fly());  // Legolas is flying

// ─────── Conflict-prone Ability Mixins (e.g., has same method name `use`) ───────

const hasGun = {
    use() {
        return `${this.name} fires a gun 🔫`;
    }
};

const hasMagic = {
    use() {
        return `${this.name} casts a spell ✨`;
    }
};

// ─────── Assigning Conflict Abilities ───────

const hybrid = new Elf("Elf");

// Reuse assignAbilities to handle naming conflicts
assignAbilities(Elf.prototype, [hasGun, hasMagic]);

console.log(hybrid.use());   
console.log(hybrid.use0());  
