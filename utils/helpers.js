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
    handlebars.registerHelper('limitText', function (str) {
        const first25 =  str.slice(0, 150);
        return first25+"...";
    });
}

module.exports = hbsHelpers;    