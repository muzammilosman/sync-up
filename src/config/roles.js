const allRoles = {
  user: ['getVenues', 'manageVenues', 'getBookings', 'manageBookings'],
  admin: ['getUsers', 'manageUsers', 'getVenues', 'manageVenues', 'getBookings', 'manageBookings'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
