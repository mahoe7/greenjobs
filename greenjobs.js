/**
 * Created by Michael on 9/29/2015.
 */

testdata = greenjobs.splice(0, 10);

function listIndustries(data) {
  return _.uniq(_.pluck(data, 'Industry'));
}

function countyGreenJobs(data) {
  return _.countBy(data, function(num) {
      return num['County'];
  })
}

function jobswithKeyword(data, keyword) {
  var jobs = _.filter(data, function(num) {
      return num['Job Title'].indexOf(keyword) != -1;
  });

  return _.pluck(jobs, 'Job Title');
}

function industryJobs(data) {
  var countIndustryJobs = _.countBy(data, function(num) {
    return num['Industry'];
  });

  return _.extend(listIndustries(data), countIndustryJobs);
}

console.log(listIndustries(testdata));
console.log('****');
console.log(countyGreenJobs(testdata));
console.log('****');
console.log(jobswithKeyword(greenjobs, "PV"));
console.log('****');
console.log(industryJobs(greenjobs));