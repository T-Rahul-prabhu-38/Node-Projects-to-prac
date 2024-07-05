const express = require('express');
const fs = require('fs');
const app = express();

 app.use(express.json());

const tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json'));


//GET METHOD
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({ status: 'success',data:{ tours: tours }});
});

app.get('/api/v1/tours/:id', (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;
  console.log(id);
  const tour = tours.find((el)=> el.id === id);

  if(!tour) {
    return res.status(404).json({
      status:"failed",
      message:"invalid ID"
    });
  }
  res.status(200).json({ status: 'success',data:{tours:tour}});
});



//POST METHOD
app.post('/api/v1/tours',(req,res)=>{

  const newId = tours[tours.length-1].id + 1;
  console.log(newId);
  const newTour = Object.assign({id:newId},req.body);

  tours.push(newTour)

  fs.writeFile('./dev-data/data/tours-simple.json',JSON.stringify(tours) ,(err)=>{
    res.status(201).json({
      status:'success',
      data:{
        tour:newTour
      }
    });
  });
})


//PATCH METHOD
app.patch('/api/v1/tours:id',(req,res)=>{
  if(req.parama.id *1 > tours.length) {
    return res.status(404).json({
      status:"failed",
      message:"invalid ID"
    });
  }

  res.status(200).json({status:"success",data:{
    tour:"here comes"
  }});
});




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});