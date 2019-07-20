
import { Inject } from '@nestjs/common'
import { getRepositoryToken} from './database.utils'
import { SEQUELIZE_PROVIDER } from '../';

export const InjectRepository = (entity) => {
  return Inject(getRepositoryToken(entity))
}

export const InjectSequelize = () => {
  return Inject(SEQUELIZE_PROVIDER)
}