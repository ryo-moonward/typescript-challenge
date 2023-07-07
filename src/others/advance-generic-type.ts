interface Animal {
  name: string;
}

interface Human {
  firstName: string;
  lastName: string;
}

// export const getDisplayName = <T extends Animal | Human>(
//     item: T
//   ): T extends Human ? { humanName: string } : { animalName: string } => {
//     if ("name" in item) {
//       return {
//         animalName: item.name
//       }
//     }
//     return {
//       humanName: item.firstName
//     }
//   };

export const getDisplayName = () => {}