import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit'
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

const PORT = parseInt(process.env.PORT || '8000', 10)
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
