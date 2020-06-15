export interface ListParams {
  curPage: number,
  pageSize: number
}

enum IsFeature{
  Y = 'Y',
  N = 'N'
}
export interface AddParams {
  largeVarietyName?: string,
  smallVarietyName: string,
  price: number,
  isFeature: IsFeature,
  season: string,
  memo: string
}