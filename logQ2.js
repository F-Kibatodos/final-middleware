module.exports = (req, res, next) => {
  let reqTime = Date.now()

  // response 執行成功後觸發
  res.on('finish', () => {
    console.log(
      new Date().toLocaleString() +
        ` ｜ ${req.method} from ${req.path} | ${Date.now() - reqTime}ms`
    )
  })
  next()
}
