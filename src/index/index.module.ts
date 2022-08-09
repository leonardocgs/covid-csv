import { Module } from '@nestjs/common';

import { ProcessModule } from 'src/process/process.module';
import { RepositoryModule } from 'src/repository/repository.module';
import { IndexService } from './index.service';

@Module({
  imports: [ProcessModule, RepositoryModule],
  providers: [IndexService],
})
export class IndexModule {}
