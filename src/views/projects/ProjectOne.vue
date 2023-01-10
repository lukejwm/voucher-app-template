<template>
  <div>
    <CRow class="brasenose-font">
      <CCol :md="12">
        <h1>South Jordan Landfill Gas Capture</h1>
        <h4>
          Capturing methane gas from a landfill near Salt Lake City using
          underground gas wells and converting it into energy.
        </h4>
        <CCard class="mb-4">
          <CCol>
            <CCardBody>
              <CRow :xs="{ cols: 2, gutter: 0 }" :md="{ cols: 2 }">
                <CCard class="mb-3">
                  <CCardImage orientation="top" :src="ProjectBanner1" />
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
                      href="https://www.climateactionreserve.org/"
                      target="_blank"
                      rel="noopen"
                      >Climate Action Reserve</a
                    >
                  </p>
                  <p><strong>Project Page</strong></p>
                  <p>
                    <a
                      href="https://thereserve2.apx.com/mymodule/reg/prjView.asp?id1=400"
                      target="_blank"
                      rel="noopen"
                      >CAR-400</a
                    >
                  </p>
                  <p><strong>Country</strong></p>
                  <p>Utah, United States</p>
                  <p><strong>Type</strong></p>
                  <p>Landfill Gas Capture, Avoidance</p>
                  <p><strong>Project Start Year</strong></p>
                  <p>2005</p>
                  <p><strong>Project Last Renewed</strong></p>
                  <p>2015</p>
                  <p><strong>Notes</strong></p>
                  <p>This project is renewed every 10 years</p>
                </CRow>
              </CardText>
              <h4>About</h4>
              <CCardText>
                The South Jordan Landfill project is located at the Trans-Jordan
                Landfill, a 200-acre sanitary MSW landfill near Salt Lake City
                that has been in operation for 50 years. The project commenced
                in 2005 and was renewed for a second ten-year crediting period
                in 2015. Project activity is the installation and operation of a
                gas collection and control system (GCCS) that consists of an
                interconnected network of vertical extraction and horizontal
                wells connected via underground header piping. Landfill gas is
                sent to three separate Caterpillar 3520 (1.6 MW) generator
                engines and an open flare for destruction. In addition to the
                significant GHG emission reductions from the destruction of
                methane that would otherwise have been released to the
                atmosphere, the project lowers methane levels in groundwater,
                increases safety by avoiding methane migration, and reduces
                emissions of VOCs and other local pollutants.
              </CCardText>
            </CCardBody>
          </CCol>
        </CCard>
        <h4>SDGs Achieved</h4>
        <CRow :xs="{ cols: 1, gutter: 1 }" :md="{ cols: 6 }">
          <CCard class="mb-3">
            <CCardImage orientation="top" :src="SDGGoal3" />
          </CCard>
          <CCard class="mb-2">
            <CCardImage orientation="top" :src="SDGGoal7" />
          </CCard>
          <CCard class="mb-2">
            <CCardImage orientation="top" :src="SDGGoal8" />
          </CCard>
          <CCard class="mb-2">
            <CCardImage orientation="top" :src="SDGGoal9" />
          </CCard>
          <CCard class="mb-2">
            <CCardImage orientation="top" :src="SDGGoal12" />
          </CCard>
          <CCard class="mb-2">
            <CCardImage orientation="top" :src="SDGGoal13" />
          </CCard>
        </CRow>
        <CRow>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <AppVoteConfirmation
              :projectId="1"
              projectName="South Jordan Landfill Gas Capture"
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
import ProjectBanner1 from '@/assets/images/projectOne.png'
import ProjectBanner2 from '@/assets/images/projectOneA.png'
import SDGGoal3 from '@/assets/images/sdg_badges/E-WEB-Goal-03.png'
import SDGGoal7 from '@/assets/images/sdg_badges/E-WEB-Goal-07.png'
import SDGGoal8 from '@/assets/images/sdg_badges/E-WEB-Goal-08.png'
import SDGGoal9 from '@/assets/images/sdg_badges/E-WEB-Goal-09.png'
import SDGGoal12 from '@/assets/images/sdg_badges/E-WEB-Goal-12.png'
import SDGGoal13 from '@/assets/images/sdg_badges/E-WEB-Goal-13.png'
import AppVoteConfirmation from '@/components/AppVoteConfirmation'

export default {
  name: 'ProjectOne',
  components: { AppVoteConfirmation },
  setup() {
    return {
      ProjectBanner1,
      ProjectBanner2,
      SDGGoal3,
      SDGGoal7,
      SDGGoal8,
      SDGGoal9,
      SDGGoal12,
      SDGGoal13,
    }
  },
}
</script>
