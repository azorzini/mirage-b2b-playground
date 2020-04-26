import { cloneDeep } from 'lodash';
import { Factory, trait } from 'miragejs';

let basicConfiguration = {
  id: '1220470e-3503-4802-80c4-aa651eede3c0',
  documentFlowId: '7f8abcb4-37cb-4da7-b4da-a8e25bac5af9',
  environmentId: '77e4cbba-463f-49af-a58a-536574a5c670',
  status: 'DRAFT',
  version: 0,
  preProcessingEndpointId: null,
  receivingEndpointId: null,
  receivingAckEndpointId: null,
  targetEndpointId: null,
  sourceDocTypeId: null,
  targetDocTypeId: null,
  documentMapping: [],
  receivingAckConfig: null,
  receivingEndpoint: null,
  sourceDocType: null,
  targetDocType: null,
  receivingAckInfo: null,
};

const mappingObject = {
  documentMapping: [
    {
      id: 'ebe587bc-3c5a-4737-b9af-ae32779d2207',
      mappingType: 'DWL_FILE',
      mappingContent: null,
      mappingSourceRef: 'CARR_MULE_990_map.dwl',
    },
  ],
};

const targetEndpointObject = {
  targetEndpointId: '4397886c-c55f-4351-bf55-237be6c4018c',
  targetEndpoint: {
    config: {
      configName: 'sftp',
      fileAge: 500,
      movedPath: null,
      path: '/',
      pollingFrequency: 1000,
      serverAddress: 'localhost',
      serverPort: 22,
      sizeCheckWaitTime: 1000,
      authMode: { authType: 'NONE' },
    },
    createdAt: '2020-04-17T15:02:56Z',
    createdBy: '56beca2d-f633-4b1f-abfa-01a6585af3fb',
    dependenciesInfo: [],
    deployment: null,
    description: '',
    endpointRole: 'SEND',
    endpointType: 'sftp',
    endpointTypeId: '3bcc65e5-040b-47eb-8fc7-27c89225f1bc',
    environmentId: '77e4cbba-463f-49af-a58a-536574a5c670',
    flowDependencyCount: 1,
    hostCertificateId: null,
    id: '4397886c-c55f-4351-bf55-237be6c4018c',
    isComplete: true,
    name: 'SFTP target 2',
    partnerCertificateId: null,
    partnerId: 'c3ca131d-d625-43d1-aa2b-3bea050f5e5b',
    updatedAt: '2020-04-17T15:02:56Z',
    updatedBy: '56beca2d-f633-4b1f-abfa-01a6585af3fb',
    usedInConfigurations: 0,
    usedInDeployments: 0,
  },
};

const targetDocObject = {
  targetDocTypeId: 'ebc037e4-aba4-47ae-9aac-c551cf5c888b',
  targetDocType: {
    baseType: {
      description: 'JSON Schema',
      documentName: 'JSON',
      ediFormatVersionId: '6fff4fa4-05e8-49c2-a89e-38f6f9323017',
      formatType: 'JSON',
      id: '64c8a31b-5748-49d4-9193-55ba3e6cd99b',
      label: 'JSON',
      schemaPath: '',
      version: 'V1',
      versionLabel: 'V1',
    },
    ediDocumentTypeId: '64c8a31b-5748-49d4-9193-55ba3e6cd99b',
    id: 'ebc037e4-aba4-47ae-9aac-c551cf5c888b',
    isStandard: true,
    name: 'JSON Document PO',
  },
};

const sourceDocObject = {
  sourceDocTypeId: '94b294d3-a784-4726-98c9-16eccbc3f226',
  sourceDocType: {
    id: '94b294d3-a784-4726-98c9-16eccbc3f226',
    name: '5010-850-Purchase Order 1',
    isStandard: true,
    ediDocumentTypeId: '1b181fc7-ce2a-48ee-9208-3681cd73e10a',
    baseType: {
      id: '1b181fc7-ce2a-48ee-9208-3681cd73e10a',
      documentName: '850',
      label: '850',
      schemaPath: '/schemas/x12/5010/850.esl',
      description: '',
      formatType: 'X12',
      version: 'v005010',
      versionLabel: '5010',
      ediFormatVersionId: '461a5b09-07fc-4ce1-8376-7595603bced5',
    },
  },
};

const receivingAckConfigObject = {
  receivingAckConfig: {
    require997: true,
    require999: false,
    ackConfigType: 'X12',
  },
};

