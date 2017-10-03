db = db.getSiblingDB("chatler");
db.createUser({
    user: "usermaster",
    pwd: "passmaster",
    roles: ["dbAdmin"]
});