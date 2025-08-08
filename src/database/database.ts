const mongoose = require('mongoose');
class Database {
  private connection: string | undefined;

  constructor() {
    this.connection = process.env.MONGODB_URL;
    this.Connect();
  }

  async Connect() {
    try {
      await mongoose.connect(this.connection);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Database;
