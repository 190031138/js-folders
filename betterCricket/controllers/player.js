const Players = require("../models/player");
const { Op } = require('sequelize');

exports.addPlayers = async (req, res) => {
  try {

    let { player_name, jersey_number, role } = req.body;

    const existingJerseyNumber = await Players.findOne({
      where: { jersey_number: jersey_number }
    });

    if (existingJerseyNumber) {
      return res.status(409).json({
        message: "Player already exists with same jersey number", data: []
      });
    }

    const newPlayer = await Players.create({
      player_name,
      jersey_number,
      role,
    });

    return res.status(201).json({
      status : "success",
      message: "Player added successfully",
      data : [newPlayer]
    });

  } catch (err) {
    return res.status(400).send(err.message);
  }
};

// GET ALL THE  ALLERGY DETAILS
exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Players.findAll();
    return res.status(200).json({
      status : "success",
      message: "Players list fetched",
      data: players,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// //UPDATE ALLERGY BY ID
exports.updatePlayerById = async (req, res) => {
  try {
    const playerId = req.params.id;
    const updatedData = req.body;

    const existingPlayer = await Players.findOne({
      where: {
        id: { [Op.not]: playerId }, 
        jersey_number: updatedData.jersey_number,
      },
    });

    if (existingPlayer) {
      return res.status(400).json({
        message: "Player with same jersey number already exists",
        data : []
      });
    }

    const [updatedRowsCount] = await Players.update(updatedData, {
      where: { id: playerId },
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({
        message: "Player not found",
      });
    }

    const updatedAllergy = await Players.findByPk(playerId);

    return res.status(200).json({
      status : "success",
      message: "Player updated successfully",
      data : [updatedAllergy],
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// //Get by ID
exports.getPlayerById = async (req, res) => {
  try {
    const playerId = req.params.id;

    const player = await Players.findByPk(playerId,
      { attributes: { exclude: ['id'] } });

    if (!player) {
      return res.status(200).json({
        message: "Player not found", data: []
      });
    }

    return res.status(200).json({
      status : "success",
      message: "Player details fetched",
      data: [player],
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// //Get by user_id
exports.deletePlayerById = async (req, res) => {
    try {
      const playerId = req.params.id;
  
      // Check if the player exists
      const player = await Players.findOne({
        where: { id: playerId }
      });
  
      if (!player) {
        return res.status(404).json({
          message: "Player not found",
          data: []
        });
      }
  
      // Delete the player
      await Players.destroy({
        where: { id: playerId }
      });
  
      return res.status(200).json({
        status: "success",
        message: "Player deleted successfully",
        data: []
      });
  
    } catch (err) {
      return res.status(400).send(err.message);
    }
  };
  