import { Factory, trait } from 'miragejs';
import { random } from 'faker';
const usageNumber = random.number({ min: 0, max: 10 });
const statusTemplate = {
  endDate: '2019-10-04T20:33:21Z',
  id: random.uuid(),
  startDate: '2019-10-04T20:33:21Z',
  status: 'ACTIVE',
};

export default {
  partner: Factory.extend({
    nodovivante: trait({
      name: 'Nodo Vivante',
    }),
    melora: trait({
      name: 'Melora',
      websiteUrl: 'http://melora.com',
    }),
    name: 'Mulesoft',
    description: 'This is a description for Mulesoft partner',
    websiteUrl: 'mulesoft.com',
    deleted: trait({
      status: {
        ...statusTemplate,
        status: 'DELETED',
      },
    }),
    inactive: trait({
      status: {
        ...statusTemplate,
        status: 'INACTIVE',
      },
    }),
    draft: trait({
      status: {
        ...statusTemplate,
        status: 'DRAFT',
      },
    }),
    blocked: trait({
      status: {
        ...statusTemplate,
        status: 'BLOCKED',
      },
    }),
    status: statusTemplate,
    environmentId: '838bc0d8-4d22-4906-a85f-183f9dbde00c',
    hostFlag: false,
    host: trait({
      hostFlag: true,
    }),
    dependencyCounts: usageNumber,
    logo: null,
    identifiers: [],
    withIdentifiers: trait({
      identifiers: [
        {
          code: '01',
          id: 'd8f291d9-18f2-4b21-983c-02e3e7766880',
          identifierTypeQualifierId: 'dacbb21c-f452-434e-985f-c8c588ebf2f2',
          qualifierLabel: '01 (Duns Number)',
          status: 'ACTIVE',
          typeLabel: 'X12 - ISA',
          value: 'DUNS1',
        },
      ],
    }),
    addresses: [],
    withAddresses: trait({
      addresses: [
        {
          addressLine_1: '184st NE Preston RD',
          addressLine_2: '16507 Legacy DR',
          city: 'PLANO',
          country: 'USA',
          id: random.uuid(),
          postalCode: '75000',
          state: 'TX',
        },
      ],
    }),
    createdAt: '2019-10-04T20:33:21Z',
    createdBy: {
      userId: 'e3cdcf59-a2b4-41c3-981e-3311cc833669',
      firstName: 'B2b',
      lastName: 'Team',
      userName: 'b2b-team-dev',
    },
    updatedAt: '2019-10-04T20:33:21Z',
    updatedBy: {
      userId: 'e3cdcf59-a2b4-41c3-981e-3311cc833669',
      firstName: 'B2b',
      lastName: 'Team',
      userName: 'b2b-team-dev',
    },
    protocols: ['HTTP', 'SFTP'],
    standards: ['JSON'],
    usedInDeployments: { inboundCount: 0, outboundCount: 1 },
  }),
};
