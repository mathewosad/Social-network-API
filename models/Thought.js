const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reaction');

// this the schema for the thought
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'A thought is required',
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// this Reaction model is used to create a new reaction
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// this is the model for the user
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;