const sftpReceivingEndpointObject = {
  receivingEndpointId: '8a7c1c5d-f41d-484e-90ae-164de2130b5f',
  receivingEndpoint: {
    id: '8a7c1c5d-f41d-484e-90ae-164de2130b5f',
    name: 'SFTP receive 4',
    description: 'Description',
    environmentId: '77e4cbba-463f-49af-a58a-536574a5c670',
    endpointTypeId: '3bcc65e5-040b-47eb-8fc7-27c89225f1bc',
    partnerId: 'c3ca131d-d625-43d1-aa2b-3bea050f5e5b',
    hostCertificateId: null,
    partnerCertificateId: null,
    usedInDeployments: 0,
    flowDependencyCount: 1,
    usedInConfigurations: 0,
    deployment: null,
    endpointRole: 'RECEIVE',
    endpointType: 'sftp',
    config: {
      path: 'sp',
      fileAge: 500,
      pollingFrequency: 60000,
      sizeCheckWaitTime: 1000,
      movedPath: '',
      configName: 'sftp',
      serverAddress: 'host',
      serverPort: 22,
      authMode: {
        username: 'user',
        password: '6213184a-6fe4-4afb-82a1-37d230d7f8f0',
        authType: 'BASIC',
        csmSecret: {
          secretId: '6213184a-6fe4-4afb-82a1-37d230d7f8f0',
          secretGroupId: 'a2d31d4b-5f2d-4d32-adbb-2ec9e3e9f6c6',
          grantResponse: {
            path: 'sharedSecrets/6213184a-6fe4-4afb-82a1-37d230d7f8f0',
            accessGrant: '',
          },
        },
      },
    },
    createdAt: '2020-04-23T01:27:02Z',
    createdBy: 'e3cdcf59-a2b4-41c3-981e-3311cc833669',
    updatedAt: '2020-04-23T01:27:02Z',
    updatedBy: 'e3cdcf59-a2b4-41c3-981e-3311cc833669',
    isComplete: true,
    dependenciesInfo: [],
  },
};

const receivingAckEndpointObject = {
  receivingAckEndpointId: '89388c48-4267-4ca1-b2eb-4b157b44110d',
  receivingAckEndpoint: {
    name: 'HTTP send-ack 1',
    description: 'An http endpoint description',
    environmentId: '77e4cbba-463f-49af-a58a-536574a5c670',
    endpointTypeId: 'aa1fd35b-50af-47fe-91bb-48a7ed4ab685',
    partnerId: '989304f0-b282-4ca1-93d3-ddbd9d4d49a7',
    hostCertificateId: null,
    partnerCertificateId: null,
    usedInDeployments: 0,
    flowDependencyCount: 1,
    usedInConfigurations: 0,
    deployment: null,
    endpointRole: 'RECEIVE_ACK',
    endpointType: 'http',
    config: {
      protocol: 'HTTP',
      path: '/',
      allowedMethods: 'POST',
      persistentConnections: false,
      connectionIdleTimeout: 30000,
      responseTimeout: 15000,
      allowStorageApiUIConnection: false,
      tlsContext: null,
      configName: 'http',
      serverAddress: 'endpoint',
      serverPort: 8080,
      authMode: {
        authType: 'NONE',
        csmSecret: null,
      },
    },
    createdAt: '2020-04-20T13:59:46Z',
    createdBy: 'e3cdcf59-a2b4-41c3-981e-3311cc833669',
    updatedAt: '2020-04-20T13:59:46Z',
    updatedBy: 'e3cdcf59-a2b4-41c3-981e-3311cc833669',
    isComplete: true,
    dependenciesInfo: [],
  },
};

