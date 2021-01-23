const ROUTES = {
  api: '/api',
  people: {
    root: '/people',
    detail: '/people/:personId',
  },
};

const MESSAGE = {
  ok: 'ok',
  created: 'created',
  internalServerError: 'Internal Server Error',
};

module.exports = { ROUTES, MESSAGE };
