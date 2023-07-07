type User = {
  id: string;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  roles: string[];
};

const user: User = {
  id: "123",
  name: "John Doe",
  age: 20,
  email: "kenaa@example.com",
  isActive: true,
  roles: ["admin", "user"],
};

/* *
    * Complete a updateUser function
    * Update a user field by field with this single function
*/

export const updateUser = () => {}