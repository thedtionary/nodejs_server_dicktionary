const { result } = require('lodash');
const _ = require('lodash');
const { ObjectId } = require('mongodb');

exports.routers = (app) => {





    /**
     * Error Handle in response
     * @param res
     * @param errorMessage
     * @param code
     * @returns {*|JSON|Promise<any>}
     */
    const errorHandle = (res, errorMessage, code = 500) => {

        return res.status(code).json({ error: { message: errorMessage } });
    };

    /**
     * Success response handler
     * @param res
     * @param data
     * @param code
     * @returns {*|JSON|Promise<any>}
     */

    const responseHandle = (res, data, code = 200) => {

        return res.status(code).json(data);
    };



    /**
     * @method GET
     * @endpoint /api/terms
     * @description Get owner robots.
     *
     */

    app.get('/api/terms', (req, res, next) => {

        app.db.collection('terms').find().toArray()
        .then(results => {
            console.log(results)

        })
        .catch(err => console.error(err))
       console.log("done")

    });


     /**
     * @method GET
     * @endpoint /api/term
     * @description Get owner robots.
     *
     */

      app.get('/api/term', (req, res, next) => {

        var objID = req.headers;
         app.db.collection('terms').findOne({"_id" : ObjectId(objID)})
         .then(results => {
             console.log(results)
 
         })
         .catch(err => console.error(err))
        console.log("done")
 
     });
 




    /**
     * @method POST
     * @endpoint /api/term
     * @description L
     *
     */

    app.post('/api/term', (req, res, next) => {

        app.db.collection('terms').insertOne(req.body)
        .then(results => {
            console.log(results)

        })
        .catch(err => console.error(err))
       console.log("done")

    });


};