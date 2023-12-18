const mongoose =require("mongoose")
mongoose.connect(
    "mongodb+srv://gaohong:gyl0216gyb0216@cluster0.evogn.mongodb.net/test?retryWrites=true&w=majority",
    //    "mongodb+srv://gyl0216gyb0216:<password>@cluster0.q70ph.gcp.mongodb.net/"
    
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    )

const BrandSchema =new mongoose.Schema({
    brandname:{type:String,require:true},
    brandPrice:{type:String},
    ctime:{type:Date}
})

const BrandModel =mongoose.model("brands",BrandSchema)

module.exports={
    BrandModel
}