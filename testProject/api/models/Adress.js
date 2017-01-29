module.exports = {
    attributes: {

          nom: {
          type: 'string',
          required: true
          },

          prenom: {
          type: 'string',
          required: true
          },

          ville: {
          type: 'string',
          required: true
          },

          code_postal: {
                    type: 'string',
                    minLength: 5,
                    required: true
                    },

          owner: {
          model: 'user'
          }
  }
};

