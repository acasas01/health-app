import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId()
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "IMG_0330.jpg",
    friends: [],
    insuranceStatus: true,
    lastInteraction: "05/12/2023",
    stiStatus: true,
    sexualOrientation: "Hetero",
    sti: "HIV",
    numInteraction: 21,
  },
  {
    _id: userIds[1],
    firstName: "micheal",
    lastName: "scott",
    email: "bruh@gmail.com",
    password: "$2b$10$asdfasdf1323//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "IMG_0330.jpg",
    friends: [],
    insuranceStatus: true,
    lastInteraction: "05/13/2023",
    stiStatus: true,
    sexualOrientation: "Hetero",
    sti: "HIV",
    numInteraction: 21,
  },
  {
    _id: userIds[2],
    firstName: "Alf",
    lastName: "hi",
    email: "cactusJack@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ5io8KXf4OAIe/X/AK9skyWUy",
    picturePath: "lobo.jpg",
    friends: [],
    insuranceStatus: true,
    lastInteraction: "05/14/2023",
    stiStatus: true,
    sexualOrientation: "Hetero",
    sti: "HIV",
    numInteraction: 21,
  },
  {
    _id: userIds[3],
    firstName: "bye",
    lastName: "hello",
    email: "brobro@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe",
    picturePath: "lobo.jpg",
    friends: [],
    insuranceStatus: true,
    lastInteraction: "05/12/2023",
    stiStatus: true,
    sexualOrientation: "Hetero",
    sti: "HIV",
    numInteraction: 21,
  },
  
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    sti: "Chlamydia",
    description: "Some really long random description",
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "travis",
    lastName: "scotts",
    description:
      "Another really long random description. This one is longer than the previous one.",
    sti: "Gonorrhea",
    comments: [
      "one more random comment",
      "and another random comment",
      "no more random comments",
      "I lied, one more random comment",
    ],
  },
  
];