import express from "express";

const app = express();
app.use(express.json()); // for parsing application/json
const PORT = process.env.PORT || 3000;

const users = [
  { id: 1, name: "minh", displayName: "Minh"},
  { id: 2, name: "Nam", displayName: "Nam"},
  { id: 3, name: "hai", displayName: "Hai"},
  { id: 4, name: "hoa", displayName: "Hoa"},
  { id: 5, name: "khoa", displayName: "Khoa"},
];

// localhost:3000
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello World" });
});

// localhost:300/api/users
app.get("/api/users", (req, res) => {
  // console.log(req.query);
  const {
    query: { filter, value },
  } = req;
  if (filter && value)
    res.send(
      users.filter((user) => {
        if (filter !== "id") return user[filter].toLowerCase().includes(value);
        else return user[filter] == value;
      })
    );
  return res.send(users);
});

// localhost:3000/api/users/:id
app.get("/api/users/:id", (req, res) => {
  // console.log(req.params);
  const parsedId = parseInt(req.params.id);
  // console.log(parsedId);
  if (isNaN(parsedId)) {
    return res.status(400).send({ msg: "Invalid ID" });
  }
  const findUser = users.find((user) => user.id === parsedId);
  if (!findUser) {
    return res.status(404).send({ msg: "User not found" });
  } else {
    res.send(findUser);
  }
  return res.sendStatus(200);
});


app.post("/api/users", (req, res) => {
  console.log(req.body);
  const newUser = { id: (users[users.length-1]).id+1, ...req.body}
  users.push(newUser);
  return res.status(201).send(users);
});


app.put("/api/users/:id", (req, res) => {
  const {body, params: {id}} = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return res.status(400).send({ msg: "Invalid ID" });
  };
  const index = users.findIndex((user) => user.id === parsedId);
  if (index === -1) {
    return res.status(404).send({ msg: "User not found" });
  };
  users[index] = {...users[index], ...body};
  return res.sendStatus(200);
});


app.delete("/api/users/:id", (req, res) => {
  const {id} = req.params;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return res.status(400).send({ msg: "Invalid ID" });
  };
  const index = users.findIndex((user) => user.id === parsedId);
  if (index === -1) {
    return res.status(404).send({ msg: "User not found" });
  };
  users.splice(index, 1);
  return res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
