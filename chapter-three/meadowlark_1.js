const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadownlark Travel')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About Meadownlark Travel')
})

// Página 404(not Found) personalizada
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Internal Server Error')
})

app.listen(port, () => console.log(`Express started on http://localhost:${port};` + `Press Ctrl-C to terminate.`))