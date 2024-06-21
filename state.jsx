const user = {
  id: "1",
  name: "Ivan",
  lastname: "Ivanov",
  email: "ivanov@mail.ru",
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
  about: "О себе",
};

// const users = {
//   0: {
//     name: "Джон",
//     lastname: "Даккет",
//     email: "jo@mail.ru",
//     id: 14,
//     avatar:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
//     about: "О себе",
//   },
//   1: {
//     name: "Кайл",
//     lastname: "Симпсон",
//     email: "jo@mail.ru",
//     id: 4,
//     avatar:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
//     about: "О себе",
//   },
//   2: {
//     name: "Мария",
//     lastname: "Шарапова",
//     email: "jo@mail.ru",
//     id: 7,
//     avatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
//     about: "О себе",
//   },
//   3: {
//     name: "Костя",
//     lastname: "Петров",
//     email: "jo@mail.ru",
//     id: 9,
//     avatar:
//       "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
//     about: "О себе",
//   },}

let users = [];

export function getUser(usersId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == usersId) return users[i];
  };
  return user;
}

export async function getUsers() {
  let response = await fetch("http://klenk.p-host.in/getUsers");
  users = await response.json();

  //console.log(users);
  return users;
}
