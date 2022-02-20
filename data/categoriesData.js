import {icons, COLORS} from "../config.js";
const confirmStatus = "C";
const pendingStatus = "P";
const categoriesData = [
  {
    id: 1,
    name: "Personal",
    icon: icons.education,
    color: COLORS.yellow,
    expenses: [
      {
        id: 1,
        title: "Groceries",
        desc: "Bought some groceries",
        location: "Dhulikhel",
        total: 100,
      },
      {
        id: 2,
        title: "hehe",
        desc: "Bought some groceries",
        location: "Dhulikhel",
        total: 100,
        status: confirmStatus,
      },
      {
        id: 3,
        title: "hehe",
        desc: "Bought some groceries",
        location: "Dhulikhel",
        total: 100,
        status: confirmStatus,
      },
    ],
  }
];

export default categoriesData;
