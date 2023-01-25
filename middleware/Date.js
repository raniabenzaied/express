const AddDate = (req,res,next) => {
    const date = new Date();
    req.date = date;
    const hour = date.getHours();
    const day = date.getDay();

    if ( hour < 9 || hour > 17 || day > 5)  {
        res.send( '<h1> Please try again from Monday to Friday </h1>');
        
    } else {
        next();    
    }
    
}

module.exports = { AddDate };