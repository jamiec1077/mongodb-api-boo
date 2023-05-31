const { Schema, model} = require('mongoose');
const Reactions =require('./reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required:[true,"Enter your Thought"],
      maxlength:280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions:[Reactions]
  },
  {
    toJSON: {
        virtual:true,
      getters: true,
    },
    id: false,
  }
);
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });
const Thought= model('thought', thoughtSchema);
module.exports = Thought;