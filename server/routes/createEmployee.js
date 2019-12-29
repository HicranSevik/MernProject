const express = require('express');
const router = express.Router();
const { CreateEmployee } = require('./../controller/EmployeeController')


router.post('/api/createEmployee', (req, res, next) => {
    //res.end('hazırız');
    //INSERT INTO EPMPLOYEES
    const employee = CreateEmployee(req.body);
    employee.save()
        .then(employee => {
            res.status(201).send({
                "status": "success",
                "data": employee
            });
        })
        .catch(err => {
            res.status(400).send({
                data: {
                    error: err.message,
                    errorMessage: "Girilen bilgileri tekrar kontrol edin."
                }

            });
        });
});

module.exports = router;