const express = require("express");
const app = express();
const Crud = require("../models/cruds");

app.get("/", async (req, res) => {
  try {
    const cruds = await Crud.find();
    res.json(cruds);
  } catch (err) {
    res.send("error" + err);
  }
});

app.get('/:id', async (req,res) => {
    try {

        const crud = await Crud.findById(req.params.id)
        res.json(crud);
        
    } catch (error) {
        res.send("error" + error)
    }
})

app.post("/", async(req, res) => {
            const query = new Crud({
                name: req.body.name,
                email: req.body.email
  })

            try {
                    const a1 = await query.save()
                    res.json(a1)

            } catch (err) {
                         res.send("errornew" + err) ;
            }


});

app.delete('/:id', async(req, res) => {
	try {

        const result = await Crud.deleteOne((req.params.id));
         res.json();
        
    } catch (error) {
        res.send("error" + error)
    }
})






module.exports = app;
