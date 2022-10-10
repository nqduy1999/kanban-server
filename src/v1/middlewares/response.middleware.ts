
export const renderResponse = (err_code: number, data: Record<string, unknown>, msg: string) => {
  return {
    err_code,
    data,
    msg
  }
}