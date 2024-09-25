module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['Fzn5/0tnydkepa3IXOZ7lg==', 'kemaociXWpn1OaAGKqcpsQ==', 'Xsa0a2GW3sXKYQ14RGJwaw==', 'LaVJY7S0vgZLPwVPe2kKkQ==']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
