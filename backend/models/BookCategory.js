<<<<<<< HEAD
import mongoose from "mongoose";

const BookCategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        unique:true
    },
    books:[{
            type:mongoose.Types.ObjectId,
            ref:"Book"
        }]
},
{
    timestamps:true
})

=======
import mongoose from "mongoose";

const BookCategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        unique:true
    },
    books:[{
            type:mongoose.Types.ObjectId,
            ref:"Book"
        }]
},
{
    timestamps:true
})

>>>>>>> 21107f5 (first commit)
export default mongoose.model("BookCategory",BookCategorySchema)