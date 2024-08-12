import { Controller, Get, Post, Body, Param, Delete, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { join } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('works')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post()
  create(@Body() createWorkDto: CreateWorkDto) {
    return this.workService.create(createWorkDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads', // Directorul unde vor fi salvate fișierele
      filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
      },
    }),
  }))
  async uploadFile(@UploadedFile() file) {
    return { filePath: `/uploads/${file.filename}` };
  }

  @Get()
  findAll() {
    return this.workService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.workService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateWorkDto: UpdateWorkDto) {
    return this.workService.update(id, updateWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.workService.remove(id);
  }

  @Get('image/:filename')
  getImage(@Param('filename') filename: string, @Res() res: Response) {
    return res.sendFile(join(__dirname, '..', '..', 'uploads', filename));
  }
}
