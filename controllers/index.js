const Graph = require("../models/Graph");

module.exports = {
  async findGraph(req, res) {
    try {
      const result = await Graph.findAll();
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async createGraph(req, res) {
    try {
      const graph = {
        resultTime: req.body.resultTime,
        enodebId: req.body.enodebId,
        cellId: req.body.cellId,
        availDur: req.body.availDur,
      };

      const result = await Graph.create(graph);
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
