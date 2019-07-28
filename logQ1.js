module.exports = (req, res, next) => {
  console.log(
    new Date().toLocaleString() + ` ｜ ${req.method} from ${req.path}`
  )
  next()
}
