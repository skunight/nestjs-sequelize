import { CONNECTION_PROVIDER, SEQUELIZE_PROVIDER } from '../database.constants'
import { Sequelize } from 'sequelize-typescript'
import { getRepositoryToken } from '../commons/database.utils'

export const createDatebaseProviders = (entities: any, sync: boolean = false) => {
  const provider = {
    provide: SEQUELIZE_PROVIDER,
    useFactory: async (sequelize: Sequelize) => {
      sequelize.addModels(entities)
      if (sync) {
        sequelize.sync()
      }
      return sequelize
    },
    inject: [CONNECTION_PROVIDER],
  }
  return provider
}

export const createModelProviders = (entities: any) => {
  const providers = []
  for (const e of entities) {
    providers.push({
      provide: getRepositoryToken(e),
      useValue: e,
    })
  }
  return providers
}