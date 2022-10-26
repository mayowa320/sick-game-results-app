const {
  getRecords,
  saveRecord,
  removeRecord,
} = require("./controllers/user-controller.js");

const resolvers = {
  Query: {
    records: async () => {
      let result = await getRecords();
      return result;
    },
  },
  Mutation: {
    saveRecord: async (parent, record) => {
      try {
        let res = await saveRecord(record.input);
        return res._id;
      } catch (e) {
        return e;
      }
    },
    removeRecord: async (parent, record_id) => {
      try {
        let res = await removeRecord(record_id);
        return !!res;
      } catch (e) {
        return e;
      }
    },
  },
};
module.exports = resolvers;
