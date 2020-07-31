const { Schema, model } = require('mongoose');
const hidden = require('mongoose-hidden')();

const definition = {
  status: {
    type: String,
    enum: [
      'pending',
      'processing',
      'finished',
      'failed',
    ],
    default: () => 'pending',
  },

  url: {
    type: String,
  },

  title: {
    type: String,
    default: () => null,
  },

  elements: {
    type: [Object],
    default: () => [],
  },
};

const options = {
  timestamps: true,

  toJSON: {
    virtuals: true,
  },
};

const schema = new Schema(definition, options);

schema.plugin(hidden);

module.exports = model('Page', schema, 'pages');
