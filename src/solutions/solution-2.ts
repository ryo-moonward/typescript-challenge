type SolutionUser = {
  id: string;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  roles: string[];
};

const solutionUser: SolutionUser = {
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

type UpdateUserArgs<T extends keyof SolutionUser> = {
  key: T;
  value: SolutionUser[T];
};

export const solutionUpdateUser = <T extends keyof SolutionUser>({
  key,
  value,
}: UpdateUserArgs<T>) => {
  solutionUser[key] = value;
};

solutionUpdateUser({ key: "email", value: "ryo@moonward.com.au" });
