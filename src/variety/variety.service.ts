import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import sequelize from '../../database/sequelize'; // 引入 Sequelize 实例
import response from '../../utils/response';
import { ListParams, AddParams } from './params'

@Injectable()
export class VarietyService {
  @response
  async varietyList({ curPage, pageSize }: ListParams): Promise<any | undefined> {
    const sql = `
      SELECT
        *
      FROM
        variety
      limit
        ${curPage * pageSize},${pageSize};
    `; // 一段平淡无奇的 SQL 查询语句
    return sequelize.query(sql, {
      type: Sequelize.QueryTypes.SELECT, // 查询方式
      raw: true, // 是否使用数组组装的方式展示结果
      logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
    })
  }
  @response
  async addVariety(params: AddParams): Promise<any | undefined> {
    const sql = `INSERT INTO variety ( largeVarietyName, smallVarietyName, price, isFeature, season, memo )
      VALUES
      ( '${params.largeVarietyName}', '${params.smallVarietyName}', ${params.price}, '${params.isFeature}', '${params.season}', '${params.memo}' );
    `; // 一段平淡无奇的 SQL 查询语句
    return sequelize.query(sql, {
      type: Sequelize.QueryTypes.INSERT, // 查询方式
      raw: true, // 是否使用数组组装的方式展示结果
      logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
    })
  }
}
