const certificatesSeeder = server => {
  server.create('certificate', 'withMessageFlowDependencies', 'withEndpointDependencies');
  server.create('certificate', {
    serialNumber: 'BD496F84CA03C8D2',
    authority: 'melora.com',
  });
};

const endpointSeeder = server => {
  server.create('endpoint');
  server.create('endpoint', 'receive', 'as2');
  server.create('endpoint', 'send', 'as2');
  server.create('endpoint', 'receive_ack', 'sftp');
  server.create('endpoint', 'send');
};

const partnerSeeder = server => {
  server.create('partner');
  server.create('partner', 'withIdentifiers', 'withAddresses');
  server.create('partner', 'host', 'draft');
};

export default function seeds(server) {
  certificatesSeeder(server);
  endpointSeeder(server);
  partnerSeeder(server);
}
