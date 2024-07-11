import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { FailsService } from './fails.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {dislStorage} from "multer";
import {v4 as uuidv4} from "uuid";

@Controller('fails')
export class FailsController {
  constructor(private readonly failsService: FailsService) {}

  @Post("failupload")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: dislStorage({
        destination: "./faillar",
        filename(req,file,callback) {
          const fileName = `${uuidv4()}${file.orginalname.slice(-4)}`;
          callback(null, fileName);
        },
      }),
    })
  )
  async fileUpload(@UploadedFile(new ParseFilePipe({
    validators:[
      new FileTypeValidator({fileType: /(jpg|jpeg|png|gif)$/}),
    ]
  })
  ) file: Express.Multer.file){
    return file;
  }
  
  @Post("failsupload")
  @UseInterceptors(
    FileInterceptor("files", {
      storage: diskStorage({
        destination: "./faillar",
        filename(req,file,callback){
          const fileName = `${uuidv4()}${file.orginalname.slice(-4)}`;
          callback(null,fileName);
        },
      }),
    })
  )
  async filesUpload(@UploadedFile() files: Express.Multer.File[]){
    return files
  }

  @Get('getOne:id')
  findOne(@Param('id') id: string) {
    return this.failsService.findOne(id);
  }

  @Get("download/:id")
  download(@Param('id') id: string){
    return this.failsService.download(id)
  }

  @Patch('put/:id')
  update(@Param('id') id: string, @Body() updateFailDto: UpdateFailDto) {
    return this.failsService.update(id, updateFailDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.failsService.remove(id);
  }
}
