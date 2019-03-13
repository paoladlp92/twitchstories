//UserSchema/Entry instead
//confused with character

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//check robo t if u make changes to database structure
var UserSchema = new Schema({
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  entry: {
    type: String,
    trim: true,
    required: "Text is Required",
    validate: [
      function(input) {
        return input.length >= 1;
      },
      "Text should contain atleast 1 letter."
    ]
  },

  userCreated: {
    type: Date,
    default: Date.now
    
  }
});

// This creates our model from the above schema, using mongoose's model method
var Entry = mongoose.model("Entry", UserSchema);

// Export the User model
module.exports = Entry;
