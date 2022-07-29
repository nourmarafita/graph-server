const { getDatabase } = require("../config/mongodb");
const { ObjectId } = require("mongodb");

class Graph {
  static graphs() {
    const db = getDatabase();
    const graphs = db.collection("graph_db");
    return graphs;
  }

  static async findAll() {
    try {
      const graphs = this.graphs();
      const result = await graphs.find().toArray();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const graphs = this.graphs();
      const { resultTime, enodebId, cellId, availDur } = data;

      const result = await graphs.insertOne({
        resultTime: new Date(resultTime),
        enodebId,
        cellId,
        availDur,
      });
      return {
        _id: result.insertedId,
        resultTime,
        enodebId,
        cellId,
        availDur,
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Graph;
