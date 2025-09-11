  const Auth = (req,res,next)=>{
    const token = "WNVHDF"
    const Access = token === "WNVHDF" ?1:0;


    if(!Access)   // agar yaha pe access na kar pau agara too next key ka uske krke aage wale code ke pass chala jaunga // yaha pe hi agar nhi kr pae too chale jaege ya rukk jaege
        res.status(403).send("No permission");
         
     next();
}

module.exports = {
    Auth,
}