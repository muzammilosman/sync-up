const allRoles = {
  user: ['getVenues', 'manageVenues'],
  admin: ['getUsers', 'manageUsers', 'getVenues', 'manageVenues'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
