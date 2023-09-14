// property listing requirement
const mongoose = require('mongoose');

// defining property schema
const propertySchema = mongoose.Schema({
    propertyid:{
        type:Number,
        required: 'Enter ID'
    },
    propertyname:{
        type:String,
        required:'Property name is required !'
    },
    propertystatus:{
        type:String,
        required: 'Status is required !'
    },
    propertytype:{
        type:String,
        required:'Type is required'
    },
    area:{
        type:Number,
        required: 'Area is required'
    },
    price:{
        type:Number,
        required:'Price is required'
    },
    location:{
        type:String,
	required: 'Location is required'
    }
});

const Property = module.exports = mongoose.model('Property',propertySchema,'property');		
