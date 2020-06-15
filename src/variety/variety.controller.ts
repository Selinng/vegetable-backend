import { Controller, Get, Post, Body } from '@nestjs/common';
import { VarietyService } from './variety.service';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { ListParams, AddParams } from './params'

@Controller('variety')
@ApiTags('品种')
export class VarietyController {
  constructor(private readonly varietyService: VarietyService) {}

  @Get('varietylist')
  @ApiOperation({summary:'品种列表'})
  // @ApiParamOptions(
  // )
  @ApiParam({
    name: 'curPage',
    description: '当前页码（从0开始）',
  })
  varietylist(@Body() listParams: ListParams) {
      return this.varietyService.varietyList(listParams);
  }  
  @Post('addvariety')
  @ApiOperation({summary:'添加品种'})
  addvariety(@Body() addParams: AddParams) {
    console.log(addParams)
      return this.varietyService.addVariety(addParams);
  }
}
