<template>
  <div>
    <CRow>
      <CCol :xs="12">
        <CCard class="mb-4">
          <CCardHeader>
            <h1>
              Thank you for assisting with our environmental ambitions. Please
              pick one of the projects below to help offset our emissions.
            </h1>
          </CCardHeader>
          <CCardImage orientation="top" :src="MainHeaderImg" />
        </CCard>
      </CCol>
      <CCol :xs="12">
        <CCard class="mb-4 brasenose-font">
          <CCardHeader>
            <h2>Projects</h2>
          </CCardHeader>
          <CCardBody>
            <CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 2 }">
              <!-- Project One card start -->
              <CCol xs>
                <CCard>
                  <CCardImage
                    orientation="top"
                    :src="ProjectOneImg"
                    :height="411"
                  />
                  <CCardBody>
                    <h4>
                      <a href="#/projects/project-one"
                        >South Jordan Landfill Gas Capture</a
                      >
                    </h4>
                    <CListGroup flush>
                      <CListGroupItem
                        ><a
                          href="https://www.climateactionreserve.org/"
                          target="_blank"
                          rel="nopoen"
                          >Climate Action Reserve</a
                        ></CListGroupItem
                      >
                      <CListGroupItem
                        ><a
                          href="https://thereserve2.apx.com/mymodule/reg/prjView.asp?id1=400"
                          target="blank"
                          rel="nopen"
                          >Project Page</a
                        ></CListGroupItem
                      >
                      <CListGroupItem>Utah, United States</CListGroupItem>
                    </CListGroup>
                    <br />
                    <CCardTitle><strong>Description</strong></CCardTitle>
                    <CCardText>
                      The South Jordan Landfill project is located at the
                      Trans-Jordan Landfill, a 200-acre sanitary MSW landfill
                      near Salt Lake City that has been in operation for 50
                      years.<br /><br />
                      <CCardLink href="#/projects/project-one"
                        >Read more
                      </CCardLink>
                    </CCardText>
                    <div class="d-grid gap-2">
                      <AppVoteConfirmation
                        :projectId="1"
                        projectName="South Jordan Landfill Gas Capture"
                      >
                      </AppVoteConfirmation>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
              <!-- Project Two card start -->
              <CCol xs>
                <CCard>
                  <CCardImage
                    orientation="top"
                    :src="ProjectTwoImg"
                    :height="411"
                  />
                  <CCardBody>
                    <h4>
                      <a href="#/projects/project-two"
                        >Burn Stoves Project in Kenya</a
                      >
                    </h4>
                    <CListGroup flush>
                      <CListGroupItem
                        ><a
                          href="https://www.goldstandard.org/"
                          target="_blank"
                          rel="nopoen"
                          >Gold Standard</a
                        ></CListGroupItem
                      >
                      <CListGroupItem
                        ><a
                          href="https://registry.goldstandard.org/projects/details/1559"
                          target="blank"
                          rel="nopen"
                          >Project Page</a
                        ></CListGroupItem
                      >
                      <CListGroupItem>Kenya</CListGroupItem>
                    </CListGroup>
                    <br />
                    <CCardTitle><strong>Description</strong></CCardTitle>
                    <CCardText>
                      Project involved manufacture and distribution of JikoKoa
                      improved cookstoves. The stove has higher efficiencies
                      compared with baseline stoves commonly used in the
                      country.<br />
                      <CCardLink href="#/projects/project-two"
                        >Read more
                      </CCardLink>
                    </CCardText>
                    <div class="d-grid gap-2">
                      <AppVoteConfirmation
                        :projectId="2"
                        projectName="Burn Stoves Project"
                      ></AppVoteConfirmation>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
              <!-- Project Three card start -->
              <CCol xs>
                <CCard>
                  <CCardImage
                    orientation="top"
                    :src="ProjectThreeImg"
                    :height="411"
                  />
                  <CCardBody>
                    <h4>
                      <a href="#/projects/project-three"
                        >Turkey Duzce Aksu Province</a
                      >
                    </h4>
                    <CListGroup flush>
                      <CListGroupItem
                        ><a
                          href="https://verra.org/"
                          target="_blank"
                          rel="nopoen"
                          >Verra</a
                        ></CListGroupItem
                      >
                      <CListGroupItem
                        ><a
                          href="https://registry.verra.org/app/projectDetail/VCS/2095"
                          target="blank"
                          rel="nopen"
                          >Project Page</a
                        ></CListGroupItem
                      >
                      <CListGroupItem>Duzce, Turkey</CListGroupItem>
                    </CListGroup>
                    <br />
                    <CCardTitle><strong>Description</strong></CCardTitle>
                    <CCardText>
                      The project activity consists of the construction and
                      operation of a 46.2 MW capacity run-of-the-river
                      hydropower plant on the Aksu River in Duzce Province,
                      Turkey.<br />
                      <CCardLink href="#/projects/project-three"
                        >Read more
                      </CCardLink>
                    </CCardText>
                    <div class="d-grid gap-2">
                      <AppVoteConfirmation
                        :projectId="3"
                        projectName="Asku Hydropower Plant"
                      ></AppVoteConfirmation>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
              <!-- Project Four card start -->
              <CCol xs>
                <CCard>
                  <CCardImage
                    orientation="top"
                    :src="ProjectFourImg"
                    :height="411"
                  />
                  <CCardBody>
                    <h4>
                      <a href="#/projects/project-four"
                        >Pacajai REDD+ Forest Protection
                      </a>
                    </h4>
                    <CListGroup flush>
                      <CListGroupItem
                        ><a
                          href="https://verra.org/"
                          target="_blank"
                          rel="nopoen"
                          >Verra</a
                        ></CListGroupItem
                      >
                      <CListGroupItem
                        ><a
                          href="https://registry.verra.org/app/projectDetail/VCS/981"
                          target="blank"
                          rel="nopen"
                          >Project Page</a
                        ></CListGroupItem
                      >
                      <CListGroupItem>Para, Brazil</CListGroupItem>
                    </CListGroup>
                    <br />
                    <CCardTitle><strong>Description</strong></CCardTitle>
                    <CCardText>
                      This project’s main objective is to prevent unplanned
                      deforestation in native forests, thus avoiding 10,564,630
                      tCO2e in net emissions over its 41-year duration.<br />
                      <CCardLink href="#/projects/project-four"
                        >Read more
                      </CCardLink>
                    </CCardText>
                    <div class="d-grid gap-2">
                      <AppVoteConfirmation
                        :projectId="4"
                        projectName="Pacajai REDD+ Forest Protection"
                      ></AppVoteConfirmation>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <!-- TODO: Refactor this as a component to simplify code in home view! -->
      <AppVoteSummaryTable></AppVoteSummaryTable>
    </CRow>
  </div>
</template>

<script>
// import MouseEvent from '@vue'
import MainHeaderImg from '@/assets/images/bannerProject.jpg'
import ProjectOneImg from '@/assets/images/projectOne.png'
import ProjectTwoImg from '@/assets/images/projectTwo.png'
import ProjectThreeImg from '@/assets/images/projectThree.png'
import ProjectFourImg from '@/assets/images/projectFour.png'
import AppVoteConfirmation from '@/components/AppVoteConfirmation'
import AppVoteSummaryTable from '@/components/AppVoteSummary'

export default {
  name: 'Dashboard',
  components: { AppVoteSummaryTable, AppVoteConfirmation },
  setup() {
    return {
      MainHeaderImg,
      ProjectOneImg,
      ProjectTwoImg,
      ProjectThreeImg,
      ProjectFourImg,
    }
  },
}
</script>
