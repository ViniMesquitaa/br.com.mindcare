export const getLink = (tipoUsuario, id) => {
  switch (tipoUsuario) {
    case "1":
    case "2":
      return `/admin/profile/${id}`;
    case "3":
      return `/pacient/${id}`;
    case "4":
      return `/professional/${id}`;
    default:
      return "/";
  }
};
