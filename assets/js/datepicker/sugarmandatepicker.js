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
var set_luna_holidays = {
  2024: ["1230", "0101", "0102", "0103", "0408", "0814", "0815", "0816"],
  2025: [
    "1230",
    "0101",
    "0102",
    "0408",
    "0814",
    "0815",
    "0816",
    "0817",
    "0818",
  ],
  2026: ["1229", "1230", "0101", "0102", "0409", "0814", "0815", "0816"],
  2027: ["0101", "0102", "0103", "0408", "0814", "0815", "0816"],
  2028: ["1230", "0101", "0102", "0408", "0814", "0815", "0816", "0817"],
  2029: [
    "1229",
    "1230",
    "0101",
    "0102",
    "0409",
    "0814",
    "0815",
    "0816",
    "0817",
  ],
  2030: ["0101", "0102", "0103", "0408", "0814", "0815", "0816"],
}; // 음력 휴일
var luna_holidays = [];

function chagneLunaHoliday(year) {
  var luna_holidays = [];

  set_luna_holidays[year].forEach(function (value) {
    if (value === "1230" || value === "1231") {
      var set_holiday = calc_lunar(year + "0101");

      luna_holidays.push(`0${Number(set_holiday - 1)}`);
    } else {
      var set_holiday = calc_lunar(year + value);
      luna_holidays.push(set_holiday);
    }
  });

  return luna_holidays;
}

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
          let get_holiday2 = chagneLunaHoliday(date.getFullYear()).includes(
            set_disabled
          );

          if (get_holiday1 || get_holiday2) {
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
