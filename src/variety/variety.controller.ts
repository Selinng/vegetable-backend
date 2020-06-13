import { Controller, Get, Body } from '@nestjs/common';
import { VarietyService } from './variety.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

interface ListParams {
  curPage?: number,
  pageSize?: number
}

@Controller('variety')
@ApiTags('品种')
export class VarietyController {
  constructor(private readonly varietyService: VarietyService) {}

  @Get('varietylist')
  @ApiOperation({summary:'品种列表'})
  varietylist(@Body() listParams: ListParams) {
      return this.varietyService.varietylist(listParams);
  }
}
