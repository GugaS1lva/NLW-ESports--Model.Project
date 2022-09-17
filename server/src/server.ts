import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Anúncio - 01' },
        { id: 2, name: 'Anúncio - 02' },
        { id: 3, name: 'Anúncio - 03' },
        { id: 4, name: 'Anúncio - 04' },
    ])
})

app.listen(3333)
