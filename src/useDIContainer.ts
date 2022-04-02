import { diContainer } from "@/di";

export function useDIContainer<T>(serviceIdentifier: symbol): T {
  return diContainer.get<T>(serviceIdentifier);
}
