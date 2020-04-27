
export default function routes() {
  this.namespace =
    'partnermanager/partners/api/v1/organizations/TEST_ORG_ID/environments/TEST_ENV_ID/';
  this.timing = 0;

  this.get('partners/PARTNER_ID/certificates/:id', (schema, request) => {
    let id = request.params.id;

    return schema.db.certificates.findBy({ id });
  });

  this.get('endpoints/:id', (schema, request) => {
    let id = request.params.id;

    return schema.db.endpoints.findBy({ id });
  });

  this.get('documentflows/:id/resolvedview', (schema, request) => {
    let id = request.params.id;

    return schema.db.messageFlows.findBy({ id });
  });

  this.get('identifierTypes', () => {
    return [];
  })
}
