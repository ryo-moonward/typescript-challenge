interface UserRoleConfig {
  user: ["view", "create", "update"];
  superAdmin: ["view", "create", "update", "delete"];
}

/* *
    * Create a Role type using UserRoleConfig interface
    * Role type has all of roles in user and superAdmin
    * it should be type Role = "view" | "create" | "update" | "delete"
*/

// type Role = 