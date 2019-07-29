export interface SDKConfig {
  appKey: string;
}

class KinveyApp {
  appKey: string;
}
const kinveyApp = new KinveyApp();

export function init(config: SDKConfig) {
  kinveyApp.appKey = config.appKey;
}

export function getAppKey(): string {
  return kinveyApp.appKey;
}