const as2ReceivingEndpointObject = {
  receivingEndpointId: '0092e289-f2d7-4251-a4fc-630df90f2bdd',
  receivingEndpoint: {
    id: '0092e289-f2d7-4251-a4fc-630df90f2bdd',
    name: 'AS2 receive 3',
    description: 'An AS2 endpoint',
    environmentId: '77e4cbba-463f-49af-a58a-536574a5c670',
    endpointTypeId: 'ab4c76b7-01b0-4bba-8f04-31c1487a3708',
    partnerId: 'c3ca131d-d625-43d1-aa2b-3bea050f5e5b',
    hostCertificateId: null,
    partnerCertificateId: null,
    usedInDeployments: 0,
    flowDependencyCount: 1,
    usedInConfigurations: 0,
    deployment: null,
    endpointRole: 'RECEIVE',
    endpointType: 'as2',
    config: {
      protocol: 'HTTPS',
      httpEndpointUrl: null,
      signAlgorithm: 'EMPTY',
      fallbackDigestAlgorithm: 'None',
      filename: null,
      encoding: 'BINARY',
      encryptionAlgorithm: 'EMPTY',
      messageCompressed: false,
      messageSigned: false,
      messageEncryption: false,
      mdnSigned: false,
      mdnRequired: false,
      mdnAsync: false,
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
        keyContent: '51733242-02df-486e-b6a6-384185b75210',
        certificateContent: '51733242-02df-486e-b6a6-384185b75210',
        passphrase: '51733242-02df-486e-b6a6-384185b75210',
        authType: 'PRIVATE_KEY',
        csmSecret: {
          secretId: '51733242-02df-486e-b6a6-384185b75210',
          secretGroupId: 'a2d31d4b-5f2d-4d32-adbb-2ec9e3e9f6c6',
          grantResponse: {
            path: 'keystores/51733242-02df-486e-b6a6-384185b75210',
            accessGrant: '',
          },
        },
      },
    },
    createdAt: '2020-04-22T15:11:51Z',
    createdBy: 'e3cdcf59-a2b4-41c3-981e-3311cc833669',
    updatedAt: '2020-04-22T15:11:51Z',
    updatedBy: 'e3cdcf59-a2b4-41c3-981e-3311cc833669',
    isComplete: true,
    dependenciesInfo: [],
  },
};

const configMerger = messageFlow => {
  let newConfiguration = cloneDeep(basicConfiguration);
  if (messageFlow.withDocumentMapping) {
    newConfiguration = { ...basicConfiguration, ...newConfiguration, ...mappingObject };
  }
  if (messageFlow.withSourceDoc) {
    newConfiguration = { ...basicConfiguration, ...newConfiguration, ...sourceDocObject };
  }
  if (messageFlow.withReceivingAckConfig) {
    newConfiguration = { ...basicConfiguration, ...newConfiguration, ...receivingAckConfigObject };
  }
  if (messageFlow.withReceivingAckEndpoint) {
    newConfiguration = {
      ...basicConfiguration,
      ...newConfiguration,
      ...receivingAckEndpointObject,
    };
  }
  if (messageFlow.withTargetDoc) {
    newConfiguration = { ...basicConfiguration, ...newConfiguration, ...targetDocObject };
  }
  if (messageFlow.withTargetEndpoint) {
    newConfiguration = { ...basicConfiguration, ...newConfiguration, ...targetEndpointObject };
  }
  if (messageFlow.withSftpReceivingEndpoint) {
    newConfiguration = {
      ...basicConfiguration,
      ...newConfiguration,
      ...sftpReceivingEndpointObject,
    };
  }
  if (messageFlow.withAs2ReceivingEndpoint) {
    newConfiguration = {
      ...basicConfiguration,
      ...newConfiguration,
      ...as2ReceivingEndpointObject,
    };
  }

  return [newConfiguration];
};

