<template>
  <div>
    <CRow class="brasenose-font">
      <CCol :md="12">
        <h1>Pacajai REDD+ Forest Protection</h1>
        <h4>
          Fostering forest regeneration by preventing unplanned deforestation
          and engaging the local community.
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
                <CCard class="mb-3">
                  <CCardImage
                    orientation="top"
                    :src="ProjectBanner3"
                    :height="468"
                  />
                </CCard>
                <CCard class="mb-3">
                  <CCardImage
                    orientation="top"
                    :src="ProjectBanner4"
                    :height="468"
                  />
                </CCard>
              </CRow>
              <br /><br />
              <CardText>
                <CRow :xs="{ cols: 1, gutter: 0 }" :md="{ cols: 4 }">
                  <p><strong>Project Registry</strong></p>
                  <p>
                    <a href="https://verra.org/" target="_blank" rel="noopen"
                      >Verra</a
                    >
                  </p>
                  <p><strong>Project Page</strong></p>
                  <p>
                    <a
                      href="https://registry.verra.org/app/projectDetail/VCS/981"
                      target="_blank"
                      rel="noopen"
                      >VCS-981</a
                    >
                  </p>
                  <p><strong>Country</strong></p>
                  <p>Para, Brazil</p>
                  <p><strong>Type</strong></p>
                  <p>REDD+</p>
                  <p><strong>Project Start Year</strong></p>
                  <p>2009</p>
                  <p><strong>Project End Year</strong></p>
                  <p>2048</p>
                  <p><strong>Vinatge Year Available</strong></p>
                  <p>2013</p>
                </CRow>
              </CardText>
              <h4>About</h4>
              <CCardText>
                <p>
                  This project’s main objective is to prevent unplanned
                  deforestation in native forests, thus avoiding 10,564,630
                  tCO2e in net emissions over its 41-year duration. This is
                  achieved by developing and implementing a plan to manage the
                  land as a “private conservation reserve”. The plan includes
                  rigorous monitoring and enforcement built upon the area's
                  existing surveillance activities, in vigour since 2008. Such
                  scaled-up monitoring activities actively rely on the
                  participation of local villagers, who will be trained in
                  forest management and monitoring techniques. The medium-term
                  goal is to foster forest regeneration, which increases the
                  amount of carbon sequestered in the forest.
                </p>
                <p>
                  The project has been successful in identifying and removing
                  illegal activities such as logging, squatting, and pasture
                  implementation attempts. It also provides the villagers in and
                  around the project borders with training in native-species
                  agroforestry systems. As for biodiversity, the project
                  enhances ecosystem functionality by allowing degraded forests
                  to regenerate, thus eliminating ecosystem fragmentation.
                </p>
              </CCardText>
            </CCardBody>
          </CCol>
        </CCard>
        <h4>SDGs Achieved</h4>
        <CRow :xs="{ cols: 1, gutter: 1 }" :md="{ cols: 3 }">
          <CCard class="mb-2">
            <CCardImage orientation="top" :src="SDGGoal8" />
          </CCard>
          <CCard class="mb-2">
            <CCardImage orientation="top" :src="SDGGoal13" />
          </CCard>
          <CCard class="mb-2">
            <CCardImage orientation="top" :src="SDGGoal15" />
          </CCard>
        </CRow>
        <CRow>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <AppVoteConfirmation
              projectName="Pacajai REDD+ Forest Protection"
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
import ProjectBanner1 from '@/assets/images/projectFourA.png'
import ProjectBanner2 from '@/assets/images/projectFourB.png'
import ProjectBanner3 from '@/assets/images/projectFourC.png'
import ProjectBanner4 from '@/assets/images/projectFourD.png'
import SDGGoal8 from '@/assets/images/sdg_badges/E-WEB-Goal-08.png'
import SDGGoal13 from '@/assets/images/sdg_badges/E-WEB-Goal-13.png'
import SDGGoal15 from '@/assets/images/sdg_badges/E-WEB-Goal-15.png'
import AppVoteConfirmation from '@/components/AppVoteConfirmation'

export default {
  name: 'ProjectFour',
  components: { AppVoteConfirmation },
  setup() {
    return {
      ProjectBanner1,
      ProjectBanner2,
      ProjectBanner3,
      ProjectBanner4,
      SDGGoal8,
      SDGGoal13,
      SDGGoal15,
    }
  },
}
</script>
