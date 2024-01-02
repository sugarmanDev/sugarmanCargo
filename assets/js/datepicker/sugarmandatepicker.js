// Make Sunday and Saturday disabled

var solar_holidays = [
  "0101",
  "0301",
  "0505",
  "0606",
  "0815",
  "1003",
  "1009",
  "1225",
]; // 양력 휴일
var set_luna_holidays = [
  "1230",
  "0101",
  "0102",
  "0103",
  "0408",
  "0814",
  "0815",
  "0816",
]; // 음력 휴일
var luna_holidays = [];

var added_holidays = ["1009"]; // 추가 휴일

var current_year = new Date().getFullYear();
set_luna_holidays.forEach(function (value) {
  if (value === "1230" || value === "1231") {
    var set_holiday = calc_lunar(current_year + "0101");

    luna_holidays.push(`0${Number(set_holiday - 1)}`);
  } else {
    var set_holiday = calc_lunar(current_year + value);
    luna_holidays.push(set_holiday);
  }
});

function set_date_picker(selector, type) {
  var minDate = new Date();
  minDate.setDate(minDate.getDate() + 1); // 이전 날짜 비활성화

  $(selector).datepicker({
    language: "ko",
    firstDay: 1,
    dateFormat: "yyyy-mm-dd",
    minDate: minDate,
    inline: type === "open" ? true : false,

    onRenderCell: function (date, cellType) {
      if (cellType == "day") {
        var isDisabled = false;
        var day = date.getDay();
        if (day == 0 || day == 6) {
          isDisabled = true;
        } else {
          // var year = date.getFullYear();
          var month = 1 + date.getMonth(); //M
          month = month >= 10 ? month : "0" + month; //month 두자리로 저장

          var day = date.getDate(); //d
          day = day >= 10 ? day : "0" + day; //day

          var set_disabled = String(month) + String(day);

          let get_holiday1 = solar_holidays.includes(set_disabled);
          let get_holiday2 = luna_holidays.includes(set_disabled);
          let get_holiday3 = added_holidays.includes(set_disabled);

          if (get_holiday1 || get_holiday2 || get_holiday3) {
            isDisabled = true;
          }
        }
        return {
          disabled: isDisabled,
        };
      }
    },
  });
}
