import axios from "axios";

export function getDailyTestData() {
    return axios
        .get("https://covidtracking.com/api/states/daily")
        .then(response => response.data)
        .catch(error => {
            console.log("Error" + error);
        });
}
