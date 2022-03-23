const { Schema, model } = require('mongoose');

 // Validate/match an email address
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@+$/;
  return re.test(email);
};
// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      // Validate/match an email address
      type: String,
      unique: true,
      required: true,
      validate: [validateEmail, 'Please enter a valid email address']
    },
    thoughts:[{
      type: Schema.Types.ObjectId,
      ref: "Thought",
      max_length: 280,
    }],
  },
  {
    friends: [ {// Array of friends
      type: Schema.Types.ObjectId,
      ref: "user",
    }],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// virtuals to count the number of friends
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});
const User = model('user', userSchema);

module.exports = User;
