/*global React*/
/*global ReactDOM*/
import text from "./i18n.js";

const { createElement: R, useState, useEffect } = window.React;
const mui = window.MaterialUI;

ReactDOM.render(R(MainShit), document.querySelector("#root"));

function MainShit() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let response = await fetch("http://localhost:3000/users");
    setUsers(await response.json());

    response = await fetch("http://localhost:3000/meals");
    setMeals(await response.json());
  }

  return user.name
    ? R(MealOptions, { ...user, meals })
    : R("div", { className: "game" }, R(ProfilePicker, { users, setUser }));
}

function MealOptions({ name, avatar = "noavatar", meals }) {
  return R(
    "div",
    { className: "meals" },
    R(mui.Avatar, { alt: name, src: `/images/avatar/${avatar}.jpg` }),
    R(mui.Typography, null, name),
    R(mui.Divider),
    R(
      mui.Box,
      { sx: { flexGrow: 1 } },
      R(
        mui.Grid,
        {
          container: true,
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          spacing: 2,
        },
        meals.map((meal) => R(Meal, { key: meal.title, meal }))
      )
    )
  );
}

function Meal({ meal }) {
  return R(
    mui.Box,
    { sx: { flexGrow: 1 } },
    R(
      mui.Grid,
      {
        container: true,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        spacing: 2,
      },
      R(mui.Typography, null, text(meal.title)),
      R(
        mui.Grid,
        { item: true, xs: 12, key: meal },
        R(
          mui.Paper,
          { className: "meal-paper", elevation: 3 },
          R(DishPicker, { ...meal.dish })
        )
      )
    )
  );
}

function DishPicker({ title, options }) {
  return R(
    mui.FormControl,
    { component: "fieldset" },
    R(mui.FormLabel, { component: "legend" }, text(title)),
    R(
      mui.RadioGroup,
      {
        "aria-label": title,
        defaultValue: "female",
        name: "radio-buttons-group",
      },
      options.map((option) =>
        R(mui.FormControlLabel, {
          key: option.name,
          value: option.name,
          control: R(mui.Radio),
          label: text(option.label),
        })
      )
    )
  );
}

function ProfilePicker({ users, setUser }) {
  return R(
    "div",
    { className: "profiles" },
    R(
      mui.Box,
      { sx: { flexGrow: 1 } },
      R(
        mui.Grid,
        {
          container: true,
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          spacing: 2,
        },
        users.map((user) =>
          R(ProfileButton, { ...user, onClick: () => setUser(user) })
        )
      )
    )
  );
}

function ProfileButton({ name, onClick }) {
  return R(
    mui.Grid,
    { item: true, xs: 12, key: name },
    R(mui.Button, { variant: "contained", onClick }, name)
  );
}
