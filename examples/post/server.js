module.exports = (req, res) => {
  let data = '';

  req.on('data', (chunk) => {
    data += chunk
  })

  req.on('end', () => {
    console.log('POST  data received')
    res.writeHead(200, {
      'Content-Type': 'text/json'
    })
    res.write(JSON.stringify(data))
    res.end()
  })
}
