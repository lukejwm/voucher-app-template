<template>
  <div>
    <CRow class="brasenose-font">
      <CCol :md="12">
        <h1>Burn Stoves Project in Kenya</h1>
        <h4>
          Project involved manufacture and distribution of JikoKoa improved
          cookstoves. The stove has higher efficiencies compared with baseline
          stoves commonly used in the country.
        </h4>
        <CCard class="mb-4">
          <CCol>
            <CCardBody>
              <CRow :xs="{ cols: 2, gutter: 0 }" :md="{ cols: 2 }">
                <CCard class="mb-3">
                  <CCardImage
                    orientation="top"
                    :src="ProjectBanner1"
                    :height="468"
                  />
                </CCard>
                <CCard class="mb-3">
                  <CCardImage
                    orientation="top"
                    :src="ProjectBanner2"
                    :height="468"
                  />
                </CCard>
              </CRow>
              <br /><br />
              <CardText>
                <CRow :xs="{ cols: 1, gutter: 0 }" :md="{ cols: 4 }">
                  <p><strong>Project Registry</strong></p>
                  <p>
                    <a
                      href="https://www.goldstandard.org/"
                      target="_blank"
                      rel="noopen"
                      >Gold Standard</a
                    >
                  </p>
                  <p><strong>Project Page</strong></p>
                  <p>
                    <a
                      href="https://registry.goldstandard.org/projects/details/1559"
                      target="_blank"
                      rel="noopen"
                      >GSR-1559</a
                    >
                  </p>
                  <p><strong>Country</strong></p>
                  <p>Kenya</p>
                  <p><strong>Type</strong></p>
                  <p>Energy Efficiency - Domestic</p>
                  <p><strong>Project Start Year</strong></p>
                  <p>2017</p>
                  <p><strong>Project End Year</strong></p>
                  <p>2024</p>
                </CRow>
              </CardText>
            </CCardBody>
          </CCol>
        </CCard>
        <h4>SDGs Achieved</h4>
        <CRow :xs="{ cols: 1, gutter: 1 }" :md="{ cols: 4 }">
          <CCard class="mb-3">
            <CCardImage orientation="top" :src="SDGGoal1" />
          </CCard>
          <CCard class="mb-2">
            <CCardImage orientation="top" :src="SDGGoal3" />
          </CCard>
          <CCard class="mb-2">
            <CCardImage orientation="top" :src="SDGGoal8" />
          </CCard>
          <CCard class="mb-2">
            <CCardImage orientation="top" :src="SDGGoal13" />
          </CCard>
        </CRow>
        <CRow>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <AppVoteConfirmation
              :projectId="2"
              projectName="Burn Stoves Project"
            ></AppVoteConfirmation>
          </div>
        </CRow>
        <br />
      </CCol>
    </CRow>
  </div>
</template>

<script>
///home/lukejwm/AlliedOffsets/repos/brasenose/brasenose-coreui-template/src/assets/images/sdg_badges/E-WEB-Goal-03.png
import ProjectBanner1 from '@/assets/images/projectTwoA.png'
import ProjectBanner2 from '@/assets/images/projectTwoB.png'
import SDGGoal1 from '@/assets/images/sdg_badges/E-WEB-Goal-01.png'
import SDGGoal3 from '@/assets/images/sdg_badges/E-WEB-Goal-03.png'
import SDGGoal8 from '@/assets/images/sdg_badges/E-WEB-Goal-08.png'
import SDGGoal13 from '@/assets/images/sdg_badges/E-WEB-Goal-13.png'
import AppVoteConfirmation from '@/components/AppVoteConfirmation'

export default {
  name: 'ProjectTwo',
  components: { AppVoteConfirmation },
  setup() {
    return {
      ProjectBanner1,
      ProjectBanner2,
      SDGGoal1,
      SDGGoal3,
      SDGGoal8,
      SDGGoal13,
    }
  },
}
</script>
