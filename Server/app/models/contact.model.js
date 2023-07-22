module.exports = mongoose => {

    var schema = mongoose.Schema(
  
   
  
      {
  
        first: String,
  
        last: String,

        email: String,

        phone: String,
  
        title: String,

        type: String,

        budget: Number,

        message: String
  
      },
  
       
  
    );
  
   
  
   
  
    schema.method("toJSON", function() {
  
      const { __v, _id, ...object } = this.toObject();
  
      object.id = _id;
  
      return object;
  
    });
  
   
  
    const  Contact = mongoose.model("contact", schema);
  
    return Contact;
  
  };