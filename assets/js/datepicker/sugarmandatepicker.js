// Make Sunday and Saturday disabled



var solar_holidays = ["0101", "0301", "0505", "0606", "0717", '0815', "1003", "1225"]; //양력휴일
var set_luna_holidays = ["1231", "0101", "0102", "0408", "0814", "0815", "0816"]; //음력휴일
var luna_holidays = [];

var added_holidays = []; //추가 휴일

var current_year = new Date().getFullYear();
set_luna_holidays.forEach(function (value) {
  var set_holiday = calc_lunar(current_year + value);
  luna_holidays.push(set_holiday);
})


function set_date_picker(selector) {

  $(selector).datepicker({
    language: 'ko',
    firstDay: 1,
    dateFormat: 'yyyy-mm-dd',



    onRenderCell: function (date, cellType) {


      if (cellType == 'day') {
        var isDisabled = false;

        var day = date.getDay();
        if (day == 0 || day == 6) {
          isDisabled = true;
        } else {
          var year = date.getFullYear();
          var month = (1 + date.getMonth()); //M
          month = month >= 10 ? month : '0' + month; //month 두자리로 저장

          var day = date.getDate(); //d
          day = day >= 10 ? day : '0' + day; //day

          var set_disabled = month + day;


          var get_holiday1 = solar_holidays.indexOf(set_disabled)
          var get_holiday2 = luna_holidays.indexOf(set_disabled)
          var get_holiday3 = added_holidays.indexOf(set_disabled)




          if (get_holiday1 > -1 || get_holiday2 > -1 || get_holiday3 > -1) {
            isDisabled = true;
          }


        }
        return {
          disabled: isDisabled
        }
      }
    }
  })
}