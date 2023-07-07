interface SolutionFish {
    name: string
    age: number
    swim: () => void
}

interface SolutionBird {
    name: string
    age: string
    fly: () => void
}

/* *
 * Complete isFish type predicate function
 * isFish returns boolean to check if argument is Fish type
*/
const solutionIsFish = (pet: SolutionFish | SolutionBird): pet is SolutionFish => {
  // return typeof pet.age === 'number'
  return (pet as SolutionFish).swim !== undefined;
}

/* *
  * Complete petPerfom predicate function
  * petPerfom returns either swim or fly functions depending on pet type
*/

const solutionPetPerform = (pet: SolutionFish | SolutionBird) => {
  if ("swim" in pet) {
    pet.swim();
  } else {
    pet.fly();
  }
};