import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './books/book.controller';
import { BookService } from './books/book.service';
import { Book, BookSchema } from './schemas/book.schema';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
//process.env.MONGO_URI
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/nestjsTaskManagement') /* {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),*/,
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    TasksModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, BookController, TasksController],
  providers: [AppService, BookService, TasksService],
})
export class AppModule {}
