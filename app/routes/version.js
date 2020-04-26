import Route from "@ember/routing/route";
import { scheduleOnce } from "@ember/runloop";
import { set } from "@ember/object";
import versions from "../versions";

export default class extends Route {
  model({ version_slug }) {
    if (window.server) {
      window.server.shutdown();
    }

    // Versions are 1-based
    let versionNumber = +version_slug.replace("version-", "");
    let versionIndex = versionNumber - 1;

    let server = versions[versionIndex]();
    server.timing = 250;
    window.server = server;
    return {
      server,
      versionSlug: version_slug
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    set(controller, "show", false);
    scheduleOnce("afterRender", this, this.deferredWork);
  }

  deferredWork() {
    set(this.controller, "show", true);
  }
}
