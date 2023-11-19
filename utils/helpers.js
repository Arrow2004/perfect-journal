const moment = require('moment')
const hbsHelpers = (handlebars)=>{
    handlebars.registerHelper('formatDate', function(dateString){
        return new handlebars.SafeString(
            moment(dateString).format("DD.MM.YYYY")
        )
    })
    handlebars.registerHelper('incremented', function (index) {
        index++;
        return index;
    });
}
module.exports = hbsHelpers;    