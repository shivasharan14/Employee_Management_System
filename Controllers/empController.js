const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    department: "Frontend",
    salary: 45000,
    city: "Mumbai"
  },
  {
    id: 2,
    name: "Priya Patil",
    department: "Backend",
    salary: 55000,
    city: "Pune"
  },
  {
    id: 3,
    name: "Amit Verma",
    department: "HR",
    salary: 40000,
    city: "Delhi"
  },
  {
    id: 4,
    name: "Sneha Joshi",
    department: "Testing",
    salary: 42000,
    city: "Hyderabad"
  },
  {
    id: 5,
    name: "Karan Mehta",
    department: "DevOps",
    salary: 60000,
    city: "Bangalore"
  }
]

const getAllEmp = (req, res) => {
    try {
        res.status(200).send({ employees: employees })
    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const createEmp = (req, res) => {
    try {

        const newEmployee = {
            id: employees.length + 1,
            name: req.body.name,
            department: req.body.department,
            salary: req.body.salary,
            city: req.body.city
        }

        employees.push(newEmployee)

        res.status(201).send({
            msg: "Employee created successfully",
            employee: newEmployee
        })

    } catch (error) {
        res.status(500).send({
            msg: "server error"
        })
    }
}

const deleteEmp = (req, res) => {
    try {
        const id = req.params.id

        const index = employees.findIndex(emp => emp.id == id)

        if (index === -1) {
            return res.status(404).send({ msg: "Employee not found" })
        }

        const deletedEmp = employees.splice(index, 1)

        res.status(200).send({
            msg: "Employee deleted successfully",
            employee: deletedEmp
        })

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}


const patchEmp = (req, res) => {
    try {
        const id = req.params.id

        const index = employees.findIndex(emp => emp.id == id)

        if (index === -1) {
            return res.status(404).send({ msg: "Employee not found" })
        }

       
        employees[index] = {
            ...employees[index],
            ...req.body
        }

        res.status(200).send({
            msg: "Employee partially updated successfully",
            employee: employees[index]
        })

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

module.exports = {
    employees,
    getAllEmp,
    createEmp,
    deleteEmp,
    patchEmp

}