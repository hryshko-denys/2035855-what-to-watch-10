import { FirstPartPath, SecondPartPath } from '../types/routePath';

export const createRouterPath = (
  firstPartPath: FirstPartPath,
  id?: number,
  secondPartPath?: SecondPartPath
) => {
  if (secondPartPath) {
    return `${firstPartPath}/${id}${secondPartPath}`;
  }

  return id ? `${firstPartPath}/${id}` : firstPartPath;
};
