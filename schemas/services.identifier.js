var email = require('./email');
var slug = require('./slug');

var postIdentifier = {
  type: [{
    type: 'object',
    properties: {
      type: {
        required: true,
        type: 'string',
        enum: ['Profile', 'PersonalIdentity']
      },
      sysSlug: slug()
    },
    additionalProperties: false
  }, {
    type: 'object',
    properties: {
      type: {
        required: true,
        type: 'string',
        enum: ['email']
      },
      email: email()
    },
    additionalProperties: false
  }]
};

module.exports.postIdentifier = function() {
  return postIdentifier;
};
