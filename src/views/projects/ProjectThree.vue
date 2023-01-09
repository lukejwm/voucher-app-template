<template>
  <div>
    <CRow class="brasenose-font">
      <CCol :md="12">
        <h1>Turkey Duzce Aksu Province</h1>
        <h4>
          Generating hydroelectric power in Turkey using a low-impact plant with
          a small reservoir that has a smaller environmental footprint than
          large hydroelectric plants.
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
                    <a href="https://verra.org/" target="_blank" rel="noopen"
                      >Verra</a
                    >
                  </p>
                  <p><strong>Project Page</strong></p>
                  <p>
                    <a
                      href="https://registry.verra.org/app/projectDetail/VCS/2095"
                      target="_blank"
                      rel="noopen"
                      >VCS-2095</a
                    >
                  </p>
                  <p><strong>Country</strong></p>
                  <p>Duzce, Turkey</p>
                  <p><strong>Type</strong></p>
                  <p>Hydroelectric</p>
                  <p><strong>Project Start Year</strong></p>
                  <p>2014</p>
                  <p><strong>Project End Year</strong></p>
                  <p>2024</p>
                  <p><strong>Vinatge Year Available</strong></p>
                  <p>2015</p>
                </CRow>
              </CardText>
              <h4>About</h4>
              <CCardText>
                The project activity consists of the construction and operation
                of a 46.2 MW capacity run-of-the-river hydropower plant on the
                Aksu River in Duzce Province, Turkey. Run-of-the-river
                hydropower plants harvest the kinetic energy from flowing water
                to generate electricity. However, they have a smaller impact on
                the aquatic ecosystem because they do not store a large volume
                of water in a reservoir behind a dam and are typically smaller
                than conventional hydropower plants. The Duzce Aksu hydropower
                plant was constructed with the goal of generating electricity
                for the Turkish National Electric Grid without releasing
                airborne pollutants. The plant displaces fossil fuel-fired
                electricity, positively impacting the environment and benefiting
                the national and regional economy.
              </CCardText>
            </CCardBody>
          </CCol>
        </CCard>
        <h4>SDGs Achieved</h4>
        <CRow :xs="{ cols: 1, gutter: 1 }" :md="{ cols: 4 }">
          <CCard class="mb-3">
            <CCardImage orientation="top" :src="SDGGoal7" />
          </CCard>
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
              projectName="Asku Hydropower Plant"
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
import ProjectBanner1 from '@/assets/images/projectThree.png'
import ProjectBanner2 from '@/assets/images/projectThreeA.png'
import SDGGoal7 from '@/assets/images/sdg_badges/E-WEB-Goal-07.png'
import SDGGoal8 from '@/assets/images/sdg_badges/E-WEB-Goal-08.png'
import SDGGoal13 from '@/assets/images/sdg_badges/E-WEB-Goal-13.png'
import SDGGoal15 from '@/assets/images/sdg_badges/E-WEB-Goal-15.png'
import AppVoteConfirmation from '@/components/AppVoteConfirmation'

export default {
  name: 'ProjectThree',
  components: { AppVoteConfirmation },
  setup() {
    return {
      ProjectBanner1,
      ProjectBanner2,
      SDGGoal7,
      SDGGoal8,
      SDGGoal13,
      SDGGoal15,
    }
  },
}
</script>
