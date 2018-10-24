module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.RatingId || (req.body && req.body.RatingId)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            //body: "Get rating by ratingId"
            body: context.bindings.ICRatingDocument
        };


    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};