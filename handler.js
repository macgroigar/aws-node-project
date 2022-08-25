'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Updated function only!',
        input: event,
      },
      null,
      2
    ),
  };
};
