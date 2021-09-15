const nbTrips = `
<option value="CenturyPark_SouthgateTransitCentre">Century Park_Southgate Transit Centre</option>
<option value="SouthgateTransitCentre_SouthCampus">Southgate Transit Centre_South Campus</option>
<option value="SouthCampus_McKernan">SouthCampus_McKernan</option>
<option value="McKernan_HealthSciences">McKernan_Health Sciences</option>
<option value="HealthSciences_University">Health Sciences_University</option>
<option value="University_GovernmentCentre">University_Government Centre</option>
<option value="GovernmentCentre_Corona">Government Centre_Corona</option>
<option value="Corona_Bay">Corona_Bay</option>
<option value="Bay_Central">Bay_Central</option>
<option value="Central_Churchill">Central_Churchill</option>
<option value="Churchill_Stadium">Churchill_Stadium</option>
<option value="Stadium_Coliseum">Stadium_Coliseum</option>
<option value="Coliseum_Belvedere">Coliseum_Belvedere</option>
<option value="Belvedere_Clareview">Belvedere_Clareview</option>
`;

const sbTrips = `
<option value="Clareview_Belvedere">Clareview_Belvedere</option>
<option value="Belvedere_Coliseum">Belvedere_Coliseum</option>
<option value="Coliseum_Stadium">Coliseum_Stadium</option>
<option value="Stadium_Churchill">Stadium_Churchill</option>
<option value="Churchill_Central">Churchill_Central</option>
<option value="Central_Bay">Central_Bay</option>
<option value="Bay_Corona">Bay_Corona</option>
<option value="Corona_GovernmentCentre">
  Corona_GovernmentCentre
</option>
<option value="GovernmentCentre_University">
  GovernmentCentre_University
</option>
<option value="University_HealthSciences">
  University_HealthSciences
</option>
<option value="HealthSciences_McKernan">
  HealthSciences_McKernan
</option>
<option value="McKernan_SouthCampus">
  McKernan_SouthCampus
</option>
<option value="SouthCampus_SouthgateTransitCentre">
  South Campus_SouthgateTransitCentre
</option>
<option value="SouthgateTransitCentre_CenturyPark">
  SouthgateTransitCentre_Century Park
</option>
`;

const runsJune22 = `
<option value = "1">1</option>
<option value = "2">2</option>
<option value = "3">3</option>
<option value = "4">4</option>
<option value = "5">5</option>
<option value = "6">6</option>
<option value = "6">6</option>
<option value = "7">7</option>
<option value = "8">8</option>
`;
const runsJune16 = `
<option value = "1">1</option>
<option value = "2">2</option>
<option value = "3">3</option>
<option value = "4">4</option>
<option value = "5">5</option>
`;

const runsPerDate = {
  "2021-08-27": 6,
  "2021-09-11": 6,
};
LEFT_DATE = "2021-08-27";
LEFT_TRIP = "Clareview_Belvedere";
LEFT_AXIS = "Z-Axis";
LEFT_RUN = "2";
LEFT_UNIT = "1";

const setLeftTripOptions = (e) => {
  let sel = document.getElementById("left-trip");
  sel.innerHTML = e.value === "nb" ? nbTrips : sbTrips;
  return;
};

const onLeftUnitChange = (e) => {
  LEFT_UNIT = e.value;
  reload_left();
  return;
};

const onLeftRunChange = (e) => {
  LEFT_RUN = e.value;
  reload_left();
  return;
};

const onLeftAxisChange = (e) => {
  LEFT_AXIS = e.value;
  reload_left();
  return;
};

const onLeftTripChange = (e) => {
  LEFT_TRIP = e.value;
  reload_left();
  return;
};

const onLeftDirectionChange = (e) => {
  setLeftTripOptions(e);
  LEFT_TRIP =
    e.value === "nb"
      ? "CenturyPark_SouthgateTransitCentre"
      : "Clareview_Belvedere";
  reload_left();
  return;
};

const onLeftDateChange = (e) => {
  LEFT_DATE = e.value;
  let runs = document.getElementById("left-run");
  let numRuns = runsPerDate[LEFT_DATE];
  runsHtml = ``;
  for (let run = 2; run <= numRuns; run++) {
    runsHtml += `<option value = ${run}>${run}</option>`;
  }
  runs.innerHTML = runsHtml; //LEFT_DATE === "2021-08-27" ? runsJune16 : runsJune22;
  LEFT_RUN = 1;
  reload_left();
  return;
};

