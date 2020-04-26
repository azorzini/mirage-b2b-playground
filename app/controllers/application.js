import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import versions from "../versions";

export default class ApplicationController extends Controller {
  @service router;
  @tracked sidebarIsOpen;

  versionsCount = versions.length;

  get currentVersion() {
    let slug = this.router.currentRoute.params.version_slug;

    return slug.replace("version-", "");
  }

  get previousVersion() {
    return +this.currentVersion > 1 ? +this.currentVersion - 1 : null;
  }

  get nextVersion() {
    return +this.currentVersion < versions.length
      ? +this.currentVersion + 1
      : null;
  }

  @action
  toggleSidebarIsOpen() {
    this.sidebarIsOpen = !this.sidebarIsOpen;
  }

  @action
  transitionToPreviousVersion() {
    this.router.transitionTo(`/version-${this.previousVersion}`);
  }

  @action
  transitionToNextVersion() {
    this.router.transitionTo(`/version-${this.nextVersion}`);
  }
}
