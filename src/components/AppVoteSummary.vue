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
            <CTableRow
              v-for="projVote in projectVoteSummary"
              :key="projVote.ProjectName"
            >
              <CTableDataCell>
                <div>{{ projVote.ProjectName }}</div>
              </CTableDataCell>
              <CTableDataCell class="text-center">
                <CIcon
                  size="xl"
                  :name="projVote.IconCode"
                  :title="projVote.ProjectCountry"
                />
                <div>{{ projVote.ProjectCountry }}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div class="clearfix">
                  <div class="float-start">
                    <strong>{{ projVote.VoteCount }}</strong>
                  </div>
                </div>
                <CProgress
                  thin
                  :color="projVote.GraphColour"
                  :value="projVote.VoteCount"
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
import { mapState } from 'vuex'

export default {
  name: 'AppVoteSummaryTable',
  mounted() {
    this.$store.dispatch('loadProjectVotesSummary')
  },
  computed: mapState(['projectVoteSummary']),
}
</script>
