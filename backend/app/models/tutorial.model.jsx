const { Schema } = require("mongoose");
//mongoose.model(arg1,arg2) 'tutorial' is the name of the model, next one is the schema, which the schema is based.

module.exports = mongoose => {
    var schema = mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            {timestamps: true}
    );

    Schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
};

