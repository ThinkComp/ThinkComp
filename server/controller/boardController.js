const Board = require("../model/boardModel");

exports.getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find();

    res.json(boards);
  } catch (error) {
    console.log(error);
  }
};
