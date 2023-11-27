import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { name: string; id: number }[] {
    return [
      {id:1, name: 'RV'}
    ];
  }
}
