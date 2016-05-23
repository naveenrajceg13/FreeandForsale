var mongoose = require('mongoose');

module.exports = mongoose.model('Sale_details', {
	Item : { Category: String,
             Name:String,
             Descr:String,
             Condition:Boolean,
             free_sale:Boolean,
             Price:Number,
             Image: {ContentType:String,
                      data:Buffer}
            },
    num_of_items: Number
});