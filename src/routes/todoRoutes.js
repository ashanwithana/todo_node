import express from 'express'
import db from '../db.js'

const router = express.Router()

router.get('/', (req, res) => {
    const getTodos = db.prepare(`select * from todos where user_id = ?`)
    const todos = getTodos.all(req.userId)
    res.json(todos)
})

router.post('/', (req, res) => {
    const { task } = req.body
    const insertTodo = db.prepare(`insert into todos (user_id, task) values (?, ?)`)
    const result = insertTodo.run(req.userId, task)
    res.json({ id: result.lastInsertRowid , task, completed: 0 })

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})



export default router