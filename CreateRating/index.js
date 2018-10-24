module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

   //if ((req.query.userId && req.query.productId && req.query.rating) || (req.body && req.body.userId && req.body.productId && req.body.rating)) {
  if (req.body && req.body.userId && req.body.productId && req.body.rating) {

       if(Number.isInteger(req.body.rating) && req.body.rating >= 1 && req.body.rating <= 5){
            var startTime = new Date().toJSON().replace('T', ' ').replace(/\..+/, '');
            var guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();

            req.body.RatingId = guid;
            req.body.Timestamp = startTime;

            // Set the output binding data from the query object.
            context.bindings.ICRatingDocument = req.body;

            // Success.
            context.res = {
                //status: 200
                body: context.bindings.ICRatingDocument
            };                  
	   }
       else {
            context.res = {
                status: 400,
                body: "Invalid Rating! Give rating in between 1-5"
            };
       }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

