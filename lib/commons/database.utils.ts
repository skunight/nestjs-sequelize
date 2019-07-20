export function getRepositoryToken(entity): string {
  return `${entity.name.toUpperCase()}_PROVIDER`
}