export default {
  messageFlow: Factory.extend({
    id: '7f8abcb4-37cb-4da7-b4da-a8e25bac5af9',
    name: 'Untitled message flow',
    direction: 'INBOUND',
    partnerFromId: 'fb993e92-a0c3-4d56-b321-b2c382e53f14',
    partnerToId: 'c3ca131d-d625-43d1-aa2b-3bea050f5e5b',
    createdAt: '2020-04-14T19:26:35Z',
    createdBy: 'e3cdcf59-a2b4-41c3-981e-3311cc833669',
    modifierAt: null,
    modifiedBy: null,
    withDocumentMapping: trait({
      withDocumentMapping: true,
    }),
    withSourceDoc: trait({
      withSourceDoc: true,
    }),
    withReceivingAckConfig: trait({
      withReceivingAckConfig: true,
    }),
    withReceivingAckEndpoint: trait({
      withReceivingAckEndpoint: true,
    }),
    withTargetDoc: trait({
      withTargetDoc: true,
    }),
    withTargetEndpoint: trait({
      withTargetEndpoint: true,
    }),
    withSftpReceivingEndpoint: trait({
      withSftpReceivingEndpoint: true,
    }),
    withAs2ReceivingEndpoint: trait({
      withAs2ReceivingEndpoint: true,
    }),
    last_deploy_status: null,
    last_deploy_message: null,
    partnerFrom: {
      logo: null,
      identifiers: [
        {
          id: 'a2260515-2589-4983-a967-6bfbb5a867dc',
          identifierTypeQualifierId: 'dacbb21c-f452-434e-985f-c8c588ebf2f2',
          status: 'ACTIVE',
          qualifierLabel: '01 (Duns Number)',
          typeLabel: 'X12 - ISA',
          code: '01',
          value: 'DUNS1',
        },
      ],
      createdAt: '2020-04-13T21:33:12Z',
      createdBy: '',
      updatedAt: '2020-04-13T21:33:12Z',
      updatedBy: '',
      protocols: ['SFTP'],
      standards: ['X12'],
      usedInDeployments: {
        inboundCount: 4,
        outboundCount: 0,
      },
      id: 'fb993e92-a0c3-4d56-b321-b2c382e53f14',
      name: 'Melora',
      description: null,
      websiteUrl: null,
      status: {
        id: '631fee0a-e729-4c3e-8a1c-06c5a403f8c8',
        startDate: null,
        endDate: null,
        status: 'ACTIVE',
      },
      environmentId: '77e4cbba-463f-49af-a58a-536574a5c670',
      hostFlag: false,
      dependencyCounts: null,
      certificates: [],
    },
    partnerFromWithCertificateAndIdentifier: trait({
      partnerFrom: {
        logo: null,
        identifiers: [
          {
            id: 'a2260515-2589-4983-a967-6bfbb5a867dc',
            identifierTypeQualifierId: 'dacbb21c-f452-434e-985f-c8c588ebf2f2',
            status: 'ACTIVE',
            qualifierLabel: '01 (Duns Number)',
            typeLabel: 'X12 - ISA',
            code: '01',
            value: 'DUNS1',
          },
          {
            code: 'AS2',
            id: '2b56b607-aa06-42f1-bdc0-3b00fc206f4f',
            identifierTypeQualifierId: '25c1bc8a-801f-4947-a2a6-7721ef971460',
            qualifierLabel: 'AS2 Identity',
            status: 'ACTIVE',
            typeLabel: 'AS2 Identity',
            value: 'asdffff',
          },
        ],
        createdAt: '2020-04-13T21:33:12Z',
        createdBy: '',
        updatedAt: '2020-04-13T21:33:12Z',
        updatedBy: '',
        protocols: ['SFTP'],
        standards: ['X12'],
        usedInDeployments: {
          inboundCount: 4,
          outboundCount: 0,
        },
        id: 'fb993e92-a0c3-4d56-b321-b2c382e53f14',
        name: 'Melora',
        description: null,
        websiteUrl: null,
        status: {
          id: '631fee0a-e729-4c3e-8a1c-06c5a403f8c8',
          startDate: null,
          endDate: null,
          status: 'ACTIVE',
        },
        environmentId: '77e4cbba-463f-49af-a58a-536574a5c670',
        hostFlag: false,
        dependencyCounts: null,
        certificates: [
          {
            authority: 'nodovivante.com',
            certificateType: 'PEM',
            endpointDependenciesInfo: null,
            expires: '2033-09-18T13:31:48Z',
            flowDependencyCount: 1,
            id: 'bd93386f-d170-48bb-b0cf-d5331eb5f627',
            messageFlowDependenciesInfo: null,
            name: 'Certificate-1',
            partnerId: '78dfad73-134d-49f6-84b4-b718163dd156',
            runtimeStatus: null,
            serialNumber: 'BD496F84CA03C8D1',
            startDate: '2020-01-10T13:31:48Z',
            usedInAs2: true,
            usedInEndpoints: 1,
            csmSecret: {
              grantResponse: {
                path: 'certificates/d1b45f54-de10-4583-8c0e-547d6144b5f7',
                accessGrant: '',
              },
              secretGroupId: 'a2d31d4b-5f2d-4d32-adbb-2ec9e3e9f6c6',
              secretId: 'd1b45f54-de10-4583-8c0e-547d6144b5f7',
            },
          },
        ],
      },
    }),
    partnerTo: {
      logo: null,
      identifiers: [
        {
          id: '5ae59328-47b2-4f46-a279-153671555714',
          identifierTypeQualifierId: 'dacbb21c-f452-434e-985f-c8c588ebf2f2',
          status: 'ACTIVE',
          qualifierLabel: '01 (Duns Number)',
          typeLabel: 'X12 - ISA',
          code: '01',
          value: 'DUNS2',
        },
      ],
      createdAt: '2020-04-13T21:33:12Z',
      createdBy: '',
      updatedAt: '2020-04-13T21:33:12Z',
      updatedBy: '',
      protocols: ['HTTP', 'SFTP'],
      standards: ['JSON'],
      usedInDeployments: {
        inboundCount: 0,
        outboundCount: 4,
      },
      id: 'c3ca131d-d625-43d1-aa2b-3bea050f5e5b',
      name: 'Mulesoft',
      description: null,
      websiteUrl: null,
      status: {
        id: '37aab64f-c3c9-4e7d-b46b-b5a89c12cabf',
        startDate: null,
        endDate: null,
        status: 'ACTIVE',
      },
      environmentId: '77e4cbba-463f-49af-a58a-536574a5c670',
      hostFlag: true,
      dependencyCounts: null,
    },
    deployments: [],
    withDeployments: trait({
      deployments: [
        {
          deploymentId: 'de1f8c95-dc5e-4433-9a21-6c7284afbea8',
          deployedBy: '49f73dde-7b68-4e9c-b9da-f4a7cb474d3c',
          deployedAt: '2020-04-15T13:00:00Z',
          deploymentStatus: 'ACTIVE',
          deploymentMessage: null,
          deploymentComment: 'Deployment Comment',
          documentFlowConfigId: '1220470e-3503-4802-80c4-aa651eede3c0',
          documentFlowId: '7f8abcb4-37cb-4da7-b4da-a8e25bac5af9',
          environmentId: 'a1f6589a-00f3-4140-a81f-eca94610e353',
          auditHistory: [
            {
              id: '487491',
              targetId: 'de1f8c95-dc5e-4433-9a21-6c7284afbea8',
              prevStatus: 'DRAFT',
              newStatus: 'ACTIVE',
              comment: 'test 1',
              actionBy: '49f73dde-7b68-4e9c-b9da-f4a7cb474d3c',
              actionAt: '2020-04-15 13:00:04.121726',
            },
          ],
        },
        {
          deploymentId: '4de1dc57-2d7b-47b5-9335-ced83223e8cb',
          deployedBy: '49f73dde-7b68-4e9c-b9da-f4a7cb474d3c',
          deployedAt: '2020-04-14T17:37:48Z',
          deploymentStatus: 'FAIL',
          deploymentMessage: 'Deployment initialization failed (Ref: d8dc3fcb70162a6b )',
          deploymentComment: 'Deployment failed comment',
          documentFlowConfigId: '1220470e-3503-4802-80c4-aa651eede3c0',
          documentFlowId: '7f8abcb4-37cb-4da7-b4da-a8e25bac5af9',
          environmentId: 'a1f6589a-00f3-4140-a81f-eca94610e353',
          auditHistory: [
            {
              id: '487352',
              targetId: '4de1dc57-2d7b-47b5-9335-ced83223e8cb',
              prevStatus: 'DRAFT',
              newStatus: 'FAIL',
              comment: 'Deployment failed comment',
              actionBy: '49f73dde-7b68-4e9c-b9da-f4a7cb474d3c',
              actionAt: '2020-04-14 17:37:48.627627',
            },
          ],
        },
        {
          deploymentId: '74802be1-ea27-4ec2-9171-bd1ca3784310',
          deployedBy: '49f73dde-7b68-4e9c-b9da-f4a7cb474d3c',
          deployedAt: '2020-04-14T17:33:39Z',
          deploymentStatus: 'UNDEPLOYED',
          deploymentMessage: 'Deployment initialization failed (Ref: 5258e5171b077ea3 )',
          deploymentComment: 'Inactive',
          documentFlowConfigId: '1220470e-3503-4802-80c4-aa651eede3c0',
          documentFlowId: '7f8abcb4-37cb-4da7-b4da-a8e25bac5af9',
          environmentId: 'a1f6589a-00f3-4140-a81f-eca94610e353',
          auditHistory: [
            {
              id: '487346',
              targetId: '74802be1-ea27-4ec2-9171-bd1ca3784310',
              prevStatus: 'DRAFT',
              newStatus: 'ACTIVE',
              comment: 'Active',
              actionBy: '49f73dde-7b68-4e9c-b9da-f4a7cb474d3c',
              actionAt: '2020-04-14 17:33:39.873748',
            },
            {
              id: '487347',
              targetId: '74802be1-ea27-4ec2-9171-bd1ca3784310',
              prevStatus: 'ACTIVE',
              newStatus: 'UNDEPLOYED',
              comment: 'Undeployed',
              actionBy: '49f73dde-7b68-4e9c-b9da-f4a7cb474d3c',
              actionAt: '2020-04-14 17:33:39.873748',
            },
          ],
        },
      ],
    }),
    configurations() {
      return configMerger(this);
    },
  }),
};
