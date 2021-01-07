<template>
    <div id="clientService">
        <div id="main" v-bind:class="{ moveLeft: close }">
            
            <b-container fluid class="m-4">
                <b-row class="align-items-center">
                    <b-col class="title no-padding">
                        <b-button @click="close = !close">&#9776;</b-button>
                        <h1 class="my-4">Client Service</h1>
                    </b-col>
                </b-row>

                <b-row align-h="around">
                    
                    <b-col cols="5" class="section-box pt-2 pb-3">
                        
                        <h3 class="pt-2 pb-2">Client Service Leaderboard</h3> 
                        <div class="line px-4 pt-2"></div>
                        

                        <!-- 1st place -->
                            <svg class="align-middle" width="17px" height="16px" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <polygon id="star" fill="#FBB204" points="13.753 16 12.36325 10.0808421 17 6.10021053 10.88765 5.58063158 8.5 0 6.11235 5.58063158 0 6.10021053 4.63675 10.0808421 3.247 16 8.5 12.8606316"></polygon>
                            </svg>

                            <div id="leaderboard" class="align-middle d-inline pl-2">1. William Young</div>


                        <div class="pt-2">
                            <b-progress :max="100" class="mb-3" show-progress animated>
                                <b-progress-bar :value="98" variant="warning"></b-progress-bar>
                            </b-progress>
                        </div> 

                        <!-- 2nd place -->
                            <svg class="align-middle" width="17px" height="16px" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <polygon id="star" fill="#616C6F" points="13.753 16 12.36325 10.0808421 17 6.10021053 10.88765 5.58063158 8.5 0 6.11235 5.58063158 0 6.10021053 4.63675 10.0808421 3.247 16 8.5 12.8606316"></polygon>
                            </svg>

                            <div id="leaderboard" class="align-middle d-inline pl-2">2. Austin Mead</div>

                        <div class="pt-2">
                            <b-progress :max="100" class="mb-3" show-progress animated>
                                <b-progress-bar :value="94" variant="secondary"></b-progress-bar>
                            </b-progress>
                        </div>

                        <!-- 3rd place -->
                            <svg class="align-middle" width="17px" height="16px" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <polygon id="star" fill="#7A6C36" points="13.753 16 12.36325 10.0808421 17 6.10021053 10.88765 5.58063158 8.5 0 6.11235 5.58063158 0 6.10021053 4.63675 10.0808421 3.247 16 8.5 12.8606316"></polygon>
                            </svg>

                            <div id="leaderboard" class="align-middle d-inline pl-2">3. John Johnson</div>

                        <div class="pt-2">
                            <b-progress :max="100" class="mb-3" show-progress animated>
                                <b-progress-bar :value="88" id="bronze"></b-progress-bar>
                            </b-progress>
                        </div>

                        <!-- 4th place -->
                            <svg class="align-middle" width="17px" height="16px" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <polygon id="star" fill="#FFFFFF" points="13.753 16 12.36325 10.0808421 17 6.10021053 10.88765 5.58063158 8.5 0 6.11235 5.58063158 0 6.10021053 4.63675 10.0808421 3.247 16 8.5 12.8606316"></polygon>
                            </svg>

                            <div id="leaderboard" class="align-middle d-inline pl-2">4. Nancy O'Donnell</div>

                        <div class="pt-2">
                            <b-progress :max="100" class="mb-3" show-progress animated>
                                <b-progress-bar :value="84" variant="danger"></b-progress-bar>
                            </b-progress>
                        </div>

                        <!-- 5th place -->
                        <svg class="align-middle" width="17px" height="16px" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <polygon id="star" fill="#FFFFFF" points="13.753 16 12.36325 10.0808421 17 6.10021053 10.88765 5.58063158 8.5 0 6.11235 5.58063158 0 6.10021053 4.63675 10.0808421 3.247 16 8.5 12.8606316"></polygon>
                            </svg>

                            <div id="leaderboard" class="align-middle d-inline pl-2">5. Rian Renner</div>

                        <div class="pt-2">
                            <b-progress :max="100" class="mb-3" show-progress animated>
                                <b-progress-bar :value="80" variant="primary"></b-progress-bar>
                            </b-progress>
                        </div>

                    </b-col>
                        
                    <!-- Service Summary Widget -->    
                    <b-col cols="5" class="section-box pt-2 pb-3">
                        <h3 class="pt-2 pb-2">Service Summary</h3> 
                        <div class="line px-4 pt-2"></div>
                        
                        <div class="pb-2">
                            <div class="inlineBlock">
                                <h4 class="pt-2 pb-2">Cases Opened Today</h4>
                                <h4 id="numCases" class="pb-3">15</h4>
                            </div>
                            <div class="inlineBlock avgCases">
                                <h4 id="avgCasesSub" class="pt-2 pb-2">Average Cases Per Day</h4>
                                <h4 id="avgCases" class="pb-3">15</h4>
                            </div>
                        </div>

                        <h4 class="pt-2 pb-3">Client Portal Registration</h4>

                        <div class="pb-4">
                            <b-progress class="portalReg">
                                <b-progress-bar class="portalRegProgress" :value="80"></b-progress-bar>
                            </b-progress>
                        </div>
                        
                        <!-- Activity Log -->
                        <div class="chartContainer">
                            <CaseTopicsChart class="graphCanvas"></CaseTopicsChart>
                        </div>
                            
                    </b-col>

                </b-row>

                <!-- Activity Log -->
                <b-row align-h="around pt-4">
                    <b-col cols="11" class="section-box pt-2 pb-3">
                        <h3 class="pt-2 pb-2">Your Recent Updates</h3> 
                        <div class="line px-4 pt-2"></div>
                        <div class="updatesContainer">
                            <b-tabs pills class="pt-3">
                                <b-tab title="All Updates" active class="recentUpdates pt-4">
                                    All Updates
                                </b-tab>
                                <b-tab title="Internal" class="recentUpdates pt-4">
                                    Internal
                                </b-tab>
                                <b-tab title="Email" class="recentUpdates pt-4">
                                    Email
                                </b-tab>
                                <b-tab title="Status" class="recentUpdates pt-4">
                                    Status
                                </b-tab>
                                <b-tab title="Notes" class="recentUpdates pt-4">
                                    Notes
                                </b-tab>
                                <b-tab title="Call Logs" class="recentUpdates pt-4">
                                    Call Logs
                                </b-tab>
                                <b-tab title="Tasks" class="recentUpdates pt-4">
                                    Tasks
                                </b-tab>
                            </b-tabs>
                        </div>
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
    </div>

</template>

<script>

import CaseTopicsChart from "./CaseTopicsChart";

export default {
  name: "Client_Service",
  data() {
    return {
      // sidebar
      close: "true",
    }
  },
  components: {
      CaseTopicsChart
  }
};
</script>

