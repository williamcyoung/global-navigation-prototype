<template>
  <div id="home">
    <b-container fluid class="m-4">
      <b-row class="p-4">
        <b-col md="3">
          <div class="section-box px-4 pt-4">
            <p>Commitments</p>
            <p class="stat pt-1">$1,000,000,000</p>
            <b-progress :value="60" class="mt-3 progress"/>
            <div class="labels">
              <div class="actual">Actual</div>
              <div class="goal">Goal</div>
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="section-box px-4 pt-4">
            <p>Balance</p>
            <p class="stat pt-1">$300,000,000</p>
            <b-progress :value="80" class="mt-3 progress"/>
            <div class="labels">
              <div class="actual">Actual</div>
              <div class="goal">Goal</div>
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="section-box px-4 pt-4 withGraph">
            <b-row>
              <b-col cols="3">
                <div class="lables">
                  <p>Lines</p>
                  <p class="stat pt-1">100</p>
                </div>
              </b-col>
              <b-col cols="8" class="ml-auto">
                <HomeSummaryLineChart class="graphCanvas"></HomeSummaryLineChart>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col md="3">
          <div class="section-box px-4 pt-4 withGraph">
            <b-row>
              <b-col cols="3">
                <div class="lables">
                  <p>Average Spread</p>
                  <p class="stat pt-1">L + 225</p>
                </div>
              </b-col>
              <b-col cols="8" class="ml-auto">
                <HomeSummaryAverageSpreadChart class="graphCanvas"></HomeSummaryAverageSpreadChart>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HomeSummaryLineChart from "./HomeSummaryLineChart";
import HomeSummaryAverageSpreadChart from "./HomeSummaryAverageSpreadChart";
export default {
  name: "home",
  components: {
    HomeSummaryLineChart,
    HomeSummaryAverageSpreadChart
  }
};
</script>