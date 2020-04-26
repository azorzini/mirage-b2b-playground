import { Factory, trait } from 'miragejs';
import { random } from 'faker';

const today = new Date();
const usageNumber = random.number({ min: 0, max: 10 });

export default {
  //HTTP RECEIVE IS DEFAULTED
  endpoint: Factory.extend({
    environmentId: '77e4cbba-463f-49af-a58a-536574a5c670',
    endpointTypeId: 'AA1FD35B-50AF-47FE-91BB-48A7ED4AB685',
    partnerId: random.uuid(),
    hostCertificateId: null,
    partnerCertificateId: null,
    usedInDeployments: usageNumber,
    flowDependencyCount: usageNumber,
    usedInConfigurations: usageNumber,
    deployment: null,
    endpointRole: 'RECEIVE',
    endpointType: 'HTTP',
    createdAt: today.toISOString(),
    createdBy: random.uuid(),
    updatedAt: today.toISOString(),
    updatedBy: random.uuid(),
    isComplete: true,
    config: {
      protocol: 'HTTP',
      path: '/',
      allowedMethods: 'POST',
      persistentConnections: random.boolean(),
      connectionIdleTimeout: 30000,
      responseTimeout: 15000,
      allowStorageApiUIConnection: random.boolean(),
      tlsContext: null,
      configName: 'http',
      serverAddress: 'localhost',
      serverPort: 80,
      authMode: {
        authType: 'NONE',
        csmSecret: null,
      },
    },
    dependenciesInfo: [
      {
        id: 1,
        name: 'a message flow name',
        configured: random.boolean(),
        deployed: random.boolean(),
      },
      {
        id: 2,
        name: 'another message flow name',
        configured: random.boolean(),
        deployed: random.boolean(),
      },
    ],
    receive: trait({
      endpointRole: 'RECEIVE',
    }),
    receive_ack: trait({
      endpointRole: 'RECEIVE_ACK',
    }),
    send: trait({
      endpointRole: 'SEND',
    }),
    storage_api: trait({
      endpointRole: 'STORAGE_API',
    }),
    //Trait to create an as2
    as2: trait({
      endpointType: 'AS2',
      endpointTypeId: 'AB4C76B7-01B0-4BBA-8F04-31C1487A3708',
      config: {
        protocol: 'HTTPS',
        httpEndpointUrl: null,
        signAlgorithm: 'EMPTY',
        fallbackDigestAlgorithm: 'None',
        filename: null,
        encoding: 'BINARY',
        encryptionAlgorithm: 'EMPTY',
        messageCompressed: random.boolean(),
        messageSigned: random.boolean(),
        messageEncryption: random.boolean(),
        mdnSigned: random.boolean(),
        mdnRequired: random.boolean(),
        mdnAsync: random.boolean(),
        mdnAsyncUri: null,
        partnerFrom: null,
        partnerTo: null,
        partnerShip: null,
        as2keyStore: null,
        mdnReceiverModulePort: null,
        receiverModulePort: null,
        mdnResponseMaxWaitSeconds: 60,
        configName: 'as2',
        serverAddress: null,
        serverPort: null,
        authMode: {
          authType: 'NONE',
          csmSecret: null,
        },
      },
    }),
    sftp: trait({
      endpointType: 'sftp',
      endpointTypeId: '3BCC65E5-040B-47EB-8FC7-27C89225F1BC',
      config: {
        path: '/',
        fileAge: 500,
        pollingFrequency: 60000,
        sizeCheckWaitTime: 1000,
        movedPath: '/',
        configName: 'sftp',
        serverAddress: 'localhost',
        serverPort: 22,
        authMode: {
          username: 'b2bteamdev',
          password: 'ed59452b-e260-4d78-b75c-76ed07a7fdc8',
          authType: 'BASIC',
          csmSecret: {
            secretId: 'ed59452b-e260-4d78-b75c-76ed07a7fdc8',
            secretGroupId: 'a2d31d4b-5f2d-4d32-adbb-2ec9e3e9f6c6',
            grantResponse: {
              path: 'sharedSecrets/ed59452b-e260-4d78-b75c-76ed07a7fdc8',
              accessGrant: '',
            },
          },
        },
      },
    }),
    description(i) {
      return `Description of endpoint # ${i}`;
    },
  }),
};
