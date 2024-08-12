const router = require("express").Router();
const playerController = require("../controllers/player");

router.post("/players",  playerController.addPlayers);

router.get("/fetch-all-players", playerController.getAllPlayers);

router.put("/update-player/:id", playerController.updatePlayerById);

router.get("/fetch-player/:id",  playerController.getPlayerById);

router.delete("/delete-player/:id", playerController.deletePlayerById);

module.exports = router;