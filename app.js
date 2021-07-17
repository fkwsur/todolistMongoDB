const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const pool = require('./database');
const http = require('http');
http.createServer(app).listen(8080, () => {
  console.log('server on');
});

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get('/list', async (req, res) => {
  try{
    const conn = await pool.getConnection();
    const sql = 'select * from todolist';
    const [rows] = await pool.query(sql);
    res.status(200).send(rows);
    conn.release();
  } catch (error){
    console.log(error);
  }
});

app.post('/create', async (req, res) => {
  try{
    const {content} = req.body;
    const conn = await pool.getConnection();
    const sql = 'insert into todolist (content) values(?)';
    const data = [content];
    const [rows] = await pool.query(sql,data);
    res.status(200).send(rows);
    conn.release();
  } catch (error){
    console.log(error);
  }
});

app.post('/update', async (req, res) => {
  try{
    const {idx, content} = req.body;
    console.log(idx,content);
    const conn = await pool.getConnection();
    const sql = 'update todolist set content=? where idx=?';
    const data = [content,idx];
    const [rows] = await pool.query(sql,data);
    res.status(200).send(rows);
    conn.release();
  } catch (error){
    console.log(error);
  }
});

app.post('/delete', async (req, res) => {
  try{
    const {idx} = req.body;
    console.log(idx);
    const conn = await pool.getConnection();
    const sql = 'delete from todolist where idx=?';
    const data = [idx];
    const [rows] = await pool.query(sql,data);
    res.status(200).send(rows);
    conn.release();
  } catch (error){
    console.log(error);
  }
});

