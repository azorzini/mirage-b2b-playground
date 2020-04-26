import Controller from "@ember/controller";

export default class VersionController extends Controller {
  queryParams = ["tab"];

  tab = "config";
}
