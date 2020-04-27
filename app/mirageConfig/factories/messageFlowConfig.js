import { Factory, trait } from 'miragejs';

export default {
  messageFlowConfig: Factory.extend({
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
    withReceivingAckConfig: trait({
      receivingAckConfig: {
        require997: true,
        require999: false,
        ackConfigType: 'X12',
      },
    }),
    //to remove from generic model
    withSourceDoc: trait({
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
    }),
    //to remove from generic model
    withTargetDoc: trait({
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
    }),
    withDocumentMapping: trait({
      documentMapping: [
        {
          id: 'ebe587bc-3c5a-4737-b9af-ae32779d2207',
          mappingType: 'DWL_FILE',
          mappingContent: null,
          mappingSourceRef: 'CARR_MULE_990_map.dwl',
        },
      ],
    }),
    withTargetEndpoint: trait({
      afterCreate(configuration, server) {
        const http = server.create('endpoint', 'send', { name: 'SFTP target 2' });
        configuration.update({ targetEndpointId: http.id, targetEndpoint: http });
      },
    }),
    withAs2ReceivingEndpoint: trait({
      afterCreate(configuration, server) {
        const as2 = server.create('endpoint', 'as2', 'receive');
        configuration.update({ receivingEndpointId: as2.id, receivingEndpoint: as2 });
      },
    }),
    withSftpReceivingEndpoint: trait({
      afterCreate(configuration, server) {
        const sftp = server.create('endpoint', 'sftp', 'receive');
        configuration.update({ receivingEndpointId: sftp.id, receivingEndpoint: sftp });
      },
    }),
    withReceivingAckEndpoint: trait({
      afterCreate(configuration, server) {
        const sftp = server.create('endpoint', 'receive_ack');
        configuration.update({ receivingAckEndpointId: sftp.id, receivingAckEndpoint: sftp });
      },
    }),
  }),
};
