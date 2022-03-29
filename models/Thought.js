// import dependencies
const { Schema, model } = require('mongoose');
const moment = require('moment');

// Schema to create a Thought model
const ThoughtSchema = new Schema(
  {
    ThoughtText: {
      type: String,
      required: 'Please enter a thought',
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => moment(createdAtVal).format('MMMM Do YYYY, h:mm:ss a')
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// this is to create a virtual property called 'comments'
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
