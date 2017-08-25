db = db.getSiblingDB("chat_dev");
db.createUser({
    user: "usermaster",
    pwd: "passmaster",
    roles: ["dbAdmin"]
});