import express from 'express';
import {studentModel} from '../models/studentModel.js'

const app = express();

app.post('/student', async(req, res) => {
    try {
        const student = new studentModel(req.body);
        await student.save();
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/student', async(req, res) => {
    try{
        const student = await studentModel.find({});
        res.send(student);
    }catch(error){
        res.status(500).send(error);
    }
});

app.patch('student/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const student = studentModel.findByIdAndUpdate({_id: id}, req.body, {
            new: true,
        });
        res.send(student);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.delete("student/:id", async(req, res) => {
    try {
        const student = studentModel.findByIdAndDelete({ _id: req.params.id });
        res.status(204)
    } catch (error) {
        res.status(500).send(error)
    }
})

export {app as studentRouter};