import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicsModule, GuestModule, AlbumsModule } from '@/collector.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/entities/entity.*.{js,ts}'],
      synchronize: true,
    }),
    AlbumsModule,
    MusicsModule,
    GuestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
