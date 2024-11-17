import type { ApiOptions } from "./types";
import LinnworksApi from "./v1/index";
import LinnworksApi2 from "./v2/index";

export { Authenticate } from "./v1/authenticate";
export { Dashboards } from "./v1/dashboards";

const ApiFactory = {
  v1: LinnworksApi,
  v2: LinnworksApi2,
} as const;

type ApiFactory<T extends ApiOptions> =
  T["version"] extends keyof typeof ApiFactory
    ? (typeof ApiFactory)[T["version"]]
    : never;

type ApiFactoryInstance<T extends ApiOptions> = InstanceType<ApiFactory<T>>;

export const Linnworks = <T extends ApiOptions>(
  options: T
): ApiFactoryInstance<T> => {
  const Factory = ApiFactory[options.version];

  if (!Factory) {
    throw new Error(`API version ${options.version} not supported.`);
  }

  return new Factory(options) as ApiFactoryInstance<T>;
};
