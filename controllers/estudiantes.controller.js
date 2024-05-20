export const getAllStudents = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        return res.status(200).json(estudiantes);
    } catch (error) {
        console.error("Error fetching all students:", error);
        return res.status(500).json({ ok: false, message: "Internal Server Error" });
    }
}

export const getOneByRut = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiante = await Estudiante.findOneByRut(id);
        if (!estudiante) {
            return res.status(404).json({ ok: false, message: "Student not found" });
        }
        return res.status(200).json(estudiante);
    } catch (error) {
        console.error("Error fetching student by RUT:", error);
        return res.status(500).json({ ok: false, message: "Internal Server Error" });
    }
}

export const removeStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiante = await Estudiante.remove(id);
        if (!estudiante) {
            return res.status(404).json({ ok: false, message: "Student not found" });
        }
        return res.status(200).json(estudiante);
    } catch (error) {
        console.error("Error removing student:", error);
        return res.status(500).json({ ok: false, message: "Internal Server Error" });
    }
}

export const createStudent = async (req, res) => {
    try {
        const { nombre, rut, curso, nivel } = req.body;
        const newEstudiante = await Estudiante.create({ nombre, curso, nivel, rut });
        return res.status(201).json(newEstudiante);
    } catch (error) {
        console.error("Error creating student:", error);
        return res.status(500).json({ ok: false, message: "Internal Server Error" });
    }
}

export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, rut, curso, nivel } = req.body;
        const estudianteUpdate = { id, nombre, rut, curso, nivel };
        const estudiante = await Estudiante.update(estudianteUpdate);
        if (!estudiante) {
            return res.status(404).json({ ok: false, message: "Student not found" });
        }
        return res.status(200).json(estudiante);
    } catch (error) {
        console.error("Error updating student:", error);
        return res.status(500).json({ ok: false, message: "Internal Server Error" });
    }
}
