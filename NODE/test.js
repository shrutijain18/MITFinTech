//This code provides the data points from a specific date range for a keyword.
//var http = require('http');
const googleTrends = require('google-trends-api');
var now = new Date();
 googleTrends.interestOverTime
 ({
 keyword: 'Donald Trump',
 startTime: new Date('2015-01-01'),
 endTime: new Date('2016-01-01'),
})
 .then((res) => {
   console.log('this is res', res);
 })
 .catch((err) => {
   console.log('got the error', err);
 })

}
