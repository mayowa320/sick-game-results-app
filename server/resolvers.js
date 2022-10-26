const { getRecords, saveRecord } = require("./controllers/user-controller.js");

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
      let indexOfBookToDelete = me.savedBooks.findIndex(
        (book) => book.bookId === bookId
      );
      me.savedBooks.splice(indexOfBookToDelete, 1);
      return me;
    },
  },
};
module.exports = resolvers;
