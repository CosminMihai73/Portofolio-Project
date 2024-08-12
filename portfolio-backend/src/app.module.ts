import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkModule } from './works/work.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'portfolio',
      autoLoadEntities: true,
      synchronize: true,
    }),
    WorkModule,
  ],
 
})
export class AppModule {}
