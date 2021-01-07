<template>
  <div id="main" v-bind:class="{ moveLeft: close }">
    <b-button class="sidebarBtn" @click="close = ! close">&#9776;</b-button>
    <b-container fluid class="m-4">
      <b-row class="align-items-center">
        <b-col class="title no-padding">
          <h1 class="my-4">Collateral Risk Monitoring</h1>
        </b-col>
      </b-row>
      <!-- summary -->
      <b-row class="section-box p-4">
        <b-col class="no-padding">
          <b-row>
            <b-col>
              <h3 class="pb-3">Loan Portfolio Summary</h3>
              <div class="line px-4"></div>
            </b-col>
          </b-row>
          <b-row class="align-items-center mt-3">
            <b-col md="7" class="no-padding">
              <b-progress :max="100" class="m-3">
                <b-progress-bar class="green" :value="50"></b-progress-bar>
                <b-progress-bar class="yellow" :value="30"></b-progress-bar>
                <b-progress-bar class="red" :value="10"></b-progress-bar>
                <b-progress-bar class="purple" :value="20"></b-progress-bar>
              </b-progress>
            </b-col>

            <b-col md="5" class="numbers">
              <b-row>
                <b-col class="values">
                  <h2 class="purple">34</h2>
                  <p class="pt-2">Collateral Calls</p>
                </b-col>
                <b-col class="values">
                  <h2 class="red">26</h2>
                  <p class="pt-2">High Risk</p>
                </b-col>
                <b-col class="values">
                  <h2 class="borderOnly">207</h2>
                  <p class="pt-2">Active Loans</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <!-- charts -->
      <b-row class="section-box p-4 my-4">
        <b-col class="no-padding">
          <b-row>
            <b-col class="withQuestion">
              <h3 class="pb-3">Risk Management Overview</h3>
              <div class="hoverQuestion">
                <div class="question ml-1">?</div>
                <!-- <b-button id="notes" variant="primary">?</b-button> -->
                <div class="customTooltip">
                  <ul class="p-4">
                    <li class="pb-2">
                      <span class="greenText">Green</span> - Zero balance loans (Inactive Loans). This accounts anywhere between 40% to more than 60% of the total LOC granted for the banks. These are no risk loans.
                    </li>
                    <li class="pb-2">
                      <span class="yellowText">Yellow</span> – Low risk loans. Loan balance is between 0%-50% of maintenance line
                    </li>
                    <li class="pb-2">
                      <span class="orangeText">Orange</span> – Mid risk loans. Loan balance is between 50%-lower boundary of the buffer zone
                    </li>
                    <li class="pb-2">
                      <span class="redText">Red</span> – this is the zone that loans are in an eminent situation of being called. It is a +/- buffer zone around the maintenance line. The magnitude of the zone is determined by the characteristics and volatility of the collateral portfolio. The lower boundary is 10x-20x of the upper boundary.
                    </li>
                    <li class="pb-2">
                      <span class="purpleText">Purple</span> - this category includes loans that are actually being called.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="line px-4"></div>
            </b-col>
          </b-row>
          <b-row class="mt-3 align-items-center">
            <b-col md="4">
              <svg
                id="bar-chart-1"
                viewBox="0 0 240 369"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g
                    id="Collateral-Risk-Monitoring-Report-Option-1.1"
                    transform="translate(-58.000000, -609.000000)"
                  >
                    <g id="Group" transform="translate(38.000000, 510.000000)">
                      <g id="Group-13" transform="translate(20.000000, 99.000000)">
                        <path
                          d="M37,1.23969794 L37,1.37110326 L238,1.37110326 L238,1.23969794 L37,1.23969794 Z M37,38.5760735 L37,38.7074788 L238,38.7074788 L238,38.5760735 L37,38.5760735 Z M37,77.0438544 L37,77.1752597 L238,77.1752597 L238,77.0438544 L37,77.0438544 Z M37,114.38023 L37,114.511635 L238,114.511635 L238,114.38023 L37,114.38023 Z M37,150.5852 L37,150.716605 L238,150.716605 L238,150.5852 L37,150.5852 Z M37,189.052981 L37,189.184386 L238,189.184386 L238,189.052981 L37,189.052981 Z M37,226.389357 L37,226.520762 L238,226.520762 L238,226.389357 L37,226.389357 Z M37,264.857137 L37,264.988543 L238,264.988543 L238,264.857137 L37,264.857137 Z M37,302.193513 L37,302.324918 L238,302.324918 L238,302.193513 L37,302.193513 Z M38,340.661294 L38,340.792699 L239,340.792699 L239,340.661294 L38,340.661294 Z"
                          id="Combined-Shape"
                          stroke="#DAE0E8"
                          fill-rule="nonzero"
                        ></path>
                        <text
                          id="150"
                          font-family="Roboto-Regular, Roboto"
                          font-size="16"
                          font-weight="normal"
                          fill="#7E93AE"
                        >
                          <tspan x="0" y="120">150</tspan>
                        </text>
                        <text
                          id="100"
                          font-family="Roboto-Regular, Roboto"
                          font-size="16"
                          font-weight="normal"
                          fill="#7E93AE"
                        >
                          <tspan x="0" y="195">100</tspan>
                        </text>
                        <text
                          id="200"
                          font-family="Roboto-Regular, Roboto"
                          font-size="16"
                          font-weight="normal"
                          fill="#7E93AE"
                        >
                          <tspan x="0" y="45">200</tspan>
                        </text>
                        <text
                          id="50"
                          font-family="Roboto-Regular, Roboto"
                          font-size="16"
                          font-weight="normal"
                          fill="#7E93AE"
                        >
                          <tspan x="9" y="270">50</tspan>
                        </text>
                        <text
                          id="0"
                          font-family="Roboto-Regular, Roboto"
                          font-size="16"
                          font-weight="normal"
                          fill="#7E93AE"
                        >
                          <tspan x="18" y="345">0</tspan>
                        </text>
                        <text
                          id="#-of-Loans"
                          font-family="Roboto-Regular, Roboto"
                          font-size="16"
                          font-weight="normal"
                          fill="#7E93AE"
                        >
                          <tspan x="100.234375" y="368"># of Loans</tspan>
                        </text>
                        <g id="Group-8" transform="translate(98.000000, 28.000000)">
                          <rect
                            id="Rectangle-Copy-2"
                            fill="#6CCC4D"
                            x="0"
                            y="78.465704"
                            width="80"
                            height="234.534296"
                          ></rect>
                          <rect
                            id="Rectangle-Copy"
                            fill="#F8C045"
                            x="0"
                            y="26.1552347"
                            width="80"
                            height="43.2129964"
                          ></rect>
                          <rect
                            id="Rectangle-Copy"
                            fill="#FEF851"
                            x="0"
                            y="69.368231"
                            width="80"
                            height="9.09747292"
                          ></rect>
                          <rect
                            id="Rectangle"
                            fill="#FF4B4B"
                            x="0"
                            y="18.1949458"
                            width="80"
                            height="18.1949458"
                          ></rect>
                          <rect
                            id="Rectangle-Copy-3"
                            fill="#8944BC"
                            x="0"
                            y="0"
                            width="80"
                            height="18.1949458"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </b-col>
            <b-col md="4">
              <svg
                viewBox="0 0 493 360"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Group-59" transform="translate(-24.000000, -23.000000)">
                    <rect id="Rectangle" x="0.478630185" y="0" width="538" height="401"></rect>
                    <path
                      d="M271.73523,188.8356 L139.13023,172.5536 C147.40223,105.1766 203.85223,55.2346 271.73523,55.2346 L271.73523,188.8356 Z"
                      id="Fill-1"
                      fill="#93C853"
                    ></path>
                    <path
                      d="M271.73523,188.8356 L163.65023,267.3646 C142.83223,238.7116 134.81423,207.7076 139.13023,172.5536 L271.73523,188.8356 Z"
                      id="Fill-3"
                      fill="#F5EA13"
                    ></path>
                    <path
                      d="M271.73523,188.8356 L379.82123,267.3646 C336.45023,327.0586 252.90123,340.2916 193.20623,296.9216 C181.26823,288.2476 172.32323,279.3036 163.65023,267.3646 L271.73523,188.8356 Z"
                      id="Fill-5"
                      fill="#FCBF10"
                    ></path>
                    <path
                      d="M271.73523,188.8356 L367.84023,96.0286 C412.94523,142.7366 417.98623,214.8336 379.82123,267.3646 L271.73523,188.8356 Z"
                      id="Fill-7"
                      fill="#EC2024"
                    ></path>
                    <path
                      d="M271.73523,188.8356 L271.73523,55.2346 C310.10423,55.2346 341.18723,68.4286 367.84023,96.0286 L271.73523,188.8356 Z"
                      id="Fill-9"
                      fill="#6F3995"
                    ></path>
                    <text
                      id="$17,503,489"
                      font-family="Roboto-Regular, Roboto"
                      font-size="16"
                      font-weight="normal"
                      fill="#586C89"
                    >
                      <tspan x="307.76773" y="36.1010375">$17,50</tspan>
                      <tspan x="355.970855" y="36.1010375" letter-spacing="0.0096">3</tspan>
                      <tspan x="364.988268" y="36.1010375">,489</tspan>
                    </text>
                    <text
                      id="$58,344,963"
                      font-family="Roboto-Regular, Roboto"
                      font-size="16"
                      font-weight="normal"
                      fill="#586C89"
                    >
                      <tspan x="226.05283" y="344.364637">$58,344,963</tspan>
                    </text>
                    <text
                      id="$13,940,000"
                      font-family="Roboto-Regular, Roboto"
                      font-size="16"
                      font-weight="normal"
                      fill="#586C89"
                    >
                      <tspan x="24.1540759" y="198.268637">$13,940,000</tspan>
                    </text>
                    <text
                      id="$39,583,184"
                      font-family="Roboto-Regular, Roboto"
                      font-size="16"
                      font-weight="normal"
                      fill="#586C89"
                    >
                      <tspan x="61.1947123" y="77.8526375">$39,583,184</tspan>
                    </text>
                    <text
                      id="$35,006,978"
                      font-family="Roboto-Regular, Roboto"
                      font-size="16"
                      font-weight="normal"
                      fill="#586C89"
                    >
                      <tspan x="430.577854" y="169.468637">$35,006,978</tspan>
                    </text>
                    <text
                      id="$-of-Loans"
                      font-family="Roboto-Regular, Roboto"
                      font-size="16"
                      font-weight="normal"
                      fill="#7D92AD"
                    >
                      <tspan x="235.75353" y="380.345638">$ of Loans</tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </b-col>
            <b-col md="4">
              <div class="box">
                <div class="labels">Purple</div>
                <div class="cell">3%</div>
                <div class="cell">1%</div>
                <div class="cell"></div>
                <div class="labels">Red</div>
                <div class="cell">4%</div>
                <div class="cell"></div>
                <div class="cell">1%</div>
                <div class="labels">Orange</div>
                <div class="cell">5%</div>
                <div class="cell">1</div>
                <div class="cell"></div>
                <div class="labels"></div>
                <div class="labels">Small</div>
                <div class="labels">Medium</div>
                <div class="labels">Large</div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="section-box p-4 my-4">
        <b-col class="no-padding">
          <b-row>
            <b-col>
              <h3 class="pb-3">Loan list</h3>
              <div class="line px-4"></div>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="mt-3">
              <div class="tableActions mb-3">
                <div class="actions">
                  <b-button>Summary</b-button>
                </div>
                <div class="actions ml-auto">
                  <b-button>Fliter</b-button>
                  <b-button>Select Fields</b-button>
                  <b-button>Send Notices</b-button>
                  <b-button>Export</b-button>
                </div>
              </div>

              <b-table
                responsive
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :items="items"
                :hover="hover"
                :fields="fields"
              ></b-table>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <div id="sidenav" v-bind:class="{ moveRight: close }">
      <a class="p-3">About</a>
      <a class="p-3">Services</a>
      <a class="p-3">Clients</a>
      <a class="p-3">Contact</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Collateral_Monitor",
  data() {
    return {
      // sidebar
      close: "true",
      // loan and sort data
      sortBy: "age",
      sortDesc: false,

      fields: [
        { key: "loan_account", sortable: true },
        { key: "client_name", sortable: true },
        { key: "LOC", sortable: true },
        { key: "market_value", sortable: true },
        { key: "LTV", sortable: true },
        { key: "loan_equity", sortable: true },
        { key: "required_equity", sortable: true },
        { key: "maintenance_excess_equity", sortable: true },
        { key: "excess_equity_percent", sortable: true },
        { key: "risk_level", sortable: true },
        { key: "POC", sortable: true },
        { key: "POL", sortable: true },
        { key: "exception_flag", sortable: true },
        { key: "resolution_method", sortable: true }
      ],

      items: [
        {
          loan_account: 6999123,
          client_name: "Lina King",
          LOC: "24,583,000",
          market_value: "55,986,867",
          LTV: "28.49%",
          loan_equity: "35,894,357",
          required_equity: "16,769,060",
          maintenance_excess_equity: "19,098,296",
          excess_equity_percent: "34.11%",
          risk_level: "Medium",
          POC: "3.23%",
          POL: "2.34%",
          exception_flag: "No",
          resolution_method: "..."
        },
        {
          loan_account: 6999124,
          client_name: "Timber Allen",
          LOC: "8,066,000",
          market_value: "15,446,589",
          LTV: "50.00%",
          loan_equity: "10,561,152",
          required_equity: "4,633,977",
          maintenance_excess_equity: "5,927,175",
          excess_equity_percent: "38.37%",
          risk_level: "High",
          POC: "19.23%",
          POL: "15.45%",
          exception_flag: "Yes",
          resolution_method: "..."
        },
        {
          loan_account: 6999125,
          client_name: "Jason Green",
          LOC: "5,240,000",
          market_value: "10,936,613",
          LTV: "50.00%",
          loan_equity: "6,936,536",
          required_equity: "3,280,984",
          maintenance_excess_equity: "3,655,552",
          excess_equity_percent: "33.47%",
          risk_level: "High",
          POC: "14.23%",
          POL: "16.34%",
          exception_flag: "No",
          resolution_method: "..."
        },
        {
          loan_account: 6999126,
          client_name: "Mary Young",
          LOC: "3,622,000",
          market_value: "7,263,484",
          LTV: "49.99%",
          loan_equity: "4,422,188",
          required_equity: "2,179,045",
          maintenance_excess_equity: "2,243,143",
          excess_equity_percent: "30.88%",
          risk_level: "High",
          POC: "13.25%",
          POL: "13.25%",
          exception_flag: "No",
          resolution_method: "..."
        },
        {
          loan_account: 6999127,
          client_name: "Maria Hill",
          LOC: "3,337,000",
          market_value: "6,626,940",
          LTV: "49.99%",
          loan_equity: "3,795,211",
          required_equity: "1,988,082",
          maintenance_excess_equity: "1,807,129",
          excess_equity_percent: "27.27%",
          risk_level: "High",
          POC: "16.23%",
          POL: "16.23%",
          exception_flag: "Yes",
          resolution_method: "..."
        },
        {
          loan_account: 6999128,
          client_name: "Betty Baker",
          LOC: "2,341,000",
          market_value: "4,472,968",
          LTV: "49.99%",
          loan_equity: "2,133,346",
          required_equity: "1,341,891",
          maintenance_excess_equity: "791,456",
          excess_equity_percent: "17.69%",
          risk_level: "High",
          POC: "5.34%",
          POL: "4.34%",
          exception_flag: "No",
          resolution_method: "..."
        },
        {
          loan_account: 6999129,
          client_name: "Helen Carter",
          LOC: "1,780,000",
          market_value: "7,121,457",
          LTV: "25.01%",
          loan_equity: "5,449,841",
          required_equity: "2,136,437",
          maintenance_excess_equity: "3,313,404",
          excess_equity_percent: "46.53%",
          risk_level: "Medium",
          POC: "7.23%",
          POL: "5.34%",
          exception_flag: "No",
          resolution_method: "..."
        },
        {
          loan_account: 6999130,
          client_name: "Mark Harris",
          LOC: "2,304,000",
          market_value: "7,741,207",
          LTV: "33.77%",
          loan_equity: "6,153,074",
          required_equity: "2,322,362",
          maintenance_excess_equity: "3,830,712",
          excess_equity_percent: "49.48%",
          risk_level: "Medium",
          POC: "4.46%",
          POL: "2.34%",
          exception_flag: "No",
          resolution_method: "..."
        },
        {
          loan_account: 6999131,
          client_name: "Paul White",
          LOC: "1,515,000",
          market_value: "2,998,180",
          LTV: "50.00%",
          loan_equity: "1,488,573",
          required_equity: "899,454",
          maintenance_excess_equity: "589,118",
          excess_equity_percent: "19.65%",
          risk_level: "High",
          POC: "14.23%",
          POL: "14.35%",
          exception_flag: "Yes",
          resolution_method: "..."
        },
        {
          loan_account: 6999132,
          client_name: "David Brown",
          LOC: "1,733,000",
          market_value: "3,459,047",
          LTV: "49.98%",
          loan_equity: "2,259,047",
          required_equity: "1,037,714",
          maintenance_excess_equity: "1,221,333",
          excess_equity_percent: "35.31%",
          risk_level: "High",
          POC: "16.20%",
          POL: "12.34%",
          exception_flag: "No",
          resolution_method: "..."
        }
      ],

      //hover option
      hover: true
    };
  }
};
</script>
