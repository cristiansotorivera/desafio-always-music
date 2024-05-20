import { Router } from "express";  
import { getAllStudents, getOneByRut, removeStudent, createStudent, updateStudent } from "../controllers/estudiantes.controller.js"; 

const router = Router();

router.get('/', getAllStudents);
router.get('/:rut', getOneByRut); 
router.delete('/:id', removeStudent);
router.post('/', createStudent);
router.put('/:id', updateStudent);

export default router;
