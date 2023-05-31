const { Schema, model} = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique:true,
      required: true,
      trim:true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
      match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref:'Thought',
    },
    ],
    friends: [
      {  
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

const User= model('User', userSchema);

module.exports = User;