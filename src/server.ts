import 'reflect-metadata';
import express from 'express';
import { getHome } from './controller/get';

const server = express();

server.get('/home', getHome)

server.listen(3003, '127.0.0.1', () => {
  console.log('> HTTP server listening on http://127.0.0.1:3003')
})