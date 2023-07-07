interface Fish {
  name: string;
  age: number;
  swim: () => void;
}

interface Bird {
  name: string;
  age: string;
  fly: () => void;
}

/* *
 * Complete isFish type predicate function
 * isFish returns boolean to check if argument is Fish type
 */
const isFish = (pet: Fish | Bird) => {};

/* *
 * Complete petPerfom type predicate function
 * petPerfom returns either swim or fly function depending on pet type
 */
const petPerform = (pet: Fish | Bird) => {};
