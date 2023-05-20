import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CreateProviDto } from './dto/create-provi.dto';
import { UpdateProviDto } from './dto/update-provi.dto';

@Injectable()
export class ProviService2 {
  create(createProviDto: CreateProviDto) {
    return 'This action adds a new provi';
  }

  getHello2(){
    return  '工厂模式123'
  }
  findAll() {
    return `This action returns all provi`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} provi`;
  // }

  // update(id: number, updateProviDto: UpdateProviDto) {
  //   return `This action updates a #${id} provi`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} provi`;
  // }
}
