const fs = require('fs');


//reading files
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));


//methods
exports.getAllTours = (req, res) => {
    res.status(200).json({ status: 'success',data:{ tours: tours }});
  };
  
exports.getTour = (req, res) => {
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
  };
  
  
  //creating tours
exports.createTour = (req,res)=>{
  
    const newId = tours[tours.length-1].id + 1;
    console.log(newId);
    const newTour = Object.assign({id:newId},req.body);
  
    tours.push(newTour)
  
    fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`,JSON.stringify(tours) ,(err)=>{
      res.status(201).json({
        status:'success',
        data:{
          tour:newTour
        }
      });
    });
  }
  
  
  
  //updating tours
  exports.updateTour = (req,res)=>{
    if(req.parama.id *1 > tours.length) {
      return res.status(404).json({
        status:"failed",
        message:"invalid ID"
      });
    }
  
    res.status(200).json({status:"success",data:{
      tour:"here comes"
    }});
  };