const reload_left = () => {
  let path_to_raw = `./${LEFT_TRIP}/${LEFT_DATE}_run${LEFT_RUN}_raw${LEFT_AXIS}.png`;
  let raw = document.getElementById("left-raw-data");
  raw.innerHTML = `<img src = ${path_to_raw}>`;

  let path_to_spec = `./${LEFT_TRIP}/${LEFT_DATE}_run${LEFT_RUN}_spec${LEFT_AXIS}.png`;
  let spec = document.getElementById("left-spec-data");
  spec.innerHTML = `<img src = ${path_to_spec}>`;

  let path_to_rms = `./${LEFT_TRIP}/${LEFT_DATE}_run${LEFT_RUN}_blockrms${LEFT_AXIS}.png`;
  let rms = document.getElementById("left-rms-data");
  rms.innerHTML = `<img src = ${path_to_rms}>`;

  let path_to_fft = `./${LEFT_TRIP}/${LEFT_DATE}_run${LEFT_RUN}_fft${LEFT_AXIS}.png`;
  let fft = document.getElementById("left-fft-data");
  fft.innerHTML = `<img src = ${path_to_fft}>`;

  let path_to_ma = `./${LEFT_TRIP}/${LEFT_DATE}_run${LEFT_RUN}_ma${LEFT_AXIS}.png`;
  let ma = document.getElementById("left-ma-data");
  ma.innerHTML = `<img src = ${path_to_ma}>`;
};

RIGHT_DATE = "2021-08-27";
RIGHT_TRIP = "Clareview_Belvedere";
RIGHT_AXIS = "Z-Axis";
RIGHT_RUN = "2";
RIGHT_UNIT = "1";

const setRightTripOptions = (e) => {
  let sel = document.getElementById("right-trip");
  sel.innerHTML = e.value === "nb" ? nbTrips : sbTrips;
  return;
};

const onRightUnitChange = (e) => {
  RIGHT_UNIT = e.value;
  reload_right();
  return;
};

const onRightRunChange = (e) => {
  RIGHT_RUN = e.value;
  reload_right();
  return;
};

const onRightAxisChange = (e) => {
  RIGHT_AXIS = e.value;
  reload_right();
  return;
};

const onRightTripChange = (e) => {
  RIGHT_TRIP = e.value;
  reload_right();
  return;
};

const onRightDirectionChange = (e) => {
  setRightTripOptions(e);
  RIGHT_TRIP =
    e.value === "nb"
      ? "CenturyPark_SouthgateTransitCentre"
      : "Clareview_Belvedere";
  reload_right();
  return;
};

const onRightDateChange = (e) => {
  RIGHT_DATE = e.value;
  let runs = document.getElementById("right-run");
  let numRuns = runsPerDate[RIGHT_DATE];
  runsHtml = ``;
  for (let run = 2; run <= numRuns; run++) {
    runsHtml += `<option value = ${run}>${run}</option>`;
  }
  runs.innerHTML = runsHtml; //LEFT_DATE === "2021-08-27" ? runsJune16 : runsJune22;  RIGHT_RUN = 1;
  reload_right();
  return;
};

const reload_right = () => {
  let path_to_raw = `./${RIGHT_TRIP}/${RIGHT_DATE}_run${RIGHT_RUN}_raw${RIGHT_AXIS}.png`;
  let raw = document.getElementById("right-raw-data");
  raw.innerHTML = `<img src = ${path_to_raw}>`;

  let path_to_spec = `./${RIGHT_TRIP}/${RIGHT_DATE}_run${RIGHT_RUN}_spec${RIGHT_AXIS}.png`;
  let spec = document.getElementById("right-spec-data");
  spec.innerHTML = `<img src = ${path_to_spec}>`;

  let path_to_rms = `./${RIGHT_TRIP}/${RIGHT_DATE}_run${RIGHT_RUN}_blockrms${RIGHT_AXIS}.png`;
  let rms = document.getElementById("right-rms-data");
  rms.innerHTML = `<img src = ${path_to_rms}>`;

  let path_to_fft = `./${RIGHT_TRIP}/${RIGHT_DATE}_run${RIGHT_RUN}_fft${RIGHT_AXIS}.png`;
  let fft = document.getElementById("right-fft-data");
  fft.innerHTML = `<img src = ${path_to_fft}>`;

  let path_to_ma = `./${RIGHT_TRIP}/${RIGHT_DATE}_run${RIGHT_RUN}_ma${RIGHT_AXIS}.png`;
  let ma = document.getElementById("right-ma-data");
  ma.innerHTML = `<img src = ${path_to_ma}>`;
};
