import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { postgres, server } from './config/configuration';
import { AlbumModule } from './modules/album/album.module';
import { ArtistModule } from './modules/artist/artist.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { UserModule } from './modules/user/user.module';
import { TrackModule } from './modules/track/track.module';

const configModule = ConfigModule.forRoot({
  load: [server, postgres],
  isGlobal: true,
});

@Module({
  imports: [
    configModule,
    AlbumModule,
    ArtistModule,
    FavoritesModule,
    TrackModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
