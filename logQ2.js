module.exports = (req, res, next) => {
  let reqTime = Date.now()
  console.log(
    new Date().toLocaleString() +
      ` ｜ ${req.method} from ${req.path} | ${Date.now() - reqTime}ms`
  )
  next()
}
