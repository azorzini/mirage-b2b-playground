import { Factory, trait } from 'miragejs';
import { date, random } from 'faker';

const today = new Date();
const usageNumber = random.number({ min: 0, max: 10 });

export default {
  certificate: Factory.extend({
    certificateType: 'PEM',
    name(i) {
      return `Certificate-${i}`;
    },
    csmSecret: {
      secretId: random.uuid(),
      secretGroupId: random.uuid(),
      grantResponse: {
        path: 'certificates/4d5cfe97-4081-4d67-8c3e-cbafa2f188df',
        accessGrant: '',
      },
    },
    authority: 'nodovivante.com',
    serialNumber: random.uuid(),
    startDate: today.toISOString(),
    expirationComponent: today.toISOString(),
    formattedStartDate: today.toISOString(),
    expires: (random.boolean()
      ? date.recent(random.number({ min: 30, max: 100 }))
      : date.recent(-random.number({ min: 30, max: 100 }))
    ).toISOString(),
    partnerId: random.uuid(),
    usedInEndpoints: usageNumber,
    flowDependencyCount: usageNumber,
    usedInMessageFlows: usageNumber,
    usedInAs2: random.boolean(),
    onWarning: trait({
      daysToExpiration: 7,
      status: 'ACTIVE',
    }),
    isExpired: trait({
      daysToExpiration: 0,
      status: 'INACTIVE',
    }),
    daysToExpiration: 51,
    status: 'ACTIVE',
    runtimeStatus: random.arrayElement(['ACTIVE', 'INACTIVE']),
    withEndpointDependencies: trait({
      endpointDependenciesInfo: [
        {
          id: 1,
          name: 'an endpoint name',
          configured: random.boolean(),
          deployed: random.boolean(),
        },
        {
          id: 2,
          name: 'another endpoint name',
          configured: random.boolean(),
          deployed: random.boolean(),
        },
      ],
    }),
    withMessageFlowDependencies: trait({
      messageFlowDependenciesInfo: [
        {
          id: 1,
          name: 'a message flow name',
          configured: random.boolean(),
          deployed: random.boolean(),
        },
        {
          id: 2,
          name: 'another message flow name',
          configured: true,
          deployed: true,
        },
      ],
    }),
    endpointDependenciesInfo: [],
    messageFlowDependenciesInfo: [],
  }),
};
