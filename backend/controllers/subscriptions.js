const db = require("../models/index.js");

const router = require("express").Router();

// returns all subscriptions
router.get("/", async (req, res) => {
  console.log("get all subscriptions");
  db.select("*")
    .from("services")
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ Error: "error occurred" });
    });
});

//update subscription by id
router.post("/:id", (req, res) => {
  console.log("update subscriptions");
  const changes = req.body;
  const id = req.params.id;
  db("services")
    .where("id", "=", id)
    .update(changes)
    .then(() => {
      console.log("updated subscriptions");
      return res.redirect("http://localhost:3000/"); //this actual sets the url in the address bar on the client browser to this
    })
    .catch((err) => {
      console.log(err);
    });
  //db is the name that refers to the postgres software,
  //postgres is the database software
  //onlineSubscriptions is the name of the database using  postgres software
});

//return a single game review by id
router.get("/:id", (req, res) => {
  console.log("return subscriptions");
  //variable name is id,
  //equal sign means we are having the variable whose name is id having
  //the value of what is in the req.params.id variable
  const id = req.params.id;
  console.log("id: " + id);
  db.select("*")
    .from("services")
    .where("id", "=", id)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete single subscription by id
router.delete("/:id", (req, res) => {
  console.log("delete subscription");
  const id = req.params.id;
  const subscriptionIdToDelete = Number(id);
  console.log(subscriptionIdToDelete);
  db("services")
    .where("id", "=", subscriptionIdToDelete)
    .del()
    .then(() => {
      console.log("subscription deleted");
      return res.json({ msg: "subscription deleted" });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ msg: "err occured" });
    });
});

//add one single subscription by id
router.post("/", async (req, res) => {
  console.log("add one subscription");
  const { name, cost, frequency, company_id} = req.body;
  console.log("req.body: " + JSON.stringify(req.body));
  const maxIdQuery = await db("services")
    .select("id")
    .orderByRaw("id DESC")
    .first();
    console.log(JSON.stringify(maxIdQuery));
  if (maxIdQuery === undefined) {
    maxId = "0";
    console.log("No data exists, using initial id of 0");
  } else {
    maxId = maxIdQuery.id;
    console.log("maxIdQuery : " + JSON.stringify(maxIdQuery));
  }
  db("services")
    .insert({
      name: name,
      cost: cost,
      frequency: frequency,
      id: parseInt(maxId) + 1,
      company_id: company_id
    })
    .then(() => {
      console.log("subscriptions added");
      return res.redirect("http://localhost:3000/"); //this actual sets the url in the address bar on the client browser to this
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
