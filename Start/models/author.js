var mongoose = require("mongoose");
const { first } = require("underscore");

console.log("Initializing author schema");

var authorSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    birthdate: { type: Date, required: true, max: Date.now() },
    country: { type: String, default: "NL" },
    ranking: { type: Number, min: 1 },
    // books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    books: [{ type: String, ref: "Book" }],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

authorSchema.virtual("fullName").get(function () {
  return `${this.firstname} ${this.lastname}`;
});

authorSchema.virtual("age").get(function () {
  const date = new Date(Date.now() - this.birthdate.getTime());

  return date.getFullYear() - 1970;
});

authorSchema.virtual('numberOfBooks').get(function () {
    return this.books.length;
});

mongoose.model("Author", authorSchema);
