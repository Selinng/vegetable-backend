function response(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const oldFunction = target[propertyKey]; // 获取方法引用
  const newFunction = async function(...args: any[]) {
    try {
      const res = await oldFunction.call(target, ...args);
      console.log(res)
      if (res) {
        return {
          status: 1, // 返回状态码，可自定义
          data: res,
          msg: '查询成功'
        };
      } else {
        return {
          status: 0,
          msg: '暂无数据'
        };
      }
    } catch (error) {
      return {
        code: 0,
        msg: `Service error: ${error}`,
      };
    }
  }
  descriptor.value = newFunction; // 替换原声明
}
export default response