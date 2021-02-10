var mongoose = require("mongoose");

console.log("Initializing books schema");

var bookSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    publishDate: { type: Date, required: true, max: Date.now() },
    category: { type: String, required: true },
    chapters: [
      {
        title: { type: String, required: true },
        numberOfPages: { type: Number, required: true },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

bookSchema.virtual("totalNumberOfPages").get(function () {
  let total = this.chapters.reduce((acc, cur) => {
    return acc + cur.numberOfPages;
  }, 0);

  return total;
});

mongoose.model("Book", bookSchema);
