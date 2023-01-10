<template>
  <CCol :md="12" class="brasenose-font">
    <CCard class="mb-4">
      <CCardHeader><h2>Participation Summary</h2></CCardHeader>
      <CCardBody>
        <CTable align="middle" class="mb-0 border" hover responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Project</CTableHeaderCell>
              <CTableHeaderCell class="text-center">Country</CTableHeaderCell>
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
                <div>{{ item.country.name }}</div>
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppVoteSummaryTable',
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters('VoteSummary', ['getVoteSummary']),
  },
  methods: {
    ...mapActions('fetchVoteSummary'),
  },
  // async mounted(): {
  //   if (this.getProjectSummary)
  // }
  setup() {
    const votingTableData = [
      {
        project: {
          name: 'South Jordan Landfill Gas Capture',
        },
        country: { name: 'USA', flag: 'cif-us' },
        votes: {
          value: 1,
          color: 'success',
        },
      },
      {
        project: {
          name: 'Burn Stoves Project in Kenya',
        },
        country: { name: 'Kenya', flag: 'cif-ke' },
        votes: {
          value: 0,
          color: 'danger',
        },
      },
      {
        project: {
          name: 'Turkey Duzce Aksu Province',
        },
        country: { name: 'Turkey', flag: 'cif-tr' },
        votes: {
          value: 0,
          color: 'warning',
        },
      },
      {
        project: {
          name: 'Pacajai REDD+ Forest Protection',
        },
        country: { name: 'Brazil', flag: 'cif-br' },
        votes: {
          value: 0,
          color: 'info',
        },
      },
    ]

    return {
      votingTableData,
    }
  },
}
</script>
