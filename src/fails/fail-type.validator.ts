import {BadRequestException} from "@nestjs/common";
import  { MulterFile} from "express";

export class FileTypeValidator {
    validate(file: MulterFile){
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        const fileExtension = file.orginalname.split('.').pop();
        if(!allowedExtensions.includes(fileExtension)){
            throw new Error('Fayl turi notogri');
        }
        return true;
    }
}