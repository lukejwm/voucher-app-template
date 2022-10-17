<template>
  <div>
    <CRow>
      <CCol :xs="12">
        <CCard class="mb-4">
          <CCardHeader>
            <h1>
              Dear Student, Thank you for helping with our green efforts. Please
              pick one of the projects below to offset your emissions!
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
                      <CListGroupItem
                        ><em
                          >This project started in 2005 and was last renewed in
                          2015. The project is renewed every 10 years. The
                          current vintage available is 2018</em
                        ></CListGroupItem
                      >
                    </CListGroup>
                    <br />
                    <CCardTitle><strong>Description</strong></CCardTitle>
                    <CCardText>
                      The South Jordan Landfill project is located at the
                      Trans-Jordan Landfill, a 200-acre sanitary MSW landfill
                      near Salt Lake City that has been in operation for 50
                      years.<br /><br />
                      <CCardLink href="#/projects/project-one"
                        >Read more</CCardLink
                      >
                    </CCardText>
                    <div class="d-grid gap-2">
                      <CButton
                        color="primary"
                        size="lg"
                        @click="projectOneVote()"
                        >Offset with this project</CButton
                      >
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
                      <CListGroupItem
                        ><em
                          >This project started in 2017 and is expected to end
                          in 2024. The vintage available is 2018.</em
                        ></CListGroupItem
                      >
                    </CListGroup>
                    <br />
                    <CCardTitle><strong>Description</strong></CCardTitle>
                    <CCardText>
                      Project involved manufacture and distribution of JikoKoa
                      improved cookstoves. The stove has higher efficiencies
                      compared with baseline stoves commonly used in the
                      country.<br />
                      <CCardLink href="#/projects/project-two"
                        >Read more</CCardLink
                      >
                    </CCardText>
                    <div class="d-grid gap-2">
                      <CButton color="primary" size="lg" @click="myEvent()"
                        >Offset with this project</CButton
                      >
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
                      <CListGroupItem
                        ><em
                          >This project started in 2014 and is expected to end
                          in 2024. The vintage available is 2015.</em
                        ></CListGroupItem
                      >
                    </CListGroup>
                    <br />
                    <CCardTitle><strong>Description</strong></CCardTitle>
                    <CCardText>
                      The project activity consists of the construction and
                      operation of a 46.2 MW capacity run-of-the-river
                      hydropower plant on the Aksu River in Duzce Province,
                      Turkey.<br />
                      <CCardLink href="#/projects/project-three"
                        >Read more</CCardLink
                      >
                    </CCardText>
                    <div class="d-grid gap-2">
                      <CButton color="primary" size="lg" @click="myEvent()"
                        >Offset with this project</CButton
                      >
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
                      <CListGroupItem
                        ><em
                          >This project started in 2009 and is expected to end
                          in 2048. The vintage available is 2013.</em
                        ></CListGroupItem
                      >
                    </CListGroup>
                    <br />
                    <CCardTitle><strong>Description</strong></CCardTitle>
                    <CCardText>
                      This project’s main objective is to prevent unplanned
                      deforestation in native forests, thus avoiding 10,564,630
                      tCO2e in net emissions over its 41-year duration.<br />
                      <CCardLink href="#/projects/project-four"
                        >Read more</CCardLink
                      >
                    </CCardText>
                    <div class="d-grid gap-2">
                      <CButton color="primary" size="lg" @click="myEvent()"
                        >Offset with this project</CButton
                      >
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol :md="12" class="brasenose-font">
        <CCard class="mb-4">
          <CCardHeader><h2>Participation Summary</h2></CCardHeader>
          <CCardBody>
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Project</CTableHeaderCell>
                  <CTableHeaderCell class="text-center"
                    >Country</CTableHeaderCell
                  >
                  <CTableHeaderCell>Votes</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in votingTableData" :key="item.name">
                  <CTableDataCell>
                    <div>{{ item.project.name }}</div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon
                      size="xl"
                      :name="item.country.flag"
                      :title="item.country.name"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div class="clearfix">
                      <div class="float-start">
                        <strong>{{ item.votes.value }}</strong>
                      </div>
                    </div>
                    <CProgress
                      thin
                      :color="item.votes.color"
                      :value="item.votes.value"
                    />
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
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

let usaVote = 1
const kenyaVote = 0
const turkeyVote = 0
const brazilVote = 0

export default {
  name: 'Dashboard',
  setup() {
    const votingTableData = [
      {
        project: {
          name: 'South Jordan Landfill Gas Capture',
        },
        country: { name: 'USA', flag: 'cif-us' },
        votes: {
          value: usaVote,
          color: 'success',
        },
      },
      {
        project: {
          name: 'Burn Stoves Project in Kenya',
        },
        country: { name: 'Kenya', flag: 'cif-ke' },
        votes: {
          value: kenyaVote,
          color: 'danger',
        },
      },
      {
        project: {
          name: 'Turkey Duzce Aksu Province',
        },
        country: { name: 'Turkey', flag: 'cif-tr' },
        votes: {
          value: turkeyVote,
          color: 'warning',
        },
      },
      {
        project: {
          name: 'Pacajai REDD+ Forest Protection',
        },
        country: { name: 'Brazil', flag: 'cif-br' },
        votes: {
          value: brazilVote,
          color: 'info',
        },
      },
    ]

    return {
      votingTableData,
      MainHeaderImg,
      ProjectOneImg,
      ProjectTwoImg,
      ProjectThreeImg,
      ProjectFourImg,
    }
  },

  methods: {
    myEvent(event) {
      alert(`You voted for this project`)
      if (event) {
        alert(event.target.tagName)
      }
    },
    projectOneVote(event) {
      alert(`You voted for the South Jordan Landfill Gas Capture project`)
      usaVote += 1
      this.votingTableData[0].votes.value = usaVote
      if (event) {
        alert(event.target.tagName)
      }
    },
  },
}
</script>
